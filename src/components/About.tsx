
import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Historia</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700">
            Descubre quiénes somos y nuestra pasión por las frutas exóticas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/059a815e-f40f-4004-a39a-4a154d26d68b.png" 
              alt="L&M Exotic Fruits" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg px-6 py-4">
              <p className="text-primary font-bold">Desde 2017</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">L&M Exotic Fruits</h3>
            <p className="mb-4 text-gray-700">
              Desde nuestros inicios en 2017, L&M Exotic Fruits se ha convertido en un referente en la importación 
              y distribución de frutas exóticas de la más alta calidad en España y Europa.
            </p>
            <p className="mb-6 text-gray-700">
              Nuestra misión es acercar los sabores más exclusivos y sorprendentes del mundo a hogares y negocios 
              europeos, garantizando siempre la frescura, calidad y sostenibilidad en cada uno de nuestros productos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2">Calidad Premium</h4>
                <p className="text-sm text-gray-600">Seleccionamos cuidadosamente cada fruta para garantizar la mejor experiencia</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg mb-2">Distribución Europea</h4>
                <p className="text-sm text-gray-600">Llegamos a todos los rincones de España y principales ciudades europeas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
