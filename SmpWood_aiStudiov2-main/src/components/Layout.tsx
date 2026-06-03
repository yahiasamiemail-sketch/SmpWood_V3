import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { AdvantagesBanner } from './AdvantagesBanner';

export function Layout() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/nos-produits' },
    { name: t('nav.values'), path: '/nos-valeurs' },
    { name: t('nav.faq'), path: '/faq' },
    { name: t('nav.engagement'), path: '/notre-engagement' },
    { name: t('nav.contact'), path: '/nous-contacter' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-smp-navy bg-[#FAFAFA] overflow-x-hidden selection:bg-smp-green selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="glass-card rounded-2xl md:rounded-full px-6 py-3 flex justify-between items-center bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg">
            <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105" onClick={() => setMenuOpen(false)}>
              <Logo className="h-8 sm:h-10 md:h-12" />
            </Link>
              
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[13px] font-bold uppercase tracking-wider transition-all hover:text-smp-green relative group ${
                      location.pathname === link.path ? 'text-smp-green' : 'text-slate-500'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-smp-green transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                ))}
                
                <div className="flex items-center gap-2 ml-4 p-1 bg-slate-100 rounded-full">
                  <button
                    onClick={() => changeLanguage('fr')}
                    className={`text-[10px] font-black px-2.5 py-1 rounded-full transition-all ${i18n.language === 'fr' ? 'bg-smp-navy text-white shadow-sm' : 'text-slate-400 hover:text-smp-navy'}`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`text-[10px] font-black px-2.5 py-1 rounded-full transition-all ${i18n.language === 'en' ? 'bg-smp-navy text-white shadow-sm' : 'text-slate-400 hover:text-smp-navy'}`}
                  >
                    EN
                  </button>
                </div>
              </nav>
            </div>

            <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-smp-navy" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden absolute top-24 left-6 right-6 transition-all duration-500 transform ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
          <div className="glass-card rounded-3xl p-6 bg-white/95 backdrop-blur-2xl shadow-2xl space-y-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                    location.pathname === link.path ? 'bg-smp-green/10 text-smp-green translate-x-2' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex gap-2">
                <button onClick={() => changeLanguage('fr')} className={`w-10 h-10 rounded-full font-black text-xs ${i18n.language === 'fr' ? 'bg-smp-navy text-white' : 'bg-slate-100 text-slate-400'}`}>FR</button>
                <button onClick={() => changeLanguage('en')} className={`w-10 h-10 rounded-full font-black text-xs ${i18n.language === 'en' ? 'bg-smp-navy text-white' : 'bg-slate-100 text-slate-400'}`}>EN</button>
              </div>
              <a href="tel:+33579979760" className="w-12 h-12 bg-smp-blue text-white rounded-full flex items-center justify-center shadow-lg shadow-smp-blue/30">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col pt-24">
        <AdvantagesBanner />
        <Outlet />
      </main>

      <footer className="bg-smp-navy text-white py-12 md:py-20 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo className="h-9 sm:h-12 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs not-italic">
              Partenaire privilégié des professionnels pour l&apos;approvisionnement en énergies renouvelables.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-smp-green not-italic">Navigation</h4>
            <ul className="grid gap-2">
              {navLinks.slice(0, 4).map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-smp-green not-italic">Informations</h4>
            <ul className="grid gap-2">
              <li><Link to="/notre-engagement" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{t('nav.engagement')}</Link></li>
              <li><Link to="/mentions-legales" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{t('nav.legal')}</Link></li>
              <li><Link to="/politique-confidentialite" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">{t('nav.privacy')}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-smp-green not-italic">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+33579979760" className="flex items-center gap-3 text-white font-bold group">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-smp-blue transition-colors">
                  <Phone size={14} />
                </div>
                <span>+33 5 79 97 97 60</span>
              </a>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider not-italic">
                SMP France SAS — IMPORT EXPORT
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} SMP FRANCE. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-smp-green rounded-full opacity-50" />
            <span className="text-[10px] font-black italic text-slate-600 not-italic">L&apos;EXCELLENCE ÉNERGÉTIQUE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
