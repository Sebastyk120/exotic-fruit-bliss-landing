
import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e8e3a81c-1c7e-4150-bdd7-b38c6985d435.png" 
            alt="L&M Exotic Fruits" 
            className="h-20 md:h-24"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-8 mr-8">
            <a href="#inicio" className="font-medium hover:text-primary transition-colors">Inicio</a>
            <a href="#nosotros" className="font-medium hover:text-primary transition-colors">Nosotros</a>
            <a href="#productos" className="font-medium hover:text-primary transition-colors">Productos</a>
            <a href="#contacto" className="font-medium hover:text-primary transition-colors">Contacto</a>
          </div>
          
          {/* Login Button */}
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
            <LogIn size={18} />
            <span>Iniciar Sesión</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden py-4">
            <div className="container-custom flex flex-col space-y-4">
              <a href="#inicio" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#nosotros" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
              <a href="#productos" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Productos</a>
              <a href="#contacto" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</a>
              
              {/* Login Button in Mobile Menu */}
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors self-start mt-2">
                <LogIn size={18} />
                <span>Iniciar Sesión</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
