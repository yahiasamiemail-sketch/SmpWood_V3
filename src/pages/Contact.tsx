import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Check, Phone, Mail, MapPin, Send, Globe, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from '../components/Logo';

type FormData = {
  nom: string;
  societe: string;
  email: string;
  telephone: string;
  message: string;
  captcha: boolean;
};

export default function Contact() {
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
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        setTimeout(() => {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
    }
  }, [isSuccess]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
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
      console.error("Failed to submit form", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <Helmet>
        <title>{t('contact.meta_title')}</title>
        <meta name="description" content={t('contact.meta_desc')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-smp-green/5 blur-3xl rounded-l-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeIn}>
             <span className="text-smp-green font-black text-xs uppercase tracking-[0.4em] mb-4 block not-italic">RESTEZ EN CONTACT</span>
             <h1 className="text-5xl md:text-8xl font-black text-smp-navy tracking-tighter mb-8 uppercase not-italic leading-none">
              {t('contact.intro_title')}
            </h1>
            <div className="accent-line mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-serif">
              {t('contact.intro_text')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-start">
            
            {/* Left Col: Info & Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-16"
            >
              <div className="glass-card p-5 sm:p-8 md:p-12 rounded-3xl bg-white border border-slate-100 shadow-premium group">
                <Logo className="h-10 sm:h-12 md:h-16 mb-8 md:mb-12 group-hover:scale-105 transition-transform origin-left" />
                <h2 className="text-xl md:text-2xl font-black text-smp-navy tracking-tight uppercase mb-8 md:mb-10 not-italic">
                  {t('contact.coord_title')}
                </h2>
                <div className="space-y-6 md:space-y-10">
                  <a href="tel:+33579979760" className="flex items-center gap-4 sm:gap-6 group/item">
                    <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-slate-50 text-smp-green rounded-2xl flex items-center justify-center group-hover/item:bg-smp-green group-hover/item:text-white transition-all shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest not-italic mb-0.5 md:mb-1">{t('contact.phone_label')}</p>
                      <p className="text-lg sm:text-2xl font-black text-smp-navy not-italic tracking-tight truncate">+33 5 79 97 97 60</p>
                    </div>
                  </a>
                  
                  <a href="mailto:contact@smpwood.fr" className="flex items-center gap-4 sm:gap-6 group/item">
                    <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-slate-50 text-smp-blue rounded-2xl flex items-center justify-center group-hover/item:bg-smp-blue group-hover/item:text-white transition-all shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest not-italic mb-0.5 md:mb-1">{t('contact.email_label')}</p>
                      <p className="text-base sm:text-xl font-bold text-smp-navy not-italic tracking-tight truncate">contact@smpwood.fr</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-smp-navy rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Globe className="w-32 h-32" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl text-smp-green">
                      <MapPin size={24} />
                    </div>
                    <h2 className="text-xl font-black tracking-tight uppercase not-italic">
                      {t('contact.zone_title')}
                    </h2>
                  </div>
                  <div className="space-y-4 text-slate-400 font-serif text-lg">
                    <p>{t('contact.zone_text_1')}</p>
                    <p>{t('contact.zone_text_2')}</p>
                  </div>
                  <div className="pt-8 border-t border-white/10 flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] not-italic">
                    <Clock className="w-4 h-4 text-smp-green" />
                    <span>Lundi — Vendredi : 9h00 - 18h00</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
              id="contact-form"
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-smp-green/10 blur-[40px] rounded-full" />
              
                {isSuccess ? (
                  <div className="bg-white border border-slate-100 p-10 md:p-20 rounded-3xl text-center flex flex-col items-center justify-center min-h-[600px] shadow-premium">
                    <div className="w-24 h-24 bg-smp-green rounded-full flex items-center justify-center text-white mb-10 shadow-xl shadow-smp-green/30 animate-bounce-slow">
                      <Check size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-smp-navy uppercase mb-4 not-italic">{t('contact.form_success')}</h3>
                    <p className="text-slate-500 font-serif">Nous reviendrons vers vous sous 24h.</p>
                    <button 
                      onClick={() => setIsSuccess(false)} 
                      className="mt-10 px-8 py-3 bg-smp-green text-white rounded-xl font-bold hover:bg-smp-green/90 transition-all"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <div className="glass-card p-8 md:p-16 rounded-3xl bg-white border border-slate-100 shadow-premium">
                    <div className="flex items-center gap-4 mb-12">
                       <div className="shrink-0 w-12 h-1 bg-smp-green"></div>
                       <h2 className="text-3xl font-black tracking-tighter text-smp-navy uppercase not-italic">
                        {t('contact.form_title')}
                      </h2>
                    </div>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-[10px] font-black text-smp-navy uppercase mb-3 tracking-widest not-italic">Nom Complet *</label>
                          <input 
                            {...register("nom", { required: true })} 
                            placeholder="Jean Dupont"
                            className={`w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-smp-green transition-all shadow-inner ${errors.nom ? 'ring-2 ring-red-500' : ''}`} 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-smp-navy uppercase mb-3 tracking-widest not-italic">Société *</label>
                          <input 
                            {...register("societe", { required: true })} 
                            placeholder="Ma Société"
                            className={`w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-smp-green transition-all shadow-inner ${errors.societe ? 'ring-2 ring-red-500' : ''}`} 
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-[10px] font-black text-smp-navy uppercase mb-3 tracking-widest not-italic">Email *</label>
                          <input 
                            type="email"
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                            placeholder="jean@societe.com"
                            className={`w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-smp-green transition-all shadow-inner ${errors.email ? 'ring-2 ring-red-500' : ''}`} 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-smp-navy uppercase mb-3 tracking-widest not-italic">Téléphone *</label>
                          <input 
                            type="tel"
                            {...register("telephone", { required: true })} 
                            placeholder="+33 1 23 45 67 89"
                            className={`w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-smp-green transition-all shadow-inner ${errors.telephone ? 'ring-2 ring-red-500' : ''}`} 
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-black text-smp-navy uppercase mb-3 tracking-widest not-italic">Votre Message *</label>
                        <textarea 
                          {...register("message", { required: true })} 
                          rows={6}
                          placeholder="Dites-nous en plus sur vos besoins..."
                           className={`w-full bg-slate-50 border-0 rounded-[2rem] px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-smp-green transition-all shadow-inner resize-none ${errors.message ? 'ring-2 ring-red-500' : ''}`} 
                        />
                      </div>

                      <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200">
                        <input 
                          type="checkbox" 
                          id="captcha-contact" 
                          {...register("captcha", { required: true })}
                          className="w-5 h-5 rounded-lg border-slate-300 text-smp-green focus:ring-smp-green"
                        />
                        <label htmlFor="captcha-contact" className={`text-[10px] font-black uppercase tracking-widest not-italic ${errors.captcha ? 'text-red-500' : 'text-slate-500'}`}>
                          Je confirme que je suis un utilisateur humain *
                        </label>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className="group relative w-full overflow-hidden rounded-2xl bg-smp-navy px-8 py-5 text-xs font-black uppercase tracking-[0.3em] text-white shadow-2xl transition-all hover:bg-smp-navy/90 hover:scale-[1.02] active:scale-95 not-italic disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <div className="relative z-10 flex items-center justify-center gap-4">
                          <span>{isLoading ? 'Envoi en cours...' : t('contact.form_submit')}</span>
                          <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
