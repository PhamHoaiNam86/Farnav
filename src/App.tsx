import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, Volume2, X, SkipForward, Info, PhoneCall, HelpCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import SolutionsSection from './components/SolutionsSection';
import NewsSection from './components/NewsSection';
import VideoSection from './components/VideoSection';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import { VIDEOS } from './data';

export default function App() {
  const [globalVideoPlaying, setGlobalVideoPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const introVideo = VIDEOS[0]; // Giới thiệu FARNAV N50
  const durationSecs = 165; // 2m 45s

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (globalVideoPlaying && isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= durationSecs) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [globalVideoPlaying, isPlaying]);

  useEffect(() => {
    if (globalVideoPlaying) {
      const activeSubtitle = introVideo.subtitleList
        .filter((sub) => currentTime >= sub.time)
        .pop();
      setCurrentSubtitle(activeSubtitle ? activeSubtitle.text : '');
    }
  }, [currentTime, globalVideoPlaying]);

  const handlePlayGlobalVideo = () => {
    setCurrentTime(0);
    setIsPlaying(true);
    setGlobalVideoPlaying(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('san-pham');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 90,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans select-none antialiased text-on-surface">
      {/* Header Navigation */}
      <Header />

      {/* Main Sections Stack */}
      <main className="flex-1">
        {/* Hero Area */}
        <Hero 
          onPlayVideo={handlePlayGlobalVideo} 
          onExploreProducts={handleExploreProducts} 
        />

        {/* 6 Key Features */}
        <Features />

        {/* Featured Products Grid + Specs Sheet */}
        <ProductSection />

        {/* Dynamic Solutions Selector Panel */}
        <SolutionsSection />

        {/* Latest News Feed + Modal Drawer */}
        <NewsSection />

        {/* Video Hub + Integrated Subtitle Player */}
        <VideoSection />

        {/* Trial Registration Center + Receipt Generator */}
        <RegistrationForm />
      </main>

      {/* Page Footer */}
      <Footer />

      {/* Floating Widget: Contact / Support (Zalo / Hotline simulation) */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative">
          <button
            onClick={() => setIsWidgetOpen(!isWidgetOpen)}
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary-container text-white flex items-center justify-center shadow-2xl transition-transform active:scale-95 animate-pulse cursor-pointer border border-white/10"
            title="Liên hệ khẩn cấp"
          >
            <PhoneCall className="w-5 h-5" />
          </button>

          <AnimatePresence>
            {isWidgetOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute bottom-16 left-0 bg-white border border-gray-100 rounded-xl p-5 shadow-2xl w-72 text-left space-y-4"
              >
                <div>
                  <h4 className="font-display text-sm font-extrabold text-on-surface">HOTLINE TƯ VẤN 24/7</h4>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Hãy liên hệ ngay để nhận báo giá chiết khấu đặc biệt tốt nhất hôm nay.
                  </p>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-primary/5 rounded-lg border border-primary/10 flex items-center justify-between">
                    <span className="font-semibold text-on-surface">Phòng kinh doanh:</span>
                    <a href="tel:0988888888" className="font-black text-primary hover:underline">0988 888 888</a>
                  </div>
                  <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center justify-between">
                    <span className="font-semibold text-emerald-900">Hỗ trợ kỹ thuật:</span>
                    <a href="tel:19008686" className="font-black text-emerald-700 hover:underline">1900 8686</a>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsWidgetOpen(false);
                    const el = document.getElementById('dang-ky');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-primary text-white text-xs font-bold py-2.5 rounded-lg hover:bg-primary-container transition-all"
                >
                  ĐĂNG KÝ TEST MÁY TẬN NƠI
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Global overlay player for Hero Video click */}
      <AnimatePresence>
        {globalVideoPlaying && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative flex flex-col"
            >
              {/* Media Header */}
              <div className="px-6 py-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-white text-left">
                <div>
                  <h3 className="font-display text-base font-extrabold text-primary-fixed-dim">
                    Trình chiếu giới thiệu FARNAV GNSS
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">{introVideo.title}</p>
                </div>
                <button
                  onClick={() => setGlobalVideoPlaying(false)}
                  className="p-1.5 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulation Screen */}
              <div className="relative aspect-video bg-zinc-950 flex flex-col items-center justify-center p-4 overflow-hidden">
                <img
                  src={introVideo.thumbnail}
                  alt={introVideo.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-sm select-none"
                />

                {/* Subtitle Box */}
                <div className="absolute bottom-12 left-6 right-6 z-10 flex flex-col items-center">
                  <AnimatePresence mode="wait">
                    {currentSubtitle && (
                      <motion.p
                        key={currentSubtitle}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-black/85 text-white font-display text-sm sm:text-lg px-5 py-2.5 rounded-lg text-center font-semibold border border-white/10 shadow-lg tracking-wide max-w-2xl"
                      >
                        {currentSubtitle}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                  <div className="w-32 h-32 border border-dashed border-white/10 rounded-full"></div>
                </div>

                {isPlaying ? (
                  <div className="flex items-center gap-1.5 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30 z-10">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-[10px] text-white font-bold tracking-wider font-mono">ĐANG PHÁT ĐOẠN PHIM GIỚI THIỆU</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 rounded-full bg-primary hover:bg-primary-container text-white flex items-center justify-center shadow-xl z-10"
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>
                )}
              </div>

              {/* Media Controls */}
              <div className="bg-zinc-900 p-4 space-y-3 border-t border-zinc-800 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-400">{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={durationSecs}
                    value={currentTime}
                    onChange={(e) => setCurrentTime(parseInt(e.target.value))}
                    className="flex-1 accent-primary bg-zinc-700 h-1 rounded-lg cursor-pointer"
                  />
                  <span className="text-xs font-mono text-zinc-400">{formatTime(durationSecs)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 hover:bg-zinc-800 rounded-lg text-white hover:text-primary transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
                    </button>
                    <button
                      onClick={() => setCurrentTime(0)}
                      className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-zinc-400" />
                      <div className="w-16 bg-zinc-700 h-1 rounded">
                        <div className="bg-zinc-300 h-full w-[80%] rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-lg border border-zinc-700">
                    <Info className="w-3.5 h-3.5 text-primary-fixed-dim" />
                    <span className="text-[10px] font-bold text-zinc-300">TỰ ĐỘNG KHỚP PHỤ ĐỀ SATELLITE</span>
                  </div>

                  <button
                    onClick={() => setCurrentTime((prev) => Math.min(prev + 30, durationSecs))}
                    className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-bold"
                  >
                    Tua 30s
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
