import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Image } from '@tiptap/extension-image';
import { Link } from '@tiptap/extension-link';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import { useEffect } from 'react';

interface BlogContentRendererProps {
    content: string;
    onTOCUpdate?: (headings: Array<{ id: string; text: string; level: number }>) => void;
}

const BlogContentRenderer = ({ content, onTOCUpdate }: BlogContentRendererProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3, 4],
                },
            }),
            Image.configure({
                inline: true,
                allowBase64: true,
                HTMLAttributes: {
                    class: 'rounded-2xl shadow-lg my-8 max-w-full h-auto',
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-cyan-600 no-underline hover:text-cyan-500 hover:underline transition-colors',
                },
            }),
            Table.configure({
                resizable: true,
                HTMLAttributes: {
                    class: 'border-collapse border border-slate-300 my-6 w-full',
                },
            }),
            TableRow.configure({
                HTMLAttributes: {
                    class: 'border border-slate-300',
                },
            }),
            TableHeader.configure({
                HTMLAttributes: {
                    class: 'border border-slate-300 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900',
                },
            }),
            TableCell.configure({
                HTMLAttributes: {
                    class: 'border border-slate-300 px-4 py-3 text-slate-700',
                },
            }),
        ],
        content,
        editable: false,
        editorProps: {
            attributes: {
                class: 'prose prose-lg md:prose-xl prose-slate max-w-none focus:outline-none',
            },
        },
    });

    useEffect(() => {
        if (editor && content) {
            editor.commands.setContent(content);
        }
    }, [editor, content]);

    useEffect(() => {
        if (editor && onTOCUpdate) {
            const updateTOC = () => {
                const headings: Array<{ id: string; text: string; level: number }> = [];
                const doc = editor.state.doc;
                const usedIds = new Set<string>();

                // First pass: collect all headings
                doc.descendants((node, pos) => {
                    if (node.type.name === 'heading') {
                        const level = node.attrs.level;
                        const text = node.textContent;
                        
                        if (text) {
                            // Generate a slug-based ID
                            let slug = text
                                .toLowerCase()
                                .replace(/[^\w\s-]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/-+/g, '-')
                                .trim();
                            
                            // Ensure unique IDs
                            let id = slug || `heading-${pos}`;
                            let counter = 1;
                            while (usedIds.has(id)) {
                                id = `${slug}-${counter}`;
                                counter++;
                            }
                            usedIds.add(id);
                            
                            headings.push({ id, text, level });
                        }
                    }
                });

                // Second pass: add IDs to DOM elements
                setTimeout(() => {
                    const editorElement = editor.view.dom;
                    const headingElements = editorElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
                    
                    headingElements.forEach((headingEl, index) => {
                        if (index < headings.length) {
                            headingEl.id = headings[index].id;
                        }
                    });
                }, 100);

                onTOCUpdate(headings);
            };

            editor.on('update', updateTOC);
            updateTOC(); // Initial TOC generation

            return () => {
                editor.off('update', updateTOC);
            };
        }
    }, [editor, onTOCUpdate]);

    if (!editor) {
        return null;
    }

    return (
        <div className="blog-content">
            <style>{`
                .blog-content .ProseMirror {
                    outline: none;
                }
                
                .blog-content .ProseMirror h1 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                    letter-spacing: -0.02em;
                }
                
                .blog-content .ProseMirror h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid #e2e8f0;
                    line-height: 1.3;
                    letter-spacing: -0.01em;
                }
                
                .blog-content .ProseMirror h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                    line-height: 1.4;
                }
                
                .blog-content .ProseMirror h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                    line-height: 1.5;
                }
                
                .blog-content .ProseMirror p {
                    color: #475569;
                    line-height: 1.75;
                    margin-bottom: 1.5rem;
                    font-size: 1.125rem;
                }
                
                .blog-content .ProseMirror strong {
                    color: #0f172a;
                    font-weight: 700;
                }
                
                .blog-content .ProseMirror em {
                    font-style: italic;
                }
                
                .blog-content .ProseMirror ul,
                .blog-content .ProseMirror ol {
                    margin: 1.5rem 0;
                    padding-left: 1.5rem;
                }
                
                .blog-content .ProseMirror ul {
                    list-style-type: disc;
                }
                
                .blog-content .ProseMirror ol {
                    list-style-type: decimal;
                }
                
                .blog-content .ProseMirror li {
                    margin: 0.5rem 0;
                    color: #475569;
                    line-height: 1.75;
                }
                
                .blog-content .ProseMirror blockquote {
                    border-left: 4px solid #06b6d4;
                    background-color: #f8fafc;
                    padding: 1rem 1.5rem;
                    margin: 1.5rem 0;
                    border-radius: 0 0.5rem 0.5rem 0;
                    font-style: normal;
                    color: #475569;
                }
                
                .blog-content .ProseMirror code {
                    background-color: #f1f5f9;
                    color: #e11d48;
                    padding: 0.125rem 0.375rem;
                    border-radius: 0.25rem;
                    font-size: 0.875em;
                    font-family: 'Courier New', monospace;
                }
                
                .blog-content .ProseMirror pre {
                    background-color: #1e293b;
                    color: #e2e8f0;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    overflow-x: auto;
                    margin: 1.5rem 0;
                }
                
                .blog-content .ProseMirror pre code {
                    background-color: transparent;
                    color: inherit;
                    padding: 0;
                }
                
                .blog-content .ProseMirror a {
                    color: #06b6d4;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .blog-content .ProseMirror a:hover {
                    color: #0891b2;
                    text-decoration: underline;
                }
                
                .blog-content .ProseMirror img {
                    border-radius: 1rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    margin: 2rem 0;
                    max-width: 100%;
                    height: auto;
                }
                
                .blog-content .ProseMirror table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 1.5rem 0;
                    border: 1px solid #cbd5e1;
                }
                
                .blog-content .ProseMirror table th {
                    background-color: #f8fafc;
                    border: 1px solid #cbd5e1;
                    padding: 0.75rem 1rem;
                    text-align: left;
                    font-weight: 600;
                    color: #0f172a;
                }
                
                .blog-content .ProseMirror table td {
                    border: 1px solid #cbd5e1;
                    padding: 0.75rem 1rem;
                    color: #475569;
                }
                
                .blog-content .ProseMirror table tr:nth-child(even) {
                    background-color: #f8fafc;
                }
                
                .blog-content .ProseMirror hr {
                    border: none;
                    border-top: 2px solid #e2e8f0;
                    margin: 2rem 0;
                }
            `}</style>
            <EditorContent editor={editor} />
        </div>
    );
};

export default BlogContentRenderer;

