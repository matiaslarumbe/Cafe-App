import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);  // Nuevo estado para controlar la visibilidad

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      setVisible(window.scrollY > 300); // El navbar compacto aparece después de 300px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null; // No renderiza el navbar si no es visible

  return (
    <nav 
      className={`fixed z-50 transition-all duration-500 w-full ${
        scrolled 
          ? 'bottom-8 top-auto' 
          : 'top-8'
      } bg-black bg-opacity-40 max-w-xl mx-auto left-1/2 -translate-x-1/2 rounded-full py-3 px-8
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="flex justify-between items-center">
        {/* Enlaces izquierdos */}
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-white text-sm hover:text-gray-300 transition-all"
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className="text-white text-sm hover:text-gray-300 transition-all"
          >
            Menu
          </Link>
        </div>

        {/* Enlaces derechos */}
        <div className="flex items-center space-x-6">
          <Link 
            to="/locations" 
            className="text-white text-sm hover:text-gray-300 transition-all"
          >
            Locations
          </Link>
          <Link 
            to="/jobs" 
            className="text-white text-sm hover:text-gray-300 transition-all"
          >
            Jobs
          </Link>
          <Link 
            to="/carrito" 
            className="rounded-full p-1 hover:bg-white hover:bg-opacity-10 transition-all"
          >
            <img 
              src={assets.carrito_icon} 
              alt="Carrito" 
              className="w-8 h-8"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;