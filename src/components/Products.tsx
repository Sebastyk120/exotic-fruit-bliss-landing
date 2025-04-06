
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowRight } from "lucide-react";

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
  { 
    id: 9, 
    name: "Arándano", 
    image: "/lovable-uploads/3159558d-32ff-4db7-9917-3cce0e232776.png", 
    description: "Pequeña baya azul con sabor dulce y ligeramente ácido.",
    origin: "América del Norte",
    season: "Mayo a Septiembre",
    benefits: "Rico en antioxidantes, ayuda a mejorar la salud cardiovascular y la memoria.",
    details: "Pequeña baya de color azul oscuro muy valorada por sus propiedades antioxidantes."
  },
  { 
    id: 10, 
    name: "Bananito", 
    image: "/lovable-uploads/528ade49-4bfb-43c2-bf13-f6063c1ee729.png", 
    description: "Versión pequeña del plátano, más dulce y con notas de vainilla.",
    origin: "Sudeste Asiático",
    season: "Todo el año",
    benefits: "Rico en potasio y vitamina B6, ideal para deportistas.",
    details: "Conocido también como 'baby banana', es más pequeño y dulce que el plátano común."
  },
  { 
    id: 11, 
    name: "Curuba", 
    image: "/lovable-uploads/bcce9456-75e8-4660-a375-869f16673f06.png", 
    description: "Fruta alargada con pulpa gelatinosa y sabor ácido refrescante.",
    origin: "Región Andina",
    season: "Marzo a Septiembre",
    benefits: "Rica en vitamina C y antioxidantes.",
    details: "También conocida como 'banana passionfruit', ideal para zumos y postres."
  },
  { 
    id: 12, 
    name: "Feijoa", 
    image: "/lovable-uploads/bb3332fd-e0c1-452e-a962-9fdd81a204e9.png", 
    description: "Fruta verde con pulpa aromática y sabor que recuerda a la piña y menta.",
    origin: "Sudamérica",
    season: "Octubre a Enero",
    benefits: "Rica en vitamina C y fibra.",
    details: "También conocida como 'guayaba piña', tiene un aroma y sabor muy característicos."
  },
  { 
    id: 13, 
    name: "Guayaba", 
    image: "/lovable-uploads/059a815e-f40f-4004-a39a-4a154d26d68b.png", 
    description: "Fruta tropical con pulpa dulce y aromática.",
    origin: "América Central",
    season: "Todo el año",
    benefits: "Rica en vitamina C y fibra, ayuda a la digestión.",
    details: "Puede ser consumida fresca o en zumos, mermeladas y postres."
  },
  { 
    id: 14, 
    name: "Gulupa", 
    image: "/lovable-uploads/3159558d-32ff-4db7-9917-3cce0e232776.png", 
    description: "Variedad de maracuyá con sabor más dulce y menos ácido.",
    origin: "Colombia",
    season: "Todo el año",
    benefits: "Rica en antioxidantes y vitamina C.",
    details: "También conocida como 'maracuyá morado', ideal para zumos y postres."
  },
  { 
    id: 15, 
    name: "Lulo", 
    image: "/lovable-uploads/528ade49-4bfb-43c2-bf13-f6063c1ee729.png", 
    description: "Fruta cítrica con sabor único que combina naranja y piña.",
    origin: "Colombia y Ecuador",
    season: "Todo el año",
    benefits: "Rica en vitamina C y antioxidantes.",
    details: "También conocida como 'naranjilla', ideal para zumos y salsas."
  },
  { 
    id: 16, 
    name: "Higo", 
    image: "/lovable-uploads/bcce9456-75e8-4660-a375-869f16673f06.png", 
    description: "Fruta dulce con pulpa roja y semillas pequeñas.",
    origin: "Mediterráneo",
    season: "Junio a Septiembre",
    benefits: "Rico en fibra y potasio.",
    details: "Puede consumirse fresco, seco o en mermeladas y postres."
  },
  { 
    id: 17, 
    name: "Pepino Melón", 
    image: "/lovable-uploads/bb3332fd-e0c1-452e-a962-9fdd81a204e9.png", 
    description: "Fruta refrescante con sabor que recuerda al pepino y al melón.",
    origin: "América Central",
    season: "Todo el año",
    benefits: "Bajo en calorías, rico en vitamina C.",
    details: "Ideal para ensaladas de frutas y bebidas refrescantes."
  },
  { 
    id: 18, 
    name: "Tamarillo", 
    image: "/lovable-uploads/059a815e-f40f-4004-a39a-4a154d26d68b.png", 
    description: "Fruta en forma de huevo con pulpa jugosa agridulce.",
    origin: "Región Andina",
    season: "Todo el año",
    benefits: "Rico en vitaminas A y C.",
    details: "También conocido como 'tomate de árbol', usado en salsas y postres."
  },
  { 
    id: 19, 
    name: "Tomate Amarillo", 
    image: "/lovable-uploads/3159558d-32ff-4db7-9917-3cce0e232776.png", 
    description: "Variedad de tomate con sabor dulce y bajo nivel de acidez.",
    origin: "Sudamérica",
    season: "Todo el año",
    benefits: "Rico en antioxidantes y vitamina C.",
    details: "Ideal para ensaladas y salsas frescas por su sabor dulce."
  },
  { 
    id: 20, 
    name: "Uchuva", 
    image: "/lovable-uploads/528ade49-4bfb-43c2-bf13-f6063c1ee729.png", 
    description: "Pequeña baya dorada envuelta en un cáliz, con sabor agridulce.",
    origin: "Región Andina",
    season: "Todo el año",
    benefits: "Rica en antioxidantes y vitamina A y C.",
    details: "También conocida como 'physalis' o 'golden berry', ideal como snack o decoración."
  },
  { 
    id: 21, 
    name: "Papaya", 
    image: "/lovable-uploads/bcce9456-75e8-4660-a375-869f16673f06.png", 
    description: "Fruta tropical dulce con pulpa anaranjada y semillas negras.",
    origin: "América Central",
    season: "Todo el año",
    benefits: "Rica en enzimas digestivas, vitamina C y antioxidantes.",
    details: "Excelente para mejorar la digestión, puede consumirse fresca o en batidos."
  }
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
  const [selectedFruit, setSelectedFruit] = useState<typeof fruits[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const filteredFruits = fruits.filter(fruit => 
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openFruitDetails = (fruit: typeof fruits[0]) => {
    setSelectedFruit(fruit);
    setIsDialogOpen(true);
  };
  
  // WhatsApp function
  const openWhatsApp = () => {
    window.open('https://wa.me/+34612345678?text=Hola, estoy interesado en sus productos de frutas exóticas.', '_blank');
  };

  return (
    <section id="productos" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Nuestros Productos</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg mb-8">
            Explorá nuestra selección de frutas exóticas importadas de los mejores productores
          </p>
          
          <div className="mt-8 relative">
            <input
              type="text"
              placeholder="Buscar fruta..."
              className="w-full max-w-md px-5 py-3 rounded-full border border-gray-300 shadow-md focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Carrusel de Productos Mejorado */}
        <div className="mb-16">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredFruits.map((fruit) => (
                <CarouselItem key={fruit.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card 
                    className="card-fruit h-full slide-up cursor-pointer border-0 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300" 
                    style={{ animationDelay: `${fruit.id * 100}ms` }}
                    onClick={() => openFruitDetails(fruit)}
                  >
                    <div className="relative h-60 overflow-hidden group">
                      <img 
                        src={fruit.image} 
                        alt={fruit.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <CardTitle className="text-xl text-primary">{fruit.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-gray-600 text-sm mb-3">{fruit.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <button className="text-primary font-medium inline-flex items-center group">
                        Ver detalles
                        <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="h-10 w-10 rounded-full hover:bg-primary hover:text-white transition-colors" />
              <CarouselNext className="h-10 w-10 rounded-full hover:bg-primary hover:text-white transition-colors" />
            </div>
          </Carousel>
        </div>
        
        {/* All Products Section - Redesigned */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-10 shadow-inner slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Todas Nuestras Frutas Exóticas</h3>
          <ScrollArea className="h-60 rounded-xl p-4">
            <div className="flex flex-wrap justify-center gap-3">
              {allFruits.map((fruit, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {fruit}
                </span>
              ))}
            </div>
          </ScrollArea>
        </div>
        
        {/* WhatsApp Contact Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            onClick={openWhatsApp}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Fruit Details Dialog - Enhanced */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl bg-white rounded-2xl p-0 overflow-hidden">
          {selectedFruit && (
            <>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <div className="h-full">
                    <img 
                      src={selectedFruit.image} 
                      alt={selectedFruit.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6">
                  <DialogHeader>
                    <DialogTitle className="text-3xl text-primary font-bold mb-2">{selectedFruit.name}</DialogTitle>
                    <DialogDescription className="text-lg text-gray-700">{selectedFruit.description}</DialogDescription>
                  </DialogHeader>
                  
                  <div className="mt-6 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-800 mb-1">Origen</h3>
                      <p className="text-gray-700">{selectedFruit.origin}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-800 mb-1">Temporada</h3>
                      <p className="text-gray-700">{selectedFruit.season}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-800 mb-1">Beneficios</h3>
                      <p className="text-gray-700">{selectedFruit.benefits}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-800 mb-1">Detalles</h3>
                      <p className="text-gray-700">{selectedFruit.details}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button 
                      className="bg-secondary text-white px-5 py-2 rounded-full hover:bg-secondary/90 transition-colors flex items-center gap-2"
                      onClick={openWhatsApp}
                    >
                      <Phone size={18} />
                      <span>Consultar disponibilidad</span>
                    </button>
                    
                    <button 
                      className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
