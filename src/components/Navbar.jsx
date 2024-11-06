import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className={`fixed z-50 transition-all duration-500 w-full ${
      scrolled ? 'bottom-8 top-auto' : 'top-8'
    } max-w-xl mx-auto left-1/2 -translate-x-1/2 ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      {/* Versión desktop */}
      <div className="hidden md:flex justify-between items-center bg-black bg-opacity-40 rounded-full py-3 px-8">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white text-sm hover:text-gray-300 transition-all">
            Home
          </Link>
          <Link to="/menu" className="text-white text-sm hover:text-gray-300 transition-all">
            Menu
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/locations" className="text-white text-sm hover:text-gray-300 transition-all">
            Locations
          </Link>
          <Link to="/jobs" className="text-white text-sm hover:text-gray-300 transition-all">
            Jobs
          </Link>
          <Link to="/carrito" className="rounded-full p-1 hover:bg-white hover:bg-opacity-10 transition-all">
            <img src={assets.carrito_icon} alt="Carrito" className="w-8 h-8" />
          </Link>
        </div>
      </div>

      {/* Versión móvil */}
      <div className="md:hidden flex justify-between items-center mx-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <Link to="/carrito" className="bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-60 transition-all">
          <img src={assets.carrito_icon} alt="Carrito" className="w-6 h-6" />
        </Link>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden absolute bottom-20 left-4 right-4 bg-black bg-opacity-90 rounded-2xl p-4 backdrop-blur-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white text-lg py-2 px-4 rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="text-white text-lg py-2 px-4 rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/locations" 
              className="text-white text-lg py-2 px-4 rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link 
              to="/jobs" 
              className="text-white text-lg py-2 px-4 rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;