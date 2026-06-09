import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaFilter, FaCalendarAlt, FaUserFriends, FaCheckCircle, FaStar, FaTimes } from 'react-icons/fa';
import { hotels, destinations } from '../data/travelData';
import HotelCard from '../components/HotelCard';

export default function Hotels() {
  const [searchParams] = useSearchParams();
  const initialDestFilter = searchParams.get('dest') || 'all';

  const [destFilter, setDestFilter] = useState(initialDestFilter);
  const [starFilter, setStarFilter] = useState([]);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc'

  // Booking Modal State
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingStep, setBookingStep] = useState(1); // 1 = Form, 2 = Success
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    const dest = searchParams.get('dest');
    if (dest) {
      setDestFilter(dest);
    }
  }, [searchParams]);

  // Handle Star ratings check box changes
  const handleStarChange = (stars) => {
    if (starFilter.includes(stars)) {
      setStarFilter(starFilter.filter((s) => s !== stars));
    } else {
      setStarFilter([...starFilter, stars]);
    }
  };

  // Filter Hotels
  const filteredHotels = hotels.filter((hotel) => {
    // Destination filter
    const matchesDest = destFilter === 'all' || hotel.destinationId === destFilter;

    // Star rating filter
    const matchesStars = starFilter.length === 0 || starFilter.includes(hotel.stars);

    return matchesDest && matchesStars;
  });

  // Sort Hotels
  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.pricePerNight - b.pricePerNight;
    }
    if (sortBy === 'price-desc') {
      return b.pricePerNight - a.pricePerNight;
    }
    // Default featured sorting: featured first, then name
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.name.localeCompare(b.name);
  });

  // Open Booking Flow
  const openBookingModal = (hotel) => {
    setSelectedHotel(hotel);
    setBookingStep(1);
    // Set default dates: checkin tomorrow, checkout +3 days
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const checkinStr = tomorrow.toISOString().split('T')[0];

    const checkoutDate = new Date();
    checkoutDate.setDate(checkoutDate.getDate() + 4);
    const checkoutStr = checkoutDate.toISOString().split('T')[0];

    setCheckIn(checkinStr);
    setCheckOut(checkoutStr);
    setGuests(2);
    setGuestName('');
    setGuestEmail('');
  };

  // Confirm booking action
  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!guestName || !guestEmail) {
      alert('Please fill out your details.');
      return;
    }
    // Generate mock booking ID
    const randomId = 'TE-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomId);
    setBookingStep(2);
  };

  // Calculate days for pricing
  const calculateDays = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
  };

  const days = calculateDays();
  const totalPrice = selectedHotel ? selectedHotel.pricePerNight * days * (guests > 2 ? 1 + (guests - 2) * 0.25 : 1) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight my-0">Hotel Discovery</h1>
          <p className="text-slate-500 text-sm mt-1.5">
            Discover verified hotels and luxurious accommodation options suited to your journey.
          </p>
        </div>
        {/* Sorting controls */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-slate-500 flex-shrink-0">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-slate-200 rounded-lg text-sm px-3.5 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none text-slate-800"
          >
            <option value="featured">Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
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
              onClick={() => {
                setDestFilter('all');
                setStarFilter([]);
              }}
              className="text-xs text-blue-600 hover:text-blue-700 hover:underline font-semibold"
            >
              Reset All
            </button>
          </div>

          {/* Destination filter */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Destination</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-slate-700 font-medium cursor-pointer">
                <input
                  type="radio"
                  name="dest-filter"
                  checked={destFilter === 'all'}
                  onChange={() => setDestFilter('all')}
                  className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 focus:ring-0"
                />
                <span>All Destinations</span>
              </label>
              {destinations.map((dest) => (
                <label key={dest.id} className="flex items-center gap-2 text-sm text-slate-700 font-medium cursor-pointer">
                  <input
                    type="radio"
                    name="dest-filter"
                    checked={destFilter === dest.id}
                    onChange={() => setDestFilter(dest.id)}
                    className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 focus:ring-0"
                  />
                  <span>{dest.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Star Rating filter */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Star Rating</h3>
            <div className="space-y-2">
              {[5, 4].map((stars) => (
                <label key={stars} className="flex items-center gap-2 text-sm text-slate-700 font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    checked={starFilter.includes(stars)}
                    onChange={() => handleStarChange(stars)}
                    className="h-4 w-4 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 focus:ring-0"
                  />
                  <span className="flex items-center gap-0.5">
                    {stars} <FaStar className="text-amber-500 text-xs" />
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Hotels List */}
        <main className="flex-1 space-y-6">
          <div className="text-sm text-slate-500">
            Showing {sortedHotels.length} luxury hotel{sortedHotels.length !== 1 ? 's' : ''} matching criteria
          </div>

          {sortedHotels.length > 0 ? (
            <div className="flex flex-col gap-6">
              {sortedHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} onBook={openBookingModal} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center max-w-xl mx-auto space-y-4">
              <h3 className="font-bold text-slate-900 text-lg leading-none">No Hotels Found</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We couldn't find any hotels matching your current filters. Try selecting "All Destinations" or check other rating options.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Booking Modal Overlay */}
      {selectedHotel && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden transition-all duration-300">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-900 text-lg my-0">Hotel Reservation Simulator</h3>
              <button
                onClick={() => setSelectedHotel(null)}
                className="text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {bookingStep === 1 ? (
              /* Step 1: Form Details */
              <form onSubmit={handleConfirmBooking} className="p-6 space-y-5">
                <div className="flex gap-4">
                  <img
                    src={selectedHotel.image}
                    alt={selectedHotel.name}
                    className="w-24 h-20 object-cover rounded-lg border border-slate-200"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base leading-snug">{selectedHotel.name}</h4>
                    <p className="text-slate-500 text-xs mt-1">{selectedHotel.location}</p>
                    <div className="flex items-center gap-0.5 mt-2">
                      {Array.from({ length: selectedHotel.stars }).map((_, i) => (
                        <FaStar key={i} className="text-amber-500 text-xs" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Check-in Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-sm rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none text-slate-800"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Check-out Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-sm rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none text-slate-800"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Number of Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 text-sm rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none text-slate-800"
                  >
                    {[1, 2, 3, 4, 5].map((g) => (
                      <option key={g} value={g}>
                        {g} Guest{g !== 1 ? 's' : ''} {g > 2 ? '(+$25/night extra occupant fee)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-3">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider my-0">Contact Details</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-sm rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none text-slate-800"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-sm rounded-lg p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none text-slate-800"
                      required
                    />
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-blue-50/70 border border-blue-100/50 rounded-xl p-4 flex justify-between items-center text-sm">
                  <div>
                    <span className="text-slate-600 block">Total Summary ({days} night{days !== 1 ? 's' : ''})</span>
                    <span className="text-slate-400 text-xs">Based on {guests} occupants</span>
                  </div>
                  <span className="text-xl font-bold text-blue-700">${totalPrice}</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer text-center text-sm shadow-md"
                >
                  Confirm Booking Simulation
                </button>
              </form>
            ) : (
              /* Step 2: Success Screen */
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto border border-green-200">
                  <FaCheckCircle className="text-3xl" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-slate-900 text-xl tracking-tight leading-none my-0">Booking Successful!</h4>
                  <p className="text-slate-500 text-sm">
                    Thank you {guestName}, your booking reservation has been successfully mock-registered.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left text-sm space-y-2 max-w-sm mx-auto">
                  <div className="flex justify-between border-b border-slate-200/50 pb-2 mb-2 font-mono text-xs">
                    <span className="text-slate-400">BOOKING ID</span>
                    <span className="font-bold text-slate-900">{bookingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Hotel:</span>
                    <span className="text-slate-800 font-semibold">{selectedHotel.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Dates:</span>
                    <span className="text-slate-800 font-semibold">{checkIn} to {checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Guests:</span>
                    <span className="text-slate-800 font-semibold">{guests} Person{guests !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-200/50 mt-2 text-base font-bold">
                    <span className="text-slate-900">Paid Amount:</span>
                    <span className="text-blue-600">${totalPrice}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  A verification confirmation code has been simulated to <strong>{guestEmail}</strong>. No actual payment was charged.
                </p>

                <button
                  onClick={() => setSelectedHotel(null)}
                  className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors cursor-pointer w-full"
                >
                  Done & Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
