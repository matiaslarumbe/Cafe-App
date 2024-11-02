import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";


const Footer = () => {
  return (
    
    <footer className="bg-[#F8F5F2] py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1 - Sobre Nosotros */}
          <div>
            <h3 className="text-2xl font-light mb-6">Botanical</h3>
            <p className="text-gray-600 mb-6">
              Creando experiencias de café innecesariamente buenas desde 2010.
            </p>
            {/* Redes Sociales */}
            <div className="flex items-center gap-4">
              <div className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
                <img 
                  src={assets.instagram_icon} 
                  alt="Instagram" 
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <div className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
                <img 
                  src={assets.pinterest_icon} 
                  alt="Pinterest" 
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <div className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
                <img 
                  src={assets.twitter_icon} 
                  alt="Twitter" 
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              </div>
          </div>

          {/* Columna 2 - Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-light mb-6">Enlaces</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/menu"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Locales
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div>
            <h3 className="text-xl font-light mb-6">Contactate</h3>
            <ul className="space-y-4 text-gray-600">
              <li>Email: hello@botanical.com</li>
              <li>Tel: (555) 123-4567</li>
              <li>Direccion: Azcuenaga 910</li>
              <li>Palermo, Buenos Aires</li>
            </ul>
          </div>

          {/* Columna 4 - Horarios */}
          <div>
            <h3 className="text-xl font-light mb-6">Horarios</h3>
            <ul className="space-y-4 text-gray-600">
              <li>Lunes - Viernes</li>
              <li>7:00 AM - 8:00 PM</li>
              <li>Sabados - Domingos</li>
              <li>8:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Botanical. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-black text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 hover:text-black text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
