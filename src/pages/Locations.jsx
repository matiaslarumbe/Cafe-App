import React from 'react';
import { assets } from '../assets/assets';

const Locations = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
              Encuéntranos en estas
            <span className="block font-serif italic">ubicaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Visítenos en una de nuestras ubicaciones y experimente el café y el servicio innecesariamente buenos.
          </p>
        </div>

        {/* Grid de ubicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ubicación 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4">
              <img 
                src={assets.cafeteria_2} 
                alt="Palermo Location" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-light">Palermo</h3>
            <p className="text-gray-600">Lavalle 123</p>
          </div>

          {/* Ubicación 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4">
              <img 
                src={assets.cafeteria_3} 
                alt="Quilmes Location" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-light">Quilmes</h3>
            <p className="text-gray-600">Av Santa fe 321</p>
          </div>

          {/* Ubicación 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4">
              <img 
                src={assets.cafeteria_1} 
                alt="San Francisco Location" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-light">San Telmo</h3>
            <p className="text-gray-600">Mercado Central, Local 7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;