import { useState } from 'react';
import { FaSlidersH, FaPlane, FaHotel, FaCalculator, FaChevronRight } from 'react-icons/fa';
import { destinations, hotels } from '../data/travelData';
import DestinationCard from '../components/DestinationCard';
import HotelCard from '../components/HotelCard';

export default function Recommendations() {
  const [budgetRange, setBudgetRange] = useState('medium'); // 'low', 'medium', 'high'
  const [duration, setDuration] = useState(5); // 1 to 14 days
  const [travelStyle, setTravelStyle] = useState('family'); // 'family', 'solo', 'adventure', 'business'

  // Match Destinations
  const matchedDestinations = destinations.filter((dest) => {
    // Travel style match
    const styleMatches = dest.travelTypes.includes(travelStyle);

    // Budget match
    let budgetMatches = true;
    if (budgetRange === 'low') {
      budgetMatches = dest.estimatedBudget < 1000;
    } else if (budgetRange === 'medium') {
      budgetMatches = dest.estimatedBudget >= 1000 && dest.estimatedBudget <= 2500;
    } else if (budgetRange === 'high') {
      budgetMatches = dest.estimatedBudget > 2500;
    }

    return styleMatches && budgetMatches;
  });

  // Match Hotels
  const matchedHotels = hotels.filter((hotel) => {
    // Match by destination list first
    const destIds = destinations.map((d) => d.id);
    
    // Budget matches for hotel price per night
    let priceMatches = true;
    if (budgetRange === 'low') {
      priceMatches = hotel.pricePerNight < 150;
    } else if (budgetRange === 'medium') {
      priceMatches = hotel.pricePerNight >= 150 && hotel.pricePerNight <= 350;
    } else if (budgetRange === 'high') {
      priceMatches = hotel.pricePerNight > 350;
    }

    // Optional style matching: if destination is in matchedDestinations
    const parentDestMatched = matchedDestinations.some((d) => d.id === hotel.destinationId);

    return priceMatches && (matchedDestinations.length === 0 || parentDestMatched);
  });

  const handleBooking = (hotel) => {
    alert(`Starting booking simulator for matched hotel: ${hotel.name}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight my-0">Smart Recommendation Engine</h1>
        <p className="text-slate-500 text-sm mt-1.5">
          Select your travel criteria to generate tailored, budget-aligned trip configurations instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Parameters Dashboard Panel */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 h-fit space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
            <FaSlidersH className="text-blue-600" />
            <h2 className="font-bold text-slate-900 text-sm uppercase tracking-wider my-0">Matching Parameters</h2>
          </div>

          {/* 1. Travel Style */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Travel Style</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'family', label: '👨‍👩‍👧 Family' },
                { value: 'solo', label: '🎒 Solo' },
                { value: 'adventure', label: '🧗 Adventure' },
                { value: 'business', label: '💼 Business' },
              ].map((style) => (
                <button
                  key={style.value}
                  onClick={() => setTravelStyle(style.value)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                    travelStyle === style.value
                      ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Budget Range */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Total Trip Budget</label>
            <div className="space-y-2">
              {[
                { value: 'low', label: 'Low (Under $1,000)', desc: 'Economy stays & sightseeing' },
                { value: 'medium', label: 'Moderate ($1,000 - $2,500)', desc: 'Mid-range comfort & tours' },
                { value: 'high', label: 'High (Above $2,500)', desc: 'Premium hotels & services' },
              ].map((b) => (
                <button
                  key={b.value}
                  onClick={() => setBudgetRange(b.value)}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-xs font-semibold flex flex-col gap-0.5 transition-all cursor-pointer ${
                    budgetRange === b.value
                      ? 'border-blue-600 bg-blue-50/65 text-blue-600 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/20'
                  }`}
                >
                  <span>{b.label}</span>
                  <span className={`text-[10px] font-normal ${budgetRange === b.value ? 'text-blue-500' : 'text-slate-400'}`}>
                    {b.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Duration slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Duration</span>
              <span className="text-blue-600 font-extrabold">{duration} Days</span>
            </div>
            <input
              type="range"
              min="1"
              max="14"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
              <span>1 Day</span>
              <span>7 Days</span>
              <span>14 Days</span>
            </div>
          </div>

          {/* Projected Estimates panel */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 my-0">
              <FaCalculator className="text-blue-600" />
              <span>Matching Analytics</span>
            </h4>
            <div className="text-xs space-y-1.5 text-slate-600">
              <div className="flex justify-between">
                <span>Selected style:</span>
                <span className="font-semibold text-slate-900 capitalize">{travelStyle}</span>
              </div>
              <div className="flex justify-between">
                <span>Destinations Matched:</span>
                <span className="font-semibold text-slate-900">{matchedDestinations.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Hotels Matched:</span>
                <span className="font-semibold text-slate-900">{matchedHotels.length}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Results Display */}
        <section className="lg:col-span-2 space-y-8">
          {/* Matched Destinations Sub-section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2 my-0">
              <FaPlane className="text-blue-600 text-sm" />
              <span>Recommended Destinations ({matchedDestinations.length})</span>
            </h2>
            {matchedDestinations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {matchedDestinations.map((dest) => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center text-sm text-slate-400">
                No matching destinations found for style "{travelStyle}" in this budget range. Try raising your budget.
              </div>
            )}
          </div>

          {/* Matched Hotels Sub-section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2 my-0">
              <FaHotel className="text-blue-600 text-sm" />
              <span>Recommended Accommodations ({matchedHotels.length})</span>
            </h2>
            {matchedHotels.length > 0 ? (
              <div className="flex flex-col gap-6">
                {matchedHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} onBook={handleBooking} />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center text-sm text-slate-400">
                No hotels match the target nightly pricing. Try adjusting your budget range parameters.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
