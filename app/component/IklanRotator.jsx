"use client";

import React, { useEffect, useState, useMemo } from "react";

const IklanRotator = () => {
  // Gambar iklan 1080x1920 px
  const iklanImages = useMemo(() => ["/images/iklan1.png", "/images/iklan2.png", "/images/iklan3.png", "/images/iklan4.png", "/images/iklan5.png", "/images/iklan7.png"], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % iklanImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [iklanImages.length]);

  return (
    <div className="rounded-xl w-full aspect-[9/16] max-w-[360px] mx-auto">
      <img src={iklanImages[currentIndex]} alt={`Iklan ${currentIndex + 1}`} className="w-full h-full object-contain transition-all duration-700 rounded-lg" />
    </div>
  );
};

export default IklanRotator;
