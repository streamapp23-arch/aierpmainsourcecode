import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { toast } from "sonner";
import { ArrowLeft, Save } from "lucide-react";

const PageEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [slug, setSlug] = useState("");

    useEffect(() => {
        if (id) {
            fetchPage(id);
        }
    }, [id]);

    const fetchPage = async (pageId: string) => {
        try {
            const { data, error } = await supabase
                .from("pages")
                .select("*")
                .eq("id", pageId)
                .single();

            if (error) throw error;
            if (data) {
                setTitle(data.title);
                setContent(data.content);
                setSlug(data.slug);
            }
        } catch (error) {
            toast.error("Failed to fetch page");
        }
    };

    const handleSave = async () => {
        if (!title) return toast.error("Title is required");
        setLoading(true);

        try {
            const pageData = {
                title,
                content,
                slug: slug || title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""),
                updated_at: new Date().toISOString(),
            };

            if (id) {
                const { error } = await supabase
                    .from("pages")
                    .update(pageData)
                    .eq("id", id);
                if (error) throw error;
                toast.success("Page updated");
            } else {
                const { error } = await supabase.from("pages").insert([pageData]);
                if (error) throw error;
                toast.success("Page created");
                navigate("/admin/pages");
            }
        } catch (error: any) {
            toast.error(error.message || "Failed to save page");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={() => navigate("/admin/pages")}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button onClick={handleSave} disabled={loading} className="bg-brand-blue">
                    <Save className="w-4 h-4 mr-2" /> {loading ? "Saving..." : "Save Page"}
                </Button>
            </div>

            <div className="space-y-4">
                <Input
                    placeholder="Page Title"
                    className="text-3xl font-bold h-auto py-4 px-0 border-0 border-b rounded-none focus-visible:ring-0 placeholder:text-slate-300"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="flex items-center gap-2 text-slate-500">
                    <span className="text-sm">URL Slug:</span>
                    <Input
                        placeholder="page-slug"
                        className="h-8 w-64"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                    />
                </div>

                <div className="min-h-[500px]">
                    <RichTextEditor
                        value={content}
                        onChange={setContent}
                        placeholder="Write your page content..."
                    />
                </div>
            </div>
        </div>
    );
};

export default PageEditor;
