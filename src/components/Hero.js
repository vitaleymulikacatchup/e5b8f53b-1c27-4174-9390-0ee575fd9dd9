import React from 'react';

const Hero = () => {
  return (
    <section className="product-section bg-black text-white relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="product-title text-white mb-2">
          iPhone 17 Pro
        </h1>
        <p className="product-subtitle text-gray-300 mb-8">
          All out Pro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="apple-button-primary">
            Learn more
          </button>
          <button className="apple-button-secondary bg-transparent border-white text-white hover:bg-white hover:text-black">
            Buy
          </button>
        </div>
      </div>
      
      {/* iPhone image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
        <div className="relative">
          <div className="w-80 h-96 mx-auto bg-gradient-to-b from-orange-400 to-orange-600 rounded-t-3xl relative overflow-hidden">
            {/* Camera module */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-orange-500 rounded-2xl">
              <div className="flex justify-center items-center h-full space-x-2">
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <div className="w-8 h-8 bg-black rounded-full"></div>
              </div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute bottom-2 right-4 w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;