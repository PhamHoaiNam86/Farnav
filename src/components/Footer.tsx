import { useState, useEffect } from 'react';
import { Mail, Download, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 90,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-on-surface text-white border-t border-white/5 relative">
      {/* Scroll to Top floating anchor */}
      <button
        onClick={handleScrollTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary-container text-white flex items-center justify-center shadow-lg border border-white/10 transition-all duration-300 z-50 hover:-translate-y-1 active:scale-95 ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
        title="Cuộn lên đầu trang"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-[1680px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand info */}
        <div className="space-y-4 text-left">
          <div
            onClick={handleScrollTop}
            className="font-display text-2xl font-black text-white cursor-pointer select-none tracking-tight flex items-center gap-1.5"
          >
            Farnav <span className="text-xs bg-primary/20 text-primary-fixed-dim px-1 rounded">4.0</span>
          </div>
          <p className="text-lg text-gray-400 leading-relaxed opacity-90">
            FARNAV – Thương hiệu GNSS 4.0 hàng đầu, mang đến giải pháp định vị và dẫn đường thông minh, chính xác, hiệu quả cho mọi lĩnh vực.
          </p>
        </div>

        {/* Products link */}
        <div className="text-left">
          <h4 className="font-display text-sm tracking-[0.15em] font-extrabold text-primary-fixed mb-6 uppercase">
            SẢN PHẨM
          </h4>
          <ul className="space-y-3.5 text-lg text-gray-400">
            <li>
              <button onClick={() => scrollSection('san-pham')} className="hover:text-primary-fixed transition-colors">
                FARNAV N30
              </button>
            </li>
            <li>
              <button onClick={() => scrollSection('san-pham')} className="hover:text-primary-fixed transition-colors">
                FARNAV N50
              </button>
            </li>
            <li>
              <button onClick={() => scrollSection('san-pham')} className="hover:text-primary-fixed transition-colors">
                FARNAV NBase
              </button>
            </li>
          </ul>
        </div>

        {/* Services link */}
        <div className="text-left">
          <h4 className="font-display text-sm tracking-[0.15em] font-extrabold text-primary-fixed mb-6 uppercase">
            DỊCH VỤ
          </h4>
          <ul className="space-y-3.5 text-lg text-gray-400">
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollSection('dang-ky'); }} className="hover:text-primary-fixed transition-colors">
                Bảo hành & Sửa chữa
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollSection('dang-ky'); }} className="hover:text-primary-fixed transition-colors">
                Đào tạo chuyển giao
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollSection('dang-ky'); }} className="hover:text-primary-fixed transition-colors">
                Cho thuê thiết bị
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollSection('dang-ky'); }} className="hover:text-primary-fixed transition-colors">
                Hiệu chuẩn & Kiểm định
              </a>
            </li>
          </ul>
        </div>

        {/* Solutions link */}
        <div className="text-left">
          <h4 className="font-display text-sm tracking-[0.15em] font-extrabold text-primary-fixed mb-6 uppercase">
            GIẢI PHÁP
          </h4>
          <ul className="space-y-3.5 text-lg text-gray-400">
            <li>
              <button onClick={() => scrollSection('giai-phap')} className="hover:text-primary-fixed transition-colors">
                Địa chính số
              </button>
            </li>
            <li>
              <button onClick={() => scrollSection('giai-phap')} className="hover:text-primary-fixed transition-colors">
                Khảo sát địa hình
              </button>
            </li>
            <li>
              <button onClick={() => scrollSection('giai-phap')} className="hover:text-primary-fixed transition-colors">
                Xây dựng hạ tầng
              </button>
            </li>
            <li>
              <button onClick={() => scrollSection('giai-phap')} className="hover:text-primary-fixed transition-colors">
                Số hóa canh tác
              </button>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-4 text-left">
          <h4 className="font-display text-sm tracking-[0.15em] font-extrabold text-primary-fixed mb-6 uppercase">
            LIÊN HỆ
          </h4>
          <div className="text-xl text-white font-extrabold mb-1.5">
            FARNAV Việt Nam
          </div>
          <div className="flex items-center gap-2.5 text-lg text-gray-400">
            <Mail className="w-5 h-5 text-primary-fixed-dim flex-shrink-0" />
            <a href="mailto:info@farnav.com.vn" className="hover:text-white transition-colors">
              info@farnav.com.vn
            </a>
          </div>

          <div className="pt-2">
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              MẠNG XÃ HỘI & TÀI LIỆU
            </h5>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1877F2] text-gray-400 hover:text-white flex items-center justify-center border border-white/10 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  title="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#EE4D2D] text-gray-400 hover:text-white flex items-center justify-center border border-white/10 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  title="Shopee Store"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .002c-2.316.002-4.223 1.83-4.35 4.122l-.123 2.24H5.2c-.754 0-1.458.375-1.892 1.002-.435.626-.532 1.41-.26 2.115l2.457 6.442A5.205 5.205 0 0010.36 19.34l.035.006c.52.122 1.05.183 1.583.183.543 0 1.084-.062 1.614-.188a5.213 5.213 0 003.882-3.46l2.443-6.425c.272-.705.175-1.488-.26-2.114A2.327 2.327 0 0017.766 6.37l-2.326-.006-.123-2.24C15.19 1.83 13.284.002 10.968.002zM9.54 6.364l.1-1.782c.074-1.342 1.187-2.4 2.53-2.4 1.344 0 2.457 1.058 2.531 2.4l.099 1.782H9.54z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-black text-gray-400 hover:text-white flex items-center justify-center border border-white/10 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  title="TikTok Channel"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.92-1.88 2.45-5.23 3.32-8.02 2.07-2.23-1-3.66-3.21-3.72-5.65-.08-2.58 1.47-5.07 3.88-6.02 1.15-.44 2.4-.57 3.6-.35V11.2c-.88-.23-1.83-.17-2.67.23-1.22.6-1.97 1.87-1.96 3.24.02 1.54.98 2.94 2.43 3.44 1.53.53 3.34-.04 4.19-1.43.34-.57.48-1.24.47-1.9V.02z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF0000] text-gray-400 hover:text-white flex items-center justify-center border border-white/10 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                  title="YouTube Channel"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <button
                onClick={() => {
                  scrollSection('dang-ky');
                  alert('Vui lòng điền thông tin đăng ký để nhận Catalogue gửi kèm qua Email hoặc Zalo!');
                }}
                className="flex items-center gap-2 text-primary-fixed-dim font-bold text-sm hover:underline cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Tải Catalogue (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright footer */}
      <div className="max-w-[1680px] mx-auto px-6 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>© 2026 FARNAV Vietnam. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-fixed transition-colors">Chính sách bảo mật</a>
          <a href="#" className="hover:text-primary-fixed transition-colors">Điều khoản sử dụng</a>
        </div>
      </div>
    </footer>
  );
}
