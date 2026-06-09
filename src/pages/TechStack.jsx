import { FaReact, FaCss3Alt, FaServer, FaDatabase, FaCogs } from 'react-icons/fa';

export default function TechStack() {
  const stack = [
    {
      name: 'React.js',
      category: 'Frontend Core Framework',
      version: 'v19.2',
      icon: <FaReact className="text-sky-500 text-3xl" />,
      description: 'Used for declarative component state architecture, virtual DOM updates, and client-side single page app (SPA) performance.'
    },
    {
      name: 'Tailwind CSS',
      category: 'Design System & Utility CSS',
      version: 'v4.0',
      icon: <FaCss3Alt className="text-cyan-500 text-3xl" />,
      description: 'Delivers high-performance, responsive styling with utility-first layout tokens, avoiding large runtime stylesheets.'
    },
    {
      name: 'REST APIs',
      category: 'Network & Communication Layer',
      version: 'JSON Over HTTPS',
      icon: <FaServer className="text-emerald-500 text-3xl" />,
      description: 'Mocked and designed for seamless integration with real travel supplier APIs (e.g., Sabre, Amadeus, Skyscanner API).'
    },
    {
      name: 'Travel Data Services',
      category: 'Information & Metadata Store',
      version: 'Structured Relational Schema',
      icon: <FaDatabase className="text-rose-500 text-3xl" />,
      description: 'Centralized database records of destinations, locations, ratings, and guide assets for Goa, Dubai, and Singapore.'
    },
    {
      name: 'Recommendation Engine',
      category: 'Business Logic & Matching Rules',
      version: 'Algorithmic v1.0',
      icon: <FaCogs className="text-violet-500 text-3xl" />,
      description: 'Executes parametric queries filtering by travel category tags, night rates, and trip duration to return customized plans.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Intro */}
      <section className="text-center space-y-5">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none my-0">
          Developer Technology Stack
        </h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          TravelEase uses a production-ready modern stack designed for high performance, maintainable architectures, and fast search indexing.
        </p>
      </section>

      {/* Grid of Stack Items */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stack.map((item, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                  {item.version}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-lg leading-tight my-0">{item.name}</h3>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">{item.category}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed pt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Architecture Highlights */}
      <section className="bg-slate-900 text-slate-300 rounded-2xl p-8 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white tracking-tight my-0">Production Readiness Highlights</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Why this architecture suits scalable product company standards</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <h4 className="font-semibold text-white my-0">✔ Component Separation of Concerns</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Cards and Layout containers (Navbar, Footer) are completely modularized and decoupled from business pages to allow high reuse.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-white my-0">✔ Pure Utility Styling via Tailwind v4</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Eliminates custom CSS maintenance overhead and guarantees responsive design consistency across all mobile and web viewport layouts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
