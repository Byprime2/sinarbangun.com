import { listProduk } from "@/public/data";
import ProductDetailClient from "@/app/component/ProductDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return listProduk.map((produk) => ({ slug: produk.slug }));
}

// VERSI OPTIMASI SEO (Meta Data untuk Google & Media Sosial)
export function generateMetadata({ params }) {
  const produk = listProduk.find((item) => item.slug === params.slug);
  if (!produk) return { title: "Produk Tidak Ditemukan - PT. SBTS" };

  const seoTitle = `Jual ${produk.title} Harga Terbaru 2026 | PT. Sinar Bangun Tata Semesta`;
  const seoDescription = `Distributor resmi ${produk.title} berkualitas. Kami melayani pengiriman ke seluruh Indonesia dengan harga kompetitif. ${produk.deskripsi?.substring(0, 100)}... Cek stok hari ini!`;

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://www.sinarbangun.com/produk/${produk.slug}`,
      siteName: "Sinar Bangun Tata Semesta",
      images: [
        {
          url: produk.images?.[0] || produk.image,
          width: 1200,
          height: 630,
          alt: `Jual ${produk.title} - PT Sinar Bangun`,
        },
      ],
      type: "article",
    },
    keywords: `${produk.title}, supplier ${produk.title}, harga plat besi 2026, distributor besi baja jakarta, ${produk.merk}, material konstruksi murah`,
  };
}

export default function ProdukDetail({ params }) {
  const produk = listProduk.find((item) => item.slug === params.slug);
  if (!produk) return notFound();

  // --- KODE JSON-LD (STRUKTUR DATA UNTUK GOOGLE) ---
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": produk.title,
    "image": [produk.images?.[0] || produk.image],
    "description": produk.deskripsi,
    "sku": `SBTS-${produk.slug.toUpperCase()}`,
    "brand": {
      "@type": "Brand",
      "name": produk.merk || "PT. Sinar Bangun Tata Semesta"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.sinarbangun.com/produk/${produk.slug}`,
      "priceCurrency": "IDR",
      "price": "0", 
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "PT. Sinar Bangun Tata Semesta",
        "url": "https://www.sinarbangun.com"
      }
    }
  };

  return (
    <>
      {/* Script Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ProductDetailClient produk={produk} />
    </>
  );
}