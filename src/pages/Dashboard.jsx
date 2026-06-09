import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { FaGlobeAmericas, FaPercent, FaHotel, FaUsers, FaArrowUp } from 'react-icons/fa';

export default function Dashboard() {
  // Chart 1: Popular Destinations Search Volume
  const destinationData = [
    { name: 'Goa', searches: 4200, bookings: 1200 },
    { name: 'Jaipur', searches: 3100, bookings: 850 },
    { name: 'Bangalore', searches: 2500, bookings: 980 },
    { name: 'Dubai', searches: 5800, bookings: 1850 },
    { name: 'Singapore', searches: 6200, bookings: 2100 },
  ];

  // Chart 2: User Interest Metrics (Search volume trend over last 6 months)
  const interestTrendData = [
    { month: 'Jan', volume: 2400 },
    { month: 'Feb', volume: 2900 },
    { month: 'Mar', volume: 3800 },
    { month: 'Apr', volume: 4200 },
    { month: 'May', volume: 5600 },
    { month: 'Jun', volume: 7500 },
  ];

  // Chart 3: Travel Categories Distribution
  const travelCategoryData = [
    { name: 'Family', value: 35, color: '#2563eb' },    // Blue
    { name: 'Solo', value: 25, color: '#f59e0b' },      // Amber
    { name: 'Adventure', value: 20, color: '#10b981' }, // Emerald
    { name: 'Business', value: 20, color: '#6366f1' },  // Indigo
  ];

  // Chart Cell colors
  const COLORS = ['#2563eb', '#f59e0b', '#10b981', '#6366f1'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight my-0">Platform Analytics Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1.5">
          Live statistics, user searches, destination volumes, and categories distribution updated in real-time.
        </p>
      </div>

      {/* Summary / Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex items-center gap-5">
          <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
            <FaGlobeAmericas />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Monthly Searches</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-bold text-slate-900">21,800</span>
              <span className="text-emerald-500 text-xs font-semibold flex items-center gap-0.5">
                <FaArrowUp className="text-[9px]" /> 12.5%
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex items-center gap-5">
          <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
            <FaHotel />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Partner Hotels</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-bold text-slate-900">10 Active</span>
              <span className="text-slate-400 text-xs font-semibold">4 Destinations</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex items-center gap-5">
          <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
            <FaPercent />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Conversion Rate</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-bold text-slate-900">4.82%</span>
              <span className="text-emerald-500 text-xs font-semibold flex items-center gap-0.5">
                <FaArrowUp className="text-[9px]" /> 0.8%
              </span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex items-center gap-5">
          <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl">
            <FaUsers />
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Unique Visitors</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-bold text-slate-900">8,924</span>
              <span className="text-emerald-500 text-xs font-semibold flex items-center gap-0.5">
                <FaArrowUp className="text-[9px]" /> 4.2%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Destination Bar Chart */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 my-0">Popular Destinations Search Volume</h3>
            <span className="text-xs text-slate-500 block">Searches vs bookings comparison per location</span>
          </div>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={destinationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tickLine={false} stroke="#94a3b8" style={{ fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} stroke="#94a3b8" style={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, borderColor: '#e2e8f0' }} />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                <Bar dataKey="searches" fill="#2563eb" name="Searches" radius={[4, 4, 0, 0]} />
                <Bar dataKey="bookings" fill="#10b981" name="Bookings" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Search Volume Line Chart */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 my-0">Monthly User Search Trend</h3>
            <span className="text-xs text-slate-500 block">Interest volume growth tracking over the last 6 months</span>
          </div>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={interestTrendData} margin={{ top: 10, right: 15, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" tickLine={false} stroke="#94a3b8" style={{ fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} stroke="#94a3b8" style={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, borderColor: '#e2e8f0' }} />
                <Line type="monotone" dataKey="volume" stroke="#2563eb" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Search Volume" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Travel Style Categories */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 my-0">Travel Categories Distribution</h3>
            <span className="text-xs text-slate-500 block">User preference statistics by booking style</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="w-full flex justify-center">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={travelCategoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {travelCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3.5">
              {travelCategoryData.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-sm" style={{ backgroundColor: item.color }} />
                    <span className="font-semibold text-slate-700">{item.name}</span>
                  </div>
                  <span className="font-bold text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Viewed Hotels Table / Summary List */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 my-0">Most Viewed Hotel Rankings</h3>
            <span className="text-xs text-slate-500 block">Weekly user listing page hits and click-through rates</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-500 border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-3 px-1">Hotel</th>
                  <th className="py-3 px-1">Avg Rating</th>
                  <th className="py-3 px-1 text-right">Weekly Views</th>
                  <th className="py-3 px-1 text-right">Click Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-slate-800">
                {[
                  { name: 'Marina Bay Sands Singapore', rating: '5.0 ★', views: '4,890', ctr: '12.4%' },
                  { name: 'Atlantis The Palm Dubai', rating: '5.0 ★', views: '4,120', ctr: '10.8%' },
                  { name: 'Taj Exotica Resort Goa', rating: '5.0 ★', views: '3,250', ctr: '9.2%' },
                  { name: 'The Leela Palace Bangalore', rating: '5.0 ★', views: '2,940', ctr: '8.5%' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-1 font-semibold text-slate-900 text-xs sm:text-sm">{row.name}</td>
                    <td className="py-3.5 px-1 text-xs font-semibold text-amber-500">{row.rating}</td>
                    <td className="py-3.5 px-1 text-right font-mono text-xs">{row.views}</td>
                    <td className="py-3.5 px-1 text-right font-semibold text-emerald-500 text-xs">{row.ctr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
