
import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 md:pt-0 min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Descubre el Sabor de lo <span className="text-primary">Exótico</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Desde 2017 importando las frutas exóticas más selectas para toda España y Europa. 
              Calidad premium y sabores únicos directamente a tu hogar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#productos" className="btn-primary">
                Ver Productos
              </a>
              <a href="#contacto" className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/10 transition-all">
                Contáctanos
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-36 h-36 rounded-full bg-secondary/20 z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-accent/20 z-0"></div>
              <img 
                src="/lovable-uploads/bb3332fd-e0c1-452e-a962-9fdd81a204e9.png" 
                alt="Frutas Exóticas" 
                className="rounded-2xl shadow-xl z-10 relative max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
