import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, Volume2, Maximize, X, SkipForward, Info } from 'lucide-react';
import { VIDEOS } from '../data';
import { VideoClip } from '../types';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<VideoClip>(VIDEOS[0]);
  const [isPlayingModalOpen, setIsPlayingModalOpen] = useState(false);

  // Video player simulator states
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationSecs, setDurationSecs] = useState(165); // Default N50 is 2:45 (165s)
  const [volume, setVolume] = useState(80);
  const [currentSubtitle, setCurrentSubtitle] = useState('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Parse duration string e.g. "02:45" to total seconds
  const parseDuration = (durStr: string): number => {
    const parts = durStr.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
    return 120;
  };

  // Sync subtitle with timer
  useEffect(() => {
    if (isPlayingModalOpen) {
      const activeSubtitle = activeVideo.subtitleList
        .filter((sub) => currentTime >= sub.time)
        .pop();
      setCurrentSubtitle(activeSubtitle ? activeSubtitle.text : '');
    }
  }, [currentTime, activeVideo, isPlayingModalOpen]);

  // Video playback ticker simulator
  useEffect(() => {
    if (isPlaying && isPlayingModalOpen) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= durationSecs) {
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isPlayingModalOpen, durationSecs]);

  const handleOpenPlayer = (video: VideoClip) => {
    setActiveVideo(video);
    setDurationSecs(parseDuration(video.duration));
    setCurrentTime(0);
    setIsPlaying(true);
    setIsPlayingModalOpen(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(parseInt(e.target.value));
  };

  return (
    <section id="video" className="py-20 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-display text-xs tracking-[0.2em] font-extrabold text-primary uppercase">
            VIDEO GALLERY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-on-surface mt-2 tracking-tight">
            VIDEO NỔI BẬT
          </h2>
        </div>

        {/* Master Active Video Showcase */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 group cursor-pointer shadow-xl border border-gray-200">
          <img
            src={activeVideo.thumbnail}
            alt={activeVideo.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
            <button
              onClick={() => handleOpenPlayer(activeVideo)}
              className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform active:scale-95 cursor-pointer"
            >
              <Play className="w-8 h-8 fill-white ml-1" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="text-left">
              <span className="bg-primary/20 backdrop-blur-md text-primary-fixed-dim text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-md border border-primary/20 uppercase">
                ĐANG CHỌN
              </span>
              <h3 className="text-white text-lg sm:text-2xl font-black tracking-tight mt-2">
                {activeVideo.title}
              </h3>
            </div>
            <span className="text-xs font-mono font-bold bg-black/60 px-3 py-1 rounded-full text-gray-300 border border-white/10 self-start sm:self-auto">
              Thời lượng: {activeVideo.duration}
            </span>
          </div>
        </div>

        {/* Thumbnail Selector Row */}
        <div className="text-left mb-3">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Danh sách phát Video hướng dẫn & sự kiện:
          </span>
        </div>
        
        {/* Horizontal scrolling strip */}
        <div className="flex overflow-x-auto gap-6 pb-6 custom-scrollbar scroll-smooth">
          {VIDEOS.map((video) => {
            const isActive = video.id === activeVideo.id;
            return (
              <div
                key={video.id}
                onClick={() => {
                  setActiveVideo(video);
                  setDurationSecs(parseDuration(video.duration));
                }}
                className={`flex-shrink-0 w-72 p-3 rounded-xl transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-white border-primary shadow-md'
                    : 'bg-white/50 border-gray-100 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow">
                      <Play className="w-4 h-4 fill-primary ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 text-[10px] font-bold font-mono bg-black/70 px-2 py-0.5 rounded text-white">
                    {video.duration}
                  </span>
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-on-surface line-clamp-2 text-left h-10 leading-snug">
                  {video.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      {/* High Fidelity Interactive Subtitled Video Player Modal */}
      <AnimatePresence>
        {isPlayingModalOpen && (
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
                    Trình chiếu FARNAV Media Player v1.0
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{activeVideo.title}</p>
                </div>
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setIsPlayingModalOpen(false);
                  }}
                  className="p-1.5 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulation Screen */}
              <div className="relative aspect-video bg-zinc-950 flex flex-col items-center justify-center p-4 overflow-hidden">
                {/* Visual Media Background Image with heavy blur/brightness mask */}
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-sm select-none"
                />

                {/* Subtitle Box (bottom aligned) */}
                <div className="absolute bottom-12 left-6 right-6 z-10 flex flex-col items-center">
                  <AnimatePresence mode="wait">
                    {currentSubtitle && (
                      <motion.p
                        key={currentSubtitle}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-black/85 text-white font-display text-sm sm:text-lg px-5 py-2.5 rounded-lg text-center font-semibold border border-white/10 shadow-lg tracking-wide max-w-2xl leading-relaxed"
                      >
                        {currentSubtitle}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Spinning radar HUD to make it feel super tech */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                  <div className="w-32 h-32 border border-dashed border-white/10 rounded-full"></div>
                </div>

                {/* Simulated playback graphic */}
                {isPlaying ? (
                  <div className="flex items-center gap-1.5 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30 z-10">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-[10px] text-white font-bold tracking-wider font-mono">ĐANG PHÁT DEMO</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 rounded-full bg-primary hover:bg-primary-container text-white flex items-center justify-center shadow-xl z-10"
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>
                )}

                {/* Technical watermark */}
                <div className="absolute top-4 left-4 text-[9px] font-mono text-zinc-500 tracking-wider">
                  ENCODE: H.264 / 1080P / STEREO / SATELLITE_FEED
                </div>
              </div>

              {/* Media Controls bar */}
              <div className="bg-zinc-900 p-4 space-y-3 border-t border-zinc-800 text-white">
                {/* Scrubbing timeline */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-400">{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={durationSecs}
                    value={currentTime}
                    onChange={handleSliderChange}
                    className="flex-1 accent-primary bg-zinc-700 h-1 rounded-lg cursor-pointer"
                  />
                  <span className="text-xs font-mono text-zinc-400">{formatTime(durationSecs)}</span>
                </div>

                {/* Controls buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Play / Pause toggle */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 hover:bg-zinc-800 rounded-lg text-white hover:text-primary transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
                    </button>

                    {/* Reset button */}
                    <button
                      onClick={() => setCurrentTime(0)}
                      className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                      title="Phát lại từ đầu"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>

                    {/* Volume control */}
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-zinc-400" />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(parseInt(e.target.value))}
                        className="w-16 accent-zinc-300 bg-zinc-700 h-1 rounded"
                      />
                    </div>
                  </div>

                  {/* Subtitle helper badge */}
                  <div className="hidden sm:flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-lg border border-zinc-700">
                    <Info className="w-3.5 h-3.5 text-primary-fixed-dim" />
                    <span className="text-[10px] font-bold text-zinc-300">PHỤ ĐỀ TIẾNG VIỆT ĐANG ĐỒNG BỘ</span>
                  </div>

                  <button
                    onClick={() => {
                      // Skip simulation
                      setCurrentTime((prev) => Math.min(prev + 30, durationSecs));
                    }}
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
    </section>
  );
}
