import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

import { Layout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import Values from './pages/Values';
import Engagement from './pages/Engagement';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="nos-produits" element={<Products />} />
            <Route path="nos-valeurs" element={<Values />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="notre-engagement" element={<Engagement />} />
            <Route path="nous-contacter" element={<Contact />} />
            <Route path="mentions-legales" element={<Legal />} />
            <Route path="politique-confidentialite" element={<Privacy />} />
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
