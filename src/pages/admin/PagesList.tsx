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
import { Edit, Plus, Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface Page {
    id: string;
    title: string;
    slug: string;
    updated_at: string;
}

const PagesList = () => {
    const [pages, setPages] = useState<Page[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPages();
    }, []);

    const fetchPages = async () => {
        try {
            const { data, error } = await supabase
                .from("pages")
                .select("*")
                .order("updated_at", { ascending: false });

            if (error) throw error;
            setPages(data || []);
        } catch (error) {
            console.error("Error fetching pages:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this page?")) return;

        try {
            const { error } = await supabase.from("pages").delete().eq("id", id);
            if (error) throw error;
            toast.success("Page deleted");
            fetchPages();
        } catch (error) {
            toast.error("Failed to delete page");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-slate-900">Pages</h1>
                <Link to="/admin/pages/new">
                    <Button className="bg-brand-blue hover:bg-brand-blue/90">
                        <Plus className="w-4 h-4 mr-2" /> New Page
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-lg border shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>Last Updated</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : pages.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-8 text-slate-500">
                                    No pages found. Create your first one!
                                </TableCell>
                            </TableRow>
                        ) : (
                            pages.map((page) => (
                                <TableRow key={page.id}>
                                    <TableCell className="font-medium">{page.title}</TableCell>
                                    <TableCell>
                                        <code className="bg-slate-100 px-2 py-1 rounded text-sm">/{page.slug}</code>
                                    </TableCell>
                                    <TableCell>{new Date(page.updated_at).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link to={`/p/${page.slug}`} target="_blank">
                                                <Button variant="ghost" size="icon">
                                                    <ExternalLink className="w-4 h-4 text-slate-500" />
                                                </Button>
                                            </Link>
                                            <Link to={`/admin/pages/${page.id}`}>
                                                <Button variant="ghost" size="icon">
                                                    <Edit className="w-4 h-4 text-slate-500" />
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleDelete(page.id)}
                                            >
                                                <Trash2 className="w-4 h-4 text-red-500" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default PagesList;
