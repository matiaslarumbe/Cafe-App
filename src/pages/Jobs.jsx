import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Jobs = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const jobListings = [
    {
      title: "Barista",
      description:
        "En Botanica Café, buscamos baristas expertos y entusiastas para que se unan a nuestro equipo de artesanos del café. Si te apasiona preparar la taza perfecta y crear experiencias memorables para nuestros clientes, trae tu experiencia a Botanica y preparemos juntos la excelencia.",
    },
    {
      title: "Gerente de Cafetería",
      description:
        "Únase a nosotros en Botanica Café como gerente de cafetería y lidere a nuestro equipo para brindar experiencias de café excepcionales. Supervisará las operaciones diarias, garantizará un servicio al cliente de primer nivel y fomentará un ambiente acogedor. Traiga sus habilidades de liderazgo a Botanica y ayúdenos a crear una comunidad vibrante para los amantes del café.",
    },
    {
      title: "Tostador de café",
      description:
        "Embárcate en una aventura del grano a la taza con nosotros en Botanica Café. Como tostador de café, estarás en el centro de la creación de sabores excepcionales, convirtiendo los granos verdes en obras maestras aromáticas. Únete a nuestro equipo y tostamos, preparemos y saboreemos juntos la esencia del café.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Menú hamburguesa */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="p-3 bg-black bg-opacity-20 rounded-full hover:bg-opacity-60 transition-all"
        >
          <img src={assets.menu_icon} alt="Menu" className="w-10 h-10" />
        </button>

        {menuAbierto && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-black bg-opacity-40 backdrop-blur-md rounded-xl shadow-lg border border-white border-opacity-20">
            <div className="py-2">
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10"
              >
                Menu
              </Link>
              <Link
                to="/locations"
                className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10"
              >
                Locations
              </Link>
              <Link
                to="/carrito"
                className="block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10"
              >
                Tienda
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Imagen lado izquierdo */}
        <div className="lg:w-1/2 lg:h-screen p-8 flex items-center">
          {" "}
          {/* Agregado padding y flex */}
          <div className="relative w-full h-[90vh] rounded-3xl overflow-hidden">
            {" "}
            {/* Contenedor con altura específica y bordes redondeados */}
            <img
              src={assets.bartender_3}
              alt="Carrera en Botanical"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-center ">
              <h1 className="text-6xl font-light text-white p-10">
                {" "}
                {/* Padding unificado */}
                Carrera
              </h1>
            </div>
          </div>
        </div>

        {/* Contenido lado derecho */}
        <div className="lg:w-1/2 p-8 lg:p-16 lg:overflow-y-auto lg:h-screen">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-medium mb-6">
              ¡Únete a nuestro apasionado equipo en Botanical!
            </h2>

            <p className="text-2xl font-medium mb-8">
              Explora oportunidades emocionantes en nuestra sección de empleos y
              logra el éxito con nosotros en un entorno dinámico y acogedor
              donde tu amor por el café prospera.
            </p>

            <hr className="border-gray-200 my-8" />

            {/* Listado de trabajos */}
            <div className="space-y-8">
              {jobListings.map((job, index) => (
                <div
                  key={index}
                  className="pb-8 border-b border-gray-200 last:border-0"
                >
                  <h3 className="text-2xl font-light mb-4">{job.title}</h3>
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition-all">
                    Aplicar ahora
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
