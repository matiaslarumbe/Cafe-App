import React from 'react';
import { assets } from '../assets/assets';

const OurStory = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Nuestra
            <span className="block font-serif italic">Historia</span>
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagen */}
          <div className="rounded-3xl overflow-hidden">
            <img 
              src={assets.historia_cafe} 
              alt="Our Coffee Story" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h3 className="text-3xl font-light">Elaborando la taza perfecta desde 2010</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
             Creemos que el café es más que una simple bebida. Es una cultura, una economía, 
              un arte, una ciencia y una pasión. Nuestros maestros cafeteros han destilado su 
              Años de conocimiento y experiencia en cada taza.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
            Todos los días trabajamos para asegurarnos de que cada taza de café que servimos sea innecesariamente buena. 
            Esa es nuestra promesa para usted.
            </p>
            <button className="mt-8 bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-opacity-90 transition-all">
            Más información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;