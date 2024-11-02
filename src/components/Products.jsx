import React from "react";
import { Link } from 'react-router-dom';
import { assets } from "../assets/assets";


const Products = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Nuestras variedades de
            <span className="block font-serif italic">Productos</span>
          </h2>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-opacity-90 transition-all"
            >
              Ver Más Productos
            </Link>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Producto 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-square rounded-3xl overflow-hidden mb-4">
              <img
                src={assets.cafe_paquete}
                alt="Coffee Product"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-light">Cafe suave</h3>
            <p className="text-gray-600">$18.00 USD</p>
          </div>

          {/* Producto 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-square rounded-3xl overflow-hidden mb-4">
              <img
                src={assets.cafe_paquete}
                alt="Coffee Product"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-light">Cafe Tostado</h3>
            <p className="text-gray-600">$16.00 USD</p>
          </div>

          {/* Producto 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-square rounded-3xl overflow-hidden mb-4">
              <img
                src={assets.cafetera_filtro}
                alt="Coffee Product"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-light">Cafetera Filtro</h3>
            <p className="text-gray-600">$20.00 USD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
