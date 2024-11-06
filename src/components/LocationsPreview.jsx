import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const LocationCard = ({ image, city, description, mapUrl, isExpanded, onExpand, index }) => {
  return (
    <div 
      className={`group cursor-pointer transition-all duration-700 ease-in-out transform
        ${isExpanded ? 'lg:col-span-2 scale-100' : 'lg:col-span-1 hover:scale-[1.02]'}
        ${isExpanded ? 'z-10' : 'z-0'}`}
      onClick={() => onExpand(isExpanded ? null : index)}
    >
      <Link to="/locations" className="block">
        <div className={`relative rounded-2xl xs:rounded-3xl overflow-hidden transition-all duration-700 ease-in-out
          ${isExpanded 
            ? 'h-[400px] xs:h-[500px] sm:h-[600px] shadow-2xl' 
            : 'h-[300px] xs:h-[400px] sm:h-[500px] shadow-lg hover:shadow-xl'}
          transform ${isExpanded ? 'translate-y-0' : 'hover:-translate-y-2'}`}>
          {/* Imagen de fondo */}
          <img 
            src={image} 
            alt={city} 
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out
              ${isExpanded ? 'scale-110' : 'group-hover:scale-105'}`}
          />
          
          {/* Overlay gradiente con animación */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out
            ${isExpanded 
              ? 'bg-gradient-to-t from-black/90 via-black/50 to-transparent' 
              : 'bg-gradient-to-t from-black/80 via-black/30 to-transparent'}`}>
            
            {/* Icono flecha con animación mejorada */}
            <div className={`absolute top-2 xs:top-4 right-2 xs:right-4 transition-all duration-500
              ${isExpanded ? 'translate-x-0' : 'group-hover:translate-x-0'}`}>
              <div className="bg-white p-2 xs:p-3 rounded-full transform transition-all duration-500
                hover:scale-110 hover:shadow-lg">
                <img 
                  src={assets.flecha_derecha_negra} 
                  alt="Ver más" 
                  className={`w-4 h-4 xs:w-6 xs:h-6 transition-transform duration-500
                    ${isExpanded ? 'rotate-[360deg]' : 'group-hover:translate-x-1'}`}
                />
              </div>
            </div>

            {/* Contenido con animaciones */}
            <div className={`absolute bottom-0 left-0 right-0 p-4 xs:p-6 sm:p-8 transition-all duration-700
              ${isExpanded ? 'pb-8 xs:pb-10 sm:pb-12 translate-y-0' : 'group-hover:translate-y-0'}`}>
              <h3 className={`font-light mb-2 xs:mb-4 text-white transition-all duration-700
                ${isExpanded 
                  ? 'text-3xl xs:text-4xl sm:text-5xl translate-x-2 xs:translate-x-4' 
                  : 'text-xl xs:text-2xl'}`}>
                {city}
              </h3>
              <p className={`text-gray-200 mb-4 xs:mb-6 transition-all duration-700 transform
                ${isExpanded 
                  ? 'text-base xs:text-lg sm:text-xl max-w-2xl translate-x-2 xs:translate-x-4 opacity-100' 
                  : 'text-sm xs:text-base max-w-md opacity-90'}`}>
                {description}
              </p>
              
              <div className={`border-t border-white/30 pt-3 xs:pt-4 flex flex-col xs:flex-row xs:items-center xs:justify-between text-white
                transition-all duration-700 transform gap-2 xs:gap-0
                ${isExpanded ? 'translate-x-2 xs:translate-x-4 opacity-100' : 'opacity-90'}`}>
                <div className="flex items-center space-x-2 transition-all duration-500 hover:scale-105">
                  <img 
                    src={assets.ubicacion_icon} 
                    alt="Ubicación" 
                    className="w-4 h-4 xs:w-5 xs:h-5 transition-transform duration-500 group-hover:scale-110"
                  />
                  <a 
                    href={mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm xs:text-base text-gray-200 hover:text-white transition-all duration-500"
                  >
                    Ubicacion
                  </a>
                </div>
                <span className="text-sm xs:text-base text-gray-200 transition-all duration-500 hover:text-white">
                  Lun-Dom • 8am-8pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};


const LocationsPreview = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const locations = [
    {
      image: assets.planta_8,
      city: "Quilmes",
      description: "La dinámica cultura cafetera de Quilmes presenta tiendas innovadoras donde los baristas experimentan con nuevas técnicas de elaboración de cerveza..",
      mapUrl: "https://maps.google.com/?q=Quilmes+Botanical+Coffee"
    },
    {
      image: assets.planta_3,
      city: "Palermo",
      description: "La cafetería Botanical Coffee Shop en Praga ofrece un oasis de serenidad con su decoración exuberante y cafés artesanales.",
      mapUrl: "https://maps.google.com/?q=Palermo+Botanical+Coffee"
    },
    {
      image: assets.planta_4,
      city: "San Telmo",
      description: "La escena cafetera de San Telmo combina cafés históricos y lugares modernos, todos dedicados a perfeccionar el arte de preparar café.",
      mapUrl: "https://maps.google.com/?q=San+Telmo+Botanical+Coffee"
    }
  ];

  return (
    <section className="py-10 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-8 bg-[#F8F5F2]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {locations.map((location, index) => (
            <LocationCard 
              key={index}
              {...location}
              index={index}
              isExpanded={expandedIndex === index}
              onExpand={setExpandedIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
  

export default LocationsPreview;