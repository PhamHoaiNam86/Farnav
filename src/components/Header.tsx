import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Globe, Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('trang-chu');
  const [tooltipText, setTooltipText] = useState<string | null>(null);

  const navItems = [
    { id: 'trang-chu', label: 'TRANG CHỦ' },
    { id: 'san-pham', label: 'SẢN PHẨM' },
    { id: 'giai-phap', label: 'GIẢI PHÁP' },
    { id: 'tin-tuc', label: 'TIN TỨC' },
    { id: 'video', label: 'DỊCH VỤ / VIDEO' },
    { id: 'dang-ky', label: 'ĐĂNG KÝ TEST MÁY' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 90,
        behavior: 'smooth',
      });
    }
  };

  const handleActionClick = (type: string, value: string) => {
    setTooltipText(`${type}: ${value}`);
    setTimeout(() => setTooltipText(null), 3000);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-outline-variant shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary border-b border-white/10 py-2.5">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[100px] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p className="font-bold tracking-wider text-white/95 uppercase text-center sm:text-left flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
            </svg>
            <span>FARNAV VIỆT NAM - GNSS 4.0 DẪN ĐƯỜNG TƯƠNG LAI</span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-white/80">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center"
                title="Facebook"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <div className="h-3 w-[1px] bg-white/20"></div>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleActionClick('Shopee Store', 'shopee.vn/farnav_vietnam'); }}
                className="hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center"
                title="Shopee"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .002c-2.316.002-4.223 1.83-4.35 4.122l-.123 2.24H5.2c-.754 0-1.458.375-1.892 1.002-.435.626-.532 1.41-.26 2.115l2.457 6.442A5.205 5.205 0 0010.36 19.34l.035.006c.52.122 1.05.183 1.583.183.543 0 1.084-.062 1.614-.188a5.213 5.213 0 003.882-3.46l2.443-6.425c.272-.705.175-1.488-.26-2.114A2.327 2.327 0 0017.766 6.37l-2.326-.006-.123-2.24C15.19 1.83 13.284.002 10.968.002zM9.54 6.364l.1-1.782c.074-1.342 1.187-2.4 2.53-2.4 1.344 0 2.457 1.058 2.531 2.4l.099 1.782H9.54z"/>
                </svg>
              </a>
              <div className="h-3 w-[1px] bg-white/20"></div>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleActionClick('TikTok Channel', 'tiktok.com/@farnav_vietnam'); }}
                className="hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center"
                title="TikTok"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.92-1.88 2.45-5.23 3.32-8.02 2.07-2.23-1-3.66-3.21-3.72-5.65-.08-2.58 1.47-5.07 3.88-6.02 1.15-.44 2.4-.57 3.6-.35V11.2c-.88-.23-1.83-.17-2.67.23-1.22.6-1.97 1.87-1.96 3.24.02 1.54.98 2.94 2.43 3.44 1.53.53 3.34-.04 4.19-1.43.34-.57.48-1.24.47-1.9V.02z"/>
                </svg>
              </a>
              <div className="h-3 w-[1px] bg-white/20"></div>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center"
                title="YouTube"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className="h-3 w-[1px] bg-white/20"></div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('dang-ky');
                handleActionClick('Tải Catalogue', 'Đang chuẩn bị file PDF chất lượng cao...');
              }}
              className="flex items-center gap-1.5 text-[11px] font-bold text-white/85 hover:text-white transition-colors uppercase"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>TẢI CATALOGUE</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="px-6 md:px-[100px] py-4 max-w-[1920px] mx-auto flex justify-between items-center relative">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection('trang-chu')}
          className="cursor-pointer select-none flex flex-col items-start leading-none gap-1"
        >
          <div className="flex items-baseline gap-1">
            <span className="text-primary font-display text-3xl font-black tracking-tight">Farnav</span>
            <span className="text-[9px] bg-primary/10 text-primary px-1 py-0.2 rounded font-mono font-bold">4.0</span>
          </div>
          <span className="text-[9px] text-on-surface font-extrabold tracking-wider uppercase">Dẫn hướng tương lai</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-display text-base lg:text-[18px] tracking-wider font-extrabold transition-all relative py-1.5 ${
                activeSection === item.id ? 'text-primary' : 'text-on-surface hover:text-primary'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Quick Contact Actions */}
        <div className="flex items-center gap-3 lg:gap-5">
          <div className="hidden lg:flex items-center gap-4 text-on-surface-variant relative">
            <button
              onClick={() => handleActionClick('Email Hỗ Trợ', 'info@farnav.com.vn')}
              className="hover:text-primary transition-transform active:scale-90 p-1.5 hover:bg-gray-100 rounded-full"
              title="Gửi Email"
            >
              <Mail className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleActionClick('Hotline 24/7', '1900 8686 / 0988 888 888')}
              className="hover:text-primary transition-transform active:scale-90 p-1.5 hover:bg-gray-100 rounded-full"
              title="Gọi Hotline"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleActionClick('Ngôn Ngữ', 'Tiếng Việt (VI) - Sẵn sàng phục vụ')}
              className="hover:text-primary transition-transform active:scale-90 p-1.5 hover:bg-gray-100 rounded-full"
              title="Đổi ngôn ngữ"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Float Tooltip */}
            <AnimatePresence>
              {tooltipText && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-12 right-0 bg-on-surface text-white text-xs px-4 py-2.5 rounded-lg shadow-xl font-sans z-50 whitespace-nowrap border border-gray-700"
                >
                  {tooltipText}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => scrollToSection('dang-ky')}
            className="bg-primary text-white font-display text-xs tracking-wider font-bold px-5 py-2.5 lg:px-6 lg:py-3 hover:bg-primary-container transition-all active:scale-95 rounded-xl shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
            </svg>
            <span>NHẬN TƯ VẤN</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-on-surface p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-outline-variant bg-white overflow-hidden shadow-inner"
          >
            <div className="flex flex-col py-4 px-6 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-display text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-on-surface-variant hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-3 border-t border-gray-100 justify-around text-on-surface-variant">
                <button
                  onClick={() => handleActionClick('Email', 'info@farnav.com.vn')}
                  className="flex items-center gap-1.5 text-xs hover:text-primary py-2"
                >
                  <Mail className="w-4 h-4" /> Email
                </button>
                <button
                  onClick={() => handleActionClick('Hotline', '0988 888 888')}
                  className="flex items-center gap-1.5 text-xs hover:text-primary py-2"
                >
                  <Phone className="w-4 h-4" /> Hotline
                </button>
                <button
                  onClick={() => handleActionClick('Website', 'farnav.com.vn')}
                  className="flex items-center gap-1.5 text-xs hover:text-primary py-2"
                >
                  <Globe className="w-4 h-4" /> VI
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
