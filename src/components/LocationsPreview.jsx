import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const LocationCard = ({ image, city, description, mapUrl, isExpanded, onExpand, index }) => {
  return (
    <div 
      className={`group cursor-pointer transition-all duration-500 ease-in-out
        ${isExpanded ? 'lg:col-span-2' : 'lg:col-span-1'}`}
      onClick={() => onExpand(index)}
    >
      <Link to="/locations" className="block">
        <div className={`relative rounded-3xl overflow-hidden transition-all duration-500 ease-in-out
          ${isExpanded ? 'h-[600px]' : 'h-[500px]'}`}>
          {/* Imagen de fondo */}
          <img 
            src={image} 
            alt={city} 
            className={`w-full h-full object-cover transition-all duration-500 ease-in-out
              ${isExpanded ? 'scale-105' : 'group-hover:scale-105'}`}
          />
          
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            {/* Icono flecha */}
            <div className="absolute top-4 right-4">
              <div className="bg-white p-3 rounded-full">
                <img 
                  src={assets.flecha_derecha_negra} 
                  alt="Ver más" 
                  className={`w-6 h-6 transition-transform duration-500
                    ${isExpanded ? 'translate-x-1' : 'group-hover:translate-x-1'}`}
                />
              </div>
            </div>

            {/* Contenido */}
            <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500
              ${isExpanded ? 'pb-12' : ''}`}>
              <h3 className={`font-light mb-4 text-white transition-all duration-500
                ${isExpanded ? 'text-4xl' : 'text-2xl'}`}>
                {city}
              </h3>
              <p className={`text-gray-200 mb-6 transition-all duration-500
                ${isExpanded ? 'text-xl max-w-2xl' : 'text-base max-w-md'}`}>
                {description}
              </p>
              
              <div className="border-t border-white/30 pt-4 flex items-center justify-between text-white">
                <div className="flex items-center space-x-2">
                  <img 
                    src={assets.ubicacion_icon} 
                    alt="Ubicación" 
                    className="w-5 h-5 invert"
                  />
                  <a 
                    href={mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Navigate
                  </a>
                </div>
                <span className="text-gray-200">Lun-Dom • 8am-8pm</span>
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
    <section className="py-20 px-8 bg-[#F8F5F2]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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