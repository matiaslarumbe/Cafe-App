import React, { useState } from 'react';
import { productos } from '../assets/assets';

const Carrito = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  const categorias = ['todos', ...new Set(productos.map(p => p.category))];

  const productosFiltrados = categoriaActiva === 'todos' 
    ? productos 
    : productos.filter(p => p.category === categoriaActiva);

  return (
    <div className="pt-20 pb-20 px-4 bg-[#F8F5F2] min-h-screen">
      <div className="container mx-auto mt-16">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-light mb-6">
            Nuestra
            <span className="block font-serif italic">Tienda</span>
          </h1>
          <p className="text-lg xs:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Descubra nuestra selección de productos y merchandising.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 xs:gap-4 mb-12 px-4">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-4 xs:px-6 py-2 rounded-full text-sm xs:text-base transition-all ${
                categoriaActiva === categoria
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 px-4">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="group cursor-pointer">
              <div className="aspect-square rounded-2xl xs:rounded-3xl overflow-hidden mb-4">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl xs:text-2xl font-light">{producto.nombre}</h3>
              <p className="text-gray-600">${producto.precio} ARS</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrito;