import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle2, ChevronRight, Fuel, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
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
        <title>{t('home.meta_title')}</title>
        <meta name="description" content={t('home.meta_desc')} />
      </Helmet>

      {/* 1. Hero Editorial */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-smp-navy py-20">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-smp-navy via-smp-navy/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Bioenergy wood background" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="h-px w-12 bg-smp-green" />
                <span className="text-smp-green font-black text-xs uppercase tracking-[0.3em]">{t('home.metrics_clients').split(' ')[0]} PROS NOUS FONT CONFIANCE</span>
              </div>
              
              <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[0.9] mb-8 uppercase not-italic tracking-tight md:tracking-tighter break-words">
                {t('home.hero_title').split(' ').map((word, i) => (
                  <span key={i} className={i === 2 ? 'text-smp-blue block' : ''}>{word}{' '}</span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12 not-italic">
                {t('home.hero_subtitle')}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link 
                  to="/nos-produits"
                  className="group relative px-8 py-4 bg-smp-green text-white font-black uppercase text-xs tracking-widest rounded-full overflow-hidden transition-all hover:pr-12 shadow-xl shadow-smp-green/20"
                >
                  <span className="relative z-10">{t('home.cta_quote')}</span>
                  <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                </Link>
                
                <Link 
                  to="/nos-valeurs"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black uppercase text-xs tracking-widest rounded-full hover:bg-white/20 transition-all not-italic"
                >
                  {t('nav.values')}
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="w-full aspect-square rounded-3xl overflow-hidden border-8 border-white/5 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1589736123712-864079496101?auto=format&fit=crop&q=80&w=1000" 
                  alt="Wood pellets detail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-10 -right-10 glass-card p-6 rounded-3xl z-20 animate-bounce transition-all duration-[3000ms]">
                <ShieldCheck className="w-10 h-10 text-smp-green" />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-3xl z-20">
                <Zap className="w-10 h-10 text-smp-blue" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics - Modernized */}
      <section className="relative z-30 -mt-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <div className="space-y-2 group">
                <div className="text-4xl md:text-5xl font-black text-smp-navy group-hover:text-smp-green transition-colors">+120</div>
                <div className="h-1 w-8 bg-smp-green rounded-full" />
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest not-italic">Clients Satisfaits</p>
              </div>
              <div className="space-y-2 group">
                <div className="text-4xl md:text-5xl font-black text-smp-navy group-hover:text-smp-blue transition-colors">5000t</div>
                <div className="h-1 w-8 bg-smp-blue rounded-full" />
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest not-italic">Vol. Annuel Max</p>
              </div>
              <div className="space-y-2 group">
                <div className="text-4xl md:text-5xl font-black text-smp-navy group-hover:text-smp-green transition-colors">+5 ANS</div>
                <div className="h-1 w-8 bg-smp-green rounded-full" />
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest not-italic">Expérience</p>
              </div>
              <div className="space-y-2 group">
                <div className="text-4xl md:text-5xl font-black text-smp-navy group-hover:text-smp-blue transition-colors">3 PAYS</div>
                <div className="h-1 w-8 bg-smp-blue rounded-full" />
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest not-italic">FR • BE • CH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partners Trust */}
      <section className="py-16 md:py-24 bg-white wood-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-smp-green uppercase tracking-[0.3em] mb-4 not-italic">{t('home.trust_title')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg not-italic">
              {t('home.trust_text')}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 grayscale opacity-60 hover:grayscale-0 transition-all duration-700">
            {/* Botanic */}
            <img src="/images/botanic.jpg" alt="Botanic" className="h-10 md:h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            
            {/* Les Mousquetaires */}
            <img src="/images/mousquetaire.png" alt="Les Mousquetaires" className="h-12 md:h-14 w-auto object-contain" referrerPolicy="no-referrer" />
            
            {/* Weldom */}
            <img src="/images/weldom.png" alt="Weldom" className="h-10 md:h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            
            {/* E.Leclerc */}
            <img src="/images/leclerc.png" alt="E.Leclerc" className="h-10 md:h-12 w-auto object-contain" referrerPolicy="no-referrer" />
            
            {/* Bricomarché */}
            <img src="/images/brico.png" alt="Bricomarché" className="h-10 md:h-12 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* 4. About Grid */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-smp-green/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-smp-blue/5 rounded-full blur-3xl -ml-48 -mb-48" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="section-title">{t('home.about_title')}</h2>
              <div className="accent-line" />
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg not-italic">
                <p>{t('home.about_text_1')}</p>
                <p>{t('home.about_text_2')}</p>
                <p>{t('home.about_text_3')}</p>
                <p className="font-black text-smp-navy text-xl border-l-4 border-smp-green pl-6 py-2 bg-white rounded-r-xl">
                  {t('home.about_text_4')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {[
                { icon: <Package />, title: "Stockage optimisé", text: "Gestion intelligente des flux" },
                { icon: <Truck />, title: "Logistique maîtrisée", text: "Livraisons fiables et ponctuelles" },
                { icon: <CheckCircle2 />, title: "Qualité régulière", text: "Standards de certification stricts" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-6 group hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-smp-green group-hover:bg-smp-green group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-sm tracking-tight not-italic">{item.title}</h3>
                    <p className="text-slate-500 text-sm not-italic">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Products Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <motion.div {...fadeIn} className="max-w-xl">
              <h2 className="section-title mb-4">{t('home.products_title')}</h2>
              <p className="text-lg text-slate-600 not-italic">
                {t('home.products_text')}
              </p>
            </motion.div>
            <Link 
              to="/nos-produits"
              className="px-8 py-3 bg-smp-navy text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-smp-green transition-all shadow-lg"
            >
              {t('home.products_cta')}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                id: 'sac', 
                title: t('home.products_sac_title'), 
                icon: <Package />, 
                color: 'bg-smp-green',
                image: '/images/granules-sac.jpg'
              },
              { 
                id: 'bigbag', 
                title: t('home.products_bigbag_title'), 
                icon: <Fuel />, 
                color: 'bg-smp-blue',
                image: '/images/1-5-Ton-Jumbo-Bags-FIBC-Big-Bag-for-Cement-Gravel-Urea-Agriculture-Feed-Fertilizer-Urea-Chemcial-Packing.webp'
              },
              { 
                id: 'vrac', 
                title: t('home.products_vrac_title'), 
                icon: <Truck />, 
                color: 'bg-smp-navy',
                image: '/images/GRANULESENVRACjpg_65fc621eeeacf.jpg'
              }
            ].map((prod, i) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-slate-100"
              >
                <img 
                  src={prod.image}
                  alt={prod.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute top-6 left-6 z-20">
                  <div className={`w-12 h-12 ${prod.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                    {prod.icon}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-2xl font-black text-white uppercase not-italic mb-4">{prod.title}</h3>
                  <Link to={`/nos-produits#${prod.id}`} className="text-slate-300 text-sm font-bold uppercase tracking-widest hover:text-white flex items-center gap-2 group/link not-italic">
                    En savoir plus
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Commitment Section */}
      <section className="py-16 md:py-24 bg-smp-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">Responsabilité</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 not-italic">
              {t('home.commit_title')}
            </h2>
            <div className="space-y-6 text-xl text-white/90 mb-12 font-medium not-italic">
              <p>{t('home.commit_text_1')}</p>
              <p>{t('home.commit_text_2')}</p>
            </div>
            <Link 
              to="/notre-engagement"
              className="inline-flex items-center gap-3 text-white font-black uppercase text-xs tracking-widest border-b-2 border-white/30 pb-2 hover:border-white transition-all group"
            >
              <span>{t('home.engagement_cta')}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-smp-navy rounded-3xl md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-smp-navy/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-smp-blue/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-smp-green/10 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <motion.div {...fadeIn} className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase not-italic mb-8 tracking-tighter">{t('home.final_cta_title')}</h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto not-italic">
                {t('home.final_cta_text')}
              </p>
              <Link 
                to="/nos-produits"
                className="inline-flex items-center justify-center bg-smp-blue hover:bg-smp-green text-white px-10 py-5 rounded-full font-black uppercase tracking-widest transition-all text-sm shadow-xl shadow-smp-blue/30"
              >
                {t('home.cta_quote')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
