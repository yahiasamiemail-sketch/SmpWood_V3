import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return {
    title: "SMP France - Négoce et Distribution de Granulés de Bois",
    description: "SMP France: Leader in wood pellet distribution and trading",
  };
}

export default async function Page({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  // Validate locale
  if (!["en", "fr"].includes(locale)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          {locale === "fr" ? "Bienvenue chez SMP France" : "Welcome to SMP France"}
        </h1>
        <p className="text-xl text-slate-700 mb-8">
          {locale === "fr"
            ? "Négoce et distribution de granulés de bois"
            : "Wood pellet trading and distribution"}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 bg-slate-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              {locale === "fr" ? "Nos Produits" : "Our Products"}
            </h2>
            <p className="text-slate-600">
              {locale === "fr"
                ? "Découvrez notre gamme complète de granulés de bois de qualité."
                : "Discover our complete range of quality wood pellets."}
            </p>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              {locale === "fr" ? "Nous Contacter" : "Contact Us"}
            </h2>
            <p className="text-slate-600">
              {locale === "fr"
                ? "Vous avez des questions? N'hésitez pas à nous contacter."
                : "Questions? Feel free to contact us."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
