
import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full backdrop-blur-sm z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
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
            <a href="#inicio" className="font-medium hover:text-primary transition-colors hover:scale-105 transition-transform relative group">
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#nosotros" className="font-medium hover:text-primary transition-colors hover:scale-105 transition-transform relative group">
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#productos" className="font-medium hover:text-primary transition-colors hover:scale-105 transition-transform relative group">
              Productos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contacto" className="font-medium hover:text-primary transition-colors hover:scale-105 transition-transform relative group">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          
          {/* Login Button - Enhanced */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-tertiary text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-300">
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
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md md:hidden py-4 animate-fade-in">
            <div className="container-custom flex flex-col space-y-4">
              <a href="#inicio" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#nosotros" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
              <a href="#productos" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Productos</a>
              <a href="#contacto" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</a>
              
              {/* Login Button in Mobile Menu */}
              <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-tertiary text-white px-4 py-2 rounded-full hover:opacity-90 transition-colors self-start mt-2">
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
