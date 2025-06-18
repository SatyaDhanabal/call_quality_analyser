import React, { useState } from 'react';
import { Phone, Star, ChevronRight, Users } from 'lucide-react';

const Dashboard = ({ setCurrentPage }) => {
  const [metrics] = useState({
    totalCalls: 1250,
    avgRating: 4.2,
    highRatings: 85,
    lowRatings: 10,
    totalUsers: 75
  });

  // Define an array of different gradients for each month
  const monthlyGradients = [
    'linear-gradient(90deg, hsla(210, 100%, 50%, 1) 0%, hsla(180, 100%, 30%, 1) 100%)', // Blue to Teal
    'linear-gradient(90deg, hsla(350, 80%, 60%, 1) 0%, hsla(10, 90%, 50%, 1) 100%)',  // Red-Orange to Orange
    'linear-gradient(90deg, hsla(120, 70%, 40%, 1) 0%, hsla(90, 60%, 50%, 1) 100%)',  // Dark Green to Lime
    'linear-gradient(90deg, hsla(280, 70%, 60%, 1) 0%, hsla(250, 80%, 40%, 1) 100%)',  // Purple to Dark Violet
    'linear-gradient(90deg, hsla(40, 90%, 60%, 1) 0%, hsla(20, 80%, 50%, 1) 100%)',   // Gold to Orange-Red
    'linear-gradient(90deg, hsla(190, 80%, 50%, 1) 0%, hsla(220, 70%, 40%, 1) 100%)'   // Cyan to Dark Blue
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-open-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-lg animate-fade-in-down">
        <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0 drop-shadow-sm">
            AI Call Analytics
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-4 py-2 rounded-lg font-montserrat font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-md">
              Dashboard
            </button>
            <button onClick={() => setCurrentPage('users')} className="px-4 py-2 rounded-lg font-montserrat font-medium text-gray-600 hover:text-blue-600 hover:shadow-sm">
              User Management
            </button>
            <button onClick={() => setCurrentPage('upload')} className="px-4 py-2 rounded-lg font-montserrat font-medium text-gray-600 hover:text-blue-600 hover:shadow-sm">
              Upload Audio
            </button>
            <button onClick={() => setCurrentPage('feedback')} className="px-4 py-2 rounded-lg font-montserrat font-medium text-gray-600 hover:text-blue-600 hover:shadow-sm">
              Feedback Sessions
            </button>
          </div>
          <button onClick={() => setCurrentPage('login')} className="text-gray-600 hover:text-red-600 font-montserrat font-medium mt-4 md:mt-0">
            Logout
          </button>
        </div>
      </nav>

      {/* Metrics Cards */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8 animate-fade-in-up animation-delay-200">
        {/* Total Calls Card */}
        <div className="rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-card-pop"
          style={{ background: 'linear-gradient(to right, #4A569D, #DC2424)' }}> {/* Applied the requested gradient */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-open-sans">Total Calls</p>
              <p className="text-3xl font-montserrat font-bold mt-2 drop-shadow-md">{Math.floor(metrics.totalCalls)}</p>
            </div>
            <Phone className="w-12 h-12 text-white opacity-80 animate-icon-bounce" />
          </div>
        </div>

        {/* Average Rating Card */}
        <div className="rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-card-pop animation-delay-100"
          style={{ backgroundImage: 'linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%)' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-open-sans">Average Rating</p>
              <p className="text-3xl font-montserrat font-bold mt-2 drop-shadow-md">{metrics.avgRating.toFixed(1)}</p>
            </div>
            <Star className="w-12 h-12 text-white opacity-80 animate-icon-bounce" />
          </div>
        </div>

        {/* High Ratings Card */}
        <div className="rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-card-pop animation-delay-200"
          style={{ backgroundImage: 'linear-gradient(to right, #6a3093 0%, #a044ff 51%, #6a3093 100%)' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-open-sans">High Ratings</p>
              <p className="text-3xl font-montserrat font-bold mt-2 drop-shadow-md">{Math.floor(metrics.highRatings)}%</p>
            </div>
            <ChevronRight className="w-12 h-12 text-white opacity-80 animate-icon-bounce" />
          </div>
        </div>

        {/* Low Ratings Card */}
        <div className="rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-card-pop animation-delay-300"
          style={{ backgroundImage: 'linear-gradient(to right, #56ab2f 0%, #a8e063 51%, #56ab2f 100%)' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-open-sans">Low Ratings</p>
              <p className="text-3xl font-montserrat font-bold mt-2 drop-shadow-md">{Math.floor(metrics.lowRatings)}%</p>
            </div>
            <ChevronRight className="w-12 h-12 text-white opacity-80 animate-icon-bounce" />
          </div>
        </div>

        {/* Total Users Card */}
        <div className="rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-card-pop animation-delay-400"
          style={{ backgroundImage: 'linear-gradient(to right, #cb2d3e 0%, #ef473a 51%, #cb2d3e 100%)' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-open-sans">Total Users</p>
              <p className="text-3xl font-montserrat font-bold mt-2 drop-shadow-md">{Math.floor(metrics.totalUsers)}</p>
            </div>
            <Users className="w-12 h-12 text-white opacity-80 animate-icon-bounce" />
          </div>
        </div>
      </div>

      {/* Bar Chart - Fixed Version */}
      <div className="p-6 pt-0">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h3 className="text-xl font-montserrat font-bold text-gray-800 mb-6">
            Monthly Performance Trend
          </h3>

          {/* Bar Chart Container */}
          <div className="relative h-64 bg-gray-50 rounded-lg p-4">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-600">
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Bars Container */}
            <div className="ml-8 h-full flex items-end justify-around gap-4">
              {[
                { month: 'Jan', value: 40 },
                { month: 'Feb', value: 65 },
                { month: 'Mar', value: 45 },
                { month: 'Apr', value: 80 },
                { month: 'May', value: 70 },
                { month: 'Jun', value: 90 }
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full">
                  {/* Bar */}
                  <div
                    className="w-12 rounded-t transition-all duration-500 hover:opacity-80"
                    style={{
                      height: `${item.value}%`,
                      // Apply a different gradient based on the index
                      background: monthlyGradients[idx % monthlyGradients.length]
                    }}
                  >
                    {/* Value label on top of bar */}
                    <div className="text-white text-xs text-center py-1 font-semibold w-full">
                      {item.value}
                    </div>
                  </div>
                  {/* Month label */}
                  <p className="text-sm text-gray-600 mt-2">{item.month}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span>← Months</span>
            <span>Performance Score →</span>
          </div>
        </div>

        {/* Ratings Distribution */}
        <div className="p-6 pt-0 flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 animate-fade-in-up animation-delay-600 w-full max-w-4xl">
            <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 drop-shadow-sm">
              Ratings Distribution
            </h3>
            <div className="space-y-4">
              {[
                { rating: 5, percentage: 45, color: 'from-green-500 to-green-700' },
                { rating: 4, percentage: 30, color: 'from-lime-500 to-lime-700' },
                { rating: 3, percentage: 15, color: 'from-yellow-500 to-yellow-700' },
                { rating: 2, percentage: 7, color: 'from-orange-500 to-orange-700' },
                { rating: 1, percentage: 3, color: 'from-red-500 to-red-700' }
              ].map((item, idx) => (
                <div key={item.rating} className="flex items-center gap-4 group">
                  <div className="flex items-center gap-1 w-20">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} transform transition-transform duration-200 group-hover:scale-125`}
                      />
                    ))}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                    <div
                      className={`bg-gradient-to-r ${item.color} h-full transition-all duration-1000 flex items-center justify-end pr-2 rounded-full shadow-md`}
                      style={{ width: `${item.percentage}%` }}
                    >
                      <span className="text-white text-xs font-semibold drop-shadow-sm font-open-sans">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
