import { FaCompass, FaRegBuilding, FaMap, FaBrain, FaSearchPlus, FaRobot, FaRoute } from 'react-icons/fa';

export default function About() {
  const futureTech = [
    {
      title: 'Retrieval-Augmented Generation (RAG)',
      icon: <FaBrain className="text-blue-500" />,
      description: 'Enables travelers to query the platform in natural language, automatically pulling destination facts, reviews, and travel constraints directly from real-time database lookups.'
    },
    {
      title: 'Semantic Vector Search',
      icon: <FaSearchPlus className="text-indigo-500" />,
      description: 'Goes beyond keyword matching to index travel guides, blog posts, and hotel amenities as high-dimensional vectors, letting users search by conceptual sentiment (e.g. "secluded beach escape with good seafood").'
    },
    {
      title: 'AI Recommendation Engine',
      icon: <FaRobot className="text-amber-500" />,
      description: 'Applies machine learning algorithms (collaborative filtering & matrix factorization) on anonymized user interest profiles to recommend highly personalized packages.'
    },
    {
      title: 'Personalized Travel Planning',
      icon: <FaRoute className="text-emerald-500" />,
      description: 'Generates day-by-day itineraries, optimizes routing between attractions, adapts plans based on flight prices, and allows collaborative editing between family members.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Introduction Hero Section */}
      <section className="text-center space-y-5">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none my-0">
          About TravelEase Platform
        </h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          TravelEase is a professional hospitality engine designed to streamline modern trip planning. 
          By unifying curated local knowledge, structured hotel records, and interactive parameter recommendation boards, we eliminate friction in discovering your next destination.
        </p>
      </section>

      {/* Core Platform Services */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
            <FaCompass />
          </div>
          <h3 className="font-bold text-slate-900 text-base my-0">Destination Discovery</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Quickly explore getaways with clear ratings, estimated budgets, and travel category classifications.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl">
            <FaRegBuilding />
          </div>
          <h3 className="font-bold text-slate-900 text-base my-0">Luxury Hotel Stays</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Browse premium properties, view specific amenities lists, and perform simulated booking trials instantly.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
            <FaMap />
          </div>
          <h3 className="font-bold text-slate-900 text-base my-0">Local Travel Guides</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Access season details, attraction breakdowns, and expert local tips for Goa, Bangalore, Singapore, and more.
          </p>
        </div>
      </section>

      {/* Future AI Roadmap */}
      <section className="space-y-8">
        <div className="border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-center my-0">Future AI & Architecture Integrations</h2>
          <p className="text-slate-500 text-sm text-center mt-1.5">
            Planned microservices roadmap for advanced personalized recommendation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {futureTech.map((tech, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 flex gap-4 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0 text-lg">
                {tech.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base my-0">{tech.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
