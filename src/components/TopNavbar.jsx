import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-8 left-0 right-0 z-40">
      <div className="container mx-auto px-4">
        {/* Versión desktop */}
        <div className="hidden md:flex justify-between items-center max-w-[120vw] mx-auto bg-black bg-opacity-10 rounded-full py-1 px-10 border border-white border-opacity-70">
          {/* Enlaces izquierdos */}
          <div className="flex space-x-30 items-center">
            <Link to="/" className="text-white text-lg px-8 py-2 rounded-full hover:bg-white hover:bg-opacity-25 transition-all">
              Home
            </Link>
            <Link to="/menu" className="text-white text-lg px-8 py-2 rounded-full hover:bg-white hover:bg-opacity-25 transition-all">
              Menu
            </Link>
          </div>

          {/* Enlaces derechos */}
          <div className="flex space-x-30 items-center">
            <Link to="/locations" className="text-white text-lg px-8 py-2 rounded-full hover:bg-white hover:bg-opacity-25 transition-all">
              Locations
            </Link>
            <Link to="/jobs" className="text-white text-lg px-8 py-2 rounded-full hover:bg-white hover:bg-opacity-25 transition-all">
              Jobs
            </Link>
            <Link to="/carrito" className="rounded-full p-2 hover:bg-white hover:bg-opacity-20 transition-all border border-white border-opacity-25">
              <img src={assets.carrito_icon} alt="Carrito" className="w-10 h-10" />
            </Link>
          </div>
        </div>

        {/* Versión móvil */}
        <div className="md:hidden flex justify-between items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 rounded-full bg-black bg-opacity-20 hover:bg-opacity-30 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          <Link to="/carrito" className="rounded-full p-2 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all">
            <img src={assets.carrito_icon} alt="Carrito" className="w-8 h-8" />
          </Link>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-black bg-opacity-90 rounded-2xl p-4 backdrop-blur-lg">
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
      </div>
    </nav>
  );
};

export default TopNavbar;