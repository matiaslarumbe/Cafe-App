import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const TopNavbar = () => {
  return (
    <nav className="absolute top-8 left-0 right-0 z-40">
      <div className="container mx-auto px-4"> {/* Aumentado el padding horizontal */}
        <div className="flex justify-between items-center max-w-[120vw] mx-auto bg-black bg-opacity-10 rounded-full py-1 px-10 border border-white border-opacity-70"> {/* Aumentado max-w y padding */}
          {/* Enlaces izquierdos */}
          <div className="flex space-x-30 items-center"> {/* Aumentado el espacio entre enlaces */}
            <Link 
              to="/" 
              className="text-white text-lg px-8 py-2 rounded-full hover:bg-white hover:bg-opacity-25 transition-all"
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="text-white text-lg px-8 py-2 rounded-full hover:bg-white hover:bg-opacity-25 transition-all"
            >
              Menu
            </Link>
          </div>

          {/* Enlaces derechos */}
          <div className="flex space-x-30 items-center"> {/* Aumentado el espacio entre enlaces */}
            <Link 
              to="/locations" 
              className="text-white text-lg px-8 py-2 rounded-full hover:bg-white hover:bg-opacity-25 transition-all"
            >
              Locations
            </Link>
            <Link 
              to="/jobs" 
              className="text-white text-lg px-8 py-2 rounded-full hover:bg-white hover:bg-opacity-25 transition-all"
            >
              Jobs
            </Link>
            <Link 
              to="/carrito" 
              className="rounded-full p-2 hover:bg-white hover:bg-opacity-20 transition-all border border-white border-opacity-25"
            >
              <img 
                src={assets.carrito_icon} 
                alt="Carrito" 
                className="w-10 h-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;