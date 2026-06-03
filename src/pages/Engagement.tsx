import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { ShieldCheck, Layers, Users, Truck, Database } from 'lucide-react';
import { motion } from 'motion/react';

export default function Engagement() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>{t('engagement.meta_title')}</title>
        <meta name="description" content={t('engagement.meta_desc')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 wood-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-smp-navy via-smp-navy/90 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-smp-green font-black text-xs uppercase tracking-[0.4em] mb-6 block not-italic">
                {t('nav.engagement')}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] lg:leading-[1] mb-10 uppercase not-italic tracking-tight lg:tracking-tighter break-words">
                {t('engagement.intro_h1')}
              </h1>
              <div className="accent-line mx-auto lg:mx-0 mb-10" />
              <div className="space-y-6 text-lg md:text-2xl text-slate-300 leading-relaxed font-serif max-w-xl mx-auto lg:mx-0">
                <p>{t('engagement.intro_p1')}</p>
                <p className="text-white font-black">{t('engagement.intro_p2')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section - Refined Grid Layout */}
      <section className="py-16 md:py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="space-y-20 md:space-y-40">
            
            {/* Quality & Traceability */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center text-center md:text-left">
              <motion.div {...fadeIn}>
                <div className="w-16 h-16 bg-smp-green/10 text-smp-green rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0">
                  <ShieldCheck size={32} />
                </div>
                <h2 className="text-4xl font-black text-smp-navy uppercase mb-8 not-italic tracking-tighter">
                  {t('engagement.section_1_h2')}
                </h2>
                <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-serif border-t-4 md:border-t-0 md:border-l-4 border-smp-green pt-8 md:pt-0 md:pl-8">
                  <p>{t('engagement.section_1_p1')}</p>
                  <p>{t('engagement.section_1_p2')}</p>
                </div>
              </motion.div>
              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
                <div className="aspect-square bg-slate-100 rounded-full flex items-center justify-center p-20 border-2 border-dashed border-slate-200">
                  <Layers className="w-full h-full text-slate-200" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 glass-card rounded-3xl flex flex-col justify-center p-10 bg-white/80 border border-white">
                  <h3 className="text-2xl font-black text-smp-navy uppercase mb-4 not-italic">{t('engagement.section_2_h2')}</h3>
                  <p className="text-slate-600 font-medium">{t('engagement.section_2_p1')}</p>
                </div>
              </motion.div>
            </div>

            {/* Supplier Selection */}
            <motion.div {...fadeIn} className="relative p-8 md:p-20 bg-slate-50 rounded-3xl md:rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Users className="w-48 h-48 text-smp-navy" />
              </div>
              <div className="max-w-3xl mx-auto md:mx-0 space-y-12">
                <h2 className="text-4xl font-black text-smp-navy uppercase not-italic tracking-tighter">
                  {t('engagement.section_3_h2')}
                </h2>
                <p className="text-xl text-slate-600 font-serif">
                  {t('engagement.section_3_p1')}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-center space-x-4 justify-center md:justify-start group">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-premium border border-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                        <div className="w-2.5 h-2.5 bg-smp-green rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                      </div>
                      <span className="text-smp-navy font-black uppercase text-xs tracking-widest not-italic">{t(`engagement.section_3_li${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Logistics & Data */}
            <div className="grid lg:grid-cols-2 gap-12 text-center md:text-left">
              {/* Logistics */}
              <motion.div {...fadeIn} className="bg-smp-navy p-8 md:p-12 rounded-3xl md:rounded-[3.5rem] text-white shadow-2xl space-y-10 border border-white/5">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mx-auto md:mx-0">
                  <Truck size={32} />
                </div>
                <h2 className="text-3xl font-black uppercase not-italic tracking-tighter">
                  {t('engagement.section_4_h2')}
                </h2>
                <div className="space-y-8 text-left">
                  <p className="text-slate-400 font-serif text-lg">
                    {t('engagement.section_4_p1')}
                  </p>
                  <ul className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start gap-6 group">
                        <div className="text-4xl font-black text-smp-green opacity-30 group-hover:opacity-100 transition-opacity not-italic">0{i}</div>
                        <p className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors py-2">{t(`engagement.section_4_li${i}`)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
 
              {/* Data Structuring */}
              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-smp-blue p-8 md:p-12 rounded-3xl md:rounded-[3.5rem] text-white shadow-2xl space-y-10 border border-white/5">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mx-auto md:mx-0">
                  <Database size={32} />
                </div>
                <h2 className="text-3xl font-black uppercase not-italic tracking-tighter">
                  {t('engagement.section_5_h2')}
                </h2>
                <div className="space-y-8">
                  <p className="text-slate-200 font-serif text-lg leading-relaxed">
                    {t('engagement.section_5_p1')}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="px-6 py-3 bg-white/10 rounded-full text-xs font-black uppercase tracking-widest border border-white/10 not-italic">
                        {t(`engagement.section_5_li${i}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Conclusion - High Impact Banner */}
            <motion.div {...fadeIn} className="relative py-16 px-8 md:px-24 bg-smp-green rounded-3xl md:rounded-[4rem] text-center overflow-hidden shadow-2xl shadow-smp-green/30">
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/20 blur-[100px] rounded-full -mt-32" />
               <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                  <div className="w-16 h-1 bg-white mx-auto mb-10"></div>
                  <p className="text-2xl md:text-5xl text-smp-navy font-black leading-tight not-italic font-serif tracking-tight">
                    "{t('engagement.conclusion_text')}"
                  </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
