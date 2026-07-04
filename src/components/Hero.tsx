import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onPlayVideo: () => void;
  onExploreProducts: () => void;
}

export default function Hero({ onPlayVideo, onExploreProducts }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [channelsCount, setChannelsCount] = useState(0);
  const [batteryCount, setBatteryCount] = useState(0);

  const slides = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBR3GEGu8yGOKhtxqGbQA3a9T-ZyBgs8QV0bDfcZbvbzJdEeYFrJ5ELlv8o-jtCd7mmp7rbjFHyGoXGIZmWB_A3DJ-nQL7v0kvCzkyCNIntYPBGHk89A3D9VjqBZx6FvsjaMod8z_XLZPg2qAbfJct-RooW9blkzvrDMFBNzzqGyTdKsuxylVIRBPe7Lzph05C8bHbGfyDDsuXJB3nZO-u2gYFLlkg2MO6pCJmPv6BtBy89s-T52f0qMp9XvxUTJKa4s08g4KbHZEJZ4Q',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCUSu3AmLyV_8N2fBSOcwpz75vHg6_XeTD6UnXj33dQ6zNx7vzq5gs5V3iY_S789OEnl6yqK_z26Pk5D12pefG2rlBnRxjVsAJSTMk80Gksp0HiyfGPVd_qV3TJM5D6bM7gcZJl4slbHscv3vy7eDgCX2y3RL_B1wA6fAw4UW38FgFq1qUqyMVHzcWE4hC-QpadFQmnvt2JmSI9VyCNmXj6PATQUN65_qFjlNghfPSWDx31Lg3uZsSxCoKQKZVPJgFsqpxFNF26_2Pw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB4PQoZ4Ku4ooLiPJvBDyvOgYdTlmtxyN5AhgpEmLLjYpBqDtrYThJ2vthERG5iCy7Cyb3jyMp8-Oer4ZaFJ5cG1jYTvkRINyNWhvYayl3wtnNLGv0TQVtgfYIwdUQpMu7C3ACuim8A23SrjurmexjPhq4EYUxnM89UKLBolBelPagA4tNYi0zDPD4G18Sy8wyCgAt36SKY29ZzwIKHyC5xKwNZrLZ358d7rlF_I3L9s0e3djnp7f46Z7ak-qfJvSZGbrOJD3pEz4ZP'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const animFrameId = useRef<number | null>(null);

  const triggerCountAnimation = () => {
    if (animFrameId.current) {
      cancelAnimationFrame(animFrameId.current);
    }

    setChannelsCount(0);
    setBatteryCount(0);

    let startTimestamp: number | null = null;
    const duration = 1500; // Snappy 1.5 seconds

    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      
      setChannelsCount(Math.floor(easeProgress * 1500));
      setBatteryCount(Math.floor(easeProgress * 20));

      if (progress < 1) {
        animFrameId.current = window.requestAnimationFrame(step);
      } else {
        animFrameId.current = null;
      }
    };

    animFrameId.current = window.requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22, // delay between each item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1] as any, // easeOutExpo
      },
    },
  };

  return (
    <section id="trang-chu" className="relative pt-8 pb-16 md:py-20 overflow-hidden bg-surface flex items-center">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl -z-10 pulse-glow"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl -z-10"></div>

      <div className="max-w-[1680px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <motion.span 
              variants={itemVariants}
              className="font-display text-[10px] sm:text-xs tracking-[0.2em] font-extrabold text-primary mb-4 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10 inline-block text-left"
            >
              GNSS TECHNOLOGY 4.0
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-on-surface leading-[1.15] mb-6 tracking-tight"
            >
              FARNAV <span className="text-shimmer">GNSS 4.0</span>
              <br />
              <span className="text-shimmer">DẪN ĐƯỜNG TƯƠNG LAI</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed"
            >
              Giải pháp định vị thông minh và dẫn đường chuyên nghiệp chính xác - ổn định - hiệu quả cho mọi hành trình. Tiên phong ứng dụng công nghệ trắc địa số thế hệ mới.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
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
            </motion.div>

            {/* Micro Specs Banner */}
            <motion.div 
              variants={itemVariants}
              viewport={{ once: false }}
              onViewportEnter={triggerCountAnimation}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-100 mt-10 w-full max-w-xl"
            >
              <div>
                <p className="font-display text-4xl lg:text-5xl font-black text-primary">{channelsCount}+</p>
                <p className="text-sm lg:text-[18px] text-on-surface-variant font-semibold mt-2">Kênh Thu</p>
              </div>
              <div>
                <p className="font-display text-4xl lg:text-5xl font-black text-primary">&lt; 1cm</p>
                <p className="text-sm lg:text-[18px] text-on-surface-variant font-semibold mt-2">RTK Sai Số</p>
              </div>
              <div>
                <p className="font-display text-4xl lg:text-5xl font-black text-primary">{batteryCount}h</p>
                <p className="text-sm lg:text-[18px] text-on-surface-variant font-semibold mt-2">Thời Lượng Pin</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 2.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:col-span-5 relative floating-shadow rounded-2xl"
          >
            {/* Visual highlight box */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/30 to-transparent blur-xl opacity-30"></div>
            
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-2xl border border-gray-200 group">
              <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide]}
                    alt={`GNSS Surveying Equipment Walkway ${currentSlide + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              
              {/* Image gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              
              {/* Dynamic Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex items-center justify-between z-10">
                <div>
                  <p className="text-xs font-bold text-on-surface">FARNAV GNSS RTK 4.0</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">Sản phẩm phân phối chính hãng đạt chuẩn quốc tế</p>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              {/* Slide dots indicators */}
              <div className="absolute top-4 right-4 flex gap-1.5 z-10 bg-black/25 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-4 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
