"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import DataImage from "../public/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef(null);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Deteksi apakah footer terlihat
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0.1 });

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Munculkan navbar saat scroll (naik/turun)
      if (currentScrollY !== lastScrollY.current) {
        setShowFloating(true);
        lastScrollY.current = currentScrollY;

        // Reset timer setiap scroll
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Sembunyikan navbar setelah 3 detik berhenti scroll
        timeoutRef.current = setTimeout(() => {
          setShowFloating(false);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showFloatingNavbar = showFloating && !footerVisible;

  /* =========================  NAVBAR UTAMA  ========================= */
  const topBar = (
    <header
      /* bar ini tetap fixed + slide‑up saat discroll (logika lama) */
      className={`
      fixed inset-x-0 top-0 z-50
      ${scrolled ? "-translate-y-full" : "translate-y-0"}
      transition-transform duration-500
      /* <— hilangkan shadow bawaan, kita pakai style baru */
    `}
    >
      {/* ======= WRAPPER =======  */}
      <div
        className="
        mx-4       /* jarak kiri‑kanan layar (mobile) */
        md:mx-8    /* jarak kiri‑kanan layar (desktop) */
        mt-3       /* sedikit turun biar ada ruang atas */
        rounded-[36px]    /* sudut besar  (>= rounded-3xl)  */
        bg-[#ffff]/80     /* ungu muda sesuai contoh */
        px-6 py-4
        flex items-center justify-between
        shadow-md
      "
      >
        {/* ======= KIRI: LOGO ======= */}
        <div className="flex items-center gap-3">
          <Image src={DataImage.logo1} alt="logo" className="md:w-10 md:h-10 w-15 h-15 rounded-full" />
          <div className="flex-col md:flex-row">
            <h1 className="text-1xl lg:text-2xl font-bold text-blue-950">PT. SINAR BANGUN TATA SEMESTA</h1>
            <p className=" text-blue-950 font-semibold text-xs italic font-serif">General steel supplier</p>
          </div>
        </div>

        {/* ======= KANAN: MENU ======= */}
        <nav className="hidden lg:flex items-center gap-10 sm:text-2xl text-1xl">
          {[
            { href: "#home", label: "HOME" },
            { href: "#tentang", label: "TENTANG KAMI" },
            { href: "#produk", label: "PRODUK" },
            { href: "#blog", label: "BLOGS" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
              text-sm font-semibold tracking-wider uppercase
              text-gray-800 hover:p-5 hover:bg-blue-950 hover:text-white transition-colors
            "
            >
              {link.label}
            </Link>
          ))}

          {/* ======= CTA BUTTON ======= */}
          <Link
            href="https://wa.me/6282114064622"
            className="
            ml-6
            rounded-full bg-white
            px-6 py-2
            text-sm font-semibold tracking-wide
            shadow hover:bg-blue-900 transition
            hover:text-white
          "
          >
            CONTACT
            <i className="ri-whatsapp-fill p-2 ri-1x text-shadow-zinc-500"></i>
          </Link>
        </nav>
      </div>
    </header>
  );

  // Navbar melayang (saat scroll)
  const floatingBar = (
    <motion.div
      key="floating"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className="flex-col lg:flex-row z-50 fixed bottom-15 right-6 bg-blue-900 text-white shadow-xl rounded-2xl flex items-center lg:gap-2 px-4 py-3"
    >
      <Image src={DataImage.logo1} alt="logo" className="w-8 h-8 bg-white rounded-full" />
      <Link href="#home" className="hover:text-blue-800 hover:bg-white px-2 py-3 rounded-2xl">
        Home
      </Link>
      <Link href="#tentang" className="hover:text-blue-800 hover:bg-white px-2 py-3 rounded-2xl">
        Tentang Kami
      </Link>
      <Link href="#produk" className="hover:text-blue-800 hover:bg-white px-2 py-3 rounded-2xl">
        Produk
      </Link>
      <Link href="#blog" className="hover:text-blue-800 hover:bg-white px-2 py-3 rounded-2xl">
        Blogs
      </Link>
      <Link href="https://wa.me/6282114064622" className="flex-col lg:flex-row flex items-center ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-4 py-2 rounded-xl shadow">
        Contact Us
        <i className="ri-whatsapp-fill p-2 ri-2x text-shadow-zinc-500"></i>
      </Link>
    </motion.div>
  );

  // Render output
  return (
    <>
      {topBar}

      {showFloating && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {isMobile ? (
              <motion.a
                key="whatsapp-icon"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                href="https://wa.me/6282114064622"
                target="_blank"
                rel="noopener noreferrer"
                className="
            flex items-center justify-center
            w-14 h-14 md:w-16 md:h-16
            bg-green-500 hover:bg-green-600
            text-white rounded-full shadow-lg
            cursor-pointer
          "
              >
                <i className="ri-whatsapp-fill text-3xl md:text-4xl"></i>
              </motion.a>
            ) : (
              showFloatingNavbar && floatingBar
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
