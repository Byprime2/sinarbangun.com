"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ detect perubahan halaman
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PreLoader from "../../components/PreLoader";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // setiap kali pindah halaman, aktifkan preloader
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // durasi preloader (ms)

    return () => clearTimeout(timer);
  }, [pathname]); // ✅ jalan setiap route berubah

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
