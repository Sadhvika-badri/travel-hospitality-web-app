import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <FaPlaneDeparture className="text-blue-500" />
              <span>Travel<span className="text-blue-500">Ease</span></span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              TravelEase is a premium discovery and booking platform helping travelers explore popular destinations, find luxury hotels, and optimize their plans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><FaFacebook className="text-lg" /></a>
              <a href="#" className="hover:text-white transition-colors"><FaTwitter className="text-lg" /></a>
              <a href="#" className="hover:text-white transition-colors"><FaInstagram className="text-lg" /></a>
              <a href="#" className="hover:text-white transition-colors"><FaLinkedin className="text-lg" /></a>
            </div>
          </div>

          {/* Quick Discover Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Discover</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/destinations" className="hover:text-white transition-colors">Goa Beaches</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Jaipur Heritage</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Bangalore Tech Hub</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Dubai Skylines</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Singapore Resorts</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About TravelEase</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Insights Dashboard</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Room</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get seasonal travel deals and local destination guides.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="bg-slate-800 text-white placeholder-slate-500 text-sm rounded-l-md px-3.5 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 border border-slate-700 border-r-0"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-r-md px-4 py-2 transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {currentYear} TravelEase Inc. All rights reserved. Built for professional recruitment showcase.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
