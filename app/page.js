/* eslint-disable @next/next/no-img-element */

"use client";

import DataImage from "@/public/data";

import Link from "next/link";

import { useState, useEffect } from "react";

import { listBerita, listProduk } from "@/public/data";

// React Server Components
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const heroImages = ["/assets/slide1.webp", "/assets/slide2.webp", "/assets/slide4.webp", "/assets/slide5.webp"];
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const produkTampil = showAll ? listProduk : listProduk.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  });

  return (
    <>
      {/* Image hero */}
      <section className="relative w-full h-[100vh] md:h-[100vh] overflow-hidden text-shadow-2xl">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <AnimatePresence>
          <motion.div key={heroImages[index]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 w-full h-full">
            <img src={heroImages[index]} alt="Hero Image" priority fill className="object-cover object-center" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="mt-4 text-base md:text-lg text-white drop-shadow-lg italic">Distributor besi dan baja sejak tahun 1996</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">PT.SINAR BANGUN TATA SEMESTA</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Solusi kebutuhan besi anda.</h2>
          <Link href={"#produk"} className="mt-6 bg-blue-600 w-fit rounded-md p-3 hover:bg-blue-800 text-white cursor-pointer">
            Lihat Produk
          </Link>
        </div>
      </section>
      {/* End Image hero */}

      {/* Tentang */}
      <div className="mt-20 container mx-auto px-4" id="tentang">
        {/* Accent bar di atas kartu */}
        <div className="h-1 bg-blue-600 w-16 rounded-br-full mb-20"></div>
        <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-4xl/normal text-center font-semibold ">
          TENTANG KAMI
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-base/loose text-center mt-5 italic">
          Dalam dunia konstruksi dan industri, kualitas material adalah kunci utama dalam menciptakan hasil yang tangguh dan berkelanjutan.
        </motion.p>
        <div className="mt-15 grid lg:grid-cols-2 md:grid-cols-1 gap-10">
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="">
            <h1 className="font-semibold text-2xl mb-3">PT.Sinar Bangun Tata Semesta</h1>
            <p className="text-base/loose">
              Bergerak dalam bidang distribusi material besi, untuk fabrikasi dan konstruksi sejak 1996. Sebagai distributor besi, kami selalu memberikan komitmen, kepada pelanggan berupa pelayanan, dan produk terbaik kepada konsumen.
            </p>
            <div className="mt-6 mb-3">
              <Link href={"#produk"} className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 transition duration-300 ease-in-out">
                Lihat Produk
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }}>
            <video width="1080" autoPlay muted loop controls className="rounded-2xl shadow-lg border border-white/30">
              <source src="/videos/iklan1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
      {/* End Tentang */}

      {/* Produk */}
      <div className="mt-20 container mx-auto px-4" id="produk">
        {/* Accent bar di atas kartu */}
        <div className="h-1 bg-blue-600 w-16 rounded-br-full mb-20"></div>

        <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-4xl/normal text-center font-semibold ">
          PRODUK
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-base/loose text-center italic">
          Kami menghadirkan berbagai pilihan produk berkualitas tinggi yang dirancang untuk memenuhi standar industri dan konstruksi. Setiap produk kami dipilih dengan cermat untuk memastikan ketahanan, mutu, dan keandalan yang optimal bagi
          kebutuhan proyek Anda.
        </motion.p>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {produkTampil.map((produk, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative w-full h-[200px]">
                  <img src={produk.image} alt={produk.title} fill className="rounded-2xl p-3" />
                </div>
                <div className="p-4 text-center">
                  <h2 className="font-semibold text-lg mb-2">{produk.title}</h2>
                  <Link href={`/produk/${produk.slug}`}>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition">Lihat Produk</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={() => setShowAll(!showAll)} className={`px-6 py-3 rounded-full shadow-md transition ${showAll ? "bg-red-600 text-white hover:bg-red-800" : "bg-blue-600 text-white hover:bg-blue-800"}`}>
              {showAll ? "Tutup Produk ✕" : "View More Produk →"}
            </button>
          </div>
        </div>
      </div>
      {/* End Produk */}

      {/* Layanan */}
      <div className="mt-10 lg:mt-0 mx-auto px-4">
        <div className="grid lg:grid-cols-4 mt-32 gap-2 md:grid-cols-2 justify-items-center" id="layanan">
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="shadow-2xl p-7 rounded-2xl">
            <i className="ri-service-fill ri-3x text-shadow-zinc-500"></i>
            <p className="font-semibold text-2xl/normal mb-2">Komitmen</p>
            <p className="text-base/loose">Sejak 1996, kami selalu konsisten menyediakan besi dan baja berkualitas tinggi dengan layanan yang dapat diandalkan dan bertanggung jawab.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="shadow-2xl p-7 rounded-2xl">
            <i className="ri-verified-badge-fill ri-3x text-shadow-zinc-500"></i>
            <p className="font-semibold text-2xl/normal mb-2">Terpercaya</p>
            <p className="text-base/loose">Kami menjaga kepercayaan pelanggan melalui keaslian material, harga transparan, dan keamanan transaksi serta pengiriman.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-7 rounded-2xl">
            <i className="ri-price-tag-3-fill ri-3x text-shadow-zinc-500"></i>
            <p className="font-semibold text-2xl/normal mb-2">Harga Bersaing</p>
            <p className="text-base/loose">Dengan pengalaman dan jaringan luas, kami mampu menawarkan harga bersaing tanpa mengorbankan kualitas.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-7 rounded-2xl">
            <i className="ri-mail-send-fill ri-3x text-shadow-zinc-500"></i>
            <p className="font-semibold text-2xl/normal mb-2">Pengiriman Cepat</p>
            <p className="text-base/loose">Didukung armada sendiri dan sistem logistik efisien, kami pastikan pengiriman cepat, tepat, dan aman.</p>
          </motion.div>
        </div>
      </div>
      {/* End Layanan */}

      {/* Blog */}
      <div className="relative mt-20 shadow-5xl mx-auto px-4 p-10" id="blog" style={{ backgroundImage: "url('/assets/slide3.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="relative z-10 text-white">
          <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-4xl/normal text-center font-semibold " id="proyek">
            BLOGS
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-base/loose text-center container mx-auto px-4 italic">
            Blog ini kami hadirkan untuk menjawab kebutuhan informasi Anda seputar dunia besi dan baja. Mulai dari tips pemilihan produk, keunggulan material, hingga inspirasi proyek — semua kami rangkum demi membantu Anda membuat keputusan
            yang tepat.
          </motion.p>

          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-5">
            {listBerita.map((berita, index) => (
              <motion.a key={index} href={berita.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="block bg-white rounded-2xl shadow-2xl overflow-hidden p-5">
                <img src={berita.gambar} alt={berita.judul} className="w-full h-70 object-cover rounded-2xl" />
                <div className="p-4">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full uppercase font-semibold tracking-wide">{berita.kabar}</span>
                  <h2 className="text-xl font-semibold text-black mt-2">{berita.judul}</h2>
                  <p className="text-gray-700 mt-2">{berita.deskripsi}</p>
                  <p className="mt-4 text-blue-700 font-semibold hover:underline">Lihat Selengkapnya →</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      {/* End Blog */}

      {/* Kontak */}
      <div className="mt-20 sm:p-10 p-0 container mx-auto px-4" id="kontak">
        {/* Accent bar di atas kartu */}
        <div className="h-1 bg-blue-600 w-16 rounded-br-full mb-20"></div>

        <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-4xl/normal text-center font-semibold ">
          KONTAK
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-base/loose text-center italic">
          Hubungi Kami, untuk mendapatkan penawaran terbaik hari ini !.
        </motion.p>

        <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
          <motion.form
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/primaakusumah.sbts@gmail.com"
            method="POST"
            className="shadow-2xl rounded-md p-10 w-full h-full flex flex-col justify-between"
            autoComplete="off"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukkan Nama Lengkap Anda..." className="border border-blue-400 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="email" name="email" placeholder="Masukkan Email Anda..." className="border border-blue-400 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nomer Telpon</label>
                <input type="number" name="noHp" placeholder="Masukkan Nomer Telpon Anda..." className="border border-blue-400 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">
                  Pesan
                </label>
                <textarea name="pesan" id="pesan" cols="65" rows="7" placeholder="Pesan Anda..." className="border border-blue-400 p-2 rounded-md" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-800 text-white p-3 rounded-lg w-full cursor-pointer border border-blue-400  hover:bg-white hover:text-blue-600">
                  Kirim Pesan
                </button>
              </div>
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-10 sm:w-fit mx-auto rounded-md max-w w-full">
            <h2 className="font-semibold">Alamat Kami</h2>
            <p>H. zaenal, Jl. K Utara Jl. Kyai Haji Zainul Arifin No.78, RT.3/RW.14, Tanah Sereal, Jakarta, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11210</p>
            <div style={{ marginTop: "20px" }}>
              <h2 className="font-semibold">Maps</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7733392126556!2d106.80590337586762!3d-6.1611035603854996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f675ce70a4d5%3A0x77c211c1d2d4ff01!2sPT%20Sinar%20Bangun%20Tata%20Semesta!5e0!3m2!1sid!2sid!4v1751287760364!5m2!1sid!2sid"
                position="absolute"
                width="100%"
                height="400"
                loading="lazy"
                className="mt-1.5"
              ></iframe>
              <div className="mt-7">
                <Link href={"https://maps.app.goo.gl/qGPEZErM2m9DvbfL9"} target="_blank" className="bg-blue-800 border border-blue-800 text-white w-fit rounded-md p-3 hover:bg-white hover:text-blue-800 cursor-pointer">
                  PT.Sinar Bangun Tata Semesta
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* End Kontak */}

      {/* Bottom */}
      <div className="grid lg:grid-cols-2 gap-10 mt-20 container mx-auto px-4 mb-20">
        {/* Kolom 1 */}
        <div className="flex-col md:items-start lg:text-left text-center items-center">
          <div className="flex lg:flex-row flex-col gap-2 items-center">
            <img src={DataImage.logo1} alt="Logo Image" priority className="w-10 h-10 relative" />
            <div className="flex-col md:flex-row">
              <h2 className="sm:text-2xl/tight text-2xl font-bold">PT. SINAR BANGUN TATA SEMESTA</h2>
              <p className="font-semibold text-xs italic font-serif">General steel supplier</p>
            </div>
          </div>
          <p className="mt-2 text-zinc-400">
            Sejak 1996, kami berkomitmen menyediakan besi dan baja berkualitas tinggi untuk berbagai kebutuhan industri dan konstruksi. Pelayanan yang konsisten, akurat, dan bertanggung jawab menjadi nilai utama kami demi kepuasan
            pelanggan.
          </p>

          <div className="flex gap-3 mt-4 justify-center lg:justify-start">
            <a href="https://www.linkedin.com/in/prima-aditya-kusumah-0aa7871a4/">
              <i className="ri-linkedin-box-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/sinarbangun_id/">
              <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://wa.me/6282114064622">
              <i className="ri-whatsapp-fill ri-2x"></i>
            </a>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between text-center sm:text-left">
          <div>
            <a href="#produk" className="font-semibold">
              Produk
            </a>
            <ul className="opacity-75 text-zinc-400 mt-4 gap-2 italic">
              <li>SPHC</li>
              <li>SPCC</li>
              <li>SPHC-PO</li>
              <li>Checkered</li>
            </ul>
          </div>
          <div>
            <a href="#tentang" className="font-semibold">
              Tentang
            </a>
            <ul className="opacity-75 text-zinc-400 mt-4 gap-2 italic">
              <li>Telpon</li>
              <li>Alamat</li>
              <li>Maps</li>
              <li>Marketing</li>
            </ul>
          </div>
          <div>
            <a href="blog" className="font-semibold">
              Blogs
            </a>
            <ul className="opacity-75 text-zinc-400 mt-4 gap-2 italic">
              <li>Terbaru</li>
              <li>Rating</li>
              <li>Terbaca</li>
              <li>Terbaik</li>
            </ul>
          </div>
          <div>
            <a href="#produk" className="font-semibold">
              Produk
            </a>
            <ul className="opacity-75 text-zinc-400 mt-4 gap-4 italic">
              <li>UNP</li>
              <li>Pipa</li>
              <li>Siku</li>
              <li>Hollow</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Bottom */}
    </>
  );
}
