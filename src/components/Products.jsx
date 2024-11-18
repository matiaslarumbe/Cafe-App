import React from "react";
import { Link } from 'react-router-dom';
import { assets } from "../assets/assets";
import { motion } from "framer-motion";


const Products = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-5xl md:text-6xl font-light mb-6"
      >
        Nuestras variedades de
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="block font-serif italic"
        >
          Productos
        </motion.span>
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link
          to="/carrito"
          className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg 
            hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
        >
          Ver Más Productos
        </Link>
      </motion.div>
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
            <h3 className="text-2xl font-light">Cafe Colombia</h3>
            <p className="text-gray-600">$8000</p>
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
            <h3 className="text-2xl font-light">Cafe Brasil</h3>
            <p className="text-gray-600">$8000</p>
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
            <p className="text-gray-600">$10500</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
