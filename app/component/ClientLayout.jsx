"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PreLoader from "../../components/PreLoader";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // durasi preloader, bisa kamu ubah

    return () => clearTimeout(timer);
  }, []);

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
