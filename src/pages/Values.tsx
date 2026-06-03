import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Users, Shield, Leaf, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Values() {
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
        <title>{t('values.meta_title')}</title>
        <meta name="description" content={t('values.meta_desc')} />
      </Helmet>

      {/* Header */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-smp-green/5 blur-3xl rounded-l-full" />
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <motion.div {...fadeIn}>
            <span className="text-smp-green font-black text-xs uppercase tracking-[0.3em] mb-4 block not-italic">NOS ENGAGEMENTS</span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-smp-navy tracking-tighter mb-8 uppercase not-italic">
              {t('values.title')}
            </h1>
            <div className="accent-line mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="glass-card p-8 md:p-16 rounded-3xl bg-white shadow-2xl shadow-smp-navy/5 border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-smp-navy text-white rounded-xl flex items-center justify-center font-black not-italic">01</div>
               <h2 className="text-2xl font-black text-smp-navy uppercase not-italic tracking-tight">
                {t('values.intro_title')}
              </h2>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed font-serif">
              {t('values.intro_p')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Values Sections */}
      <section className="py-16 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-32">
          
          {/* L'humain */}
          <motion.div {...fadeIn} className="scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start text-center lg:text-left">
              <div className="lg:col-span-1 shrink-0 mx-auto lg:mx-0">
                <div className="p-5 bg-smp-green/10 rounded-[2rem] text-smp-green">
                  <Users className="w-10 h-10" />
                </div>
              </div>
              <div className="lg:col-span-11 space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-smp-navy uppercase not-italic tracking-tighter">
                  {t('values.human_title')}
                </h2>
                <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-serif">
                  <p>{t('values.human_p1')}</p>
                </div>
                
                <div className="bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100 shadow-inner text-left">
                  <p className="font-black text-smp-navy mb-8 uppercase tracking-widest text-xs not-italic">{t('values.human_p2')}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-600 not-italic">
                        <CheckCircle2 className="w-6 h-6 text-smp-green shrink-0" />
                        <span className="font-medium">{t(`values.human_li${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-smp-navy font-black pt-8 border-t border-slate-100 flex items-center gap-4">
                  <span className="h-px w-12 bg-smp-green" />
                  {t('values.human_conclusion')}
                </p>
              </div>
            </div>

            {/* Quote Block - Premium Design */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-20 p-8 md:p-20 bg-smp-navy rounded-3xl md:rounded-[4rem] text-center shadow-3xl shadow-smp-navy/40 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform duration-1000 rotate-12">
                <Users className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="w-12 h-1 w-24 bg-smp-green mx-auto mb-12"></div>
                <p className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] not-italic font-serif tracking-tight">
                  "{t('values.human_quote')}"
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* L'exigence professionnelle */}
          <motion.div {...fadeIn} className="scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start text-center lg:text-left">
              <div className="lg:col-span-1 shrink-0 mx-auto lg:mx-0">
                <div className="p-5 bg-smp-blue/10 rounded-[2rem] text-smp-blue">
                  <Shield className="w-10 h-10" />
                </div>
              </div>
              <div className="lg:col-span-11 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-smp-navy uppercase not-italic tracking-tighter">
                  {t('values.excellence_title')}
                </h2>
                <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-serif">
                  <p>{t('values.excellence_p1')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900 p-10 rounded-[2.5rem] shadow-xl text-left">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-300 font-medium not-italic">
                      <div className="w-2 h-2 bg-smp-blue rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      {t(`values.excellence_li${i}`)}
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed font-serif">
                  {t('values.excellence_p2')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision responsable */}
          <motion.div {...fadeIn} className="scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-12 items-start text-center lg:text-left">
              <div className="lg:col-span-1 shrink-0 mx-auto lg:mx-0">
                <div className="p-5 bg-smp-green/10 rounded-[2rem] text-smp-green">
                  <Leaf className="w-10 h-10" />
                </div>
              </div>
              <div className="lg:col-span-11 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-smp-navy uppercase not-italic tracking-tighter">
                  {t('values.responsibility_title')}
                </h2>
                <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-serif">
                  <p>{t('values.responsibility_p1')}</p>
                </div>
                <div className="bg-smp-navy p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group text-left">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-smp-green/10 blur-3xl rounded-full -mr-32 -mt-32" />
                  <ul className="space-y-6 relative z-10">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-center gap-6 text-slate-300 not-italic group/li">
                        <div className="h-px w-10 bg-smp-green transition-all group-hover/li:w-16" />
                        <span className="text-lg font-medium">{t(`values.responsibility_li${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-600 leading-relaxed font-serif">
                  {t('values.responsibility_p2')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Footer - Banner Style */}
      <section className="py-20 md:py-32 px-6 bg-smp-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 wood-pattern opacity-10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...fadeIn}>
            <Target className="w-20 h-20 text-smp-green mx-auto mb-10" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-12 not-italic tracking-tighter">{t('values.vision_title')}</h2>
            <div className="accent-line mx-auto mb-12" />
            <p className="text-2xl md:text-4xl lg:text-5xl text-slate-300 leading-tight font-black font-serif">
              "{t('values.vision_p')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Short Version */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-sm font-black text-smp-green uppercase tracking-widest mb-4 not-italic">Résumé</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase not-italic">
              {t('values.short_version_title')}
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['reliable', 'responsible', 'committed'].map((v) => (
              <motion.div 
                key={v}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-4 not-italic">{t(`values.${v}_title`)}</h4>
                <p className="text-slate-600 not-italic">{t(`values.${v}_p`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
