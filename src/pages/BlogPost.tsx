import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();

  // Placeholder content for future blog posts
  const post = {
    title: `Article : ${slug}`,
    date: new Date().toLocaleDateString('fr-FR'),
    content: "Le contenu de cet article sera disponible prochainement. Cette section est en préparation pour nos futures analyses du marché des granulés de bois, informations sur les prix et la logistique."
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog SMP Wood</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="bg-white min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-black uppercase tracking-widest text-slate-400 hover:text-smp-green mb-8 mt-4 transition-colors not-italic">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>
          
          <article>
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                {post.title}
              </h1>
              <time className="text-sm text-slate-500">Publié le {post.date}</time>
            </header>
            
            <div className="prose prose-slate max-w-none text-slate-600">
              <p className="text-lg leading-relaxed">{post.content}</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
