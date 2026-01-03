import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RelatedPostsProps {
    currentSlug?: string;
    tags?: string[];
}

const RelatedPosts = ({ currentSlug, tags }: RelatedPostsProps) => {
    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRelatedPosts();
    }, [currentSlug, tags]);

    const fetchRelatedPosts = async () => {
        try {
            let query = supabase
                .from("posts")
                .select("*")
                .neq("slug", currentSlug || "")
                .order("created_at", { ascending: false })
                .limit(3);

            const { data, error } = await query;

            if (error) throw error;

            const transformedPosts = (data || []).map((post, i) => ({
                ...post,
                author: "Jafer Ali",
                readTime: "5 min read",
                color: i % 2 === 0 ? "from-cyan-400 to-blue-400" : "from-purple-400 to-pink-400",
                date: new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            }));

            setRelatedPosts(transformedPosts);
        } catch (error) {
            console.error("Error fetching related posts:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading || relatedPosts.length === 0) return null;

    return (
        <div className="mt-16 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post, i) => (
                    <Card key={i} className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                        {/* Featured Image */}
                        <div className="relative h-40 overflow-hidden">
                            {post.featured_image ? (
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${post.color}`}></div>
                            )}
                            <div className="absolute top-3 left-3">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-cyan-600 text-xs font-bold uppercase tracking-wider shadow-lg">
                                    {post.category}
                                </span>
                            </div>
                        </div>

                        <CardContent className="p-5">
                            <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                                <Calendar className="h-3 w-3" />
                                <span>{post.date}</span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                                {post.title}
                            </h3>

                            <Link to={`/blogs/${post.slug}`} className="inline-flex items-center gap-1 text-cyan-600 text-sm font-semibold group-hover:gap-2 transition-all cursor-pointer mt-2">
                                Read <ChevronRight className="h-4 w-4" />
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default RelatedPosts;
