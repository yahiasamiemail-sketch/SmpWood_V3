import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { HelpCircle, ChevronRight, Truck, BarChart3, Package, Calendar, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.q1'),
      answer: (
        <div className="space-y-4">
          <p>{t('faq.a1_1')}</p>
          <p>{t('faq.a1_2')}</p>
        </div>
      ),
      icon: <ShieldCheck className="w-6 h-6 text-smp-green" />
    },
    {
      question: t('faq.q2'),
      answer: (
        <div className="space-y-4">
          <p>{t('faq.a2_1')}</p>
          <p>{t('faq.a2_2')}</p>
        </div>
      ),
      icon: <Calendar className="w-6 h-6 text-smp-green" />
    },
    {
      question: t('faq.q3'),
      answer: (
        <div className="space-y-4">
          <p>{t('faq.a3_1')}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('faq.a3_li1')}</li>
            <li>{t('faq.a3_li2')}</li>
            <li>{t('faq.a3_li3')}</li>
          </ul>
          <p>{t('faq.a3_2')}</p>
        </div>
      ),
      icon: <Truck className="w-6 h-6 text-smp-green" />
    },
    {
      question: t('faq.q4'),
      answer: (
        <div className="space-y-4">
          <p>{t('faq.a4_1')}</p>
          <p>{t('faq.a4_2')}</p>
          <p>{t('faq.a4_3')}</p>
        </div>
      ),
      icon: <BarChart3 className="w-6 h-6 text-smp-green" />
    },
    {
      question: t('faq.q5'),
      answer: (
        <div className="space-y-4">
          <p>{t('faq.a5_1')}</p>
          <p>{t('faq.a5_2')}</p>
        </div>
      ),
      icon: <Package className="w-6 h-6 text-smp-green" />
    },
    {
      question: t('faq.q6'),
      answer: (
        <div className="space-y-4">
          <p>{t('faq.a6_1')}</p>
          <p>{t('faq.a6_2')}</p>
        </div>
      ),
      icon: <HelpCircle className="w-6 h-6 text-smp-green" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('faq.meta_title')}</title>
        <meta name="description" content={t('faq.meta_desc')} />
      </Helmet>

      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-smp-green/5 blur-3xl rounded-l-full" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-smp-green font-black text-xs uppercase tracking-[0.3em] mb-4 block not-italic">SUPPORT & EXPERTISE</span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-smp-navy tracking-tighter mb-8 uppercase not-italic leading-none">
              {t('faq.title')}
            </h1>
            <div className="accent-line mx-auto"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-10">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-slate-50 p-8 md:p-14 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-smp-navy/5 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="shrink-0 p-5 bg-white text-smp-green rounded-2xl shadow-premium border border-slate-50 transition-transform group-hover:scale-110 group-hover:rotate-6 mx-auto md:mx-0">
                    {faq.icon}
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-smp-navy uppercase not-italic tracking-tight leading-tight">
                      {faq.question}
                    </h2>
                    <div className="text-lg text-slate-600 leading-relaxed font-serif not-italic text-left md:text-left">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
