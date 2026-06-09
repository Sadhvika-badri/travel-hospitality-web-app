import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

export default function DestinationCard({ destination }) {
  const { id, name, location, rating, estimatedBudget, travelTypes, image, description } = destination;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col transition-shadow">
      {/* Image & Badges */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-xs flex items-center gap-1">
          <FaStar className="text-amber-500 text-xs" />
          <span>{rating}</span>
        </div>
        
        {/* Travel Type Tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {travelTypes.map((type) => (
            <span
              key={type}
              className="bg-slate-900/75 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg text-slate-900 tracking-tight leading-tight">{name}</h3>
            <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
              <FaMapMarkerAlt className="text-slate-400" />
              <span>{location}</span>
            </p>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Est. Budget</span>
            <span className="font-bold text-slate-900 text-base flex items-center justify-end text-blue-600">
              <FaDollarSign className="text-sm -mr-0.5" />
              {estimatedBudget}
            </span>
          </div>
        </div>

        <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed flex-1">
          {description}
        </p>

        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/knowledge?dest=${id}`}
            className="text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center gap-1 transition-colors"
          >
            Read Travel Guide &rarr;
          </Link>
          <Link
            to={`/hotels?dest=${id}`}
            className="text-xs text-slate-500 hover:text-slate-700 underline font-medium transition-colors"
          >
            View Hotels
          </Link>
        </div>
      </div>
    </div>
  );
}
