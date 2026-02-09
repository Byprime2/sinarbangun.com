"use client";

import React from "react";
import Link from "next/link";
import blogData from "../blog/blogData";
import IklanRotator from "./IklanRotator"; 
import { motion } from "framer-motion";

const BlogSection = () => {
  const mainArticle = blogData[0];
  const subArticles = blogData.slice(1, 7); 

  return (
    <section id="blog" className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADLINE SECTION - SEO OPTIMIZED HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-black tracking-[0.4em] uppercase text-xs mb-3 block"
            >
              Industry Knowledge
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-tighter leading-none">
              LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic">INSIGHTS</span>
            </h2>
          </div>
          <div className="md:text-right border-l-4 md:border-l-0 md:border-r-4 border-blue-600 pl-4 md:pl-0 md:pr-4 py-1">
            <p className="text-slate-500 max-w-xs text-sm font-bold leading-relaxed uppercase tracking-tight">
              Informasi terkini mengenai spesifikasi baja, tren konstruksi, dan berita industri baja Indonesia.
            </p>
          </div>
        </header>

        {/* ARTIKEL UTAMA + IKLAN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
          
          {/* Artikel Utama - SEO Article Tag */}
          <article className="lg:col-span-8 group">
            <Link href={`/blog/${mainArticle.slug}`} title={mainArticle.title}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-[350px] md:h-[550px] overflow-hidden">
                  <img 
                    src={mainArticle.image} 
                    alt={`Update Industri: ${mainArticle.title}`} // Image SEO
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  
                  {/* Category Tag */}
                  <div className="absolute bottom-8 left-8">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl">
                      Featured Update
                    </span>
                  </div>
                </div>
                
                {/* Content Box */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-5xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-[1.1] mb-6 tracking-tight">
                    {mainArticle.title}
                  </h3>
                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed line-clamp-2 mb-8 font-medium">
                    {mainArticle.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <span className="flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                      Read Investigation <i className="ri-arrow-right-line text-lg"></i>
                    </span>
                    <time className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Update 2026</time>
                  </div>
                </div>
              </motion.div>
            </Link>
          </article>

          {/* Sidebar / Iklan */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-slate-900 rounded-[3rem] p-3 h-full shadow-2xl relative overflow-hidden flex flex-col">
               {/* Premium Glow Effect */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
               <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>
               
               <div className="relative z-10 flex flex-col h-full">
                  <div className="p-6 pb-2">
                    <span className="text-blue-400 font-black text-[10px] tracking-[0.3em] uppercase opacity-70">Official Partner</span>
                  </div>
                  <IklanRotator />
               </div>
            </div>
          </aside>
        </div>

        {/* SECTION HEADER LAINNYA */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-[2px] bg-blue-600 w-16"></div>
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em] whitespace-nowrap italic">
            Recommended Reading
          </h4>
          <div className="h-[1px] bg-slate-200 flex-grow"></div>
        </div>

        {/* GRID ARTIKEL KECIL - SEO List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {subArticles.map((item, idx) => (
            <article key={item.slug}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${item.slug}`} className="group" title={item.title}>
                  <div className="bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-40 overflow-hidden rounded-[1.8rem] mb-5">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" 
                      />
                    </div>
                    <div className="px-1 flex-grow">
                      <h4 className="text-[13px] font-black text-slate-800 group-hover:text-blue-600 leading-[1.4] line-clamp-3 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">View Insight</span>
                       <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <i className="ri-arrow-right-up-line text-sm"></i>
                       </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;