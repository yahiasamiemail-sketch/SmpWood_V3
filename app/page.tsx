export const metadata = {
  title: "SMP France - Wood Pellet Trading",
  description: "Leading wood pellet distribution in France",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">
          Welcome to SMP France
        </h1>
        <p className="text-xl text-slate-700 mb-8">
          Wood pellet trading and distribution
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 bg-slate-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              Our Products
            </h2>
            <p className="text-slate-600">
              Discover our complete range of quality wood pellets.
            </p>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              Contact Us
            </h2>
            <p className="text-slate-600">
              Questions? Feel free to contact us.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
