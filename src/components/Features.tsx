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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-default"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${item.color} group-hover:scale-110`}>
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="text-left">
                  <h3 className="font-display text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-1">
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
