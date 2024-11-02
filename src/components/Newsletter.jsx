import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Mantente 
            <span className="block font-serif italic">Conectado</span>
          </h2>
          
          <p className="text-xl mb-8 text-gray-300">
          Suscríbase a nuestro tienda para recibir actualizaciones, ofertas especiales e información sobre el café botánico.
          </p>

          {/* Formulario */}
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-full bg-white text-black flex-grow max-w-md focus:outline-none"
            />
            <button 
              type="submit" 
              className="bg-white text-black px-8 py-4 rounded-full hover:bg-opacity-90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;