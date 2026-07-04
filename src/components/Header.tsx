import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Globe, Menu, X, Download, ShoppingBag, Facebook } from 'lucide-react';

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
      <div className="bg-white border-b border-on-surface py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p className="font-semibold tracking-widest text-on-surface uppercase text-center sm:text-left">
            FARNAV VIỆT NAM - GNSS 4.0 DẪN ĐƯỜNG TƯƠNG LAI
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleActionClick('Shopee Store', 'shopee.vn/farnav_vietnam'); }}
                className="hover:text-primary transition-colors flex items-center gap-1"
                title="Shopee"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden lg:inline text-[10px] tracking-wider font-semibold">SHOPPING</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span className="hidden lg:inline text-[10px] tracking-wider font-semibold">FACEBOOK</span>
              </a>
            </div>
            <div className="h-3 w-[1px] bg-on-surface/20"></div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('dang-ky');
                handleActionClick('Tải Catalogue', 'Đang chuẩn bị file PDF chất lượng cao...');
              }}
              className="flex items-center gap-1.5 text-[11px] font-bold text-on-surface hover:text-primary transition-colors uppercase"
            >
              <Download className="w-3.5 h-3.5 text-primary" />
              <span>TẢI CATALOGUE</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="px-6 py-4 max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection('trang-chu')}
          className="font-display text-3xl font-black text-on-surface cursor-pointer select-none tracking-tight flex items-center gap-2"
        >
          <span className="text-primary font-black">Farnav</span>
          <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-mono font-bold">4.0</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-display text-xs tracking-wider font-bold transition-all relative py-1.5 ${
                activeSection === item.id ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
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
            className="bg-primary text-white font-display text-xs tracking-wider font-bold px-5 py-2.5 lg:px-6 lg:py-3 hover:bg-primary-container transition-all active:scale-95 rounded-full shadow-sm hover:shadow-md"
          >
            NHẬN TƯ VẤN
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
