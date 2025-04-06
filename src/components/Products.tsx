
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription
} from "@/components/ui/dialog";

// Extended fruit data with more details
const fruits = [
  { 
    id: 1, 
    name: "Mangostino", 
    image: "/lovable-uploads/3159558d-32ff-4db7-9917-3cce0e232776.png", 
    description: "Conocida como la 'reina de las frutas', tiene un sabor dulce y refrescante con notas ácidas.",
    origin: "Sudeste Asiático",
    season: "Mayo a Septiembre",
    benefits: "Rico en antioxidantes, ayuda a fortalecer el sistema inmunológico y tiene propiedades antiinflamatorias.",
    details: "Su cascara púrpura oscura protege una pulpa blanca y jugosa. Se consume fresca y es muy apreciada por su sabor único."
  },
  { 
    id: 2, 
    name: "Maracuyá", 
    image: "/lovable-uploads/528ade49-4bfb-43c2-bf13-f6063c1ee729.png", 
    description: "De sabor intenso, aromático y ligeramente ácido, perfecto para zumos y postres.",
    origin: "Brasil y Paraguay",
    season: "Todo el año, con picos de febrero a julio",
    benefits: "Rica en vitamina C, ayuda a reducir la ansiedad y mejora la calidad del sueño gracias a su contenido de flavonoides.",
    details: "Fruta de la pasión con pulpa amarilla y semillas comestibles. Ideal para zumos, batidos y postres."
  },
  { 
    id: 3, 
    name: "Pitahaya", 
    image: "/lovable-uploads/bcce9456-75e8-4660-a375-869f16673f06.png", 
    description: "Fruta del dragón con pulpa dulce y refrescante, llena de pequeñas semillas comestibles.",
    origin: "México y Centroamérica",
    season: "Junio a Noviembre",
    benefits: "Baja en calorías, rica en vitamina C y antioxidantes. Ayuda a la digestión y fortalece el sistema inmunológico.",
    details: "De aspecto exótico con piel rosa o amarilla y pulpa blanca o roja. Su sabor suave recuerda a una mezcla entre kiwi y pera."
  },
  { 
    id: 4, 
    name: "Guanábana", 
    image: "/lovable-uploads/bb3332fd-e0c1-452e-a962-9fdd81a204e9.png", 
    description: "Pulpa blanca y jugosa con un sabor único que combina dulzura y acidez.",
    origin: "Caribe y América Central",
    season: "Todo el año, con mayor disponibilidad de junio a septiembre",
    benefits: "Rica en vitamina C y antioxidantes. Tradicionalmente utilizada para problemas digestivos y como relajante.",
    details: "Fruta grande de piel verde con espinas blandas. Su pulpa blanca tiene un sabor que combina piña, fresa y cítricos."
  },
  { 
    id: 5, 
    name: "Baby Mango", 
    image: "/lovable-uploads/059a815e-f40f-4004-a39a-4a154d26d68b.png", 
    description: "Versión pequeña del mango tradicional, con sabor dulce y textura suave.",
    origin: "India y Sudeste Asiático",
    season: "Marzo a Julio",
    benefits: "Rico en vitamina A y C, ayuda a la salud visual y fortalece el sistema inmune.",
    details: "Variedad de mango en tamaño pequeño, perfecto para consumo individual. Dulce y aromático con poca fibra."
  },
  { 
    id: 6, 
    name: "Granadilla", 
    image: "/lovable-uploads/3159558d-32ff-4db7-9917-3cce0e232776.png", 
    description: "Variedad de fruta de la pasión con pulpa gelatinosa y dulce, muy aromática.",
    origin: "Andes Sudamericanos",
    season: "Todo el año, con mayor disponibilidad de febrero a agosto",
    benefits: "Rica en fibra y antioxidantes, ayuda a regular el sistema digestivo y calmar la ansiedad.",
    details: "Cáscara dura anaranjada que protege una pulpa gelatinosa con semillas comestibles. Sabor dulce y aromático."
  },
  { 
    id: 7, 
    name: "Rambután", 
    image: "/lovable-uploads/bcce9456-75e8-4660-a375-869f16673f06.png", 
    description: "Exótica fruta de aspecto peludo con interior dulce y jugoso similar al lichi.",
    origin: "Malasia e Indonesia",
    season: "Mayo a Septiembre",
    benefits: "Contiene hierro y vitamina C, ayuda a combatir la fatiga y fortalece el sistema inmunológico.",
    details: "Reconocible por sus 'pelos' rojos o amarillos. Su pulpa blanca translúcida es dulce y jugosa, con una semilla central no comestible."
  },
  { 
    id: 8, 
    name: "Carambola", 
    image: "/lovable-uploads/bb3332fd-e0c1-452e-a962-9fdd81a204e9.png", 
    description: "Con forma de estrella cuando se corta, ofrece un sabor refrescante entre dulce y ácido.",
    origin: "Indonesia y Malasia",
    season: "Todo el año, con mayor disponibilidad de agosto a febrero",
    benefits: "Baja en calorías, rica en vitamina C y antioxidantes. Tiene propiedades diuréticas y antiinflamatorias.",
    details: "Conocida como 'fruta estrella' por su forma al cortarla. De sabor refrescante que varía entre dulce y ácido según su madurez."
  },
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
  const [selectedFruit, setSelectedFruit] = useState<typeof fruits[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const filteredFruits = fruits.filter(fruit => 
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openFruitDetails = (fruit: typeof fruits[0]) => {
    setSelectedFruit(fruit);
    setIsDialogOpen(true);
  };

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
            <div 
              key={fruit.id} 
              className="card-fruit slide-up cursor-pointer" 
              style={{ animationDelay: `${fruit.id * 100}ms` }}
              onClick={() => openFruitDetails(fruit)}
            >
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

      {/* Fruit Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          {selectedFruit && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary">{selectedFruit.name}</DialogTitle>
                <DialogDescription className="text-lg mt-1">{selectedFruit.description}</DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src={selectedFruit.image} 
                    alt={selectedFruit.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="flex flex-col space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-800">Origen</h3>
                    <p>{selectedFruit.origin}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-800">Temporada</h3>
                    <p>{selectedFruit.season}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-800">Beneficios</h3>
                    <p>{selectedFruit.benefits}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-800">Detalles</h3>
                    <p>{selectedFruit.details}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  className="btn-primary"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cerrar
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
