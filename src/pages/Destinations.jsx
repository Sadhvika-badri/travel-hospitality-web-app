import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch, FaFilter, FaSlidersH, FaTimes } from 'react-icons/fa';
import { destinations } from '../data/travelData';
import DestinationCard from '../components/DestinationCard';

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [search, setSearch] = useState(initialSearch);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBudgetRange, setSelectedBudgetRange] = useState('all'); // 'all', 'budget', 'moderate', 'luxury'

  // Sync search input if URL search params change
  useEffect(() => {
    setSearch(searchParams.get('search') || '');
  }, [searchParams]);

  // Handle travel style checkbox selection
  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  // Filter logic
  const filteredDestinations = destinations.filter((dest) => {
    // Search Query Match
    const query = search.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      dest.name.toLowerCase().includes(query) ||
      dest.location.toLowerCase().includes(query) ||
      dest.description.toLowerCase().includes(query);

    // Travel Type Match
    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.some((type) => dest.travelTypes.includes(type));

    // Budget Match
    let matchesBudget = true;
    if (selectedBudgetRange === 'budget') {
      matchesBudget = dest.estimatedBudget < 1000;
    } else if (selectedBudgetRange === 'moderate') {
      matchesBudget = dest.estimatedBudget >= 1000 && dest.estimatedBudget <= 2500;
    } else if (selectedBudgetRange === 'luxury') {
      matchesBudget = dest.estimatedBudget > 2500;
    }

    return matchesSearch && matchesType && matchesBudget;
  });

  const clearFilters = () => {
    setSearch('');
    setSelectedTypes([]);
    setSelectedBudgetRange('all');
    setSearchParams({});
  };

  const updateSearchUrl = (val) => {
    setSearch(val);
    if (val.trim()) {
      setSearchParams({ search: val.trim() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight my-0">Destination Explorer</h1>
        <p className="text-slate-500 text-sm mt-1.5">
          Browse popular getaways, filter by cost, and match with your desired travel styles.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 bg-white border border-slate-200 rounded-xl p-6 h-fit space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 my-0">
              <FaFilter className="text-blue-500 text-xs" />
              <span>Filters</span>
            </h2>
            <button
              onClick={clearFilters}
              className="text-xs text-blue-600 hover:text-blue-700 hover:underline font-semibold"
            >
              Reset All
            </button>
          </div>

          {/* Search Inputs inside filters */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Search Keyword</h3>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => updateSearchUrl(e.target.value)}
                placeholder="E.g. beaches, temple..."
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white text-sm rounded-lg pl-9 pr-4 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none placeholder-slate-400 text-slate-800"
              />
              <FaSearch className="absolute left-3 top-3 text-slate-400 text-xs" />
            </div>
          </div>

          {/* Travel Types */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Travel Type</h3>
            <div className="space-y-2">
              {['family', 'solo', 'adventure', 'business'].map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm text-slate-700 font-medium cursor-pointer capitalize">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                    className="h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 focus:ring-0"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget Filter */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Budget</h3>
            <div className="space-y-2">
              {[
                { value: 'all', label: 'Any Budget' },
                { value: 'budget', label: 'Budget (Under $1,000)' },
                { value: 'moderate', label: 'Moderate ($1,000 - $2,500)' },
                { value: 'luxury', label: 'Luxury (Over $2,500)' },
              ].map((range) => (
                <label key={range.value} className="flex items-center gap-2 text-sm text-slate-700 font-medium cursor-pointer">
                  <input
                    type="radio"
                    name="budget-range"
                    value={range.value}
                    checked={selectedBudgetRange === range.value}
                    onChange={(e) => setSelectedBudgetRange(e.target.value)}
                    className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 focus:ring-0"
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Grid View */}
        <main className="flex-1 space-y-6">
          {/* Summary / Total Count */}
          <div className="flex justify-between items-center text-sm text-slate-500">
            <span>Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}</span>
            {search && (
              <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                <span>Keyword: "{search}"</span>
                <button onClick={() => updateSearchUrl('')}>
                  <FaTimes className="text-[10px] opacity-70 hover:opacity-100" />
                </button>
              </span>
            )}
          </div>

          {/* Results Grid */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center max-w-xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto text-slate-400">
                <FaSlidersH className="text-xl" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg leading-none">No Destinations Found</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We couldn't find any destinations matching your current filters. Try relaxing your budget limits or keyword query.
              </p>
              <button
                onClick={clearFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
