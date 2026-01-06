import{c as o,a as j}from"./index-DJcS8j5y.js";import{j as e,W as y}from"./ui-BLUv2tW2.js";import{E as M,u as A,i as N,U as T,I as z,L as C,T as H,a as L,b as P,c as R,d as I}from"./index-DEEtGEvU.js";import{a as u}from"./vendor-f9TeDfvc.js";import{B as a}from"./button-BMVttRVi.js";import{Q as S}from"./quote-C6_0uM4C.js";import{I as U}from"./image-BGWR62d-.js";import{P as b}from"./plus-CHyRnLNe.js";import{T as x}from"./trash-2-Bjhfi4SH.js";const q=o("AlignCenter",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);const E=o("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);const B=o("AlignRight",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);const oe=o("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const $=o("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);const O=o("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);const V=o("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);const D=o("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);const Q=o("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);const F=o("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);const re=o("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);const G=o("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);const K=o("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);const W=o("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);const _=o("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);var J=M.create({name:"textAlign",addOptions(){return{types:[],alignments:["left","center","right","justify"],defaultAlignment:null}},addGlobalAttributes(){return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:s=>{const i=s.style.textAlign;return this.options.alignments.includes(i)?i:this.options.defaultAlignment},renderHTML:s=>s.textAlign?{style:`text-align: ${s.textAlign}`}:{}}}}]},addCommands(){return{setTextAlign:s=>({commands:i})=>this.options.alignments.includes(s)?this.options.types.map(l=>i.updateAttributes(l,{textAlign:s})).some(l=>l):!1,unsetTextAlign:()=>({commands:s})=>this.options.types.map(i=>s.resetAttributes(i,"textAlign")).some(i=>i),toggleTextAlign:s=>({editor:i,commands:l})=>this.options.alignments.includes(s)?i.isActive({textAlign:s})?l.unsetTextAlign():l.setTextAlign(s):!1}},addKeyboardShortcuts(){return{"Mod-Shift-l":()=>this.editor.commands.setTextAlign("left"),"Mod-Shift-e":()=>this.editor.commands.setTextAlign("center"),"Mod-Shift-r":()=>this.editor.commands.setTextAlign("right"),"Mod-Shift-j":()=>this.editor.commands.setTextAlign("justify")}}});const c=u.forwardRef(({className:s,orientation:i="horizontal",decorative:l=!0,...g},m)=>e.jsx(y,{ref:m,decorative:l,orientation:i,className:j("shrink-0 bg-border",i==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",s),...g}));c.displayName=y.displayName;const le=({value:s,onChange:i,placeholder:l})=>{const[g,m]=u.useState(!1),t=A({extensions:[N.configure({heading:{levels:[1,2,3]}}),T,J.configure({types:["heading","paragraph"]}),z.configure({inline:!0,allowBase64:!0,HTMLAttributes:{class:"max-w-full h-auto rounded-lg"}}),C.configure({openOnClick:!1,HTMLAttributes:{class:"text-cyan-600 underline"}}),H.configure({resizable:!1,HTMLAttributes:{class:"border-collapse my-4 w-full"}}),L,P,R],content:s,onUpdate:({editor:n})=>{i(n.getHTML())},editorProps:{attributes:{class:"prose prose-slate max-w-none focus:outline-none","data-placeholder":l||"Start writing..."}}});if(u.useEffect(()=>{t&&s!==t.getHTML()&&t.commands.setContent(s)},[s,t]),u.useEffect(()=>{if(!t)return;const n=()=>{const{selection:r}=t.state,{$anchor:h}=r;let d=h.node(),p=h.depth;for(;p>0&&d.type.name!=="table";)p--,d=h.node(p);m(d.type.name==="table")};return t.on("selectionUpdate",n),t.on("update",n),()=>{t.off("selectionUpdate",n),t.off("update",n)}},[t]),!t)return e.jsx("div",{className:"border rounded-lg p-4 min-h-[400px]",children:"Loading editor..."});const k=()=>{const n=window.prompt("Enter image URL:");n&&t.chain().focus().setImage({src:n}).run()},w=()=>{const n=t.getAttributes("link").href,r=window.prompt("Enter URL:",n);if(r!==null){if(r===""){t.chain().focus().extendMarkRange("link").unsetLink().run();return}t.chain().focus().extendMarkRange("link").setLink({href:r}).run()}},v=()=>{const n=window.prompt("Number of rows (1-10):","3"),r=window.prompt("Number of columns (1-10):","3");if(n&&r){const h=Math.min(Math.max(parseInt(n)||3,1),10),d=Math.min(Math.max(parseInt(r)||3,1),10);t.chain().focus().insertTable({rows:h,cols:d,withHeaderRow:!0}).run()}},f=t.can().deleteTable();return e.jsxs("div",{className:"border rounded-lg bg-white overflow-hidden flex flex-col",style:{maxHeight:"calc(100vh - 200px)"},children:[e.jsx("style",{children:`
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
            `}),e.jsxs("div",{className:"sticky top-0 z-10 border-b p-2 flex flex-wrap items-center gap-1 bg-white shadow-sm",children:[e.jsxs("select",{className:"px-2 py-1 text-sm border rounded bg-white",onChange:n=>{const r=n.target.value;r==="paragraph"?t.chain().focus().setParagraph().run():r==="h1"?t.chain().focus().toggleHeading({level:1}).run():r==="h2"?t.chain().focus().toggleHeading({level:2}).run():r==="h3"&&t.chain().focus().toggleHeading({level:3}).run()},children:[e.jsx("option",{value:"paragraph",children:"Normal"}),e.jsx("option",{value:"h1",children:"Heading 1"}),e.jsx("option",{value:"h2",children:"Heading 2"}),e.jsx("option",{value:"h3",children:"Heading 3"})]}),e.jsx(c,{orientation:"vertical",className:"h-6 mx-1"}),e.jsx(a,{type:"button",variant:t.isActive("bold")?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().toggleBold().run(),className:"h-8 w-8 p-0",children:e.jsx($,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:t.isActive("italic")?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().toggleItalic().run(),className:"h-8 w-8 p-0",children:e.jsx(O,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:t.isActive("underline")?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().toggleUnderline().run(),className:"h-8 w-8 p-0",children:e.jsx(W,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:t.isActive("strike")?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().toggleStrike().run(),className:"h-8 w-8 p-0",children:e.jsx(G,{className:"h-4 w-4"})}),e.jsx(c,{orientation:"vertical",className:"h-6 mx-1"}),e.jsx(a,{type:"button",variant:t.isActive("bulletList")?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().toggleBulletList().run(),className:"h-8 w-8 p-0",children:e.jsx(Q,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:t.isActive("orderedList")?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().toggleOrderedList().run(),className:"h-8 w-8 p-0",children:e.jsx(D,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:t.isActive("blockquote")?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().toggleBlockquote().run(),className:"h-8 w-8 p-0",children:e.jsx(S,{className:"h-4 w-4"})}),e.jsx(c,{orientation:"vertical",className:"h-6 mx-1"}),e.jsx(a,{type:"button",variant:t.isActive({textAlign:"left"})?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().setTextAlign("left").run(),className:"h-8 w-8 p-0",children:e.jsx(E,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:t.isActive({textAlign:"center"})?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().setTextAlign("center").run(),className:"h-8 w-8 p-0",children:e.jsx(q,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:t.isActive({textAlign:"right"})?"default":"ghost",size:"sm",onClick:()=>t.chain().focus().setTextAlign("right").run(),className:"h-8 w-8 p-0",children:e.jsx(B,{className:"h-4 w-4"})}),e.jsx(c,{orientation:"vertical",className:"h-6 mx-1"}),e.jsx(a,{type:"button",variant:t.isActive("link")?"default":"ghost",size:"sm",onClick:w,className:"h-8 w-8 p-0",children:e.jsx(V,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:k,className:"h-8 w-8 p-0",children:e.jsx(U,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:f?"default":"ghost",size:"sm",onClick:v,className:"h-8 w-8 p-0",children:e.jsx(K,{className:"h-4 w-4"})}),e.jsx(c,{orientation:"vertical",className:"h-6 mx-1"}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>t.chain().focus().undo().run(),disabled:!t.can().undo(),className:"h-8 w-8 p-0",children:e.jsx(_,{className:"h-4 w-4"})}),e.jsx(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>t.chain().focus().redo().run(),disabled:!t.can().redo(),className:"h-8 w-8 p-0",children:e.jsx(F,{className:"h-4 w-4"})}),f&&e.jsxs(e.Fragment,{children:[e.jsx(c,{orientation:"vertical",className:"h-6 mx-1"}),e.jsxs(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>t.chain().focus().addColumnBefore().run(),className:"h-8 px-2 text-xs",title:"Add column before",children:[e.jsx(b,{className:"h-3 w-3 mr-1"}),"Col"]}),e.jsxs(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>t.chain().focus().addRowBefore().run(),className:"h-8 px-2 text-xs",title:"Add row before",children:[e.jsx(b,{className:"h-3 w-3 mr-1"}),"Row"]}),e.jsxs(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>t.chain().focus().deleteColumn().run(),className:"h-8 px-2 text-xs",title:"Delete column",children:[e.jsx(x,{className:"h-3 w-3 mr-1"}),"Col"]}),e.jsxs(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>t.chain().focus().deleteRow().run(),className:"h-8 px-2 text-xs",title:"Delete row",children:[e.jsx(x,{className:"h-3 w-3 mr-1"}),"Row"]}),e.jsxs(a,{type:"button",variant:"ghost",size:"sm",onClick:()=>t.chain().focus().deleteTable().run(),className:"h-8 px-2 text-xs text-red-600 hover:text-red-700",title:"Delete table",children:[e.jsx(x,{className:"h-3 w-3 mr-1"}),"Table"]})]})]}),e.jsx("div",{className:"flex-1 overflow-auto",children:e.jsx(I,{editor:t})})]})};export{oe as A,le as R,re as S};
