import blogData from "../blogData";
import Link from "next/link";
import { listProduk } from "@/public/data";

export default function BlogDetailPage({ params }) {
  const slug = params.slug;
  const post = blogData.find((item) => item.slug === slug);
  const produkList = listProduk.slice(0, 5); // ✅ ambil 5 produk

  if (!post) return <div>Artikel tidak ditemukan</div>;

  const otherPosts = blogData.filter((item) => item.slug !== slug).slice(0, 8);

  return (
    <div className="mt-20 mb-10 max-w-7xl mx-auto px-4 pt-10 flex flex-col lg:flex-row gap-10">
      {/* Konten utama */}
      <article className="flex-1 space-y-6">
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">{post.title}</h1>
          <p className="text-sm text-gray-500 mt-2">{post.date}</p>
        </header>

        <img src={post.image} alt={post.title} className="w-full rounded-lg shadow-md max-h-[450px] object-cover" />

        <div className="prose lg:prose-lg prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Sidebar kanan */}
      <aside className="w-full lg:w-72 shrink-0 border-l pl-6 mt-10 lg:mt-0">
        {/* Artikel lainnya */}
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Artikel Lainnya</h2>
        <div className="space-y-4">
          {otherPosts.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="flex gap-3 items-start hover:opacity-80">
              <img src={item.image} alt={item.title} className="w-20 h-14 object-cover rounded" />
              <div>
                <p className="text-sm font-medium leading-tight">{item.title}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Produk kami */}
        <h2 className="text-lg font-semibold mt-8 pt-4 border-t border-gray-200 mb-3">Produk Kami</h2>
        <div className="space-y-4">
          {produkList.map((produk) => (
            <Link key={produk.slug} href={`/produk/${produk.slug}`} className="flex gap-3 items-center hover:opacity-80 bg-transparent hover:bg-zinc-300 rounded-2xl">
              <img src={produk.image} alt={produk.title} className="w-16 h-16 object-cover rounded" />
              <p className="text-sm font-medium leading-tight">{produk.title}</p>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}
