import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, Upload, Trash2, Check } from "lucide-react";
import { toast } from "sonner";

interface MediaFile {
    name: string;
    url: string;
    created_at: string;
}

interface MediaPickerProps {
    onSelect: (url: string) => void;
}

const MediaPicker = ({ onSelect }: MediaPickerProps) => {
    const [files, setFiles] = useState<MediaFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

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

            // Sort by newest first
            filesWithUrls.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

            setFiles(filesWithUrls);
        } catch (error) {
            console.error("Error fetching media:", error);
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

            // Get the URL of the uploaded file immediately
            const { data: { publicUrl } } = supabase.storage
                .from("media")
                .getPublicUrl(fileName);

            // Refresh list
            await fetchMedia();

            // Optional: Auto-select the uploaded file? 
            // For now, let's just refresh so they can click it.
        } catch (error: any) {
            toast.error(error.message || "Upload failed");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (fileName: string, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent selection when deleting
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

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Select Image</h3>
                <div className="relative">
                    <Input
                        type="file"
                        className="hidden"
                        id="picker-file-upload"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={uploading}
                    />
                    <label htmlFor="picker-file-upload">
                        <Button
                            size="sm"
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
                                Upload New
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto p-1">
                    {files.map((file) => (
                        <Card
                            key={file.name}
                            className="overflow-hidden group cursor-pointer hover:ring-2 hover:ring-brand-blue transition-all"
                            onClick={() => onSelect(file.url)}
                        >
                            <div className="aspect-square relative bg-slate-100">
                                <img
                                    src={file.url}
                                    alt={file.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        className="h-6 w-6"
                                        onClick={(e) => handleDelete(file.name, e)}
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MediaPicker;
