import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X, Cpu, Battery, Shield, Scale, Eye, FileText, CheckCircle } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [compareProduct, setCompareProduct] = useState<Product | null>(null);

  const openDetails = (product: Product) => {
    setSelectedProduct(product);
    // Auto reset comparison dropdown
    setCompareProduct(null);
  };

  return (
    <section id="san-pham" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.2em] font-extrabold text-primary uppercase">
            PREMIUM HARDWARE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-on-surface mt-2 tracking-tight">
            SẢN PHẨM NỔI BẬT
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Product category tag */}
              <span className="absolute top-4 left-4 bg-primary/5 text-primary text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full border border-primary/10">
                {product.category}
              </span>

              {/* Product Image */}
              <div className="mb-6 mt-4 w-56 h-56 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-xl scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Metadata */}
              <h3 className="font-display text-xl font-extrabold text-on-surface mb-1">
                {product.name}
              </h3>
              <span className="font-display text-[10px] tracking-widest font-extrabold text-primary mb-4 uppercase block">
                {product.tagline}
              </span>
              <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed line-clamp-3">
                {product.description}
              </p>

              {/* Action Button */}
              <button
                onClick={() => openDetails(product)}
                className="mt-6 text-primary font-display text-xs tracking-wider font-bold hover:text-primary-container flex items-center gap-1 transition-colors border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/5"
              >
                CHI TIẾT
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details & Interactive Comparison Dialog */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col text-left"
            >
              {/* Modal Header */}
              <div className="bg-surface px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-on-surface">
                    Chi tiết sản phẩm: {selectedProduct.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-0.5">{selectedProduct.category}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 hover:bg-gray-100 rounded-full text-on-surface-variant transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-8">
                {/* Visual spec layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Image & Taglines */}
                  <div className="md:col-span-5 flex flex-col items-center bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-48 h-48 object-contain drop-shadow-md"
                    />
                    <div className="text-center mt-6">
                      <span className="font-display text-[10px] tracking-widest font-extrabold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                        {selectedProduct.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Key info and features */}
                  <div className="md:col-span-7 space-y-4 text-left">
                    <p className="text-base text-on-surface leading-relaxed">
                      {selectedProduct.description}
                    </p>
                    
                    <h4 className="font-display text-sm font-bold text-on-surface uppercase tracking-wider pt-2">
                      Đặc điểm nổi bật:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Specs Sheet */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h4 className="font-display text-base font-bold text-on-surface uppercase tracking-wider flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Thông số kỹ thuật chi tiết
                    </h4>

                    {/* Interactive Comparison Trigger */}
                    <div className="flex items-center gap-2">
                      <label className="text-xs font-semibold text-on-surface-variant">So sánh với:</label>
                      <select
                        onChange={(e) => {
                          const prod = PRODUCTS.find((p) => p.id === e.target.value);
                          setCompareProduct(prod || null);
                        }}
                        value={compareProduct?.id || ''}
                        className="text-xs bg-gray-50 border border-gray-200 rounded-lg py-1.5 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">-- Chọn sản phẩm --</option>
                        {PRODUCTS.filter((p) => p.id !== selectedProduct.id).map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Spec table */}
                  <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full text-sm text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 text-xs font-bold text-on-surface-variant uppercase border-b border-gray-100">
                          <th className="py-3.5 px-4 w-1/4">Thông số</th>
                          <th className="py-3.5 px-4 bg-primary/5 text-primary font-extrabold">{selectedProduct.name}</th>
                          {compareProduct && (
                            <th className="py-3.5 px-4 bg-amber-50/50 text-amber-700 font-extrabold">{compareProduct.name}</th>
                          )}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-4 font-semibold text-on-surface flex items-center gap-1.5">
                            <Cpu className="w-4 h-4 text-gray-400" /> Kênh thu vệ tinh
                          </td>
                          <td className="py-3 px-4 text-on-surface-variant bg-primary/5">{selectedProduct.specs.channels}</td>
                          {compareProduct && (
                            <td className="py-3 px-4 text-on-surface-variant bg-amber-50/20">{compareProduct.specs.channels}</td>
                          )}
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-on-surface">Hệ vệ tinh hỗ trợ</td>
                          <td className="py-3 px-4 text-on-surface-variant bg-primary/5">{selectedProduct.specs.constellations}</td>
                          {compareProduct && (
                            <td className="py-3 px-4 text-on-surface-variant bg-amber-50/20">{compareProduct.specs.constellations}</td>
                          )}
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-on-surface">Độ chính xác RTK</td>
                          <td className="py-3 px-4 text-on-surface-variant bg-primary/5">{selectedProduct.specs.rtkAccuracy}</td>
                          {compareProduct && (
                            <td className="py-3 px-4 text-on-surface-variant bg-amber-50/20">{compareProduct.specs.rtkAccuracy}</td>
                          )}
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-on-surface">Độ chính xác Tĩnh (Static)</td>
                          <td className="py-3 px-4 text-on-surface-variant bg-primary/5">{selectedProduct.specs.staticAccuracy}</td>
                          {compareProduct && (
                            <td className="py-3 px-4 text-on-surface-variant bg-amber-50/20">{compareProduct.specs.staticAccuracy}</td>
                          )}
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-on-surface flex items-center gap-1.5">
                            <Battery className="w-4 h-4 text-gray-400" /> Thời lượng pin
                          </td>
                          <td className="py-3 px-4 text-on-surface-variant bg-primary/5">{selectedProduct.specs.battery}</td>
                          {compareProduct && (
                            <td className="py-3 px-4 text-on-surface-variant bg-amber-50/20">{compareProduct.specs.battery}</td>
                          )}
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-on-surface flex items-center gap-1.5">
                            <Scale className="w-4 h-4 text-gray-400" /> Trọng lượng
                          </td>
                          <td className="py-3 px-4 text-on-surface-variant bg-primary/5">{selectedProduct.specs.weight}</td>
                          {compareProduct && (
                            <td className="py-3 px-4 text-on-surface-variant bg-amber-50/20">{compareProduct.specs.weight}</td>
                          )}
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-on-surface flex items-center gap-1.5">
                            <Shield className="w-4 h-4 text-gray-400" /> Chỉ số bảo vệ / Độ bền
                          </td>
                          <td className="py-3 px-4 text-on-surface-variant bg-primary/5">{selectedProduct.specs.protection}</td>
                          {compareProduct && (
                            <td className="py-3 px-4 text-on-surface-variant bg-amber-50/20">{compareProduct.specs.protection}</td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-surface px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-[10px] text-on-surface-variant italic">
                  * Thiết bị đạt chứng chỉ chất lượng quốc tế ISO 9001.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      const contactForm = document.getElementById('dang-ky');
                      if (contactForm) contactForm.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-lg font-display text-xs font-bold transition-all active:scale-95"
                  >
                    YÊU CẦU BÁO GIÁ
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="border border-gray-200 hover:bg-gray-50 text-on-surface px-5 py-2.5 rounded-lg font-display text-xs font-bold transition-all"
                  >
                    ĐÓNG
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
