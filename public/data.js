import Hero from "@/public/assets/company.webp";
import Proyek7 from "@/public/assets/proyek7.webp";
import Proyek8 from "@/public/assets/proyek8.webp";
import Proyek9 from "@/public/assets/proyek9.webp";
import logo1 from "@/public/assets/logo1.png";

const Image = {
  Hero,
  Proyek7,
  Proyek8,
  Proyek9,
  logo1,
};

export default Image;

import Berita1 from "@/public/berita/berita1.jpg";
import Berita2 from "@/public/berita/berita2.jpg";
import Berita3 from "@/public/berita/berita3.jpg";

export const listBerita = [
  {
    judul: "Harga Terus Melambung, Bursa Suspensi Saham Krakatau Steel (KRAS)",
    deskripsi: "Bursa Efek Indonesia (BEI) melakukan suspensi atas perdagangan saham PT Krakatau Steel (Persero) Tbk. (KRAS) akibat kenaikan harga yang signifikan.",
    gambar: Berita1,
    link: "https://market.bisnis.com/read/20250701/7/1889429/harga-terus-melambung-bursa-suspensi-saham-krakatau-steel-kras",
    kabar: "01 Juni 2025",
  },
  {
    judul: "Nippon Steel Pertimbangkan Terbitkan Saham Baru untuk Danai Akuisisi US Steel",
    deskripsi: "Nippon Steel mempertimbangkan penerbitan saham baru untuk membantu dana akuisisi US Steel, tanpa merugikan investor eksisting dan dilusi laba per saham.",
    gambar: Berita2,
    link: "https://ekonomi.bisnis.com/read/20250619/620/1886548/nippon-steel-pertimbangkan-terbitkan-saham-baru-untuk-danai-akuisisi-us-steel",
    kabar: "01 Juni 2025",
  },
  {
    judul: "Kanada Tunda Balas Tarif Impor Baja dan Alumunium AS, Ini Sebabnya.",
    deskripsi: "Kanada memilih untuk menahan tindakan balasan terkait penggandaan tarif baja dan aluminium oleh Presiden AS, Donald Trump.",
    gambar: Berita3,
    link: "https://ekonomi.bisnis.com/read/20250605/620/1882637/kanada-tunda-balas-tarif-impor-baja-dan-alumunium-as-ini-sebabnya",
    kabar: "01 Juni 2025",
  },
];

// Proyek
export const listProduk = [
  {
    title: "Plat Hitam",
    slug: "ph",
    image: "/produk/proyek1/1.webp",
    images: ["/produk/proyek1/1.webp", "/produk/proyek1/2.webp", "/produk/proyek1/3.webp", "/produk/proyek1/4.webp"],
    deskripsi: "SPHC adalah jenis baja hot rolled (canai panas) komersial yang digunakan secara luas di industri manufaktur.",
    ukuran: "0,7mm - 50mm+",
    spesifikasi: "JIS G3131",
    merk: "Nippon Steel, POSCO ,JFE Steel,Krakatau Steel (Indonesia)",
  },
  {
    title: "Plat SPHC-PO",
    slug: "po",
    image: "/produk/proyek2/1.webp",
    images: ["/produk/proyek2/1.webp", "/produk/proyek2/2.webp", "/produk/proyek2/3.webp"],
    deskripsi: "SPHC-PO adalah varian dari SPHC yang merujuk pada permukaan akhir (surface finish) dari baja tersebut.",
    ukuran: "1mm - 4mm+",
    spesifikasi: "JIS G3131 (Hot-Rolled Mild Steel Plates, Sheets, and Strip)",
    merk: "KS,JFE Steel,China Baowu Steel,POSCO (Korea Selatan),Nippon Steel (Jepang)",
  },
  {
    title: "Plat SPCC",
    slug: "pp",
    image: "/produk/proyek3/1.webp",
    images: ["/produk/proyek3/1.webp", "/produk/proyek3/2.webp"],
    deskripsi: "SPCC adalah jenis baja canai dingin (cold rolled) kualitas komersial, digunakan untuk produk-produk yang membutuhkan presisi dimensi, permukaan halus, dan mudah dibentuk. Kode ini berasal dari standar JIS G3141 (Jepang).",
    ukuran: "0,4mm - 3mm+",
    spesifikasi: "JIS G3141",
    merk: "KS, NS,  JFE, POSCO, Baosteel / China Steel",
  },
  {
    title: "Plat Bordes",
    slug: "pb",
    image: "/produk/proyek4/10.webp",
    images: ["/produk/proyek4/10.webp", "/produk/proyek4/11.webp", "/produk/proyek4/12.webp"],
    deskripsi: "Bordes atau Checkered Plate adalah plat baja dengan pola timbul (umumnya berbentuk garis atau berlian) di satu sisi permukaannya. Pola ini berfungsi untuk mencegah selip (anti-slip) dan menambah kekuatan struktural.",
    ukuran: "1mm - 9mm+",
    spesifikasi: "JIS G3192, ASTM A786, EN 10029 / EN 10051",
    merk: "KS, NS,  JFE, POSCO, Baosteel / China Steel,Gunung Garuda",
  },
  {
    title: "Coil SPCC",
    slug: "cp",
    image: "/produk/proyek5/13.webp",
    images: ["/produk/proyek5/13.webp", "/produk/proyek5/14.webp"],
    deskripsi: "SPCC adalah jenis baja canai dingin (cold rolled) kualitas komersial, digunakan untuk produk-produk yang membutuhkan presisi dimensi, permukaan halus, dan mudah dibentuk. Kode ini berasal dari standar JIS G3141 (Jepang).",
    ukuran: "0,4mm - 2mm+",
    spesifikasi: "JIS G3141",
    merk: "KS, NS,  JFE, POSCO, Baosteel / China Steel",
  },
  {
    title: "Coil SPHC",
    slug: "pp",
    image: "/produk/proyek6/15.webp",
    images: ["/produk/proyek6/15.webp", "/produk/proyek6/16.webp"],
    deskripsi: "SPHC adalah jenis baja hot rolled (canai panas) komersial yang digunakan secara luas di industri manufaktur.",
    ukuran: "0,7mm - 50mm+",
    spesifikasi: "JIS G3131",
    merk: "Nippon Steel, POSCO ,JFE Steel,Krakatau Steel (Indonesia)",
  },
  {
    title: "CNP / Canal C",
    slug: "cnp",
    image: "/produk/proyek7/17.webp",
    images: ["/produk/proyek7/17.webp", "/produk/proyek7/18.webp", "produk/proyek7/19.webp"],
    deskripsi: "CNP adalah singkatan dari Canal Profil, yaitu baja berbentuk kanal huruf “C” yang digunakan sebagai rangka struktur atap, plafon, dinding, atau partisi.",
    ukuran: "75 - 150",
    spesifikasi: "SNI, ASTM A653, JIS G3302, dll",
    merk: "Kencana Truss,Taso,Cilegon Steel,BlueScope,Prima Truss,Gunung Garuda",
  },
  {
    title: "Siku / Angel Bar",
    slug: "sk",
    image: "/produk/proyek8/20.webp",
    images: ["/produk/proyek8/20.webp", "/produk/proyek8/21.webp"],
    deskripsi: "Besi UNP cocok untuk struktur bangunan dan rangka baja.",
    ukuran: "30 - 150+",
    spesifikasi: "SNI, JIS G3192, ASTM A36, DIN EN 10056",
    merk: "Master Steel,KS,Cilegon Steel,Delco Prima,BRC,Gunung Garuda",
  },
  {
    title: "UNP / Canal U",
    slug: "unp",
    image: "/produk/proyek9/22.webp",
    images: ["/produk/proyek9/22.webp", "/produk/proyek9/23.webp", "/produk/proyek9/24.webp"],
    deskripsi: "Besi UNP cocok untuk struktur bangunan dan rangka baja.",
    ukuran: "80mm - 250mm+",
    spesifikasi: "SNI, JIS G3192, ASTM A36",
    merk: "Master Steel,KS,JFE Steel / Nippon Steel,Delco Prima,BRC,Gunung Garuda",
  },
  {
    title: "Hollow",
    slug: "hl",
    image: "/produk/proyek10/25.webp",
    images: ["/produk/proyek10/25.webp", "/produk/proyek10/26.webp"],
    deskripsi: "Hollow square pipe adalah profil baja berbentuk kotak (persegi) yang berongga di bagian tengahnya. Dalam bahasa sehari-hari sering disebut pipa hollow kotak.",
    ukuran: "15 - 100",
    spesifikasi: "SNI, JIS G3466, ASTM A500",
    merk: "Truss,Cakra Steel,Tata Logam,Indosteel,GRP",
  },
  {
    title: "Hbem",
    slug: "hb",
    image: "/produk/proyek11/27.webp",
    images: ["/produk/proyek11/27.webp", "/produk/proyek11/28.webp"],
    deskripsi: "H-Beam adalah profil baja berbentuk huruf H yang digunakan sebagai balok struktural utama dalam konstruksi. H-Beam sering juga disebut WF (Wide Flange) karena memiliki sayap (flange) yang lebar dan kuat.",
    ukuran: "100 - 400",
    spesifikasi: "JIS G3101 (Jepang), ASTM A36 (Amerika), SNI",
    merk: "Gunung Garuda,Krakatau Steel,Gunung Raja Paksi,Master Steel,Posco",
  },
  {
    title: "IWF / Wide Flange",
    slug: "WF",
    image: "/produk/proyek12/29.webp",
    images: ["/produk/proyek12/29.webp", "/produk/proyek12/30.webp"],
    deskripsi:
      "IWF adalah profil baja struktural berbentuk huruf “I” dengan flange (sayap) yang lebar, sehingga sering disebut Wide Flange. IWF memiliki fungsi serupa dengan H-Beam, hanya saja bentuk dan dimensi flange-nya lebih ramping daripada H-Beam.",
    ukuran: "150 - 300",
    spesifikasi: " JIS G3192 (Jepang), ASTM A36, SNI",
    merk: "Gunung Garuda,Krakatau Steel,Gunung Raja Paksi,Master Steel,Posco",
  },
  {
    title: "Besi Beton / Assental",
    slug: "bb",
    image: "/produk/proyek13/31.webp",
    images: ["/produk/proyek13/31.webp", "/produk/proyek13/32.webp", "/produk/proyek13/33.webp"],
    deskripsi: "Besi as ulir adalah batang baja berbentuk silinder (bulat) dengan ulir (drat) di sepanjang permukaannya. Umumnya digunakan untuk keperluan mekanikal, konstruksi, dan fabrikasi.",
    ukuran: "6mm - 25mm+",
    spesifikasi: "DIN 975 / DIN 976, ASTM A307 / A193, ISO",
    merk: "Baut Baja Nusantara,TJM / Fuji Bolt / NSS",
  },
  {
    title: "Plat Kapal",
    slug: "pk",
    image: "/produk/proyek14/34.webp",
    images: ["/produk/proyek14/34.webp", "/produk/proyek14/35.webp"],
    deskripsi:
      "Plat kapal adalah lembaran baja tebal yang dirancang khusus untuk pembuatan kapal laut, struktur lepas pantai, peralatan kelautan, serta proyek struktur berat seperti jembatan dan tangki,Disebut plat kapal karena awalnya difokuskan untuk industri galangan kapal, tetapi kini juga digunakan di berbagai konstruksi berat lainnya.",
    ukuran: "3mm - 30mm+",
    spesifikasi: "ASTM A131 (Ship Building Steel), JIS G3101, ABS,",
    merk: "KS,GRP",
  },
  {
    title: "Wiremesh",
    slug: "wr",
    image: "/produk/proyek15/1.png",
    images: ["/produk/proyek15/1.png", "/produk/proyek15/26.webp"],
    deskripsi: "Besi UNP cocok untuk struktur bangunan dan rangka baja.",
    ukuran: "m4 - m10+",
    spesifikasi: "SNI 07-2052-2002, ASTM A185",
    merk: "Baja Utama Wiremesh,Interworld Steel,Cipta Baja,Master Steel,GRP",
  },
  {
    title: "Pipa",
    slug: "pi",
    image: "/produk/proyek16/37.webp",
    images: ["/produk/proyek16/37.webp", "/produk/proyek16/38.webp", "/produk/proyek16/39.webp"],
    deskripsi: "Pipa hitam adalah pipa baja berbentuk bulat yang terbuat dari carbon steel (baja karbon) tanpa lapisan galvanis. Disebut “hitam” karena permukaannya berwarna gelap akibat proses manufaktur (tanpa lapisan anti karat).",
    ukuran: " 3/4' - 8' ",
    spesifikasi: " SNI, ASTM A53 / A106, API 5L, JIS G3444",
    merk: "Spindo,Baja Sejahtera,SPS,Bakrie Pipe",
  },
];
