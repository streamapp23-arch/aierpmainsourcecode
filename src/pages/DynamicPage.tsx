import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DynamicPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetchPage(slug);
        }
    }, [slug]);

    const fetchPage = async (pageSlug: string) => {
        try {
            const { data, error } = await supabase
                .from("pages")
                .select("*")
                .eq("slug", pageSlug)
                .single();

            if (error) throw error;
            if (!data) {
                navigate("/404");
                return;
            }
            setPage(data);
        } catch (error) {
            console.error("Error fetching page:", error);
            navigate("/404");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-brand-blue" />
            </div>
        );
    }

    if (!page) return null;

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>{page.title} | Intel ERP Flow</title>
            </Helmet>
            <Header />

            <main className="pt-24 pb-16">
                <article className="container mx-auto px-4 max-w-4xl prose prose-lg prose-slate">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{page.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: page.content }} />
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default DynamicPage;
