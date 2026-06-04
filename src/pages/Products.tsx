import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Check, Package, Layers, Truck, Flame, Droplets, Activity, Shield, Weight, Maximize, ShieldCheck, Tag, MapPin, Banknote, Calendar, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from '../components/Logo';

type FormData = {
  nom: string;
  societe: string;
  email: string;
  telephone: string;
  produit: string;
  quantite: string;
  localisation: string;
  message: string;
  captcha: boolean;
};

export default function Products() {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check for success parameter in URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setIsSuccess(true);
      // Remove the query parameter from URL without reloading
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Scroll to form section when success is shown
  useEffect(() => {
    if (isSuccess) {
      const formSection = document.getElementById('devis-form');
      if (formSection) {
        setTimeout(() => {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Force scroll on mobile devices
          window.scrollTo({ top: formSection.offsetTop - 100, behavior: 'smooth' });
        }, 300);
      }
    }
  }, [isSuccess]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        reset();
        // Redirect to same page with success parameter
        window.location.href = window.location.pathname + '?success=true';
      }
    } catch (error) {
      console.error('Failed to submit quote request', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>{t('products.meta_title')}</title>
        <meta name="description" content={t('products.meta_desc')} />
      </Helmet>

      {/* 1. Refined Quote Form - Now at the Top */}
      <section className="py-12 bg-white overflow-hidden" id="devis-form">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-smp-navy uppercase not-italic tracking-tighter leading-none">
                Prêt pour une<br />
                <span className="text-smp-green">Offre Sur-Mesure ?</span>
              </h2>
              <p className="text-lg text-slate-600 not-italic">
                {t('products.quick_contact_text')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                <div className="w-14 h-14 rounded-full bg-smp-navy text-white flex items-center justify-center shadow-lg shrink-0">
                  <Truck size={24} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 not-italic">FRANCO DE PORT POSSIBLE</p>
                  <p className="font-bold text-smp-navy not-italic">POUR PROFESSIONNELS</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 relative" id="devis-form">
              <div className="relative glass-card p-8 md:p-12 rounded-3xl md:rounded-[3rem] bg-white shadow-2xl border border-slate-100">
                {isSuccess ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-20 h-20 bg-smp-green rounded-full flex items-center justify-center mx-auto text-white shadow-xl shadow-smp-green/30">
                      <Check size={40} />
                    </div>
                    <h3 className="text-2xl font-black uppercase not-italic text-smp-navy">C'est Envoyé !</h3>
                    <p className="text-slate-600 not-italic">{t('products.form_success')}</p>
                    <button 
                      onClick={() => setIsSuccess(false)} 
                      className="mt-6 px-8 py-3 bg-smp-green text-white rounded-xl font-bold hover:bg-smp-green/90 transition-all"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block not-italic">{t('products.form_name')} *</label>
                        <input {...register("nom", { required: true })} className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-smp-green outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block not-italic">{t('products.form_company')} *</label>
                        <input {...register("societe", { required: true })} className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-smp-green outline-none transition-all" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block not-italic">{t('products.form_email')} *</label>
                        <input type="email" {...register("email", { required: true })} className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-smp-green outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block not-italic">{t('products.form_phone')} *</label>
                        <input type="tel" {...register("telephone", { required: true })} className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-smp-green outline-none transition-all" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block not-italic">{t('products.form_product')}</label>
                        <select {...register("produit")} className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-smp-green outline-none transition-all appearance-none">
                          <option value="sac">{t('products.form_product_sac')}</option>
                          <option value="bigbag">{t('products.form_product_bigbag')}</option>
                          <option value="vrac">{t('products.form_product_vrac')}</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block not-italic">Secteur Géo</label>
                        <input {...register("localisation")} className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-smp-green outline-none transition-all" placeholder="Département ou Ville" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block not-italic">{t('products.form_message')}</label>
                      <textarea {...register("message")} rows={3} className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-smp-green outline-none transition-all resize-none" />
                    </div>

                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="captcha" {...register("captcha", { required: true })} className="w-5 h-5 rounded border-slate-200 text-smp-green focus:ring-smp-green" />
                      <label htmlFor="captcha" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider not-italic">Je confirme ma demande.</label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full py-5 bg-smp-navy text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-smp-green transition-all shadow-xl shadow-smp-navy/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Envoi en cours...' : t('products.form_submit')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 SMP Advantages - Below the form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-xs font-black text-smp-navy uppercase tracking-[0.3em] not-italic mb-4">{t('products.advantages.title')}</h3>
            <div className="accent-line mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <ShieldCheck size={24} />, title: t('products.advantages.premium.title'), text: t('products.advantages.premium.text'), color: "bg-smp-green" },
              { icon: <Truck size={24} />, title: t('products.advantages.franco.title'), text: t('products.advantages.franco.text'), color: "bg-smp-green" },
              { icon: <Droplets size={24} />, title: t('products.advantages.protection.title'), text: t('products.advantages.protection.text'), color: "bg-smp-blue" },
              { icon: <Tag size={24} />, title: t('products.advantages.white_label.title'), text: t('products.advantages.white_label.text'), color: "bg-smp-navy" },
              { icon: <MapPin size={24} />, title: t('products.advantages.exclusivity.title'), text: t('products.advantages.exclusivity.text'), color: "bg-smp-navy" },
              { icon: <Banknote size={24} />, title: t('products.advantages.payment_delivery.title'), text: t('products.advantages.payment_delivery.text'), color: "bg-smp-green" },
              { icon: <Calendar size={24} />, title: t('products.advantages.payment_terms.title'), text: t('products.advantages.payment_terms.text'), color: "bg-smp-blue" },
              { icon: <Headphones size={24} />, title: t('products.advantages.support.title'), text: t('products.advantages.support.text'), color: "bg-smp-green" },
            ].map((adv, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 transition-all hover:shadow-xl hover:shadow-smp-navy/5 group"
              >
                <div className={`w-12 h-12 rounded-full ${adv.color} text-white flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                  {adv.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 not-italic">{adv.title}</p>
                  <p className="font-bold text-smp-navy text-xs sm:text-sm not-italic group-hover:text-smp-green transition-colors">{adv.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Intro Text - Now Below Advantages */}
      <section className="relative py-24 overflow-hidden flex justify-center">
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-smp-green/5 blur-3xl rounded-l-full" />
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-smp-navy leading-[1.2] lg:leading-[1] mb-6 md:mb-8 uppercase not-italic tracking-tight sm:tracking-tighter break-words">
              {t('products.intro_title')}
            </h1>
            <div className="accent-line mx-auto" />
            <div className="space-y-6 text-sm sm:text-xl text-slate-600 leading-relaxed font-serif">
              <p>{t('products.intro_text_1')}</p>
              <p className="font-black text-smp-navy">{t('products.intro_text_2')}</p>
            </div>
          </div>
        </div>
      </section>





      {/* 2.5 Technical Standards Block - Redesigned */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-smp-navy rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl shadow-smp-navy/30 border border-white/10">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center text-center lg:text-left">
                <motion.div {...fadeIn}>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase not-italic mb-10 md:mb-12 leading-tight tracking-tighter">
                    {t('products.standards.title')}
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-6 lg:gap-y-8">
                    {[
                      { icon: <Flame className="w-5 h-5" />, text: t('products.standards.item1'), color: 'text-orange-400' },
                      { icon: <Droplets className="w-5 h-5" />, text: t('products.standards.item2'), color: 'text-blue-400' },
                      { icon: <Activity className="w-5 h-5" />, text: t('products.standards.item3'), color: 'text-smp-green' },
                      { icon: <Shield className="w-5 h-5" />, text: t('products.standards.item4'), color: 'text-yellow-400' },
                      { icon: <Weight className="w-5 h-5" />, text: t('products.standards.item5'), color: 'text-purple-400' },
                      { icon: <Maximize className="w-5 h-5" />, text: t('products.standards.item6'), color: 'text-smp-blue' },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group text-center sm:text-left">
                        <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center ${item.color} group-hover:bg-white/10 transition-all`}>
                          {item.icon}
                        </div>
                        <p className="text-slate-300 text-[13px] sm:text-sm leading-relaxed not-italic pt-1 md:pt-0">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>


                  <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="bg-white px-4 py-2 rounded-lg text-xs font-black text-smp-navy not-italic shadow-premium">ENplus A1</div>
                      <div className="bg-smp-blue px-4 py-2 rounded-lg text-xs font-black text-white not-italic">DINplus</div>
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest not-italic">Certifications de Qualité Supérieure</p>
                  </div>
                </motion.div>
              </div>

              <div className="hidden lg:block relative bg-smp-green">
                <div className="absolute inset-0 bg-gradient-to-br from-smp-green/80 to-smp-navy/80 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Logo className="w-80 brightness-0 invert" />
                </div>
                <div className="absolute bottom-12 left-12">
                  <div className="text-white/30 font-black text-9xl uppercase tracking-tighter not-italic select-none -rotate-90 origin-left">
                    EXCELLENCE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Formats - Modern Grid */}
      <section className="py-24 bg-white" id="formats">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-center">{t('products.formats_title')}</h2>
            <div className="accent-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: '1', icon: <Package className="w-10 h-10" />, title: t('products.format_1_title'), text: t('products.format_1_text') },
              { id: '2', icon: <Layers className="w-10 h-10" />, title: t('products.format_2_title'), text: t('products.format_2_text'), featured: true },
              { id: '3', icon: <Truck className="w-10 h-10" />, title: t('products.format_3_title'), text: t('products.format_3_text') },
            ].map((item, i) => (
              <motion.div
                key={item.id}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-3xl transition-all duration-500 group text-center md:text-left ${
                  item.featured 
                    ? 'bg-smp-navy text-white shadow-2xl shadow-smp-navy/30' 
                    : 'bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 mx-auto md:mx-0 ${
                  item.featured ? 'bg-smp-green text-white' : 'bg-white text-smp-blue shadow-sm'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black uppercase not-italic mb-6 tracking-tight">{item.title}</h3>
                <p className={`text-lg leading-relaxed font-serif ${
                  item.featured ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Info with Accents */}
      <section className="py-16 md:py-24 bg-slate-50 wood-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12 md:space-y-32">
            {[
              { title: t('products.cert_title'), content: [t('products.cert_text_1'), t('products.cert_text_2')], color: 'border-smp-green' },
              { title: t('products.source_title'), content: [t('products.source_text_1'), t('products.source_text_2'), t('products.source_text_3')], color: 'border-smp-blue' },
              { title: t('products.method_title'), content: [t('products.method_text_1'), t('products.method_text_2')], color: 'border-smp-navy' },
            ].map((section, i) => (
              <motion.div key={i} {...fadeIn} className={`bg-white p-8 md:p-12 rounded-3xl shadow-sm border-t-8 md:border-t-0 md:border-l-8 text-center md:text-left ${section.color}`}>
                <h2 className="text-3xl font-black uppercase not-italic mb-8 tracking-tighter">{section.title}</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed not-italic">
                  {section.content.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-smp-blue text-white relative flex justify-center">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
          <p className="text-3xl font-black uppercase tracking-tighter not-italic">
            {t('products.final_cta_text')}
          </p>
          <Link 
            to="/nous-contacter"
            className="inline-flex h-16 items-center justify-center px-12 bg-white text-smp-navy rounded-full font-black uppercase tracking-widest text-sm hover:bg-smp-navy hover:text-white transition-all shadow-2xl"
          >
            {t('products.final_cta_btn')}
          </Link>
        </div>
      </section>
    </>
  );
}
