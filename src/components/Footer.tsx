import { Mail, ShoppingBag, Facebook, Youtube, Download, ArrowUp, Globe, Video } from 'lucide-react';

export default function Footer() {
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
      {/* Scroll to Top floating anchor inside layout */}
      <div className="absolute right-6 -top-6">
        <button
          onClick={handleScrollTop}
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary-container text-white flex items-center justify-center shadow-lg transition-transform active:scale-90 group border border-white/10"
          title="Cuộn lên đầu trang"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand info */}
        <div className="space-y-4 text-left">
          <div
            onClick={handleScrollTop}
            className="font-display text-2xl font-black text-white cursor-pointer select-none tracking-tight flex items-center gap-1.5"
          >
            Farnav <span className="text-xs bg-primary/20 text-primary-fixed-dim px-1 rounded">4.0</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed opacity-90">
            FARNAV – Thương hiệu GNSS 4.0 hàng đầu, mang đến giải pháp định vị và dẫn đường thông minh, chính xác, hiệu quả cho mọi lĩnh vực.
          </p>
        </div>

        {/* Products link */}
        <div className="text-left">
          <h4 className="font-display text-[11px] tracking-[0.15em] font-extrabold text-primary-fixed mb-6 uppercase">
            SẢN PHẨM
          </h4>
          <ul className="space-y-3.5 text-xs text-gray-400">
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
          <h4 className="font-display text-[11px] tracking-[0.15em] font-extrabold text-primary-fixed mb-6 uppercase">
            DỊCH VỤ
          </h4>
          <ul className="space-y-3.5 text-xs text-gray-400">
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
          <h4 className="font-display text-[11px] tracking-[0.15em] font-extrabold text-primary-fixed mb-6 uppercase">
            GIẢI PHÁP
          </h4>
          <ul className="space-y-3.5 text-xs text-gray-400">
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
          <h4 className="font-display text-[11px] tracking-[0.15em] font-extrabold text-primary-fixed mb-6 uppercase">
            LIÊN HỆ
          </h4>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Mail className="w-4 h-4 text-primary-fixed-dim flex-shrink-0" />
            <a href="mailto:info@farnav.com.vn" className="hover:text-white transition-colors">
              info@farnav.com.vn
            </a>
          </div>

          <div className="pt-2">
            <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
              MẠNG XÃ HỘI & TÀI LIỆU
            </h5>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-400">
                <a href="#" className="hover:text-primary-fixed-dim transition-colors" title="Shopee Store">
                  <ShoppingBag className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary-fixed-dim transition-colors" title="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-primary-fixed-dim transition-colors" title="YouTube Channel">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-primary-fixed-dim transition-colors" title="TikTok Channel">
                  <Video className="w-4 h-4" />
                </a>
              </div>
              <button
                onClick={() => {
                  scrollSection('dang-ky');
                  alert('Vui lòng điền thông tin đăng ký để nhận Catalogue gửi kèm qua Email hoặc Zalo!');
                }}
                className="flex items-center gap-1.5 text-primary-fixed-dim font-bold text-xs hover:underline cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Tải Catalogue (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright footer */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 gap-4">
        <p>© 2026 FARNAV Vietnam. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-fixed transition-colors">Chính sách bảo mật</a>
          <a href="#" className="hover:text-primary-fixed transition-colors">Điều khoản sử dụng</a>
        </div>
      </div>
    </footer>
  );
}
