import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaTag, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { destinations, hotels, travelDeals, customerReviews } from '../data/travelData';
import DestinationCard from '../components/DestinationCard';
import HotelCard from '../components/HotelCard';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/destinations');
    }
  };

  // Limit destinations to 3 for Home Page display
  const homeDestinations = destinations.slice(0, 3);
  // Limit hotels to 2 for Home Page display
  const homeHotels = hotels.filter(h => h.featured).slice(0, 2);

  // Mock booking callback
  const handleBooking = (hotel) => {
    alert(`Thank you for booking ${hotel.name}! Redirecting to checkout simulator...`);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Search Bar */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1600&q=80')" }}></div>
          <div className="absolute inset-0 bg-slate-900"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white my-0">
            Discover Your Next <span className="text-blue-500">Perfect Getaway</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300">
            Compare prices, check detailed local guides, and select customized travel styles. TravelEase makes your next business, family, or solo trip effortless.
          </p>

          {/* Search destinations bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-xl shadow-lg p-3 sm:p-4 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 text-slate-800"
          >
            {/* Where to */}
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <FaMapMarkerAlt className="text-blue-500 text-lg flex-shrink-0" />
              <div className="text-left w-full">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Where to?</label>
                <input
                  type="text"
                  placeholder="Goa, Dubai, Singapore..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm font-semibold bg-transparent border-0 p-0 focus:ring-0 focus:outline-none placeholder-slate-400"
                />
              </div>
            </div>

            {/* Check-in */}
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <FaCalendarAlt className="text-blue-500 text-lg flex-shrink-0" />
              <div className="text-left">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Dates</label>
                <span className="text-xs font-semibold text-slate-500">Select Dates (Optional)</span>
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <FaUserFriends className="text-blue-500 text-lg flex-shrink-0" />
              <div className="text-left">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Guests</label>
                <span className="text-xs font-semibold text-slate-500">Add Guests (Optional)</span>
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <FaSearch className="text-sm" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight my-0">Popular Destinations</h2>
            <p className="text-slate-500 text-sm mt-1.5">Top trending travel locations around the world</p>
          </div>
          <Link to="/destinations" className="text-sm font-semibold text-blue-600 hover:underline">
            View All Explorer &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* Travel Deals Section */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight my-0">Hot Travel Deals</h2>
            <p className="text-slate-500 text-sm mt-1.5">Exclusive pricing and vouchers for TravelEase members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between items-start relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-[9px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
                  Featured Offer
                </div>
                <div className="space-y-2">
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full inline-block">
                    PROMO CODE
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug mt-1">{deal.title}</h3>
                  <p className="text-sm font-medium text-slate-700">{deal.tagline}</p>
                  <p className="text-xs text-slate-400 mt-2">{deal.validity}</p>
                </div>
                <div className="mt-5 w-full flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="bg-slate-50 border border-dashed border-slate-200 text-slate-800 text-xs font-mono font-semibold px-3 py-1.5 rounded-sm">
                    {deal.code}
                  </div>
                  <button
                    onClick={() => alert(`Promo code "${deal.code}" copied to clipboard!`)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight my-0">Featured Hotels</h2>
            <p className="text-slate-500 text-sm mt-1.5">Unmatched service, world-class luxury accommodations</p>
          </div>
          <Link to="/hotels" className="text-sm font-semibold text-blue-600 hover:underline">
            View All Hotels &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {homeHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onBook={handleBooking} />
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight my-0">What Our Travelers Say</h2>
            <p className="text-blue-100 text-sm">Trusted ratings from guests who booked through TravelEase</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerReviews.map((review) => (
              <div key={review.id} className="bg-white text-slate-800 rounded-xl p-8 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic relative">
                    <FaQuoteLeft className="text-slate-100 text-3xl absolute -top-4 -left-2 z-0 pointer-events-none" />
                    <span className="relative z-10">{review.comment}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900 leading-none">{review.name}</h4>
                    <span className="text-[10px] text-slate-400 mt-1 block">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
