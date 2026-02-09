/* eslint-disable @next/next/no-img-element */

"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductDetailClient({ produk }) {
  const [selectedImage, setSelectedImage] = useState(produk.images?.[0] || produk.image);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-20 px-4 md:px-8">
      {/* Container Utama */}
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb - Lebih Minimalis */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 mb-12">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <span>/</span>
          <Link href="/#produk" className="hover:text-blue-400 transition">Produk</Link>
          <span>/</span>
          <span className="text-slate-300 font-bold">{produk.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          
          {/* SISI KIRI: GALLERY GAMBAR */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative group aspect-square bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] overflow-hidden border border-slate-700/50 shadow-2xl flex items-center justify-center p-8"
            >
              <img 
                src={selectedImage} 
                alt={produk.title} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-6 right-6 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">High Quality Steel</span>
              </div>
            </motion.div>

            {produk.images?.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                {produk.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === img ? "border-blue-500 scale-95 shadow-lg shadow-blue-500/20" : "border-slate-700 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={idx} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SISI KANAN: DETAIL INFORMASI */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tighter">
                {produk.title}
              </h1>
              <div className="inline-block px-6 py-3 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
                <p className="text-2xl font-black text-blue-400">
                  {produk.harga || "Hubungi Kami!"}
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-gradient-to-r from-slate-700 to-transparent w-full"></div>

            {/* Spek Ringkas dalam Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/40 rounded-[2rem] border border-slate-700/50">
                <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <i className="ri-ruler-2-line text-blue-400 text-lg"></i> Ukuran
                </h2>
                <p className="text-slate-200 font-bold">{produk.ukuran || "-"}</p>
              </div>
              <div className="p-6 bg-slate-800/40 rounded-[2rem] border border-slate-700/50">
                <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <i className="ri-copyright-line text-blue-400 text-lg"></i> Merk
                </h2>
                <p className="text-slate-200 font-bold">{produk.merk || "-"}</p>
              </div>
            </div>

            {/* Tab Informasi Style */}
            <div className="space-y-6">
              <div className="group">
                <h2 className="text-sm font-black text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-blue-600"></span> Deskripsi Produk
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg pl-10 border-l-2 border-slate-800">
                  {produk.deskripsi}
                </p>
              </div>

              <div className="group">
                <h2 className="text-sm font-black text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-blue-600"></span> Spesifikasi Teknis
                </h2>
                <p className="text-slate-400 leading-relaxed pl-10 border-l-2 border-slate-800">
                  {produk.spesifikasi}
                </p>
              </div>
            </div>

            {/* Tombol Aksi - Floating Style */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/6282114064622" target="_blank" className="flex-1">
                <button className="w-full bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 active:scale-95">
                  <i className="ri-whatsapp-fill text-2xl"></i>
                  PESAN VIA WHATSAPP
                </button>
              </Link>
              <Link href="/#produk" className="flex-1">
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white px-8 py-5 rounded-2xl font-black text-lg transition-all border border-slate-700 flex items-center justify-center gap-3">
                  KEMBALI KE KATALOG
                </button>
              </Link>
            </div>

            {/* Trust Badge */}
            <p className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              Verified Product & Distributor Since 1996
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}