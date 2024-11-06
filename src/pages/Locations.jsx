import React from 'react';
import { assets } from '../assets/assets';

const LocationCard = ({ image, title, address }) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/5] rounded-2xl xs:rounded-3xl overflow-hidden mb-3 xs:mb-4 
        shadow-md hover:shadow-xl transition-all duration-500">
        <img 
          src={image} 
          alt={`${title} Location`} 
          className="w-full h-full object-cover transition-transform duration-500 
            group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl xs:text-2xl font-light mb-1 xs:mb-2">{title}</h3>
      <p className="text-sm xs:text-base text-gray-600">{address}</p>
    </div>
  );
};

const Locations = () => {
  const locations = [
    {
      image: assets.cafeteria_2,
      title: "Palermo",
      address: "Lavalle 123"
    },
    {
      image: assets.cafeteria_3,
      title: "Quilmes",
      address: "Av Santa fe 321"
    },
    {
      image: assets.cafeteria_1,
      title: "San Telmo",
      address: "Mercado Central, Local 7"
    }
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light mb-4 xs:mb-6">
            Encuéntranos en estas
            <span className="block font-serif italic mt-1 xs:mt-2">
              ubicaciones
            </span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 
            max-w-[280px] xs:max-w-md sm:max-w-2xl mx-auto 
            px-2 xs:px-4">
            Visítenos en una de nuestras ubicaciones y experimente el café y el 
            servicio innecesariamente buenos.
          </p>
        </div>

        {/* Grid de ubicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-6 xs:gap-8 max-w-md md:max-w-none mx-auto">
          {locations.map((location, index) => (
            <LocationCard 
              key={index}
              image={location.image}
              title={location.title}
              address={location.address}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;