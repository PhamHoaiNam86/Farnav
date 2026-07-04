import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, X, Clock, User, Calendar, BookOpen } from 'lucide-react';
import { NEWS } from '../data';
import { News } from '../types';

export default function NewsSection() {
  const [activeArticle, setActiveArticle] = useState<News | null>(null);

  return (
    <section id="tin-tuc" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="font-display text-xs tracking-[0.2em] font-extrabold text-primary uppercase">
              INSIGHTS & UPDATES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-on-surface mt-2 tracking-tight">
              TIN TỨC MỚI NHẤT
            </h2>
          </div>
          <button
            onClick={() => {
              // Direct view first news
              setActiveArticle(NEWS[0]);
            }}
            className="flex items-center gap-2 text-primary font-display text-xs tracking-wider font-extrabold hover:translate-x-1 transition-transform cursor-pointer"
          >
            XEM TIN TỨC TIÊU BIỂU
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEWS.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
            >
              {/* News Thumbnail */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-100 text-[11px] font-bold text-on-surface flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{article.date}</span>
                </div>
              </div>

              {/* News Text */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-on-surface-variant flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {article.readTime}
                  </span>

                  <button
                    onClick={() => setActiveArticle(article)}
                    className="text-on-surface font-display text-xs tracking-wider font-bold flex items-center gap-1 group-hover:text-primary transition-colors cursor-pointer"
                  >
                    ĐỌC THÊM
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
