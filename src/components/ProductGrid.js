import React from 'react';

const ProductGrid = () => {
  return (
    <div className="bg-white">
      {/* iPhone Air Section */}
      <section className="product-section bg-apple-light-gray text-apple-text">
        <div className="relative z-10">
          <h2 className="product-title text-apple-text mb-2">
            iPhone Air
          </h2>
          <p className="product-subtitle text-apple-secondary mb-4">
            The thinnest iPhone ever.
          </p>
          <p className="product-subtitle text-apple-secondary mb-8">
            With the power of pro inside.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="apple-button-primary">
              Learn more
            </button>
            <button className="apple-button-secondary">
              Buy
            </button>
          </div>
        </div>
        
        {/* iPhone Air image */}
        <div className="relative">
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative">
              <div className="w-80 h-6 mx-auto bg-gray-300 rounded-full relative">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              {/* Hand holding the phone */}
              <div className="absolute -right-20 top-0 w-40 h-20 bg-gradient-to-l from-amber-800 to-amber-600 rounded-l-full transform rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Pro Section */}
      <section className="product-section bg-black text-white">
        <div className="relative z-10">
          <h2 className="product-title text-white mb-2">
            MacBook Pro 14"
          </h2>
          <p className="product-subtitle text-gray-300 mb-8">
            Supercharged by M5.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="apple-button-primary">
              Learn more
            </button>
            <button className="apple-button-secondary bg-transparent border-white text-white hover:bg-white hover:text-black">
              Buy
            </button>
          </div>
        </div>
        
        {/* MacBook image */}
        <div className="relative">
          <div className="w-full max-w-2xl mx-auto">
            <div className="relative">
              <div className="w-64 h-40 mx-auto bg-gradient-to-b from-gray-600 to-gray-800 transform rotate-12 rounded-lg relative">
                <div className="absolute inset-2 bg-black rounded"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gray-700 rounded-b-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Apple Watch */}
        <section className="product-section bg-apple-light-gray text-apple-text min-h-[600px]">
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.5 9.5c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9 0-3.6 1.1-4.6 2.8C-2.7 8.4-.1 13.3 2.4 16c1.2 1.3 2.7 2.8 4.6 2.8 1.4 0 1.9-.9 3.6-.9s2.1.9 3.6.9c1.5 0 3.3-1.4 4.5-2.7 1.4-1.5 2-3 2-3.1-.1 0-3.8-1.5-3.8-5.5z" />
              </svg>
              <span className="text-2xl font-semibold">WATCH SERIES 11</span>
            </div>
            <p className="text-lg mb-8 text-apple-secondary">
              The ultimate way to watch your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
          
          {/* Watch image */}
          <div className="relative">
            <div className="w-32 h-40 mx-auto bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl relative">
              <div className="absolute inset-2 bg-black rounded-xl">
                <div className="absolute inset-4 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="absolute -right-1 top-8 w-1 h-8 bg-gray-400 rounded-r"></div>
              <div className="absolute -left-1 top-12 w-1 h-4 bg-gray-400 rounded-l"></div>
            </div>
          </div>
        </section>

        {/* iPad Pro */}
        <section className="product-section bg-black text-white min-h-[600px]">
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-2">
              iPad Pro
            </h2>
            <p className="text-lg mb-4 text-gray-300">
              Advanced AI performance.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              All game-changing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary bg-transparent border-white text-white hover:bg-white hover:text-black">
                Buy
              </button>
            </div>
          </div>
          
          {/* iPad image */}
          <div className="relative">
            <div className="w-48 h-64 mx-auto bg-gradient-to-b from-gray-800 to-black rounded-lg relative">
              <div className="absolute inset-2 bg-black rounded">
                <div className="absolute inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* AirPods Pro 3 */}
        <section className="product-section bg-apple-light-gray text-apple-text min-h-[600px]">
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-2">
              AirPods Pro 3
            </h2>
            <p className="text-lg mb-4 text-apple-secondary">
              The world's best in-ear
            </p>
            <p className="text-lg mb-8 text-apple-secondary">
              Active Noise Cancellation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* MacBook Air */}
        <section className="product-section bg-apple-light-gray text-apple-text min-h-[600px]">
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-2">
              MacBook Air
            </h2>
            <p className="text-lg mb-8 text-apple-secondary">
              Sky high performance with M4.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* Trade In */}
        <section className="product-section bg-apple-light-gray text-apple-text min-h-[600px]">
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.5 9.5c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9 0-3.6 1.1-4.6 2.8C-2.7 8.4-.1 13.3 2.4 16c1.2 1.3 2.7 2.8 4.6 2.8 1.4 0 1.9-.9 3.6-.9s2.1.9 3.6.9c1.5 0 3.3-1.4 4.5-2.7 1.4-1.5 2-3 2-3.1-.1 0-3.8-1.5-3.8-5.5z" />
              </svg>
              <span className="text-2xl font-semibold">Trade In</span>
            </div>
            <p className="text-lg mb-4 text-apple-secondary">
              Get up to $800-$900
            </p>
            <p className="text-lg mb-8 text-apple-secondary">
              in credit when you trade in
            </p>
            <p className="text-lg mb-8 text-apple-secondary">
              iPhone 14 or higher.*
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button-primary">
                Get your estimate
              </button>
            </div>
          </div>
        </section>

        {/* Apple Card */}
        <section className="product-section bg-apple-light-gray text-apple-text min-h-[600px]">
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.5 9.5c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9 0-3.6 1.1-4.6 2.8C-2.7 8.4-.1 13.3 2.4 16c1.2 1.3 2.7 2.8 4.6 2.8 1.4 0 1.9-.9 3.6-.9s2.1.9 3.6.9c1.5 0 3.3-1.4 4.5-2.7 1.4-1.5 2-3 2-3.1-.1 0-3.8-1.5-3.8-5.5z" />
              </svg>
              <span className="text-2xl font-semibold">Card</span>
            </div>
            <p className="text-lg mb-4 text-apple-secondary">
              Get up to 3% Daily Cash back
            </p>
            <p className="text-lg mb-8 text-apple-secondary">
              with every Apple Pay purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Apply now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductGrid;