import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertCircle, Loader2, Download, Printer, User, Phone, FileText, Sparkles, RefreshCw } from 'lucide-react';

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successData, setSuccessData] = useState<{
    id: string;
    name: string;
    phone: string;
    notes: string;
    timestamp: string;
  } | null>(null);

  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!fullName.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    const cleanPhone = phoneNumber.trim().replace(/\s+/g, '');
    if (!cleanPhone) {
      setErrorMessage('Vui lòng nhập số điện thoại.');
      return;
    }
    if (!/^[0-9+]{9,12}$/.test(cleanPhone)) {
      setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập từ 9-12 ký số.');
      return;
    }

    // Simulate submission flow
    setIsSubmitting(true);
    setTimeout(() => {
      const receiptId = `FRN-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const vnLocaleTime = new Date().toLocaleString('vi-VN', {
        timeZone: 'Asia/Ho_Chi_Minh',
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      setSuccessData({
        id: receiptId,
        name: fullName,
        phone: phoneNumber,
        notes: notes || 'Không có yêu cầu đặc biệt',
        timestamp: vnLocaleTime,
      });

      setIsSubmitting(false);
    }, 2000);
  };

  const handleDownloadPDF = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setNotes('');
    setSuccessData(null);
  };

  return (
    <section id="dang-ky" className="py-20 bg-white">
      <div className="max-w-[1680px] mx-auto px-6 text-center">
        <span className="font-display text-xs tracking-[0.2em] font-extrabold text-primary uppercase block mb-4">
          FREE TRIAL
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-black text-shimmer mb-4">
          ĐĂNG KÝ TEST MÁY MIỄN PHÍ
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant mb-12 max-w-xl mx-auto leading-relaxed">
          Trải nghiệm thực tế công nghệ định vị centimeter-level trước khi quyết định đầu tư. Chuyên viên kỹ thuật FARNAV sẽ liên hệ hỗ trợ bàn giao tận nơi.
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Decorative side blurs */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="running-border-card p-6 sm:p-10 rounded-[15px] shadow-xl relative z-10">
            <AnimatePresence mode="wait">
              {!successData ? (
                // Form entry state
                <motion.form
                  key="form-entry"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleRegister}
                  className="space-y-6 text-left"
                >
                  {/* Alert Error */}
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start gap-3 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* 2 Columns inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                        <User className="w-4 h-4 text-primary" />
                        HỌ VÀ TÊN *
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nhập họ tên của bạn"
                        className="w-full border-2 border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3.5 text-sm text-on-surface bg-gray-50 focus:bg-white transition-all outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-primary" />
                        SỐ ĐIỆN THOẠI *
                      </label>
                      <input
                        type="tel"
                        disabled={isSubmitting}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Nhập số điện thoại"
                        className="w-full border-2 border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3.5 text-sm text-on-surface bg-gray-50 focus:bg-white transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Textarea requirements */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-primary" />
                      NHU CẦU SỬ DỤNG
                    </label>
                    <textarea
                      disabled={isSubmitting}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Mô tả nhu cầu của bạn (đo đất địa chính, khảo sát mỏ, xây dựng cao tốc...) để chúng tôi chuẩn bị dòng máy test phù hợp nhất."
                      rows={4}
                      className="w-full border-2 border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3.5 text-sm text-on-surface bg-gray-50 focus:bg-white transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-container text-white font-display text-sm tracking-wider font-bold py-4.5 rounded-xl transition-all active:scale-95 shadow-md hover:shadow-lg disabled:opacity-75 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        ĐANG KHỞI TẠO ĐĂNG KÝ...
                      </>
                    ) : (
                      'ĐĂNG KÝ NGAY'
                    )}
                  </button>

                  <p className="text-xs text-outline mt-6 text-center italic leading-relaxed">
                    Trải nghiệm thực tế - Đánh giá chính xác hiệu năng thiết bị trước khi mua. Cam kết không phát sinh bất cứ chi phí nào.
                  </p>
                </motion.form>
              ) : (
                // Success / Voucher ticket screen
                <motion.div
                  key="voucher-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col items-center">
                    <CheckCircle className="w-16 h-16 text-emerald-500 stroke-[2] mb-3" />
                    <h3 className="font-display text-xl sm:text-2xl font-black text-on-surface">
                      ĐĂNG KÝ HOÀN TẤT!
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1.5">
                      Yêu cầu đăng ký trải nghiệm của quý khách đã được duyệt tự động.
                    </p>
                  </div>

                  {/* The Physical Receipt Card Graphic */}
                  <div className="bg-gray-50 border-2 border-dashed border-gray-200 p-6 sm:p-8 rounded-2xl relative text-left overflow-hidden shadow-inner">
                    {/* Brand watermark background */}
                    <div className="absolute right-4 bottom-4 text-7xl font-display font-black text-gray-200/40 select-none pointer-events-none transform rotate-12">
                      FARNAV
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-4">
                      <div>
                        <p className="text-xs font-bold text-primary">FARNAV VIỆT NAM</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">Hệ thống chuyển giao GNSS 4.0</p>
                      </div>
                      <div className="text-right sm:text-right">
                        <span className="text-[10px] font-mono bg-primary/10 text-primary px-2.5 py-1 rounded font-bold">
                          MÃ SỐ: {successData.id}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-display text-sm font-bold text-on-surface uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      PHIẾU TRẢI NGHIỆM THIẾT BỊ MIỄN PHÍ
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-on-surface-variant">
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase">Họ và tên khách hàng</p>
                        <p className="font-bold text-on-surface mt-0.5">{successData.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase">Số điện thoại</p>
                        <p className="font-bold text-on-surface mt-0.5">{successData.phone}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-xs text-gray-400 font-semibold uppercase">Thời gian đăng ký</p>
                        <p className="font-semibold text-on-surface mt-0.5">{successData.timestamp}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-xs text-gray-400 font-semibold uppercase">Nhu cầu & Thiết bị dự kiến</p>
                        <p className="text-xs italic text-on-surface mt-1 border-l-2 border-primary pl-2 bg-white py-1 rounded-r">
                          {successData.notes}
                        </p>
                      </div>
                    </div>

                    {/* QR Code and verification placeholder */}
                    <div className="border-t border-gray-200 pt-4 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg p-1 flex items-center justify-center">
                          {/* Simulated QR Code via micro grid */}
                          <div className="grid grid-cols-4 gap-1 w-full h-full opacity-85">
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-transparent"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-transparent"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-transparent"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-transparent"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                            <div className="bg-transparent"></div>
                            <div className="bg-on-surface rounded-sm"></div>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">Mã Xác Thực AR</p>
                          <p className="text-[9px] text-emerald-600 font-mono mt-0.5 font-bold">● CHỜ TRƯỞNG ĐOÀN LIÊN HỆ</p>
                        </div>
                      </div>

                      <div className="text-right text-[10px] text-gray-400">
                        <p className="italic">Đại diện bộ phận GNSS Việt Nam</p>
                        <p className="font-bold text-on-surface mt-4 uppercase">Ban Kỹ Thuật Farnav</p>
                      </div>
                    </div>
                  </div>

                  {/* Download PDF & reset actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleDownloadPDF}
                      className="bg-primary hover:bg-primary-container text-white text-xs font-bold px-6 py-3 rounded-lg flex items-center gap-1.5 transition-all shadow cursor-pointer w-full sm:w-auto justify-center"
                    >
                      <Download className="w-4 h-4" />
                      TẢI VỀ PHIẾU ĐĂNG KÝ
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="border border-gray-200 hover:bg-gray-50 text-on-surface text-xs font-bold px-6 py-3 rounded-lg flex items-center gap-1.5 transition-all w-full sm:w-auto justify-center"
                    >
                      <Printer className="w-4 h-4" />
                      IN PHIẾU XÁC NHẬN
                    </button>
                    <button
                      onClick={handleReset}
                      className="text-on-surface hover:text-primary text-xs font-bold px-6 py-3 flex items-center gap-1.5 hover:underline w-full sm:w-auto justify-center"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Đăng ký mới
                    </button>
                  </div>

                  {/* Animated success prompt */}
                  <AnimatePresence>
                    {downloadSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs py-2.5 px-4 rounded-lg inline-block font-semibold"
                      >
                        Tải thành công! Đã lưu phiếu FRN-Voucher_{successData.id}.pdf
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
