import { motion } from 'motion/react';
import { Cpu, Target, ShieldCheck, Award, Headphones, Share2 } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: 'Công nghệ GNSS 4.0',
      desc: 'Tiên tiến - Thông minh',
      icon: Cpu,
      color: 'bg-primary/10 text-primary',
    },
    {
      title: 'Độ chính xác cao',
      desc: 'Ổn định đến từng centimet',
      icon: Target,
      color: 'bg-primary/10 text-primary',
    },
    {
      title: 'Bảo hành chính hãng',
      desc: 'Hỗ trợ toàn quốc',
      icon: ShieldCheck,
      color: 'bg-primary/10 text-primary',
    },
    {
      title: 'Đào tạo & Chuyển giao',
      desc: 'Chuyên nghiệp',
      icon: Award,
      color: 'bg-primary/10 text-primary',
    },
    {
      title: 'Hỗ trợ kỹ thuật 24/7',
      desc: 'Luôn sẵn sàng',
      icon: Headphones,
      color: 'bg-primary/10 text-primary',
    },
    {
      title: 'Hệ thống phân phối',
      desc: 'Rộng khắp toàn quốc',
      icon: Share2,
      color: 'bg-primary/10 text-primary',
    },
  ];

  return (
    <section className="py-16 bg-primary/[0.03] border-y border-primary/5">
      <div className="max-w-[1680px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center justify-center gap-5 p-6 rounded-2xl bg-primary border border-primary/20 hover:bg-white hover:border-gray-250 hover:scale-105 transition-all duration-300 group cursor-pointer floating-shadow"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 bg-white/15 text-white group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-110">
                  <IconComponent className="w-7 h-7 stroke-[2]" />
                </div>
                <div className="text-left">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 group-hover:text-on-surface-variant transition-colors duration-300 mt-1 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
