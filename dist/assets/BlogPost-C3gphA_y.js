import{j as e}from"./ui-BLUv2tW2.js";import{a as d,L as w,k as y,i as N}from"./vendor-f9TeDfvc.js";import{c as f,s as v}from"./index-DJcS8j5y.js";import{H as P,F as k}from"./Footer-ewZu9c21.js";import{S as M}from"./SEO-DlUJR7DI.js";import{B as p}from"./button-BMVttRVi.js";import{C as E,a as L}from"./card-CnFkVFlP.js";import{C as j}from"./calendar-CQwZGJE4.js";import{C}from"./chevron-right-7kvYIF5I.js";import{u as S,i as T,I as z,L as A,T as I,a as R,b as _,c as H,d as $}from"./index-DEEtGEvU.js";import{a as u}from"./founder-jafer-ali-CxbxKcUn.js";import{L as q}from"./loader-circle-Fum6eH1W.js";import{T as B}from"./tag-Bb_yDU-r.js";import{C as F}from"./clock-JXF8i4cm.js";import"./utils-73O3M1Kq.js";import"./menu-l2mNQz2_.js";import"./check-CpBXVeWG.js";import"./charts-fEMqUGwj.js";const J=f("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);const O=f("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);const D=f("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),U=()=>{const[s,n]=d.useState(0);return d.useEffect(()=>{const t=()=>{const i=window.scrollY,l=document.body.scrollHeight-window.innerHeight;l&&n(Number((i/l).toFixed(2))*100)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),e.jsx("div",{className:"fixed top-0 left-0 w-full h-1 z-50 bg-slate-100",children:e.jsx("div",{className:"h-full bg-cyan-500 transition-all duration-150 ease-out",style:{width:`${s}%`}})})},V=({currentSlug:s,tags:n})=>{const[t,i]=d.useState([]),[l,h]=d.useState(!0);d.useEffect(()=>{c()},[s,n]);const c=async()=>{try{let a=v.from("posts").select("*").neq("slug",s||"").order("created_at",{ascending:!1}).limit(3);const{data:g,error:x}=await a;if(x)throw x;const r=(g||[]).map((o,m)=>({...o,author:"Jafer Ali",readTime:"5 min read",color:m%2===0?"from-cyan-400 to-blue-400":"from-purple-400 to-pink-400",date:new Date(o.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}));i(r)}catch(a){console.error("Error fetching related posts:",a)}finally{h(!1)}};return l||t.length===0?null:e.jsxs("div",{className:"mt-16 pt-16 border-t border-slate-200",children:[e.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-8",children:"Related Articles"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:t.map((a,g)=>e.jsxs(E,{className:"border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group",children:[e.jsxs("div",{className:"relative h-40 overflow-hidden",children:[a.featured_image?e.jsx("img",{src:a.featured_image,alt:a.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"}):e.jsx("div",{className:`w-full h-full bg-gradient-to-br ${a.color}`}),e.jsx("div",{className:"absolute top-3 left-3",children:e.jsx("span",{className:"inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-cyan-600 text-xs font-bold uppercase tracking-wider shadow-lg",children:a.category})})]}),e.jsxs(L,{className:"p-5",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2 text-xs text-slate-400",children:[e.jsx(j,{className:"h-3 w-3"}),e.jsx("span",{children:a.date})]}),e.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2",children:a.title}),e.jsxs(w,{to:`/blogs/${a.slug}`,className:"inline-flex items-center gap-1 text-cyan-600 text-sm font-semibold group-hover:gap-2 transition-all cursor-pointer mt-2",children:["Read ",e.jsx(C,{className:"h-4 w-4"})]})]})]},g))})]})},Y=({content:s,onTOCUpdate:n})=>{const t=S({extensions:[T.configure({heading:{levels:[1,2,3,4]}}),z.configure({inline:!0,allowBase64:!0,HTMLAttributes:{class:"rounded-2xl shadow-lg my-8 max-w-full h-auto"}}),A.configure({openOnClick:!1,HTMLAttributes:{class:"text-cyan-600 no-underline hover:text-cyan-500 hover:underline transition-colors"}}),I.configure({resizable:!0,HTMLAttributes:{class:"border-collapse border border-slate-300 my-6 w-full"}}),R.configure({HTMLAttributes:{class:"border border-slate-300"}}),_.configure({HTMLAttributes:{class:"border border-slate-300 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-900"}}),H.configure({HTMLAttributes:{class:"border border-slate-300 px-4 py-3 text-slate-700"}})],content:s,editable:!1,editorProps:{attributes:{class:"prose prose-lg md:prose-xl prose-slate max-w-none focus:outline-none"}}});return d.useEffect(()=>{t&&s&&t.commands.setContent(s)},[t,s]),d.useEffect(()=>{if(t&&n){const i=()=>{const l=[],h=t.state.doc,c=new Set;h.descendants((a,g)=>{if(a.type.name==="heading"){const x=a.attrs.level,r=a.textContent;if(r){let o=r.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),m=o||`heading-${g}`,b=1;for(;c.has(m);)m=`${o}-${b}`,b++;c.add(m),l.push({id:m,text:r,level:x})}}}),setTimeout(()=>{t.view.dom.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((x,r)=>{r<l.length&&(x.id=l[r].id)})},100),n(l)};return t.on("update",i),i(),()=>{t.off("update",i)}}},[t,n]),t?e.jsxs("div",{className:"blog-content",children:[e.jsx("style",{children:`
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
            `}),e.jsx($,{editor:t})]}):null},G=(s,n={})=>{if(!s)return"/placeholder.svg";if(!s.includes("supabase"))return s;const{width:t=800,quality:i=85,format:l="webp"}=n,h=s.includes("?")?"&":"?",c=new URLSearchParams;return t&&c.append("width",t.toString()),i&&c.append("quality",i.toString()),l&&c.append("format",l),`${s}${h}${c.toString()}`},xe=()=>{const{slug:s}=y(),n=N(),[t,i]=d.useState(null),[l,h]=d.useState(!0),[c,a]=d.useState([]);d.useEffect(()=>{s&&g(s)},[s]);const g=async r=>{try{const{data:o,error:m}=await v.from("posts").select("*").eq("slug",r).single();if(m)throw m;if(!o){n("/404");return}i(o)}catch(o){console.error("Error fetching post:",o),n("/404")}finally{h(!1)}},x=r=>{const o=document.getElementById(r);o&&o.scrollIntoView({behavior:"smooth",block:"start"})};return l?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50",children:e.jsx(q,{className:"w-10 h-10 animate-spin text-cyan-600"})}):t?e.jsxs("div",{className:"min-h-screen bg-slate-50 font-sans selection:bg-cyan-500/20",children:[e.jsx(U,{}),e.jsx(M,{title:`${t.meta_title||t.title} | Intel ERP Flow Blog`,description:t.meta_description||t.excerpt,canonicalUrl:`https://www.aierppartners.com/blogs/${t.slug}`,ogImage:t.featured_image,ogType:"article",schema:{"@context":"https://schema.org","@type":"BlogPosting",headline:t.title,image:t.featured_image?[t.featured_image]:[],datePublished:t.created_at,author:{"@type":"Person",name:"Jafer Ali"},publisher:{"@type":"Organization",name:"AIERP Partners",logo:{"@type":"ImageObject",url:"https://www.aierppartners.com/logo.png"}},description:t.excerpt}}),e.jsx(P,{}),e.jsxs("main",{children:[e.jsxs("div",{className:"relative w-full bg-slate-900 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900"}),t.featured_image&&e.jsx("div",{className:"absolute inset-0",children:e.jsx("img",{src:G(t.featured_image,{width:1920,quality:80}),alt:t.image_alt||t.title,className:"w-full h-full object-cover opacity-50",loading:"eager",onError:r=>{r.target.style.display="none"}})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"}),e.jsx("div",{className:"relative z-10 pt-24 md:pt-32 pb-12 md:pb-16",children:e.jsx("div",{className:"container mx-auto px-4 max-w-5xl text-center",children:e.jsxs("div",{className:"space-y-5 sm:space-y-6",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700",children:[e.jsx(B,{className:"w-3 h-3"})," ",t.category||"Insight"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 px-4",children:t.title}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 text-slate-200 text-xs sm:text-sm md:text-base animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 pt-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:u,alt:"Jafer Ali",className:"w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white/20 object-cover shadow-lg"}),e.jsx("span",{className:"font-medium text-white whitespace-nowrap",children:"Jafer Ali"})]}),e.jsx("div",{className:"w-1 h-1 rounded-full bg-slate-400 flex-shrink-0"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 flex-shrink-0"}),e.jsx("span",{className:"whitespace-nowrap",children:new Date(t.created_at).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]}),e.jsx("div",{className:"w-1 h-1 rounded-full bg-slate-400 flex-shrink-0"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(F,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 flex-shrink-0"}),e.jsx("span",{className:"whitespace-nowrap",children:"5 min read"})]})]})]})})})]}),e.jsx("div",{className:"container mx-auto px-4 max-w-[1400px] -mt-8 relative z-20 pb-24",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[e.jsx("aside",{className:"lg:col-span-3 hidden lg:block sticky top-32 self-start max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-2",children:e.jsx("div",{className:"space-y-8",children:c.length>0&&e.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-slate-100",children:[e.jsx("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2",children:"On this page"}),e.jsxs("nav",{className:"space-y-1 relative",children:[e.jsx("div",{className:"absolute left-0 top-2 bottom-2 w-0.5 bg-slate-100 rounded-full"}),c.map(r=>e.jsx("button",{onClick:()=>x(r.id),className:`block w-full text-left text-sm py-1.5 pl-4 border-l-2 -ml-[1px] transition-all duration-200 ${r.level===3?"pl-8 text-slate-400 border-transparent":"text-slate-600 font-medium border-transparent hover:border-slate-300 hover:text-slate-900"}`,children:r.text},r.id))]})]})})}),e.jsxs("article",{className:"lg:col-span-9 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100",children:[t.excerpt&&e.jsx("p",{className:"text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 font-light border-l-4 border-cyan-500 pl-6 italic",children:t.excerpt}),e.jsx(Y,{content:t.content||"",onTOCUpdate:r=>{a(r.map(o=>({id:o.id,text:o.text,level:o.level})))}}),e.jsx("div",{className:"mt-16 pt-8 border-t border-slate-100",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-slate-500 font-medium",children:"Tags:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags&&t.tags.length>0?t.tags.map(r=>e.jsx(w,{to:`/blog?tag=${encodeURIComponent(r)}`,className:"px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer",children:r},r)):e.jsx("span",{className:"px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer",children:t.category})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-slate-500 text-sm",children:"Share:"}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(p,{variant:"ghost",size:"icon",className:"h-8 w-8 text-slate-400 hover:text-blue-600 hover:bg-blue-50",children:e.jsx(J,{className:"w-4 h-4"})}),e.jsx(p,{variant:"ghost",size:"icon",className:"h-8 w-8 text-slate-400 hover:text-sky-500 hover:bg-sky-50",children:e.jsx(D,{className:"w-4 h-4"})}),e.jsx(p,{variant:"ghost",size:"icon",className:"h-8 w-8 text-slate-400 hover:text-blue-700 hover:bg-blue-50",children:e.jsx(O,{className:"w-4 h-4"})})]})]})]})}),e.jsx("div",{className:"mt-12",children:e.jsx(V,{currentSlug:t.slug,tags:t.tags})}),e.jsxs("div",{className:"mt-12 bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left",children:[e.jsx("img",{src:u,alt:"Jafer Ali",className:"w-20 h-20 rounded-full border-4 border-white shadow-md flex-shrink-0 object-cover"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-bold text-slate-900 text-lg mb-1",children:"Jafer Ali"}),e.jsx("p",{className:"text-sm text-cyan-600 font-medium mb-3",children:"ERP & AI Specialist"}),e.jsx("p",{className:"text-slate-600 leading-relaxed mb-4",children:"Helping enterprises navigate the complex landscape of digital transformation and AI integration."}),e.jsx(p,{variant:"outline",size:"sm",className:"rounded-full text-xs border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-200",children:"View Profile"})]})]})]})]})})]}),e.jsx(k,{})]}):null};export{xe as default};
