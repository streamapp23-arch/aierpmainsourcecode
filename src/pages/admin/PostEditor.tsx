import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { toast } from "sonner";
import { ArrowLeft, Save, Image as ImageIcon, Calendar as CalendarIcon, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MediaPicker from "@/components/admin/MediaPicker";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const PostEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [category, setCategory] = useState("");
    const [slug, setSlug] = useState("");
    const [featuredImage, setFeaturedImage] = useState("");
    const [isMediaOpen, setIsMediaOpen] = useState(false);

    // New Fields
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [imageTitle, setImageTitle] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [imageDescription, setImageDescription] = useState("");

    // Date & Scheduling
    const [publishDate, setPublishDate] = useState<Date | undefined>(new Date());
    const [publishTime, setPublishTime] = useState("12:00");
    const [isScheduled, setIsScheduled] = useState(false);
    const [status, setStatus] = useState<"draft" | "published" | "scheduled">("draft");

    useEffect(() => {
        if (id) {
            fetchPost(id);
        }
    }, [id]);

    const fetchPost = async (postId: string) => {
        try {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("id", postId)
                .single();

            if (error) throw error;
            if (data) {
                setTitle(data.title);
                setContent(data.content);
                setExcerpt(data.excerpt || "");
                setCategory(data.category || "");
                setSlug(data.slug || "");
                setFeaturedImage(data.featured_image || "");
                setTags(data.tags || []);
                setMetaTitle(data.meta_title || "");
                setMetaDescription(data.meta_description || "");
                setImageTitle(data.image_title || "");
                setImageAlt(data.image_alt || "");
                setImageDescription(data.image_description || "");

                // Set publication date
                if (data.publish_date) {
                    const pubDate = new Date(data.publish_date);
                    setPublishDate(pubDate);
                    setPublishTime(format(pubDate, "HH:mm"));
                    setIsScheduled(pubDate > new Date());
                    setStatus(data.status || (pubDate > new Date() ? "scheduled" : "published"));
                } else if (data.created_at) {
                    const createdDate = new Date(data.created_at);
                    setPublishDate(createdDate);
                    setPublishTime(format(createdDate, "HH:mm"));
                    setStatus(data.status || "published");
                }
            }
        } catch (error) {
            toast.error("Failed to fetch post");
        }
    };

    const handleSave = async () => {
        if (!title) return toast.error("Title is required");
        setLoading(true);

        try {
            // Calculate publish date/time
            // Calculate publish date/time
            let publishDateTime: Date = new Date();
            let postStatus = status;

            if (publishDate) {
                publishDateTime = new Date(publishDate);

                // If the user deliberately scheduled a time, use it
                if (isScheduled) {
                    const [hours, minutes] = publishTime.split(":").map(Number);
                    publishDateTime.setHours(hours, minutes, 0, 0);
                } else {
                    // If simply picking a date (no time), handle "Publish Now" vs "Specific Date"
                    const now = new Date();
                    // If selected date is today, assume "Now" (keep current time)
                    if (publishDateTime.toDateString() === now.toDateString()) {
                        publishDateTime = now;
                    } else {
                        // If distinct date, set to noon to avoid timezone edge cases (or could use 00:00)
                        publishDateTime.setHours(12, 0, 0, 0);
                    }
                }
            }

            // Determine status based on the calculated time
            if (publishDateTime > new Date()) {
                postStatus = "scheduled";
            } else {
                // Only set to published if it's not a draft or if we are forcing publish
                // But usually saving implies publishing unless explicitly "Save Draft" (which isn't here)
                // The current UI button says "Save Post". 
                // We'll assume if it's not future, it's published.
                postStatus = "published";
            }

            const postData: any = {
                title,
                content,
                excerpt,
                category,
                slug: slug || title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""),
                featured_image: featuredImage,
                tags,
                meta_title: metaTitle,
                meta_description: metaDescription,
                image_title: imageTitle,
                image_alt: imageAlt,
                image_description: imageDescription,
                status: postStatus,
                publish_date: publishDateTime.toISOString(),
                updated_at: new Date().toISOString(),
            };

            // For new posts, set created_at
            if (!id) {
                postData.created_at = publishDateTime.toISOString();
            }

            if (id) {
                const { error } = await supabase
                    .from("posts")
                    .update(postData)
                    .eq("id", id);
                if (error) throw error;
                toast.success(postStatus === "scheduled" ? "Post scheduled successfully" : "Post updated");
            } else {
                const { error } = await supabase.from("posts").insert([postData]);
                if (error) throw error;
                toast.success(postStatus === "scheduled" ? "Post scheduled successfully" : "Post created");
                navigate("/admin/posts");
            }
        } catch (error: any) {
            toast.error(error.message || "Failed to save post");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={() => navigate("/admin/posts")}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button onClick={handleSave} disabled={loading} className="bg-brand-blue">
                    <Save className="w-4 h-4 mr-2" /> {loading ? "Saving..." : "Save Post"}
                </Button>
            </div>

            <div className="space-y-4">
                <Input
                    placeholder="Post Title"
                    className="text-3xl font-bold h-auto py-4 px-0 border-0 border-b rounded-none focus-visible:ring-0 placeholder:text-slate-300"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Category</Label>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            <option value="Blog">Insights (Blog)</option>
                            <option value="WhitePaper">WhitePaper</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label>Excerpt</Label>
                        <Input
                            placeholder="Short Excerpt"
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 pb-4">
                    <span className="text-sm font-medium text-slate-700 mr-2 flex items-center">Industry Tags:</span>
                    {["Manufacturing", "Retail", "Healthcare", "Logistics", "Oil & Gas"].map((industry) => (
                        <Button
                            key={industry}
                            type="button"
                            variant="outline"
                            size="sm"
                            className={cn(
                                "text-xs h-7",
                                tags.includes(industry) ? "bg-brand-blue/10 border-brand-blue text-brand-blue" : ""
                            )}
                            onClick={() => {
                                if (!tags.includes(industry)) {
                                    setTags([...tags, industry]);
                                } else {
                                    setTags(tags.filter(t => t !== industry));
                                }
                            }}
                        >
                            {tags.includes(industry) ? '✓ ' : '+ '}{industry}
                        </Button>
                    ))}
                </div>

                <div className="flex items-center gap-2 text-slate-500">
                    <span className="text-sm">URL Slug:</span>
                    <Input
                        placeholder="post-slug"
                        className="h-8 w-64"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                    />
                </div>

                {/* Publication Date & Scheduling */}
                <div className="space-y-4 border p-4 rounded-lg bg-slate-50">
                    <div className="flex items-center justify-between">
                        <h3 className="font-medium text-slate-900">Publication Settings</h3>
                        <div className="flex items-center gap-3">
                            <Label htmlFor="schedule-toggle" className="text-sm text-slate-700">
                                {isScheduled ? "Schedule for Later" : "Publish Now"}
                            </Label>
                            <Switch
                                id="schedule-toggle"
                                checked={isScheduled}
                                onCheckedChange={setIsScheduled}
                            />
                        </div>
                    </div>

                    {isScheduled ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-slate-700">Publication Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !publishDate && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {publishDate ? format(publishDate, "PPP") : "Pick a date"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={publishDate}
                                            onSelect={setPublishDate}
                                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-slate-700">Publication Time</Label>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-slate-500" />
                                    <Input
                                        type="time"
                                        value={publishTime}
                                        onChange={(e) => setPublishTime(e.target.value)}
                                        className="flex-1"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-slate-700">Publish Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !publishDate && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {publishDate ? format(publishDate, "PPP") : "Pick a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={publishDate}
                                        onSelect={setPublishDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    )}

                    {isScheduled && publishDate && (
                        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-800">
                                <strong>Scheduled for:</strong> {format(publishDate, "PPP")} at {publishTime}
                            </p>
                            {(() => {
                                const [hours, minutes] = publishTime.split(":").map(Number);
                                const scheduledDateTime = new Date(publishDate);
                                scheduledDateTime.setHours(hours, minutes, 0, 0);
                                return scheduledDateTime > new Date() ? (
                                    <p className="text-xs text-blue-600 mt-1">Post will be published automatically at the scheduled time.</p>
                                ) : (
                                    <p className="text-xs text-orange-600 mt-1">⚠️ Selected time is in the past. Post will be published immediately.</p>
                                );
                            })()}
                        </div>
                    )}
                </div>

                <div className="space-y-4 border p-4 rounded-lg bg-slate-50">
                    <h3 className="font-medium text-slate-900">Featured Image Details</h3>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Image URL</label>
                        <div className="flex gap-2">
                            <Input
                                placeholder="https://..."
                                value={featuredImage}
                                onChange={(e) => setFeaturedImage(e.target.value)}
                            />
                            <Dialog open={isMediaOpen} onOpenChange={setIsMediaOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline">
                                        <ImageIcon className="w-4 h-4 mr-2" />
                                        Select Image
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
                                    <div className="flex-1 overflow-hidden">
                                        <MediaPicker onSelect={(url) => {
                                            setFeaturedImage(url);
                                            setIsMediaOpen(false);
                                        }} />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    {featuredImage && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Image Title</label>
                                <Input
                                    placeholder="Image Title"
                                    value={imageTitle}
                                    onChange={(e) => setImageTitle(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Alt Text</label>
                                <Input
                                    placeholder="Alt Text for SEO"
                                    value={imageAlt}
                                    onChange={(e) => setImageAlt(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full space-y-2">
                                <label className="text-sm font-medium text-slate-700">Image Description</label>
                                <Input
                                    placeholder="Description"
                                    value={imageDescription}
                                    onChange={(e) => setImageDescription(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-4 border p-4 rounded-lg bg-slate-50">
                    <h3 className="font-medium text-slate-900">SEO & Meta</h3>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Meta Title</label>
                        <Input
                            placeholder="SEO Title (defaults to post title if empty)"
                            value={metaTitle}
                            onChange={(e) => setMetaTitle(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Meta Description</label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="SEO Description"
                            value={metaDescription}
                            onChange={(e) => setMetaDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Tags</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {tags.map((tag) => (
                            <span key={tag} className="bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-md text-sm flex items-center gap-1">
                                {tag}
                                <button
                                    onClick={() => setTags(tags.filter(t => t !== tag))}
                                    className="hover:text-red-500"
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Input
                            placeholder="Add a tag and press Enter"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
                                        setTags([...tags, tagInput.trim()]);
                                        setTagInput("");
                                    }
                                }
                            }}
                        />
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                if (tagInput.trim() && !tags.includes(tagInput.trim())) {
                                    setTags([...tags, tagInput.trim()]);
                                    setTagInput("");
                                }
                            }}
                        >
                            Add
                        </Button>
                    </div>
                </div>

                <div className="min-h-[500px]">
                    <RichTextEditor
                        value={content}
                        onChange={setContent}
                        placeholder="Write your story..."
                    />
                </div>
            </div>
        </div>
    );
};

export default PostEditor;
