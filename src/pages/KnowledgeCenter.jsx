import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaCalendarAlt, FaDollarSign, FaStar, FaLightbulb, FaMapMarkerAlt } from 'react-icons/fa';
import { destinations, knowledgeCenter } from '../data/travelData';

export default function KnowledgeCenter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedDestId = searchParams.get('dest') || 'goa';

  // Ensure default is always valid, if not fallback to goa
  const activeDest = destinations.find(d => d.id === selectedDestId) || destinations[0];
  const guide = knowledgeCenter[activeDest.id] || knowledgeCenter.goa;

  const handleDestSelect = (id) => {
    setSearchParams({ dest: id });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight my-0">Travel Knowledge Center</h1>
        <p className="text-slate-500 text-sm mt-1.5">
          Local expertise, average budgets, and seasonal recommendations compiled by our travel specialists.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Tabs (Sidebar list) */}
        <aside className="w-full lg:w-64 flex-shrink-0 bg-white border border-slate-200 rounded-xl p-4 h-fit space-y-1">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-3">Select Guide</h3>
          {destinations.map((dest) => (
            <button
              key={dest.id}
              onClick={() => handleDestSelect(dest.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                activeDest.id === dest.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
              }`}
            >
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className={activeDest.id === dest.id ? 'text-white' : 'text-slate-400'} />
                <span>{dest.name}</span>
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeDest.id === dest.id ? 'bg-blue-700 text-blue-100' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {dest.location}
              </span>
            </button>
          ))}
        </aside>

        {/* Guide Contents */}
        <main className="flex-1 space-y-8 bg-white border border-slate-200 rounded-xl p-6 md:p-8">
          {/* Header area with image */}
          <div className="flex flex-col md:flex-row gap-6 items-start pb-6 border-b border-slate-100">
            <img
              src={activeDest.image}
              alt={activeDest.name}
              className="w-full md:w-48 h-32 object-cover rounded-lg border border-slate-200"
            />
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight my-0">{activeDest.name} Guides</h2>
                <div className="bg-blue-50 text-blue-600 text-xs px-2.5 py-0.5 rounded-full font-bold">
                  Rating: {activeDest.rating} / 5.0
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                {activeDest.longDescription}
              </p>
            </div>
          </div>

          {/* Quick Metrics (Season, Budget) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Season Card */}
            <div className="bg-blue-50/50 border border-blue-100/50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaCalendarAlt className="text-base" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Best Season</span>
                  <h4 className="font-bold text-slate-900 text-sm my-0">When to Visit</h4>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                {guide.bestSeason}
              </p>
            </div>

            {/* Budget Card */}
            <div className="bg-amber-50/50 border border-amber-100/50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <FaDollarSign className="text-base" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Average Budget</span>
                  <h4 className="font-bold text-slate-900 text-sm my-0">Daily Travel Costs</h4>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                {guide.avgBudget}
              </p>
            </div>
          </div>

          {/* Attractions & Tips lists */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {/* Attractions */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2 my-0">
                <FaStar className="text-amber-500" />
                <span>Popular Attractions</span>
              </h3>
              <ul className="space-y-3">
                {guide.attractions.map((attraction, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="w-5 h-5 bg-slate-100 text-slate-500 font-bold text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Tips */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2 my-0">
                <FaLightbulb className="text-blue-500" />
                <span>Practical Local Tips</span>
              </h3>
              <ul className="space-y-3">
                {guide.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="text-blue-500 text-base flex-shrink-0 mt-0.5">&#10004;</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
