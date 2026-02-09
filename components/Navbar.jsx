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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      if (currentScrollY > 400 && currentScrollY !== lastScrollY.current) {
        setShowFloating(true);
        lastScrollY.current = currentScrollY;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setShowFloating(false);
        }, 3000);
      } else if (currentScrollY <= 400) {
        setShowFloating(false);
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#tentang", label: "Tentang" },
    { href: "/#produk", label: "Produk" },
    { href: "/#blog", label: "Insights" },
  ];

/* ========================= NAVBAR UTAMA (TOP) - SLIM EXECUTIVE ========================= */
  const topBar = (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 mt-5"> 
        <div className="bg-white/85 backdrop-blur-xl border border-slate-200/50 rounded-[2rem] px-8 py-3 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          
          {/* LOGO AREA - BALANCED SIZE */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
               <img 
                 src={DataImage.logo1} 
                 alt="logo" 
                 className="w-full h-full object-contain rounded-full border-2 border-slate-100 shadow-sm" 
               />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-black text-slate-900 leading-none tracking-tight uppercase">
                PT. SINAR BANGUN TATA SEMESTA
              </h1>
              <p className="text-[10px] text-blue-600 font-extrabold tracking-[0.25em] uppercase mt-1">
                Supplier besi & baja
              </p>
            </div>
          </div>

          {/* MENU DESKTOP - CLEAN & PROFESSIONAL */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-[13px] font-bold text-slate-600 hover:text-blue-600 rounded-xl hover:bg-blue-50/50 transition-all uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            
            {/* SEPARATOR */}
            <div className="h-6 w-[1px] bg-slate-200 mx-4"></div>

            {/* BUTTON CONTACT - RAMPING & ELEGAN */}
            <Link
              href="/kontak"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-black hover:bg-blue-600 transition-all flex items-center gap-2 tracking-widest active:scale-95 shadow-md shadow-slate-200"
            >
              CONTACT
              <i className="ri-whatsapp-line text-base text-green-400"></i>
            </Link>
          </nav>

          {/* HAMBURGER MOBILE */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900" 
            onClick={() => setMenuOpen(true)}
          >
            <i className="ri-menu-5-line text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );

  /* ========================= NAVBAR MELAYANG (FLOATING) ========================= */
  const floatingBar = (
    <motion.div
      key="floating-nav"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-slate-900/90 backdrop-blur-xl p-2 rounded-[2rem] border border-white/10 shadow-2xl"
    >
      <div className="px-3 border-r border-white/10 mr-2 hidden md:block">
         <img src={DataImage.logo1} alt="logo" className="w-6 h-6 rounded-full grayscale brightness-200" />
      </div>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-4 py-2 text-[11px] font-bold text-white/70 hover:text-white uppercase tracking-widest"
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="https://wa.me/6282114064622"
        target="_blank"
        className="ml-2 bg-green-500 hover:bg-green-400 text-white px-5 py-2 rounded-2xl text-[11px] font-black flex items-center gap-2 transition-all"
      >
        CHAT <i className="ri-whatsapp-line"></i>
      </Link>
    </motion.div>
  );

  return (
    <>
      {topBar}

      {/* FLOATING ACTION */}
      <AnimatePresence>
        {showFloating && !footerVisible && (
          isMobile ? (
            <motion.a
              key="wa-mobile"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 45 }}
              href="https://wa.me/6282114064622"
              target="_blank"
              className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl border-4 border-white active:scale-90 transition-transform"
            >
              <i className="ri-whatsapp-fill"></i>
            </motion.a>
          ) : floatingBar
        )}
      </AnimatePresence>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-[60]"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] h-full bg-white z-[70] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <img src={DataImage.logo1} alt="logo" className="w-12 h-12 rounded-full shadow-lg" />
                <button onClick={() => setMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-900">
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={link.href} onClick={() => setMenuOpen(false)} className="text-3xl font-black text-slate-900 hover:text-blue-600 transition-colors">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link href="/kontak" className="mt-8 bg-blue-600 text-white py-5 rounded-[2rem] text-center font-black text-xl shadow-xl shadow-blue-200">
                  HUBUNGI KAMI
                </Link>
              </div>
              <div className="mt-auto border-t pt-8 text-slate-400 text-xs font-bold tracking-widest uppercase">
                © {new Date().getFullYear()} PT. SBTS INDONESIA
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}