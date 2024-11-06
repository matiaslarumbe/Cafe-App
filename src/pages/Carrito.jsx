import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos, assets } from '../assets/assets';

const Carrito = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const categorias = ['todos', ...new Set(productos.map(p => p.category))];

  const productosFiltrados = categoriaActiva === 'todos' 
    ? productos 
    : productos.filter(p => p.category === categoriaActiva);

  return (
    <div className="pt-20 pb-20 px-4 bg-[#F8F5F2] min-h-screen">
      {/* Solo el botón de menú hamburguesa */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="p-3 bg-[#F8F5F2] rounded-full hover:bg-slate-300 transition"
        >
          <img src={assets.menu_icon} alt="Menu" className="w-8 h-8" />
        </button>

        {menuAbierto && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg">
            <div className="py-2">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
              <Link to="/menu" className="block px-4 py-2 hover:bg-gray-100">Menu</Link>
              <Link to="/locations" className="block px-4 py-2 hover:bg-gray-100">Locations</Link>
              <Link to="/jobs" className="block px-4 py-2 hover:bg-gray-100">Jobs</Link>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Nuestra
            <span className="block font-serif italic">Tienda</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nuestra selección de productos y merchandising.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-6 py-2 rounded-full transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="group cursor-pointer">
              <div className="aspect-square rounded-3xl overflow-hidden mb-4">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-light">{producto.nombre}</h3>
              <p className="text-gray-600">${producto.precio} ARS</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrito;