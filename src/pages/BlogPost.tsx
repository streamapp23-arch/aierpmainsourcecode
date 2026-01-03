import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2, Calendar, User, Tag, Clock, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";
import SEO from "@/components/SEO";
import { TOCItem } from "@/lib/tocUtils";
import { Button } from "@/components/ui/button";
import ReadingProgress from "@/components/ReadingProgress";
import RelatedPosts from "@/components/RelatedPosts";
import BlogContentRenderer from "@/components/BlogContentRenderer";
import { Link } from "react-router-dom";
import { optimizeSupabaseImage } from "@/lib/imageUtils";
import authorImage from "@/assets/founder-jafer-ali.jpg";

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [toc, setToc] = useState<TOCItem[]>([]);

    useEffect(() => {
        if (slug) {
            fetchPost(slug);
        }
    }, [slug]);

    const fetchPost = async (postSlug: string) => {
        try {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("slug", postSlug)
                .single();

            if (error) throw error;
            if (!data) {
                navigate("/404");
                return;
            }
            setPost(data);

        } catch (error) {
            console.error("Error fetching post:", error);
            navigate("/404");
        } finally {
            setLoading(false);
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <Loader2 className="w-10 h-10 animate-spin text-cyan-600" />
            </div>
        );
    }

    if (!post) return null;

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-500/20">
            <ReadingProgress />
            <SEO
                title={`${post.meta_title || post.title} | Intel ERP Flow Blog`}
                description={post.meta_description || post.excerpt}
                canonicalUrl={`https://www.aierppartners.com/blogs/${post.slug}`}
                ogImage={post.featured_image}
                ogType="article"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "image": post.featured_image ? [post.featured_image] : [],
                    "datePublished": post.created_at,
                    "author": {
                        "@type": "Person",
                        "name": "Jafer Ali"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "AIERP Partners",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.aierppartners.com/logo.png"
                        }
                    },
                    "description": post.excerpt
                }}
            />
            <Header />

            <main>
                {/* Hero Section */}
                <div className="relative w-full bg-slate-900 overflow-hidden">
                    {/* Background Image with Fallback */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900" />

                    {post.featured_image && (
                        <div className="absolute inset-0">
                            <img
                                src={optimizeSupabaseImage(post.featured_image, { width: 1920, quality: 80 })}
                                alt={post.image_alt || post.title}
                                className="w-full h-full object-cover opacity-50"
                                loading="eager"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                    <div className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-16">
                        <div className="container mx-auto px-4 max-w-5xl text-center">
                            <div className="space-y-5 sm:space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <Tag className="w-3 h-3" /> {post.category || "Insight"}
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 px-4">
                                    {post.title}
                                </h1>

                                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 text-slate-200 text-xs sm:text-sm md:text-base animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 pt-2">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={authorImage}
                                            alt="Jafer Ali"
                                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white/20 object-cover shadow-lg"
                                        />
                                        <span className="font-medium text-white whitespace-nowrap">Jafer Ali</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 flex-shrink-0" />
                                        <span className="whitespace-nowrap">{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 flex-shrink-0" />
                                        <span className="whitespace-nowrap">5 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1400px] -mt-8 relative z-20 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Sidebar (Table of Contents) */}
                        <aside className="lg:col-span-3 hidden lg:block sticky top-32 self-start max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-2">
                            <div className="space-y-8">
                                {toc.length > 0 && (
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                            On this page
                                        </h3>
                                        <nav className="space-y-1 relative">
                                            {/* Track line */}
                                            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-slate-100 rounded-full" />

                                            {toc.map((item) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => scrollToSection(item.id)}
                                                    className={`block w-full text-left text-sm py-1.5 pl-4 border-l-2 -ml-[1px] transition-all duration-200 ${item.level === 3 ? "pl-8 text-slate-400 border-transparent" : "text-slate-600 font-medium border-transparent hover:border-slate-300 hover:text-slate-900"
                                                        }`}
                                                >
                                                    {item.text}
                                                </button>
                                            ))}
                                        </nav>
                                    </div>
                                )}
                            </div>
                        </aside>

                        {/* Main Content (Center/Right) */}
                        <article className="lg:col-span-9 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
                            {post.excerpt && (
                                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 font-light border-l-4 border-cyan-500 pl-6 italic">
                                    {post.excerpt}
                                </p>
                            )}

                            <BlogContentRenderer
                                content={post.content || ''}
                                onTOCUpdate={(headings) => {
                                    setToc(headings.map(h => ({
                                        id: h.id,
                                        text: h.text,
                                        level: h.level
                                    })));
                                }}
                            />

                            <div className="mt-16 pt-8 border-t border-slate-100">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-slate-500 font-medium">Tags:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags && post.tags.length > 0 ? (
                                                post.tags.map((tag: string) => (
                                                    <Link
                                                        key={tag}
                                                        to={`/blog?tag=${encodeURIComponent(tag)}`}
                                                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer"
                                                    >
                                                        {tag}
                                                    </Link>
                                                ))
                                            ) : (
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">
                                                    {post.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-500 text-sm">Share:</span>
                                        <div className="flex gap-1">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600 hover:bg-blue-50">
                                                <Facebook className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-sky-500 hover:bg-sky-50">
                                                <Twitter className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-700 hover:bg-blue-50">
                                                <Linkedin className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <RelatedPosts currentSlug={post.slug} tags={post.tags} />
                            </div>

                            <div className="mt-12 bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                                <img
                                    src={authorImage}
                                    alt="Jafer Ali"
                                    className="w-20 h-20 rounded-full border-4 border-white shadow-md flex-shrink-0 object-cover"
                                />
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Jafer Ali</h4>
                                    <p className="text-sm text-cyan-600 font-medium mb-3">ERP & AI Specialist</p>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        Helping enterprises navigate the complex landscape of digital transformation and AI integration.
                                    </p>
                                    <Button variant="outline" size="sm" className="rounded-full text-xs border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-200">
                                        View Profile
                                    </Button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;
