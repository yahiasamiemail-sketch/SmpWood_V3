import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';

export default function BlogList() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('blog.meta_title')}</title>
        <meta name="description" content={t('blog.meta_desc')} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="bg-slate-50 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-smp-green font-black text-xs uppercase tracking-[0.4em] mb-4 block not-italic">ACTUALITÉS</span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-smp-navy uppercase mb-8 not-italic leading-none">
            {t('blog.list_title')}
          </h1>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-serif">
            {t('blog.list_intro')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[40vh]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center py-16 text-center border border-slate-100 rounded-3xl bg-slate-50 group hover:bg-white hover:shadow-xl transition-all duration-500">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-200 mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <FileText className="w-10 h-10" />
            </div>
            <p className="text-xl font-bold text-slate-400 uppercase tracking-widest not-italic">{t('blog.empty')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
