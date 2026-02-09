"use client";

import { useEffect, useState, useMemo } from "react";

const IklanRotator = () => {
  // List gambar iklan (letakkan di /public/images/)
  const iklanImages = useMemo(() => ["/images/iklan1.png", "/images/iklan2.png", "/images/iklan3.png", "/images/iklan4.png", "/images/iklan5.png", "/images/iklan7.png"], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % iklanImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [iklanImages.length]);

  return (
    <div className="rounded-xl w-full aspect-[9/16] max-w-[360px] mx-auto overflow-hidden">
      <img src={iklanImages[currentIndex]} alt={`Iklan ${currentIndex + 1}`} className="w-full h-full object-cover transition-all duration-700 rounded-lg" />
    </div>
  );
};

export default IklanRotator;
