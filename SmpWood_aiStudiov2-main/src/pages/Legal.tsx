import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function Legal() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('legal.title')}</title>
      </Helmet>

      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {t('legal.title')}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>{t('legal.content_1')}</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">{t('legal.editeur_title')}</h2>
            <p>{t('legal.editeur_text')}</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">{t('legal.host_title')}</h2>
            <p>{t('legal.host_text')}</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">{t('legal.contact_title')}</h2>
            <p>{t('legal.contact_text')}</p>
          </div>

        </div>
      </section>
    </>
  );
}
