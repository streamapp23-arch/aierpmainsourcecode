import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Edit, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Post {
    id: string;
    title: string;
    created_at: string;
    publish_date?: string;
    status?: "draft" | "published" | "scheduled";
    category?: string;
}

const PostsList = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setPosts(data || []);
        } catch (error) {
            console.error("Error fetching posts:", error);
            // toast.error("Failed to fetch posts"); // Suppress for now as table might not exist
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        try {
            const { error } = await supabase.from("posts").delete().eq("id", id);
            if (error) throw error;
            toast.success("Post deleted");
            fetchPosts();
        } catch (error) {
            toast.error("Failed to delete post");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-slate-900">Posts</h1>
                <Link to="/admin/posts/new">
                    <Button className="bg-brand-blue hover:bg-brand-blue/90">
                        <Plus className="w-4 h-4 mr-2" /> New Post
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-lg border shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : posts.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                                    No posts found. Create your first one!
                                </TableCell>
                            </TableRow>
                        ) : (
                            posts.map((post) => {
                                const displayDate = post.publish_date || post.created_at;
                                const postStatus = post.status || "published";
                                const statusColors = {
                                    published: "bg-green-100 text-green-800",
                                    scheduled: "bg-blue-100 text-blue-800",
                                    draft: "bg-gray-100 text-gray-800"
                                };
                                const statusLabels = {
                                    published: "Published",
                                    scheduled: "Scheduled",
                                    draft: "Draft"
                                };

                                return (
                                    <TableRow key={post.id}>
                                        <TableCell>
                                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${post.category === 'WhitePaper' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                                                {post.category || 'Blog'}
                                            </span>
                                        </TableCell>
                                        <TableCell className="font-medium">{post.title}</TableCell>
                                        <TableCell>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[postStatus]}`}>
                                                {statusLabels[postStatus]}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            {new Date(displayDate).toLocaleDateString()}
                                            {postStatus === "scheduled" && post.publish_date && (
                                                <span className="text-xs text-slate-500 block">
                                                    {new Date(post.publish_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Link to={`/admin/posts/${post.id}`}>
                                                    <Button variant="ghost" size="icon">
                                                        <Edit className="w-4 h-4 text-slate-500" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleDelete(post.id)}
                                                >
                                                    <Trash2 className="w-4 h-4 text-red-500" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default PostsList;

