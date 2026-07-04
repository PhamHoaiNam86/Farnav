import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onPlayVideo: () => void;
  onExploreProducts: () => void;
}

export default function Hero({ onPlayVideo, onExploreProducts }: HeroProps) {
  return (
    <section id="trang-chu" className="relative pt-8 pb-16 md:py-20 overflow-hidden bg-surface flex items-center">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl -z-10 pulse-glow"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <span className="font-display text-[10px] sm:text-xs tracking-[0.2em] font-extrabold text-primary mb-4 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
              GNSS TECHNOLOGY 4.0
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-on-surface leading-[1.1] mb-6 tracking-tight">
              FARNAV <span className="text-primary">GNSS 4.0</span>
              <br />
              DẪN ĐƯỜNG TƯƠNG LAI
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed">
              Giải pháp định vị thông minh và dẫn đường chuyên nghiệp chính xác - ổn định - hiệu quả cho mọi hành trình. Tiên phong ứng dụng công nghệ trắc địa số thế hệ mới.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreProducts}
                className="bg-primary text-white font-display text-xs tracking-wider font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-md hover:shadow-lg group"
              >
                KHÁM PHÁ SẢN PHẨM
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={onPlayVideo}
                className="border-2 border-primary text-primary font-display text-xs tracking-wider font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 transition-all active:scale-95"
              >
                XEM VIDEO
                <Play className="w-4 h-4 text-primary fill-primary/10" />
              </button>
            </div>

            {/* Micro Specs Banner */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-100 mt-10 w-full max-w-lg">
              <div>
                <p className="font-display text-2xl lg:text-3xl font-black text-primary">1500+</p>
                <p className="text-[10px] text-on-surface-variant font-bold tracking-wider uppercase mt-1">Kênh Thu</p>
              </div>
              <div>
                <p className="font-display text-2xl lg:text-3xl font-black text-primary">&lt; 1cm</p>
                <p className="text-[10px] text-on-surface-variant font-bold tracking-wider uppercase mt-1">RTK Sai Số</p>
              </div>
              <div>
                <p className="font-display text-2xl lg:text-3xl font-black text-primary">20h</p>
                <p className="text-[10px] text-on-surface-variant font-bold tracking-wider uppercase mt-1">Thời Lượng Pin</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Visual highlight box */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/30 to-transparent blur-xl opacity-30"></div>
            
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-2xl border border-gray-200 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR3GEGu8yGOKhtxqGbQA3a9T-ZyBgs8QV0bDfcZbvbzJdEeYFrJ5ELlv8o-jtCd7mmp7rbjFHyGoXGIZmWB_A3DJ-nQL7v0kvCzkyCNIntYPBGHk89A3D9VjqBZx6FvsjaMod8z_XLZPg2qAbfJct-RooW9blkzvrDMFBNzzqGyTdKsuxylVIRBPe7Lzph05C8bHbGfyDDsuXJB3nZO-u2gYFLlkg2MO6pCJmPv6BtBy89s-T52f0qMp9XvxUTJKa4s08g4KbHZEJZ4Q"
                alt="GNSS Surveying Equipment Walkway"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Image gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"></div>
              
              {/* Dynamic Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-on-surface">FARNAV GNSS RTK 4.0</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">Sản phẩm phân phối chính hãng đạt chuẩn quốc tế</p>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
