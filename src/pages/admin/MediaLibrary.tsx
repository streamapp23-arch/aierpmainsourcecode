import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, Upload, Trash2, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface MediaFile {
    name: string;
    url: string;
    created_at: string;
}

const MediaLibrary = () => {
    const [files, setFiles] = useState<MediaFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);

    useEffect(() => {
        fetchMedia();
    }, []);

    const fetchMedia = async () => {
        try {
            const { data, error } = await supabase.storage.from("media").list();
            if (error) throw error;

            const filesWithUrls = await Promise.all(
                (data || []).map(async (file) => {
                    const { data: { publicUrl } } = supabase.storage
                        .from("media")
                        .getPublicUrl(file.name);
                    return {
                        name: file.name,
                        url: publicUrl,
                        created_at: file.created_at,
                    };
                })
            );

            setFiles(filesWithUrls);
        } catch (error) {
            console.error("Error fetching media:", error);
            // Don't show error toast on initial load as bucket might not exist yet
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        setUploading(true);

        const file = e.target.files[0];
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        try {
            const { error } = await supabase.storage
                .from("media")
                .upload(filePath, file);

            if (error) throw error;
            toast.success("Image uploaded");
            fetchMedia();
        } catch (error: any) {
            toast.error(error.message || "Upload failed");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (fileName: string) => {
        if (!confirm("Delete this image?")) return;

        try {
            const { error } = await supabase.storage.from("media").remove([fileName]);
            if (error) throw error;
            toast.success("Image deleted");
            fetchMedia();
        } catch (error) {
            toast.error("Failed to delete image");
        }
    };

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url);
        setCopied(url);
        toast.success("URL copied to clipboard");
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-slate-900">Media Library</h1>
                <div className="relative">
                    <Input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={uploading}
                    />
                    <label htmlFor="file-upload">
                        <Button
                            className="bg-brand-blue hover:bg-brand-blue/90 cursor-pointer"
                            asChild
                            disabled={uploading}
                        >
                            <span>
                                {uploading ? (
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                ) : (
                                    <Upload className="w-4 h-4 mr-2" />
                                )}
                                Upload Image
                            </span>
                        </Button>
                    </label>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-brand-blue" />
                </div>
            ) : files.length === 0 ? (
                <div className="text-center py-12 text-slate-500 border-2 border-dashed rounded-lg">
                    No images found. Upload one to get started.
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {files.map((file) => (
                        <Card key={file.name} className="overflow-hidden group">
                            <div className="aspect-square relative bg-slate-100">
                                <img
                                    src={file.url}
                                    alt={file.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        onClick={() => copyToClipboard(file.url)}
                                    >
                                        {copied === file.url ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        onClick={() => handleDelete(file.name)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <CardContent className="p-3">
                                <p className="text-xs text-slate-500 truncate" title={file.name}>
                                    {file.name}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MediaLibrary;
