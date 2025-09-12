/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import DataImage from "../public/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Navbar melayang saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY !== lastScrollY.current) {
        setShowFloating(true);
        lastScrollY.current = currentScrollY;

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
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

  // Deteksi layar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showFloatingNavbar = showFloating && !footerVisible;

  /* =========================  NAVBAR UTAMA ========================= */
  const topBar = (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        ${scrolled ? "-translate-y-full" : "translate-y-0"}
        transition-transform duration-500
      `}
    >
      <div
        className="
          mx-4 md:mx-8 mt-3
          rounded-[36px]
          bg-[#ffff]/80
          px-6 py-4
          flex items-center justify-between
          shadow-md
        "
      >
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={DataImage.logo1} alt="logo" className="md:w-10 md:h-10 w-15 h-15 rounded-full" />
          <div className="flex-col md:flex-row">
            <h1 className="text-1xl lg:text-2xl font-bold text-blue-950">PT. SINAR BANGUN TATA SEMESTA</h1>
            <p className=" text-blue-950 font-semibold text-xs italic font-serif">General steel supplier</p>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex items-center gap-10 sm:text-2xl text-1xl">
          {[
            { href: "/", label: "HOME" },
            { href: "/#tentang", label: "TENTANG KAMI" },
            { href: "/#produk", label: "PRODUK" },
            { href: "/#blog", label: "BLOGS" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold tracking-wider uppercase text-gray-800 hover:p-5 hover:bg-blue-950 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}

          {/* TOMBOL CONTACT → page kontak */}
          <Link
            href="/kontak"
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

        {/* HAMBURGER MOBILE */}
        <button className="lg:hidden text-3xl text-blue-900" onClick={() => setMenuOpen(true)}>
          <i className="ri-menu-line"></i>
        </button>
      </div>
    </header>
  );

  /* =========================  NAVBAR MELAYANG (DESKTOP) ========================= */
  const floatingBar = (
    <motion.div
      key="floating"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className="flex-col lg:flex-row z-50 fixed bottom-15 right-6 bg-blue-900 text-white shadow-xl rounded-2xl flex items-center lg:gap-2 px-4 py-3"
    >
      <img src={DataImage.logo1} alt="logo" className="w-8 h-8 bg-white rounded-full" />
      <Link href="/" className="hover:text-blue-800 hover:bg-white px-2 py-3 rounded-2xl">
        Home
      </Link>
      <Link href="/#tentang" className="hover:text-blue-800 hover:bg-white px-2 py-3 rounded-2xl">
        Tentang Kami
      </Link>
      <Link href="/#produk" className="hover:text-blue-800 hover:bg-white px-2 py-3 rounded-2xl">
        Produk
      </Link>
      <Link href="/#blog" className="hover:text-blue-800 hover:bg-white px-2 py-3 rounded-2xl">
        Blogs
      </Link>
      <Link href="/kontak" className="flex-col lg:flex-row flex items-center ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-4 py-2 rounded-xl shadow">
        Contact Us
        <i className="ri-whatsapp-fill p-2 ri-2x text-shadow-zinc-500"></i>
      </Link>
    </motion.div>
  );

  return (
    <>
      {topBar}

      {/* FLOATING NAVBAR & ICON WA */}
      {showFloating && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {isMobile ? (
              // Tombol WhatsApp langsung (mobile)
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

      {/* HAMBURGER MENU MOBILE (MUNCUL DARI KIRI) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black z-40" onClick={() => setMenuOpen(false)} />

            {/* SLIDE-IN MENU DARI KIRI */}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 left-0 w-3/4 h-full opacity-95 bg-white shadow-2xl z-50 flex flex-col p-8"
            >
              {/* HEADER DALAM MENU → LOGO SAJA */}
              <div className="flex items-center justify-between mb-12">
                <img src={DataImage.logo1} alt="logo" className="w-12 h-12 rounded-full" />
                <button onClick={() => setMenuOpen(false)} className="text-3xl text-gray-600 hover:text-red-500">
                  <i className="ri-close-line"></i>
                </button>
              </div>

              {/* MENU LIST */}
              <div className="flex flex-col gap-6 text-lg font-semibold">
                {[
                  { href: "/", label: "HOME" },
                  { href: "/#tentang", label: "TENTANG KAMI" },
                  { href: "/#produk", label: "PRODUK" },
                  { href: "/#blog", label: "BLOGS" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-blue-900 transition-colors">
                    {link.label}
                  </Link>
                ))}

                {/* TOMBOL CONTACT */}
                <Link href="/kontak" onClick={() => setMenuOpen(false)} className="mt-6 inline-block text-center bg-blue-900 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition">
                  CONTACT
                </Link>
              </div>

              {/* FOOTER MENU */}
              <div className="mt-auto pt-10 text-sm text-gray-500">© {new Date().getFullYear()} PT. Sinar Bangun Tata Semesta</div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
