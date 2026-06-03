import { useTranslation } from 'react-i18next';
import { ShieldCheck, Truck, Droplets, Tag, MapPin, Banknote, Calendar, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export function AdvantagesBanner() {
  const { t } = useTranslation();

  const advantages = [
    { icon: <ShieldCheck size={16} />, text: t('products.advantages.premium.title') },
    { icon: <Truck size={16} />, text: t('products.advantages.franco.text') },
    { icon: <Droplets size={16} />, text: t('products.advantages.protection.title') },
    { icon: <Tag size={16} />, text: t('products.advantages.white_label.title') },
    { icon: <MapPin size={16} />, text: t('products.advantages.exclusivity.title') },
    { icon: <Banknote size={16} />, text: t('products.advantages.payment_delivery.title') },
    { icon: <Calendar size={16} />, text: t('products.advantages.payment_terms.title') },
    { icon: <Headphones size={16} />, text: t('products.advantages.support.title') },
  ];

  return (
    <div className="bg-smp-navy border-b border-white/10 overflow-hidden py-2.5 relative group">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex items-center gap-16 px-6"
        >
          {[...advantages, ...advantages, ...advantages].map((adv, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white/90 shrink-0">
              <div className="text-smp-green">{adv.icon}</div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] not-italic">{adv.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-smp-navy to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-smp-navy to-transparent z-10" />
    </div>
  );
}
