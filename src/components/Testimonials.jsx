import React from 'react';
import { assets } from '../assets/assets';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
          Nuestros comentarios de los clientes
            <span className="block font-serif italic">Que han dicho?</span>
          </h2>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonio 1 */}
          <div className="bg-[#F8F5F2] p-8 rounded-3xl">
            <div className="flex items-center mb-6">
              <img 
                src={assets.avatar_1} 
                alt="Customer" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-medium">Maria Gonzales</h4>
                <p className="text-gray-600">Recoleta</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
            "El mejor café que he probado. El ambiente es perfecto para ambos. 
            Trabajo y reuniones informales. Su compromiso con la calidad es evidente en cada taza".
            </p>
          </div>

          {/* Testimonio 2 */}
          <div className="bg-[#F8F5F2] p-8 rounded-3xl">
            <div className="flex items-center mb-6">
              <img 
                src={assets.avatar_2} 
                alt="Customer" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-medium">Carlos Alfonzo</h4>
                <p className="text-gray-600">Quilmes</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
            "Me encanta su atención al detalle y la forma en que obtienen sus granos. 
            Cada visita es una experiencia única y el personal siempre es acogedor."
            </p>
          </div>

          {/* Testimonio 3 */}
          <div className="bg-[#F8F5F2] p-8 rounded-3xl">
            <div className="flex items-center mb-6">
              <img 
                src={assets.avatar_3} 
                alt="Customer" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-medium">David Guetta</h4>
                <p className="text-gray-600">La Plata</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
            "Sus ofertas especiales de temporada siempre son algo que esperamos con ansias. 
            El tema botánico añade un toque único a toda la experiencia".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;