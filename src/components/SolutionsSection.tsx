import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Locate, Mountain, Construction, Sprout, Check, ChevronRight, Award } from 'lucide-react';
import { SOLUTIONS } from '../data';

export default function SolutionsSection() {
  const [activeSolutionId, setActiveSolutionId] = useState('diachinh');

  const activeSolution = SOLUTIONS.find((s) => s.id === activeSolutionId) || SOLUTIONS[0];

  const iconMap: Record<string, any> = {
    diachinh: Locate,
    khaosat: Mountain,
    xaydung: Construction,
    nongnghiep: Sprout,
  };

  return (
    <section id="giai-phap" className="py-20 bg-on-surface text-white relative overflow-hidden">
      {/* Decorative radial lighting in background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Solution Selector and Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-left">
              <span className="font-display text-xs tracking-[0.2em] font-extrabold text-primary-fixed uppercase">
                INDUSTRY SOLUTIONS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mt-2">
                GIẢI PHÁP ỨNG DỤNG
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed max-w-xl">
                Chúng tôi cung cấp hệ sinh thái giải pháp GNSS toàn diện, từ đo đạc bản đồ đến điều khiển máy móc tự động, giúp tối ưu hóa hiệu quả công việc và giảm thiểu chi phí đầu tư.
              </p>
            </div>

            {/* Selector Grid (4 boxes) */}
            <div className="grid grid-cols-2 gap-4">
              {SOLUTIONS.map((sol) => {
                const IconComponent = iconMap[sol.id] || Locate;
                const isActive = sol.id === activeSolutionId;

                return (
                  <button
                    key={sol.id}
                    onClick={() => setActiveSolutionId(sol.id)}
                    className={`flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer select-none ${
                      isActive
                        ? 'bg-primary border-primary shadow-lg shadow-primary/20 scale-[1.02]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-white/20 text-white' : 'bg-primary/20 text-primary-fixed-dim'
                    }`}>
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-white">{sol.title}</h4>
                      <p className={`text-[11px] mt-0.5 ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                        {sol.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Details Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolutionId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 text-left"
              >
                <div>
                  <h3 className="font-display text-xl font-extrabold text-primary-fixed-dim flex items-center gap-2">
                    Giải pháp cho ngành {activeSolution.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {activeSolution.detailDescription}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-fixed">Lợi ích mang lại:</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {activeSolution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <Check className="w-4 h-4 text-primary-fixed-dim flex-shrink-0 mt-0.5 stroke-[3]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Device Configurations & Case Study */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  {/* Recommended Equipment */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary-fixed">Thiết bị khuyên dùng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeSolution.recommendedDevices.map((dev, idx) => (
                        <span key={idx} className="bg-white/5 border border-white/10 text-gray-200 text-[11px] px-2.5 py-1 rounded-md">
                          {dev}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case study */}
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-primary-fixed">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-extrabold uppercase tracking-wide">Dự án thực tế</span>
                    </div>
                    <p className="font-bold text-xs text-white leading-snug">{activeSolution.caseStudy.title}</p>
                    <p className="text-[11px] text-gray-400">Vị trí: {activeSolution.caseStudy.location}</p>
                    <p className="text-xs text-primary-fixed-dim font-medium italic mt-1">
                      Kết quả: {activeSolution.caseStudy.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Visual Mockup Showcase with Interactive Hotspots */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4PQoZ4Ku4ooLiPJvBDyvOgYdTlmtxyN5AhgpEmLLjYpBqDtrYThJ2vthERG5iCy7Cyb3jyMp8-Oer4ZaFJ5cG1jYTvkRINyNWhvYayl3wtnNLGv0TQVtgfYIwdUQpMu7C3ACuim8A23SrjurmexjPhq4EYUxnM89UKLBolBelPagA4tNYi0zDPD4G18Sy8wyCgAt36SKY29ZzwIKHyC5xKwNZrLZ358d7rlF_I3L9s0e3djnp7f46Z7ak-qfJvSZGbrOJD3pEz4ZP"
                alt="Application Sunset Engineer"
                className="w-full object-cover aspect-[4/3] sm:aspect-square"
              />
              {/* HUD / Science Tech Overlay graphics */}
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent opacity-60"></div>

              {/* Decorative HUD Target reticle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite] pointer-events-none">
                <div className="w-40 h-40 border border-dashed border-primary/30 rounded-full"></div>
                <div className="absolute top-0 w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-primary text-primary flex items-center justify-center rounded-full pointer-events-none">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
              </div>

              {/* Active data stats display badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 text-[10px] font-mono text-primary-fixed-dim space-y-1">
                <p>SYS_STATUS: READY</p>
                <p>SIGNAL: FIXED (100%)</p>
                <p>SATS: 38 VỆ TINH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
