import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrendsTimeline from "@/components/TrendsTimeline";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  ChevronRight,
  Mail,
  Loader2,
  Clock,
  User
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailConfig';
import { toast } from "sonner";
import { Captcha } from "@/components/Captcha";
import authorImage from "@/assets/founder-jafer-ali.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  created_at: string;
  date?: string;
  featured_image?: string;
  author?: string;
  readTime?: string;
  color?: string;
  tags?: string[];
  slug?: string;
}

const Blog = () => {
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState("All");
  const [allTags, setAllTags] = useState<string[]>(["All"]);
  const [searchParams] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(9);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [activeTab, setActiveTab] = useState<"Blog" | "WhitePaper">("Blog");

  useEffect(() => {
    const tagFromUrl = searchParams.get("tag");
    if (tagFromUrl) {
      setSelectedTag(tagFromUrl);
    }
    fetchPosts();
  }, [searchParams]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const now = new Date();

      const transformedPosts = (data || [])
        // Filter out drafts and future scheduled posts (Client-side filtering for simplicity)
        .filter(post => {
          const isPublished = post.status === 'published';
          const isScheduledPast = post.status === 'scheduled' && post.publish_date && new Date(post.publish_date) <= now;
          // Also allow posts with no status (legacy)
          const isLegacy = !post.status;

          // Exclude drafts explicitly
          if (post.status === 'draft') return false;

          return isPublished || isScheduledPast || isLegacy;
        })
        .map((post, i) => ({
          ...post,
          author: "Jafer Ali",
          readTime: "5 min read",
          color: i % 2 === 0 ? "from-cyan-400 to-blue-400" : "from-purple-400 to-pink-400",
          date: new Date(post.publish_date || post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          tags: post.tags || []
        }));

      // Sort by date descending (using publish_date preferably)
      transformedPosts.sort((a, b) => {
        const dateA = new Date(a.publish_date || a.created_at).getTime();
        const dateB = new Date(b.publish_date || b.created_at).getTime();
        return dateB - dateA;
      });

      if (transformedPosts.length > 0) {
        setFeaturedPost(transformedPosts[0]);
        setPosts(transformedPosts);
      } else {
        setFeaturedPost(null);
        setPosts([]);
      }

      const tags = new Set<string>(["All"]);
      transformedPosts.forEach(post => {
        if (post.category) tags.add(post.category);
        if (post.tags) {
          post.tags.forEach((tag: string) => tags.add(tag));
        }
      });
      setAllTags(Array.from(tags));

    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    // Filter by Top Level Category (Blog vs WhitePaper)
    // If post.category is missing or empty, assume it's 'Blog' for backward compatibility
    const postCategory = post.category || 'Blog';
    // Case-insensitive comparison just in case
    const matchCategory = postCategory.toLowerCase() === activeTab.toLowerCase();

    if (!matchCategory) return false;

    const matchesTag = selectedTag === "All" ||
      (post.tags && post.tags.includes(selectedTag)) ||
      (post.category === selectedTag); // Keep legacy category check as tag for backward compatibility if needed, but primary is tags now
    return matchesTag;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = filteredPosts.length > visibleCount;

  const loadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error("Please enter your email address");
      return;
    }

    if (!isVerified) {
      toast.error("Please verify you are human.");
      return;
    }

    setIsSubscribing(true);
    try {
      const templateParams = {
        from_name: "Newsletter Subscriber",
        from_email: newsletterEmail,
        topic: "Newsletter Subscription",
        message: `New newsletter subscription request from: ${newsletterEmail}`,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success("Successfully subscribed to our newsletter!");
        setNewsletterEmail("");
      } else {
        toast.error("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-cyan-500/20">
      <SEO
        title="Insights Hub - AI & ERP Blog"
        description="Deep dives into AI, Digital Transformation, and the future of work. Stay ahead with intelligence for the modern enterprise."
        canonicalUrl="https://www.aierppartners.com/blog"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "AIERP Partners Blog",
          "description": "Insights on AI, ERP, and Digital Transformation",
          "url": "https://www.aierppartners.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "AIERP Partners",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.aierppartners.com/logo.png"
            }
          }
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-lg shadow-cyan-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Insights Hub
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Intelligence for the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Modern Enterprise</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Deep dives into AI, Digital Transformation, and the future of work.
          </p>
        </div>
      </section>

      {/* Main Category Tabs */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto max-w-6xl flex justify-center">
          <div className="bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-slate-200 inline-flex shadow-sm">
            <button
              onClick={() => { setActiveTab("Blog"); setSelectedTag("All"); }}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "Blog" ? "bg-brand-blue text-white shadow-md" : "text-slate-600 hover:bg-slate-100"}`}
            >
              Insights Hub
            </button>
            <button
              onClick={() => { setActiveTab("WhitePaper"); setSelectedTag("All"); }}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "WhitePaper" ? "bg-brand-blue text-white shadow-md" : "text-slate-600 hover:bg-slate-100"}`}
            >
              White Papers
            </button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 sm:py-16 px-4 bg-slate-50 -mt-10 relative z-20">
          <div className="container mx-auto max-w-6xl">
            <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform hover:-translate-y-1 transition-transform duration-300 min-h-[550px] sm:min-h-[600px] group">
              {featuredPost.featured_image ? (
                <img src={featuredPost.featured_image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600"></div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-12 pb-8 sm:pb-10 md:pb-12">
                <div className="max-w-3xl space-y-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-100 text-sm font-semibold border border-cyan-400/30 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    Featured · {featuredPost.category}
                  </span>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed line-clamp-2">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                    <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                      <img
                        src={authorImage}
                        alt={featuredPost.author || "Jafer Ali"}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/20 object-cover shadow-lg"
                      />
                      <span className="font-medium">{featuredPost.author || "Jafer Ali"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link to={`/blogs/${featuredPost.slug}`}>
                      <Button className="bg-white text-slate-900 hover:bg-cyan-500 hover:text-white rounded-full px-6 sm:px-8 h-10 sm:h-12 text-sm sm:text-base font-semibold shadow-xl group/btn transition-all">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Content Layout */}
      <section className="py-12 sm:py-16 px-4 bg-slate-50 min-h-[500px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar - Categories */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    Categories
                  </h3>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    {allTags.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedTag(cat)}
                        className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${selectedTag === cat
                          ? 'bg-cyan-600 text-white border-cyan-600 shadow-md transform scale-105 lg:translate-x-2'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:text-cyan-600 hover:bg-cyan-50'
                          }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span>{cat}</span>
                          {selectedTag === cat && <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Mini (optional, can be kept or removed if too cluttered, but keeping it simple for now) */}
                <div className="hidden lg:block p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white shadow-xl">
                  <h4 className="font-bold text-lg mb-2">Join the Community</h4>
                  <p className="text-slate-300 text-xs mb-4">Get the latest AI & ERP insights delivered to your inbox.</p>
                  <a href="#newsletter" className="inline-block w-full py-2 bg-cyan-500 hover:bg-cyan-400 text-center rounded-lg text-sm font-semibold transition-colors">
                    Subscribe Now
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content - Articles Grid */}
            <div className="flex-1">
              {/* Results count / Header */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  {selectedTag === 'All' ? 'All Articles' : `${selectedTag} Articles`}
                </h2>
                <span className="text-sm text-slate-500">
                  {filteredPosts.length} Result{filteredPosts.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {loading ? (
                  <div className="col-span-full flex justify-center py-24">
                    <Loader2 className="w-10 h-10 animate-spin text-cyan-600" />
                  </div>
                ) : filteredPosts.length === 0 ? (
                  <div className="col-span-full flex flex-col items-center justify-center py-24 text-center bg-white rounded-3xl border border-slate-200 border-dashed">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                      <Sparkles className="w-8 h-8 text-slate-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">No articles found</h3>
                    <p className="text-slate-500 max-w-xs mx-auto">
                      We couldn't find any articles matching "{selectedTag}". Try selecting a different category.
                    </p>
                    <button
                      onClick={() => setSelectedTag("All")}
                      className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
                    >
                      View All Articles
                    </button>
                  </div>
                ) : (
                  visiblePosts.map((post: any, i) => (
                    <Card key={i} className="border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group h-full flex flex-col bg-white rounded-2xl">
                      <div className="relative h-48 overflow-hidden">
                        {post.featured_image ? (
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${post.color}`}></div>
                        )}
                        <div className="absolute top-3 left-3">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-cyan-700 text-[10px] font-bold uppercase tracking-wider shadow-sm border border-cyan-100/50">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-5 flex flex-col flex-1 space-y-3">
                        <div className="flex items-center gap-x-2 text-[11px] text-slate-500 font-medium uppercase tracking-wide">
                          <span>{post.date}</span>
                          <span className="text-slate-300">•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors line-clamp-2 leading-tight">
                          <Link to={`/blogs/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="pt-3 border-t border-dashed border-slate-100 mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={authorImage}
                              alt={post.author}
                              className="w-6 h-6 rounded-full border border-slate-200 object-cover"
                            />
                            <span className="text-xs text-slate-600 font-medium">{post.author}</span>
                          </div>
                          <Link to={`/blogs/${post.slug}`} className="text-cyan-600 hover:text-cyan-700 p-1.5 hover:bg-cyan-50 rounded-full transition-colors">
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  )))}
              </div>

              {hasMore && (
                <div className="mt-12 text-center">
                  <Button
                    onClick={loadMore}
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 py-6 h-auto border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-200 bg-white hover:bg-cyan-50 shadow-sm transition-all"
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <TrendsTimeline />

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-cyan-900 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
            <Mail className="h-10 w-10 text-cyan-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Stay Ahead of the Curve
          </h2>
          <p className="text-lg sm:text-xl text-cyan-100 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ enterprise leaders receiving our weekly insights on AI, ERP, and digital transformation.
          </p>

          <form onSubmit={handleNewsletterSubscribe} className="flex flex-col gap-4 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your work email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 h-14 px-6 rounded-full bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 transition-all"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-400 text-white h-14 px-8 rounded-full text-lg font-semibold shadow-lg"
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            <div className="flex justify-center">
              <Captcha onVerify={setIsVerified} className="bg-white/10 border-white/20 text-white" />
            </div>
          </form>
          <p className="mt-6 text-cyan-200/60 text-sm">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Blog;
