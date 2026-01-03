/**
 * Utility function to optimize Supabase image URLs
 * Adds transformation parameters for better performance
 */

export const optimizeSupabaseImage = (
    url: string | null | undefined,
    options: {
        width?: number;
        height?: number;
        quality?: number;
        format?: 'webp' | 'avif' | 'auto';
    } = {}
): string => {
    if (!url) return '/placeholder.svg';

    // If it's not a Supabase URL, return as-is
    if (!url.includes('supabase')) return url;

    const { width = 800, quality = 85, format = 'webp' } = options;

    // Supabase storage supports transformation via query params
    // Format: ?width=800&quality=85&format=webp
    const separator = url.includes('?') ? '&' : '?';
    const params = new URLSearchParams();

    if (width) params.append('width', width.toString());
    if (quality) params.append('quality', quality.toString());
    if (format) params.append('format', format);

    return `${url}${separator}${params.toString()}`;
};

/**
 * Get responsive image srcset for different screen sizes
 */
export const getResponsiveImageSrcSet = (url: string | null | undefined): string => {
    if (!url || !url.includes('supabase')) return '';

    const sizes = [400, 800, 1200, 1600];
    return sizes
        .map(size => `${optimizeSupabaseImage(url, { width: size })} ${size}w`)
        .join(', ');
};
