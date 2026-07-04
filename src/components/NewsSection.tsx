import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, Clock, User, Calendar, BookOpen } from 'lucide-react';
import { NEWS } from '../data';
import { News } from '../types';

export default function NewsSection() {
  const [activeArticle, setActiveArticle] = useState<News | null>(null);

  const featuredArticle = NEWS[0];
  const rightArticles = NEWS.slice(1, 3);
  const mostViewedArticles = NEWS.slice(3, 7);

  return (
    <section id="tin-tuc" className="py-20 bg-surface">
      <div className="max-w-[1680px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="font-display text-xs tracking-[0.2em] font-extrabold text-primary uppercase">
              INSIGHTS & UPDATES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-shimmer mt-2 tracking-tight">
              TIN TỨC MỚI NHẤT
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveArticle(featuredArticle);
            }}
            className="flex items-center gap-2 text-primary font-display text-xs tracking-wider font-extrabold hover:translate-x-1 transition-transform cursor-pointer"
          >
            XEM TIN TỨC TIÊU BIỂU
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Column Layout: Left (flexible), Middle (700px), Right (320px) with 40px gap */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_700px_320px] gap-8 lg:gap-[40px] items-start">
          
          {/* Left Column: Xem nhiều nhất */}
          <div className="space-y-6 text-left">
            <h3 className="font-display text-lg font-black text-on-surface flex items-center gap-2 uppercase tracking-wide">
              Xem nhiều lần
            </h3>
            <div className="space-y-5">
              {mostViewedArticles.map((article, idx) => (
                <motion.div
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.0, 
                    delay: idx * 0.15, 
                    ease: [0.16, 1, 0.3, 1] as any 
                  }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="w-[140px] h-[130px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100 relative floating-shadow-zoom-105">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
                    <h4 className="font-display text-lg sm:text-xl font-bold text-on-surface line-clamp-4 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <span className="text-[10px] text-on-surface-variant flex items-center gap-1 font-semibold mt-2">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {article.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Middle Column: Tin mới - Main featured */}
          <div className="space-y-6 text-left">
            <h3 className="font-display text-lg font-black text-on-surface uppercase tracking-wide">
              Tin mới
            </h3>
            {featuredArticle && (
              <motion.div
                onClick={() => setActiveArticle(featuredArticle)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1] as any 
                }}
                className="group cursor-pointer flex flex-col gap-[25px] text-left mx-auto max-w-[700px] w-full"
              >
                <div className="w-full aspect-[14/13] overflow-hidden rounded-xl bg-gray-100 relative floating-shadow-zoom-103">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-100 text-[11px] font-bold text-on-surface flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-on-surface group-hover:text-primary transition-colors leading-tight mb-3">
                    {featuredArticle.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-1">
                    {featuredArticle.summary}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Other articles stacked */}
          <div className="space-y-6 text-left">
            <h3 className="font-display text-lg font-black text-transparent select-none uppercase tracking-wide hidden lg:block">
              Spacer
            </h3>
            {rightArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.0, 
                  delay: idx * 0.2, 
                  ease: [0.16, 1, 0.3, 1] as any 
                }}
                className="group cursor-pointer flex flex-col gap-2 w-full"
              >
                <div className="w-full aspect-[16/15] overflow-hidden rounded-xl bg-gray-50 border border-gray-100 relative floating-shadow-zoom-105">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-gray-100 text-[10px] font-bold text-on-surface flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h4>
                  {/* <span className="text-[10px] text-on-surface-variant flex items-center gap-1 font-semibold mt-1.5">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {article.readTime}
                  </span> */}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Complete Article Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col text-left"
            >
              {/* Modal Header */}
              <div className="bg-surface px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary font-display text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>Tin Tức Sự Kiện</span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 hover:bg-gray-100 rounded-full text-on-surface-variant transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Article Body */}
              <div className="p-6 md:p-10 overflow-y-auto flex-1 space-y-6">
                {/* Meta Row */}
                <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant font-medium">
                  <span className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {activeArticle.date}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-full">
                    <User className="w-3.5 h-3.5 text-primary" />
                    {activeArticle.author}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {activeArticle.readTime}
                  </span>
                </div>

                <h1 className="font-display text-2xl sm:text-3xl font-black text-on-surface leading-tight">
                  {activeArticle.title}
                </h1>

                {/* Hero image */}
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Structured text paragraphs */}
                <div className="space-y-4 text-base text-on-surface-variant leading-relaxed">
                  {activeArticle.content.map((paragraph, idx) => {
                    // Accentuate blockquotes or conclusions if needed
                    const isQuote = paragraph.startsWith('"') || paragraph.startsWith('“');
                    return (
                      <p
                        key={idx}
                        className={
                          isQuote
                            ? 'border-l-4 border-primary pl-4 py-2 italic bg-primary/5 text-on-surface rounded-r-lg font-medium'
                            : ''
                        }
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-surface px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-on-surface-variant italic">
                  FARNAV Việt Nam - Đơn vị chuyển giao công nghệ hàng đầu.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      const registerSection = document.getElementById('dang-ky');
                      if (registerSection) registerSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-lg font-display text-xs font-bold transition-all active:scale-95"
                  >
                    LIÊN HỆ TƯ VẤN SẢN PHẨM
                  </button>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="border border-gray-200 hover:bg-gray-50 text-on-surface px-5 py-2.5 rounded-lg font-display text-xs font-bold transition-all"
                  >
                    ĐÓNG
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
