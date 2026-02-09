"use client";
import Link from "next/link";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] py-20 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Contact Us</span>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6 mt-2">
            Mari Membangun <span className="text-blue-900">Bersama Kami</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Konsultasikan kebutuhan material proyek Anda dengan tim ahli kami. Kami siap memberikan penawaran terbaik dengan respon cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: FORM KONTAK (Modern Card) */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <i className="ri-mail-send-line text-blue-600"></i> Kirim Pesan Cepat
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Nama Lengkap</label>
                  <input type="text" placeholder="Contoh: Budi Santoso" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Nomor Telepon</label>
                  <input type="tel" placeholder="0812xxxx" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 ml-1">Pesan / Kebutuhan Material</label>
                <textarea placeholder="Tuliskan detail material yang Anda cari..." rows="4" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"></textarea>
              </div>
              <button id="btn-submit-kontak" type="submit" className="w-full px-6 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 hover:shadow-lg transform hover:-translate-y-1 transition-all">
                Kirim Penawaran Sekarang
              </button>
            </form>
          </div>

          {/* RIGHT: INFO KONTAK & MARKETING */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <i className="ri-whatsapp-line text-green-600"></i> Konsultasi Marketing (WA)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { href: "https://wa.me/6282114064622", name: "Prima AK", id: "wa-prima" },
                  { href: "https://wa.me/6285772430539", name: "Allafan JB", id: "wa-allafan" },
                  { href: "https://wa.me/6281271011429", name: "Edwin HW", id: "wa-edwin" },
                  { href: "https://wa.me/6281511357868", name: "Maharani U", id: "wa-maharani" },
                  { href: "https://wa.me/6285715207335", name: "Nurfarida", id: "wa-nurfarida" },
                  { href: "https://wa.me/6289638663659", name: "Feby", id: "wa-feby" },
                ].map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href} 
                    id={item.id}
                    target="_blank" 
                    className="btn-whatsapp-sales group flex items-center justify-between px-5 py-4 bg-white border border-gray-100 rounded-2xl hover:bg-green-50 hover:border-green-200 transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                        <i className="ri-whatsapp-fill text-xl"></i>
                      </div>
                      <span className="font-semibold text-slate-700">{item.name}</span>
                    </div>
                    <i className="ri-arrow-right-s-line text-gray-400 group-hover:text-green-600 transition-all"></i>
                  </Link>
                ))}
              </div>
            </div>

            {/* COMPANY INFO BOX */}
            <div className="p-8 bg-blue-900 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-6">Kantor Pusat</h2>
                <div className="space-y-4 opacity-90">
                  <p className="flex items-start gap-3 text-sm leading-relaxed">
                    <i className="ri-map-pin-2-fill text-xl text-blue-300"></i>
                    <span>Jl. Kyai Haji Zainul Arifin No.78, Jakarta Barat, 11210</span>
                  </p>
                  <p className="flex items-center gap-3 text-sm">
                    <i className="ri-mail-fill text-xl text-blue-300"></i>
                    <span>primaakusumah.sbts@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-3 text-sm">
                    <i className="ri-phone-fill text-xl text-blue-300"></i>
                    <span>(021) - Hubungi via Marketing</span>
                  </p>
                </div>
              </div>
              {/* Dekorasi Aksen */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-800 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* MAPS SECTION */}
        <div className="mt-24">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Alamat Kantor</h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full mt-3"></div>
          </div>
          <div className="w-full h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.790903332468!2d106.812345!3d-6.158765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMzEuNiJTIDEwNsKwNDgnNDQuNCJF!5e0!3m2!1sid!2sid!4v1620000000000"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}