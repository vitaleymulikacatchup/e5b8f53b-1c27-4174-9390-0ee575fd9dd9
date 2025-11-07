import React from 'react';

const AppleTVSection = () => {
  return (
    <section className="bg-white py-16">
      {/* Apple TV+ Shows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
        {/* Lasso */}
        <div className="relative h-96 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
          <div className="absolute top-4 left-4">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <div className="text-center text-white">
            <h3 className="text-4xl font-bold mb-2">LASSO</h3>
          </div>
          <div className="absolute bottom-4 left-4">
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
              Watch now
            </button>
          </div>
        </div>

        {/* Pluribus */}
        <div className="relative h-96 bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
          <div className="absolute top-4 right-4">
            <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <div className="text-center text-black">
            <h3 className="text-4xl font-bold mb-2">PLURIBUS</h3>
          </div>
          <div className="absolute bottom-4 left-4">
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
              Watch now
            </button>
          </div>
        </div>

        {/* Other shows */}
        <div className="relative h-96 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
          <div className="absolute top-4 left-4">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <div className="text-center text-white">
            <p className="text-sm mb-2">Stream now</p>
            <h3 className="text-lg font-semibold">The Buccaneers</h3>
          </div>
        </div>

        <div className="relative h-96 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
          <div className="absolute top-4 left-4">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <div className="text-center text-white">
            <p className="text-sm mb-2">Stream now</p>
            <h3 className="text-lg font-semibold">Killers of the Flower Moon</h3>
          </div>
        </div>

        <div className="relative h-96 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
          <div className="absolute top-4 left-4">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <div className="text-center text-white">
            <p className="text-sm mb-2">Stream now</p>
            <h3 className="text-lg font-semibold">Barbie</h3>
          </div>
        </div>
      </div>

      {/* Bottom shows grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 mt-0">
        <div className="relative h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs mb-1">Stream now</p>
            <h4 className="text-sm font-semibold">Severance</h4>
          </div>
        </div>
        
        <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs mb-1">Stream now</p>
            <h4 className="text-sm font-semibold">Foundation</h4>
          </div>
        </div>
        
        <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs mb-1">Stream now</p>
            <h4 className="text-sm font-semibold">The Morning Show</h4>
          </div>
        </div>
        
        <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs mb-1">Stream now</p>
            <h4 className="text-sm font-semibold">See</h4>
          </div>
        </div>
        
        <div className="relative h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs mb-1">Stream now</p>
            <h4 className="text-sm font-semibold">Tehran</h4>
          </div>
        </div>
        
        <div className="relative h-48 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs mb-1">Stream now</p>
            <h4 className="text-sm font-semibold">Mythic Quest</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleTVSection;