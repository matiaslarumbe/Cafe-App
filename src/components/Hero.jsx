import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import TopNavbar from "./TopNavbar";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F2] p-8">
      {" "}
      {/* Contenedor exterior con padding */}
      <div
        className="relative h-[90vh] rounded-3xl overflow-hidden" /* Contenedor de la imagen con bordes redondeados */
      >
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${assets.planta_8})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <TopNavbar />
        </div>

        {/* Contenido */}
        <div className="absolute inset-0 flex items-end pb-32justify-center z-10">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 font-light">
              Disfruta el sabor de
              <span className="block font-serif italic mt-2">botanical</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Nuestro café no tiene por qué saber así. Pero lo hace. No es lo
              típico. Es innecesariamente bueno. Quizás eso se deba a que
              estamos impulsados ​innecesariamente.
            </p>

            <div className="absolute bottom-10 right-8">
          
              <Link
                to="/menu"
                className="bg-white text-black px-7 py-4 rounded-full text-lg hover:bg-opacity-90 transition-all"
              >
                Explore nuestro menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
