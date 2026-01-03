import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Image } from '@tiptap/extension-image';
import { Link } from '@tiptap/extension-link';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import { TextAlign } from '@tiptap/extension-text-align';
import { Underline } from '@tiptap/extension-underline';
import { useEffect, useState } from 'react';
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    List,
    ListOrdered,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Quote,
    Link as LinkIcon,
    Image as ImageIcon,
    Table as TableIcon,
    Undo,
    Redo,
    Trash2,
    Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const RichTextEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => {
    const [showTableMenu, setShowTableMenu] = useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Image.configure({
                inline: true,
                allowBase64: true,
                HTMLAttributes: {
                    class: 'max-w-full h-auto rounded-lg',
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-cyan-600 underline',
                },
            }),
            Table.configure({
                resizable: false,
                HTMLAttributes: {
                    class: 'border-collapse my-4 w-full',
                },
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-slate max-w-none focus:outline-none',
                'data-placeholder': placeholder || 'Start writing...',
            },
        },
    });

    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value);
        }
    }, [value, editor]);

    useEffect(() => {
        if (!editor) return;

        const updateTableMenu = () => {
            const { selection } = editor.state;
            const { $anchor } = selection;
            let node = $anchor.node();
            let depth = $anchor.depth;

            // Check if we're inside a table
            while (depth > 0 && node.type.name !== 'table') {
                depth--;
                node = $anchor.node(depth);
            }

            setShowTableMenu(node.type.name === 'table');
        };

        editor.on('selectionUpdate', updateTableMenu);
        editor.on('update', updateTableMenu);

        return () => {
            editor.off('selectionUpdate', updateTableMenu);
            editor.off('update', updateTableMenu);
        };
    }, [editor]);

    if (!editor) {
        return <div className="border rounded-lg p-4 min-h-[400px]">Loading editor...</div>;
    }

    const addImage = () => {
        const url = window.prompt('Enter image URL:');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    const addLink = () => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('Enter URL:', previousUrl);

        if (url === null) {
            return;
        }

        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    const insertTable = () => {
        const rowsInput = window.prompt('Number of rows (1-10):', '3');
        const colsInput = window.prompt('Number of columns (1-10):', '3');
        
        if (rowsInput && colsInput) {
            const rows = Math.min(Math.max(parseInt(rowsInput) || 3, 1), 10);
            const cols = Math.min(Math.max(parseInt(colsInput) || 3, 1), 10);
            editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
        }
    };

    const isInTable = editor.can().deleteTable();

    return (
        <div className="border rounded-lg bg-white overflow-hidden flex flex-col" style={{ maxHeight: 'calc(100vh - 200px)' }}>
            <style>{`
                .ProseMirror {
                    min-height: 400px;
                    padding: 1rem;
                    outline: none;
                    overflow-y: auto;
                    flex: 1;
                }
                .ProseMirror p.is-editor-empty:first-child::before {
                    color: #adb5bd;
                    content: attr(data-placeholder);
                    float: left;
                    height: 0;
                    pointer-events: none;
                }
                .ProseMirror h1 {
                    font-size: 2em;
                    font-weight: bold;
                    margin-top: 1em;
                    margin-bottom: 0.5em;
                }
                .ProseMirror h2 {
                    font-size: 1.5em;
                    font-weight: bold;
                    margin-top: 1em;
                    margin-bottom: 0.5em;
                }
                .ProseMirror h3 {
                    font-size: 1.25em;
                    font-weight: bold;
                    margin-top: 1em;
                    margin-bottom: 0.5em;
                }
                .ProseMirror p {
                    margin: 0.5em 0;
                }
                .ProseMirror ul, .ProseMirror ol {
                    padding-left: 1.5em;
                    margin: 0.5em 0;
                }
                .ProseMirror blockquote {
                    border-left: 3px solid #06b6d4;
                    padding-left: 1em;
                    margin: 1em 0;
                    font-style: italic;
                }
                .ProseMirror table {
                    border-collapse: collapse;
                    margin: 1.5em 0;
                    width: 100%;
                    border: 1px solid #e2e8f0;
                    background-color: white;
                }
                .ProseMirror table td,
                .ProseMirror table th {
                    border: 1px solid #e2e8f0;
                    padding: 0.75rem 1rem;
                    text-align: left;
                    background-color: white;
                    min-width: 100px;
                }
                .ProseMirror table th {
                    background-color: white;
                    font-weight: 600;
                    color: #1e293b;
                }
                .ProseMirror table tr {
                    border-bottom: 1px solid #e2e8f0;
                }
                .ProseMirror table tbody tr:last-child {
                    border-bottom: none;
                }
                .ProseMirror img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0.5rem;
                }
                .ProseMirror a {
                    color: #06b6d4;
                    text-decoration: underline;
                }
            `}</style>
            {/* Sticky Toolbar */}
            <div className="sticky top-0 z-10 border-b p-2 flex flex-wrap items-center gap-1 bg-white shadow-sm">
                {/* Text Style */}
                <select
                    className="px-2 py-1 text-sm border rounded bg-white"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === 'paragraph') {
                            editor.chain().focus().setParagraph().run();
                        } else if (value === 'h1') {
                            editor.chain().focus().toggleHeading({ level: 1 }).run();
                        } else if (value === 'h2') {
                            editor.chain().focus().toggleHeading({ level: 2 }).run();
                        } else if (value === 'h3') {
                            editor.chain().focus().toggleHeading({ level: 3 }).run();
                        }
                    }}
                >
                    <option value="paragraph">Normal</option>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                </select>

                <Separator orientation="vertical" className="h-6 mx-1" />

                {/* Text Formatting */}
                <Button
                    type="button"
                    variant={editor.isActive('bold') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className="h-8 w-8 p-0"
                >
                    <Bold className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant={editor.isActive('italic') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className="h-8 w-8 p-0"
                >
                    <Italic className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant={editor.isActive('underline') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className="h-8 w-8 p-0"
                >
                    <UnderlineIcon className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant={editor.isActive('strike') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className="h-8 w-8 p-0"
                >
                    <Strikethrough className="h-4 w-4" />
                </Button>

                <Separator orientation="vertical" className="h-6 mx-1" />

                {/* Lists */}
                <Button
                    type="button"
                    variant={editor.isActive('bulletList') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className="h-8 w-8 p-0"
                >
                    <List className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant={editor.isActive('orderedList') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className="h-8 w-8 p-0"
                >
                    <ListOrdered className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant={editor.isActive('blockquote') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className="h-8 w-8 p-0"
                >
                    <Quote className="h-4 w-4" />
                </Button>

                <Separator orientation="vertical" className="h-6 mx-1" />

                {/* Alignment */}
                <Button
                    type="button"
                    variant={editor.isActive({ textAlign: 'left' }) ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className="h-8 w-8 p-0"
                >
                    <AlignLeft className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant={editor.isActive({ textAlign: 'center' }) ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className="h-8 w-8 p-0"
                >
                    <AlignCenter className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant={editor.isActive({ textAlign: 'right' }) ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className="h-8 w-8 p-0"
                >
                    <AlignRight className="h-4 w-4" />
                </Button>

                <Separator orientation="vertical" className="h-6 mx-1" />

                {/* Links and Media */}
                <Button
                    type="button"
                    variant={editor.isActive('link') ? 'default' : 'ghost'}
                    size="sm"
                    onClick={addLink}
                    className="h-8 w-8 p-0"
                >
                    <LinkIcon className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={addImage}
                    className="h-8 w-8 p-0"
                >
                    <ImageIcon className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant={isInTable ? 'default' : 'ghost'}
                    size="sm"
                    onClick={insertTable}
                    className="h-8 w-8 p-0"
                >
                    <TableIcon className="h-4 w-4" />
                </Button>

                <Separator orientation="vertical" className="h-6 mx-1" />

                {/* Undo/Redo */}
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    className="h-8 w-8 p-0"
                >
                    <Undo className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    className="h-8 w-8 p-0"
                >
                    <Redo className="h-4 w-4" />
                </Button>

                {/* Table Controls - Show when in table */}
                {isInTable && (
                    <>
                        <Separator orientation="vertical" className="h-6 mx-1" />
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => editor.chain().focus().addColumnBefore().run()}
                            className="h-8 px-2 text-xs"
                            title="Add column before"
                        >
                            <Plus className="h-3 w-3 mr-1" />
                            Col
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => editor.chain().focus().addRowBefore().run()}
                            className="h-8 px-2 text-xs"
                            title="Add row before"
                        >
                            <Plus className="h-3 w-3 mr-1" />
                            Row
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => editor.chain().focus().deleteColumn().run()}
                            className="h-8 px-2 text-xs"
                            title="Delete column"
                        >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Col
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => editor.chain().focus().deleteRow().run()}
                            className="h-8 px-2 text-xs"
                            title="Delete row"
                        >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Row
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => editor.chain().focus().deleteTable().run()}
                            className="h-8 px-2 text-xs text-red-600 hover:text-red-700"
                            title="Delete table"
                        >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Table
                        </Button>
                    </>
                )}
            </div>

            {/* Editor Content */}
            <div className="flex-1 overflow-auto">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
};

export default RichTextEditor;
