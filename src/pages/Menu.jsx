import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Menu = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const menuItems = [
    {
      categoria: "Café",
      items: [
        { nombre: "Espresso", precio: "400" },
        { nombre: "Cappuccino", precio: "500" },
        { nombre: "Latte", precio: "500" },
        { nombre: "Americano", precio: "450" },
      ],
    },
    {
      categoria: "Especialidades",
      items: [
        { nombre: "Mocha", precio: "600" },
        { nombre: "Caramel Macchiato", precio: "650" },
        { nombre: "Flat White", precio: "550" },
      ],
    },
    {
      categoria: "Pastelería",
      items: [
        { nombre: "Croissant", precio: "350" },
        { nombre: "Muffin", precio: "300" },
        { nombre: "Cheesecake", precio: "450" },
      ],
    },
  ];

  return (
    <div className="pt-20 pb-20 px-4 bg-[#F8F5F2] min-h-screen">
      {/* Botón de menú hamburguesa */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="p-3 bg-[#F8F5F2] rounded-full hover:bg-slate-300 transition"
        >
          <img src={assets.menu_icon} alt="Menu" className="w-10 h-10" />
        </button>

        {menuAbierto && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg">
            <div className="py-2">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Home
              </Link>
              <Link
                to="/locations"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Locations
              </Link>
              <Link to="/jobs" className="block px-4 py-2 hover:bg-gray-100">
                Jobs
              </Link>
              <Link to="/carrito" className="block px-4 py-2 hover:bg-gray-100">
                Tienda
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Imagen fija del lado izquierdo */}
          <div className="lg:w-1/2 lg:sticky lg:top-20 lg:h-[calc(100vh-8rem)]">
            <div className="relative h-full">
              <img
                src={assets.carta_de_menu_2}
                alt="Menu"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl flex items-center justify-center">
                <h1 className="text-6xl md:text-7xl font-light text-white">
                  <span className="block font-serif italic">Menu</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Contenido del menú deslizable */}
          <div
            className="lg:w-1/2 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:sticky lg:top-20 
    scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 
    pr-4 scroll-smooth"
          >
            {/* Encabezado */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light mb-6">
                Nuestro
                <span className="block font-serif italic">Menu</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubra nuestra selección de cafés y delicias horneadas.
              </p>
            </div>

            {/* Menú */}
            <div className="space-y-12">
              {menuItems.map((seccion, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-light mb-6 text-center">
                    {seccion.categoria}
                  </h2>
                  <div className="bg-white rounded-3xl p-8">
                    {seccion.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center py-4 border-b last:border-0 border-gray-100"
                      >
                        <h3 className="text-xl font-light">{item.nombre}</h3>
                        <p className="text-gray-600">${item.precio}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
