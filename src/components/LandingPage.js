import React, { useState } from 'react';
import { Headphones, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LandingPage = ({ setCurrentPage }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col lg:flex-row font-open-sans">
      {/* Left Side - Animation */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8 lg:p-12 animate-fade-in-left">
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="relative">
            <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
              <Headphones className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
            </div>
            <div className="absolute -top-8 -right-8 w-16 h-16 lg:w-20 lg:h-20 bg-purple-400 rounded-full animate-ping opacity-70"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 lg:w-16 lg:h-16 bg-blue-400 rounded-full animate-ping opacity-70"></div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-montserrat font-bold bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent mt-8 text-center drop-shadow-md">
            AI Call Analytics
          </h2>
          <p className="text-gray-700 mt-2 text-center text-lg font-open-sans drop-shadow-sm">
            Transform your calls into insights
          </p>
        </div>
      </div>
      
      {/* Right Side - Login/Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-gradient-to-tr from-gray-50 to-gray-100 animate-fade-in-right">
        <div className="w-full max-w-md">
          <div className={`relative w-full h-[500px] transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`} style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
            {/* Login Card */}
            <div className={`absolute w-full h-full backface-hidden ${isFlipped ? 'invisible' : ''}`} style={{ backfaceVisibility: 'hidden' }}>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200/50 transform hover:scale-[1.01] transition-transform duration-300">
                <h3 className="text-3xl font-montserrat font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-8 drop-shadow-md">
                  Welcome Back
                </h3>
                <div className="space-y-6">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm focus:shadow-md focus:scale-[1.01] font-open-sans" 
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Password" 
                      className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm focus:shadow-md focus:scale-[1.01] font-open-sans" 
                    />
                    <button 
                      onClick={() => setShowPassword(!showPassword)} 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <button 
                    onClick={() => setCurrentPage('dashboard')} 
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-montserrat"
                  >
                    Login
                  </button>
                  <div className="text-center">
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200 hover:underline font-open-sans">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center text-gray-700">
                    New here?
                    <button 
                      onClick={() => setIsFlipped(true)} 
                      className="text-blue-600 hover:text-blue-700 font-semibold ml-1 transition-colors duration-200 hover:underline font-open-sans"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Signup Card (Back) */}
            <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${!isFlipped ? 'invisible' : ''}`} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200/50 transform hover:scale-[1.01] transition-transform duration-300">
                <h3 className="text-3xl font-montserrat font-bold bg-gradient-to-r from-purple-600 to-pink-700 bg-clip-text text-transparent mb-8 drop-shadow-md">
                  Create Account
                </h3>
                <div className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-sm focus:shadow-md focus:scale-[1.01] font-open-sans" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-sm focus:shadow-md focus:scale-[1.01] font-open-sans" 
                  />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-sm focus:shadow-md focus:scale-[1.01] font-open-sans" 
                  />
                  <button 
                    onClick={() => setCurrentPage('dashboard')} 
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-700 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-montserrat"
                  >
                    Sign Up
                  </button>
                  <div className="text-center text-gray-700">
                    Already have an account?
                    <button 
                      onClick={() => setIsFlipped(false)} 
                      className="text-purple-600 hover:text-purple-700 font-semibold ml-1 transition-colors duration-200 hover:underline font-open-sans"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;