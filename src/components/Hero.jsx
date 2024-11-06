import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import TopNavbar from "./TopNavbar";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F2] p-2 xs:p-4 sm:p-6 md:p-8">
      <div className="relative h-[85vh] sm:h-[90vh] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 transition-transform duration-700"
          style={{
            backgroundImage: `url(${assets.planta_8})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-20">
          <TopNavbar />
        </div>

        {/* Contenido - Ajustado para móviles pequeños */}
        <div className="absolute inset-0 flex items-end justify-center pb-16 xs:pb-20 sm:pb-28 md:pb-32 z-10">
          <div className="text-center text-white w-full max-w-[95%] xs:max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 xs:px-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3 xs:mb-4 sm:mb-6 md:mb-8 font-light">
              Disfruta el sabor de
              <span className="block font-serif italic mt-1 sm:mt-2">
                botanical
              </span>
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
              mb-6 xs:mb-8 sm:mb-10 md:mb-12 
              max-w-[280px] xs:max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl 
              mx-auto leading-relaxed opacity-90 
              px-1 xs:px-2 sm:px-4">
              Nuestro café no tiene por qué saber así. Pero lo hace. No es lo
              típico. Es innecesariamente bueno. Quizás eso se deba a que
              estamos impulsados ​innecesariamente.
            </p>

            {/* Contenedor del botón */}
            <div className="relative w-full flex justify-center sm:justify-end sm:absolute sm:bottom-10 sm:right-8 md:right-12 lg:right-16 mt-4 sm:mt-0">
              <Link
                to="/menu"
                className="bg-white text-black 
                  px-4 xs:px-6 sm:px-7 
                  py-2 xs:py-3 sm:py-4 
                  text-sm xs:text-base sm:text-lg 
                  rounded-full hover:bg-opacity-90 transition-all 
                  hover:scale-105 hover:shadow-lg"
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