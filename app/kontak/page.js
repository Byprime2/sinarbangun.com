"use client";
import Link from "next/link";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        {/* JUDUL */}
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">Hubungi Kami</h1>
        <p className="text-lg mb-12 text-gray-700 text-center">Silakan hubungi kami melalui form di bawah ini, atau langsung terhubung dengan tim marketing kami.</p>

        {/* GRID: FORM + INFO KONTAK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM KONTAK */}
          <form className="space-y-4 bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Kirim Pesan</h2>
            <input type="text" placeholder="Nama Anda" className="w-full p-3 border rounded-lg" />
            <input type="telpon" placeholder="Nomor Telpon" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Pesan Anda" rows="5" className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit" className="w-full px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700">
              Kirim Pesan
            </button>
          </form>

          {/* INFO KONTAK */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Kontak Marketing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { href: "https://wa.me/6282114064622", name: "Marketing - Prima AK" },
                { href: "https://wa.me/6285772430539", name: "Marketing - Allafan JB" },
                { href: "https://wa.me/6281271011429", name: "Marketing - Edwin HW" },
                { href: "https://wa.me/6281511357868", name: "Marketing - Maharani U" },
                { href: "https://wa.me/6285715207335", name: "Marketing - Nurfarida" },
                { href: "https://wa.me/6289638663659", name: "Marketing - Feby" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} target="_blank" className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow">
                  <i className="ri-whatsapp-fill text-xl"></i> {item.name}
                </Link>
              ))}
            </div>

            {/* INFORMASI PERUSAHAAN */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Informasi Perusahaan</h2>
              <p className="text-gray-700">📍 Alamat: H. zaenal, Jl. K Utara Jl. Kyai Haji Zainul Arifin No.78, RT.3/RW.14, Tanah Sereal, Jakarta, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11210</p>
              <p className="text-gray-700">📧 Email: primaakusumah.sbts@gmail.com</p>
              <p className="text-gray-700">📞 Telepon: (021) 12345678</p>
            </div>
          </div>
        </div>

        {/* GOOGLE MAPS */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Lokasi Kami</h2>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7733392126556!2d106.80590337586762!3d-6.1611035603854996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f675ce70a4d5%3A0x77c211c1d2d4ff01!2sPT%20Sinar%20Bangun%20Tata%20Semesta!5e0!3m2!1sid!2sid!4v1751287760364!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
