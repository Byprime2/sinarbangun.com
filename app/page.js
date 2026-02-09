/* eslint-disable @next/next/no-img-element */

"use client";

import DataImage from "@/public/data";
import Link from "next/link";
import { useState, useEffect } from "react";
import { listProduk } from "@/public/data";
import BlogSection from "./component/BlogSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const heroImages = ["/assets/slide1.webp", "/assets/slide2.webp", "/assets/slide4.webp", "/assets/slide5.webp"];
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const produkTampil = showAll ? listProduk : listProduk.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={heroImages[index]} 
            initial={{ scale: 1.1, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 1.5 }} 
            className="absolute inset-0"
          >
            <img src={heroImages[index]} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-50"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 px-4 max-w-5xl mx-auto text-center">
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Established Since 1996
          </motion.p>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            PT. SINAR BANGUN <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">TATA SEMESTA</span>
          </motion.h1>
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link href="#produk" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20">
              Jelajahi Produk
            </Link>
            <Link href="#kontak" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. TENTANG KAMI - MODERN STYLE */}
     {/* 2. TENTANG KAMI - MODERN REFINED STYLE */}
      <section className="py-24 container mx-auto px-4" id="tentang">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          
          {/* Sisi Teks */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-extrabold tracking-[0.3em] uppercase text-xs mb-4 block">
                Professional Distributor
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">
                KOMITMEN KAMI PADA <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  KUALITAS MATERIAL
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p className="font-medium text-slate-800">
                  Bergerak dalam bidang distribusi material besi untuk fabrikasi dan konstruksi sejak <span className="text-blue-600 font-bold">1996</span>.
                </p>
                <p>
                  Sebagai distributor besi, kami selalu memberikan komitmen kepada pelanggan berupa pelayanan dan produk terbaik kepada konsumen. Kami percaya bahwa fondasi yang kuat dimulai dari material yang tepat.
                </p>
              </div>

              {/* Dekorasi Tambahan agar terlihat 'Kekinian' */}
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <i className="ri-user-fill text-slate-400 mt-2"></i>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-500">
                  Dipercaya oleh <span className="text-slate-900">500+ Perusahaan</span> di Indonesia
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Sisi Video (Kembali ke Awal: Autoplay & Muted) */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dekorasi Aksen Modern */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10 opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-100 rounded-2xl -z-10 opacity-50 rotate-12"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-4 border-white">
                <video 
                  width="1080" autoPlay muted loop controls className="rounded-2xl shadow-lg border border-white/30"
                >
                  <source src="/videos/iklan1.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
      {/* 3. LAYANAN - BENTO GRID */}
      <section className="py-24 bg-slate-100/50" id="layanan">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Keunggulan Utama</h2>
            <div className="h-1.5 bg-blue-600 w-24 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-2 p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-200/60 hover:shadow-xl transition-all duration-500">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <i className="ri-shield-check-fill ri-2x"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">Komitmen Kualitas</h3>
                <p className="text-slate-500 leading-relaxed text-lg">Setiap lembar besi dan baja melalui kontrol kualitas ketat untuk memastikan standar industri internasional terpenuhi tanpa kompromi.</p>
            </div>
            
            <div className="p-10 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200 flex flex-col justify-between">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-truck-fill ri-2x"></i>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3">Logistik Cepat</h3>
                    <p className="text-blue-100 leading-relaxed">Armada khusus yang terintegrasi untuk pengiriman tepat waktu ke seluruh penjuru area industri.</p>
                </div>
            </div>

            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-200/60 hover:shadow-xl transition-all text-center flex flex-col items-center justify-center">
                <h3 className="text-5xl font-black text-blue-600 mb-2">A+</h3>
                <p className="font-bold text-slate-800 italic uppercase tracking-widest text-sm">Rating Kepuasan</p>
            </div>

            <div className="md:col-span-2 p-10 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative group">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">Harga Kompetitif</h3>
                    <p className="text-slate-400 max-w-md text-lg">Sistem distribusi langsung dari pabrik yang memungkinkan efisiensi biaya untuk proyek Anda.</p>
                </div>
                <i className="ri-line-chart-fill absolute -bottom-6 -right-6 text-white/5 text-[12rem] group-hover:rotate-12 transition-transform duration-700"></i>
            </div>
            </div>
        </div>
      </section>

      {/* 4. PRODUK */}
      <section className="py-24 bg-white" id="produk">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl text-left">
              <h2 className="text-4xl font-bold mb-4">Produk Unggulan</h2>
              <p className="text-slate-500">Katalog material premium untuk berbagai kebutuhan industri Anda.</p>
            </div>
            <button onClick={() => setShowAll(!showAll)} className="group flex items-center gap-3 font-bold text-blue-600 bg-blue-50 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all">
              {showAll ? "Tampilkan Sedikit" : "Lihat Semua Produk"} 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {produkTampil.map((produk, idx) => (
              <motion.div 
                layout 
                key={idx} 
                className="group relative bg-slate-50 rounded-[2.5rem] p-5 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-square overflow-hidden rounded-3xl mb-6 shadow-inner bg-white">
                  <img src={produk.image} alt={produk.title} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="font-bold text-xl mb-6 px-2 text-slate-800 text-center">{produk.title}</h3>
                <Link href={`/produk/${produk.slug}`} className="block w-full text-center py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all shadow-lg">
                  Detail Produk
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BlogSection />

      {/* 5. KONTAK & MAPS */}
      <section className="py-24 container mx-auto px-4" id="kontak">
        <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[150px]"></div>
          
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Konsultasi <span className="text-blue-400">Gratis</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">Tim ahli kami siap membantu menghitung estimasi kebutuhan material proyek Anda secara akurat.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 text-white group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <i className="ri-map-pin-2-fill text-blue-400 group-hover:text-white text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-lg">Kantor Pusat</p>
                  <p className="text-slate-400 leading-relaxed mb-4">Jl. KH Zainul Arifin No.78, Jakarta Barat</p>
                  <Link href="https://maps.google.com" target="_blank" className="text-blue-400 hover:text-white font-bold flex items-center gap-2 transition-all">
                    Petunjuk Arah <i className="ri-external-link-line"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 relative group cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/5 shadow-2xl">
              <Link href="https://maps.google.com" target="_blank" className="absolute inset-0 z-20"></Link>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.790903332468!2d106.812345!3d-6.158765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMzEuNiJTIDEwNsKwNDgnNDQuNCJF!5e0!3m2!1sid!2sid!4v1620000000000"
                width="100%" height="280" className="grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" loading="lazy"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:opacity-0 transition-opacity">
                <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm shadow-xl">Klik Untuk Navigasi</span>
              </div>
            </div>
          </div>

          <form action="https://formsubmit.co/primaakusumah.sbts@gmail.com" method="POST" className="flex-1 bg-white p-10 rounded-[2.5rem] shadow-2xl relative z-10">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nama Lengkap</label>
                    <input type="text" name="nama" placeholder="Budi Santoso" className="w-full bg-slate-50 border-2 border-transparent p-4 rounded-2xl focus:border-blue-600 focus:bg-white transition-all outline-none" required />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Alamat Email</label>
                    <input type="email" name="email" placeholder="budi@perusahaan.com" className="w-full bg-slate-50 border-2 border-transparent p-4 rounded-2xl focus:border-blue-600 focus:bg-white transition-all outline-none" required />
                </div>
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">WhatsApp</label>
                  <input type="number" name="noHp" placeholder="08123456789" className="w-full bg-slate-50 border-2 border-transparent p-4 rounded-2xl focus:border-blue-600 focus:bg-white transition-all outline-none" required />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Kebutuhan Material</label>
                  <textarea name="pesan" rows="4" placeholder="Sebutkan jenis material dan jumlah yang dibutuhkan..." className="w-full bg-slate-50 border-2 border-transparent p-4 rounded-2xl focus:border-blue-600 focus:bg-white transition-all outline-none" required></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center gap-3">
                Kirim Sekarang <i className="ri-send-plane-fill"></i>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <img src={DataImage.logo1} alt="Logo" className="w-16 h-16 mx-auto mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <h2 className="text-xl font-black mb-2 uppercase tracking-tighter">Sinar Bangun Tata Semesta</h2>
          <p className="text-slate-400 text-sm max-w-sm mx-auto mb-10">Distributor Besi & Baja berkualitas sejak 1996 untuk solusi konstruksi Indonesia.</p>
          <div className="flex justify-center gap-8 mb-12 flex-wrap text-sm font-bold uppercase tracking-widest text-slate-400">
            <Link href="#tentang" className="hover:text-blue-600 transition">Tentang</Link>
            <Link href="#produk" className="hover:text-blue-600 transition">Produk</Link>
            <Link href="#layanan" className="hover:text-blue-600 transition">Layanan</Link>
            <Link href="#kontak" className="hover:text-blue-600 transition">Kontak</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}