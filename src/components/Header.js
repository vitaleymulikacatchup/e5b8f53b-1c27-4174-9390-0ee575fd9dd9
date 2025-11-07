import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'
  ];

  return (
    <>
      {/* Top banner */}
      <div className="bg-apple-gray text-white text-center py-2 px-4 text-sm">
        <span>Vi är stolt över att erbjuda för att vi så snabbt som möjligt ska få ut så och handla online.</span>
        <button className="ml-4 text-blue-400 hover:underline">Fortsätt</button>
        <button className="ml-2 text-white hover:text-gray-300">
          <X className="w-4 h-4 inline" />
        </button>
      </div>
      
      <header className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Apple logo */}
            <div className="flex-shrink-0">
              <svg className="w-4 h-5 text-white" viewBox="0 0 14 18" fill="currentColor">
                <path d="M12.5 9.5c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9 0-3.6 1.1-4.6 2.8C-2.7 8.4-.1 13.3 2.4 16c1.2 1.3 2.7 2.8 4.6 2.8 1.4 0 1.9-.9 3.6-.9s2.1.9 3.6.9c1.5 0 3.3-1.4 4.5-2.7 1.4-1.5 2-3 2-3.1-.1 0-3.8-1.5-3.8-5.5z" />
                <path d="M10.1 3.5c1-1.2 1.7-2.9 1.5-4.5-1.4.1-3.1.9-4.1 2.1-.9 1-1.7 2.7-1.5 4.3 1.6.1 3.2-.8 4.1-1.9z" />
              </svg>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-300">
                <Search className="w-4 h-4" />
              </button>
              <button className="text-white hover:text-gray-300">
                <ShoppingCart className="w-4 h-4" />
              </button>
              <button 
                className="lg:hidden text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black bg-opacity-95 absolute top-full left-0 right-0 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-2 text-white hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;