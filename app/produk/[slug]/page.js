import { listProduk } from "@/public/data";
import ProductDetailClient from "@/app/component/ProductDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return listProduk.map((produk) => ({ slug: produk.slug }));
}

export function generateMetadata({ params }) {
  const produk = listProduk.find((item) => item.slug === params.slug);
  if (!produk) return { title: "Produk Tidak Ditemukan" };

  return {
    title: produk.title + " | SBTS",
    description: produk.deskripsi,
  };
}

export default function ProdukDetail({ params }) {
  const produk = listProduk.find((item) => item.slug === params.slug);
  if (!produk) return notFound();

  return <ProductDetailClient produk={produk} />;
}
