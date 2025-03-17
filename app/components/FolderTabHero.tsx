// File folder tab hero section with background image on right third
import React from 'react';

const FolderTabHero = () => {
  return (
    <div className="w-full flex justify-center container-padding mt-24">
      <div className="relative w-full">
        {/* The tab part with slanted left side and proper rounded corners */}
        <div className="absolute h-8 w-40 right-0 -top-8 overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 160 32" preserveAspectRatio="none">
            <path 
              d="M0,32 L20,8 C25,2 30,0 40,0 L150,0 C156,0 160,4 160,10 L160,32 Z" 
              fill="#E06033" 
            />
          </svg>
        </div>
        
        {/* Main container with hero content and background image on right 1/3 */}
        <div className="w-full rounded-lg rounded-tr-none shadow-lg p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: '#E06033' }}>
          {/* Background image on the right 1/3 */}
          <div className="absolute top-0 right-0 h-full w-1/3 overflow-hidden">
            <img 
              src="/api/placeholder/800/600" 
              alt="Background decoration" 
              className="h-full w-full object-cover opacity-20"
            />
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to Our Platform
            </h1>
            <p className="text-xl text-white/90 mb-8">
              This hero section features a unique file folder tab design, making your website 
              stand out with a distinctive and memorable appearance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-white font-medium rounded-lg hover:bg-opacity-90 transition-colors" style={{ color: '#E06033' }}>
                Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderTabHero;
