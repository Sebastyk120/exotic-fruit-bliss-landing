
import React, { useState } from 'react';

// Datos de las frutas
const fruits = [
  { id: 1, name: "Mangostino", image: "/lovable-uploads/3159558d-32ff-4db7-9917-3cce0e232776.png", description: "Conocida como la 'reina de las frutas', tiene un sabor dulce y refrescante con notas ácidas." },
  { id: 2, name: "Maracuyá", image: "/lovable-uploads/528ade49-4bfb-43c2-bf13-f6063c1ee729.png", description: "De sabor intenso, aromático y ligeramente ácido, perfecto para zumos y postres." },
  { id: 3, name: "Pitahaya", image: "/lovable-uploads/bcce9456-75e8-4660-a375-869f16673f06.png", description: "Fruta del dragón con pulpa dulce y refrescante, llena de pequeñas semillas comestibles." },
  { id: 4, name: "Guanábana", image: "/lovable-uploads/bb3332fd-e0c1-452e-a962-9fdd81a204e9.png", description: "Pulpa blanca y jugosa con un sabor único que combina dulzura y acidez." },
  { id: 5, name: "Baby Mango", image: "/lovable-uploads/059a815e-f40f-4004-a39a-4a154d26d68b.png", description: "Versión pequeña del mango tradicional, con sabor dulce y textura suave." },
  { id: 6, name: "Granadilla", image: "/lovable-uploads/3159558d-32ff-4db7-9917-3cce0e232776.png", description: "Variedad de fruta de la pasión con pulpa gelatinosa y dulce, muy aromática." },
  { id: 7, name: "Rambután", image: "/lovable-uploads/bcce9456-75e8-4660-a375-869f16673f06.png", description: "Exótica fruta de aspecto peludo con interior dulce y jugoso similar al lichi." },
  { id: 8, name: "Carambola", image: "/lovable-uploads/bb3332fd-e0c1-452e-a962-9fdd81a204e9.png", description: "Con forma de estrella cuando se corta, ofrece un sabor refrescante entre dulce y ácido." },
];

// Lista completa de frutas disponibles
const allFruits = [
  "Arándano", "Baby Mango", "Bananito", "Carambolo", "Curuba", "Feijoa",
  "Granadilla", "Guanabana", "Guayaba", "Gulupa", "Higo", "Lulo",
  "Mangostino", "Maracuya", "Papaya", "Pepino Melon", "Pitahaya",
  "Rambutan", "Tamarillo", "Tomate Amarillo", "Uchuva"
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  
  const filteredFruits = fruits.filter(fruit => 
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="productos" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Productos</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700">
            Explorá nuestra selección de frutas exóticas importadas de los mejores productores
          </p>
          
          <div className="mt-8 relative">
            <input
              type="text"
              placeholder="Buscar fruta..."
              className="w-full max-w-md px-4 py-3 rounded-full border-gray-300 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFruits.slice(0, visibleCount).map((fruit) => (
            <div key={fruit.id} className="card-fruit slide-up" style={{ animationDelay: `${fruit.id * 100}ms` }}>
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={fruit.image} 
                  alt={fruit.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{fruit.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{fruit.description}</p>
                <button className="text-primary font-medium inline-flex items-center">
                  Más información
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {visibleCount < filteredFruits.length && (
          <div className="text-center mt-12">
            <button 
              className="btn-primary"
              onClick={() => setVisibleCount(prevCount => prevCount + 4)}
            >
              Cargar Más
            </button>
          </div>
        )}
        
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Todos Nuestros Productos</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allFruits.map((fruit, index) => (
              <span 
                key={index} 
                className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                {fruit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
