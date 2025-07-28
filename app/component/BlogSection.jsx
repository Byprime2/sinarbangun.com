"use client";

import React from "react";
import Link from "next/link";
import blogData from "../blog/blogData";
import IklanRotator from "./IklanRotator"; // Optional jika pakai rotator

const BlogSection = () => {
  const mainArticle = blogData[0];
  const subArticles = blogData.slice(1, 7); // Ambil 6 artikel lainnya

  return (
    <section id="blog" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADLINE */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-800">BLOG</h2>
          <p className="text-lg text-gray-500 italic mt-2">Berita terbaru seputar plat baja & industri konstruksi</p>
        </div>

        {/* ARTIKEL UTAMA + IKLAN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Artikel Utama */}
          <Link href={`/blog/${mainArticle.slug}`} className="lg:col-span-9">
            <div className="cursor-pointer">
              <img src={mainArticle.image} alt={mainArticle.title} className="w-full h-[460px] object-cover rounded-lg" />
              <h3 className="mt-4 text-3xl font-bold text-gray-800 hover:text-blue-600">{mainArticle.title}</h3>
              <p className="text-gray-600 mt-2 text-base">{mainArticle.summary}</p>
            </div>
          </Link>

          {/* Iklan */}
          <div className="lg:col-span-3">
            <IklanRotator />
          </div>
        </div>

        {/* ARTIKEL LAINNYA */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-600 inline-block pb-1">Artikel Lainnya</h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {subArticles.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`}>
              <div className="cursor-pointer group">
                <img src={item.image} alt={item.title} className="w-full h-[120px] object-cover rounded-lg" />
                <p className="text-sm mt-2 text-gray-800 group-hover:text-blue-600 leading-snug line-clamp-2 font-semibold">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
