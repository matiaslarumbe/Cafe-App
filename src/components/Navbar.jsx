
import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav 
      className="bg-cover bg-center shadow-md rounded-3xl min-h-[650px] mx-4" 
      style={{
        backgroundImage: `url(${assets.planta_8})`
      }}
    >
       <div className="container mx-auto p-4 flex justify-between items-center bg-white bg-opacity-30 rounded-full">
        
        {/* Grupo de enlaces a la izquierda */}
        <div className="flex space-x-4">
          <Link to="/" className="text-black bg-white hover:bg-white hover:text-black px-4 py-2 rounded-full">Home</Link>
          <Link to="/menu" className="text-white hover:text-black hover:bg-white px-4 py-2 rounded-full">Menu</Link>
        </div>
        
        {/* Grupo de enlaces a la derecha */}
        <div className="flex space-x-4 items-center">
          <Link to="/locations" className="text-white hover:text-black hover:bg-white px-10 py-2 rounded-full cursor-pointer">Locations</Link>
          <Link to="/jobs" className="text-white hover:text-black hover:bg-white px-10 py-2 rounded-full">Jobs</Link>
          <Link to="/carrito" className="rounded-full p-2 hover:bg-white">
            <img src={assets.carrito_icon} alt="Carrito" className="w-10 h-10 hover:opacity-80" />
          </Link>
        </div>
      </div>
       {/* Hero Section */}
       <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 font-light">
              Disfruta el sabor de
              <span className="block font-serif italic mt-2">botanical</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
             
              Nuestro café no tiene por qué saber así. Pero lo hace. No es lo típico. 
              Es innecesariamente bueno. Quizás eso se deba a que estamos impulsados ​​innecesariamente.
            </p>

            <button className="bg-white text-black px-8 py-4 rounded-full text-lg hover:bg-opacity-90 transition-all">
              Explora nuestro menú
            </button>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;



