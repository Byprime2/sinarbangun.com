import { listProduk } from "@/public/data";

export default function sitemap() {
  const baseUrl = "https://www.sinarbangun.com";

  // Ambil semua slug produk dari data.js Anda
  const productUrls = listProduk.map((produk) => ({
    url: `${baseUrl}/produk/${produk.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Daftar halaman utama
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...routes, ...productUrls];
}