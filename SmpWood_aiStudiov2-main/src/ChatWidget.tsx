import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ChatWidget() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    // Show the "Marie est disponible" bubble after a short delay
    const timer = setTimeout(() => setShowBubble(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real deployment, you would send this to your backend or an email service
    console.log('Chat message sent:', formData);
    setIsSubmitSuccessful(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitSuccessful(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[calc(100vw-48px)] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center relative">
                  <User className="w-6 h-6 text-slate-400" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full" />
                </div>
                <div>
                  <p className="font-bold text-sm">Marie</p>
                  <p className="text-xs text-slate-400">SMP France</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-slate-800 rounded-lg transition-colors"
                id="close-chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-64 sm:h-80 p-6 bg-slate-50 overflow-y-auto">
              {isSubmitSuccessful ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Send className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-slate-800">{t('chat.success')}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                    <p className="text-sm text-slate-700 leading-relaxed not-italic">
                      {t('chat.welcome')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">{t('chat.name')}</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-smp-navy outline-none transition-all not-italic"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">{t('chat.email')}</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-smp-navy outline-none transition-all not-italic"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Message</label>
                      <textarea
                        required
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('chat.placeholder')}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-smp-navy outline-none transition-all not-italic resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-3 bg-smp-green text-white rounded-xl font-bold text-sm hover:bg-smp-green/90 transition-all shadow-lg shadow-smp-green/20"
                    >
                      {t('chat.submit')}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {showBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white py-2 px-5 rounded-full shadow-xl border border-slate-100 flex items-center gap-3 cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setShowBubble(false);
              }}
            >
              <div className="relative flex h-3 w-3">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
              </div>
              <span className="text-sm font-bold text-smp-navy not-italic whitespace-nowrap">
                {t('chat.status')}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          id="toggle-chat"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowBubble(false);
          }}
          className="w-14 h-14 bg-smp-navy text-white rounded-full shadow-2xl hover:shadow-smp-navy/40 hover:scale-105 transition-all flex items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
