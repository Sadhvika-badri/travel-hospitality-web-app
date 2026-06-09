import { FaStar, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaUtensils, FaSpa, FaConciergeBell } from 'react-icons/fa';

// Map amenity strings to icons for visual enhancement
const getAmenityIcon = (name) => {
  const normalized = name.toLowerCase();
  if (normalized.includes('wifi')) return <FaWifi />;
  if (normalized.includes('pool') || normalized.includes('swimming')) return <FaSwimmingPool />;
  if (normalized.includes('dining') || normalized.includes('restaurant') || normalized.includes('food')) return <FaUtensils />;
  if (normalized.includes('spa') || normalized.includes('wellness')) return <FaSpa />;
  if (normalized.includes('butler') || normalized.includes('service') || normalized.includes('concierge')) return <FaConciergeBell />;
  return null;
};

export default function HotelCard({ hotel, onBook }) {
  const { name, location, stars, pricePerNight, image, amenities } = hotel;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col md:flex-row transition-shadow">
      {/* Hotel Image */}
      <div className="relative w-full md:w-72 h-56 md:h-auto overflow-hidden bg-slate-100 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {stars === 5 && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] tracking-wider uppercase font-bold px-2.5 py-1 rounded-sm shadow-sm">
            Luxury Elite
          </div>
        )}
      </div>

      {/* Hotel Info Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Area */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: stars }).map((_, i) => (
                  <FaStar key={i} className="text-amber-500 text-sm" />
                ))}
              </div>
              <h3 className="font-semibold text-lg md:text-xl text-slate-900 leading-snug tracking-tight">{name}</h3>
              <p className="text-slate-500 text-xs flex items-center gap-1 mt-1.5">
                <FaMapMarkerAlt className="text-slate-400 flex-shrink-0" />
                <span>{location}</span>
              </p>
            </div>

            {/* Pricing Section */}
            <div className="text-right flex-shrink-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Per Night</span>
              <div className="flex items-baseline justify-end gap-0.5">
                <span className="text-2xl font-bold text-slate-900">${pricePerNight}</span>
              </div>
              <span className="text-[10px] text-slate-500 block">Excl. taxes & fees</span>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="mt-5">
            <h4 className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2">Featured Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md transition-colors"
                >
                  <span className="text-slate-500 text-xs">{getAmenityIcon(amenity)}</span>
                  <span>{amenity}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-medium">
            ✔ Free Cancellation <span className="text-slate-300 mx-1">|</span> ✔ No Prepayment Needed
          </div>
          <button
            onClick={() => onBook(hotel)}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
