/* eslint-disable @next/next/no-img-element */
import blogData from "../blogData";
import Link from "next/link";
import { listProduk } from "@/public/data";

export default function BlogDetailPage({ params }) {
  const slug = params.slug;
  const post = blogData.find((item) => item.slug === slug);
  const produkList = listProduk.slice(0, 5); 

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center font-bold text-slate-400">
      Artikel tidak ditemukan
    </div>
  );

  const otherPosts = blogData.filter((item) => item.slug !== slug).slice(0, 8);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* HEADER SECTION - Hero style for Article */}
      <div className="bg-slate-50 pt-32 pb-16 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/#blog" className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-6 block hover:opacity-70 transition">
            ← Back to Knowledge Hub
          </Link>
          <h1 className="text-3xl md:text-5xl font-[1000] text-slate-900 leading-[1.1] tracking-tighter mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
             <time dateTime={post.date}>{post.date}</time>
             <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
             <span>PT. SBTS Editorial</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 flex flex-col lg:flex-row gap-16">
        
        {/* KONTEN UTAMA - SEO Semantic Article */}
        <article className="flex-1 min-w-0">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
            <img 
              src={post.image} 
              alt={`Ilustrasi Industri: ${post.title}`} 
              className="w-full object-cover max-h-[550px]" 
            />
          </div>

          {/* Body Content dengan Prose Typography yang lebih cantik */}
          <div 
            className="prose prose-slate lg:prose-xl max-w-none 
              prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-strong:text-blue-600 prose-strong:font-black
              prose-img:rounded-3xl prose-img:shadow-lg
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* Social/Call to Action simple di bawah artikel */}
          <div className="mt-16 p-8 bg-blue-50 rounded-[2rem] border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-blue-900 font-bold">Butuh konsultasi material untuk proyek Anda?</p>
            <Link href="/kontak" className="bg-blue-600 text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-blue-200">
               Hubungi Kami Sekarang
            </Link>
          </div>
        </article>

        {/* SIDEBAR - Sticky for Desktop */}
        <aside className="w-full lg:w-80 shrink-0 space-y-12">
          
          {/* ARTIKEL LAINNYA */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-6 w-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest">Recommended</h2>
            </div>
            <div className="space-y-6">
              {otherPosts.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="group flex gap-4 items-start">
                  <div className="w-20 h-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100 border border-slate-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 leading-tight line-clamp-2 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-tighter">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* PRODUK TERKAIT - Glassmorphism style */}
          <div className="sticky top-28">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
               {/* Decorative Glow */}
               <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 blur-[60px]"></div>
               
               <div className="relative z-10">
                 <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-blue-400">Our Catalog</h2>
                 <div className="space-y-5">
                   {produkList.map((produk) => (
                     <Link key={produk.slug} href={`/produk/${produk.slug}`} className="flex gap-4 items-center group">
                       <div className="w-14 h-14 bg-white/10 rounded-xl overflow-hidden backdrop-blur-md border border-white/10 p-1">
                          <img src={produk.image} alt={produk.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                       </div>
                       <p className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors leading-snug">
                         {produk.title}
                       </p>
                     </Link>
                   ))}
                 </div>
                 
                 <Link href="/#produk" className="mt-8 block text-center py-4 border border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all">
                    View All Products
                 </Link>
               </div>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}