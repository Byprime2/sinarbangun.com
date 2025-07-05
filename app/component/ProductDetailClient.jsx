"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailClient({ produk }) {
  const [selectedImage, setSelectedImage] = useState(produk.images?.[0] || produk.image);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-slate-800 to-blue-900 text-white py-12 px-4">
      <div className="lg:mb-0 mb-5">
        <h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-4xl/normal text-center font-semibold mt-15">
          {produk.title}
        </h1>
      </div>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-300 mb-6 ">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /
        <Link href="/#produk" className="hover:underline ml-1">
          Produk
        </Link>{" "}
        /<span className="text-white font-medium ml-1">{produk.title}</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Gambar */}
        <div>
          <div className="relative w-full aspect-[4/3] bg-gray-700 rounded-xl overflow-hidden shadow">
            <Image src={selectedImage} alt={produk.title} fill className="object-contain p-6" />
          </div>
          {produk.images?.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {produk.images.map((img, idx) => (
                <button key={idx} className={`w-20 h-20 border rounded-md overflow-hidden ${selectedImage === img ? "border-blue-300" : "border-gray-500"}`} onClick={() => setSelectedImage(img)}>
                  <Image src={img} alt={idx} width={80} height={80} className="object-contain w-full h-full" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Informasi */}
        <div className="space-y-6 relative">
          <p className="text-xl font-semibold text-blue-300">{produk.harga || "Hubungi Kami untuk harga terbaik !"}</p>

          <div>
            <h2 className="font-semibold text-gray-200 mb-1">Deskripsi Produk</h2>
            <p className="text-gray-300 leading-relaxed">{produk.deskripsi}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-200 mb-1">Ukuran</h2>
            <p className="text-gray-300 leading-relaxed">{produk.ukuran}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-200 mb-1">Spesifikasi</h2>
            <p className="text-gray-300 leading-relaxed">{produk.spesifikasi}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-200 mb-1">Merk</h2>
            <p className="text-gray-300 leading-relaxed">{produk.merk}</p>
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <Link href="https://wa.me/6281234567890" target="_blank">
              <button className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 transition">
                WhatsApp <i className="ri-whatsapp-fill ri-1x pointer cursor-pointer"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
