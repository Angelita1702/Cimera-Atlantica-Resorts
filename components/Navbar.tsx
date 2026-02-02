
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white/95 shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <span className={`font-serif text-2xl tracking-widest transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            CIMERA ATLÁNTICA
          </span>
          <span className={`text-[10px] tracking-[0.3em] font-medium transition-colors duration-500 ${isScrolled ? 'text-gold' : 'text-gold'}`}>
            RESORTS
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-widest font-medium">
          <a href="#narrative" className={`transition-colors duration-300 ${isScrolled ? 'text-neutral-600 hover:text-gold' : 'text-white/80 hover:text-white'}`}>La Historia</a>
          <a href="#chapters" className={`transition-colors duration-300 ${isScrolled ? 'text-neutral-600 hover:text-gold' : 'text-white/80 hover:text-white'}`}>Capítulos</a>
          <a href="#hotels" className={`transition-colors duration-300 ${isScrolled ? 'text-neutral-600 hover:text-gold' : 'text-white/80 hover:text-white'}`}>Hoteles</a>
          <button 
            onClick={onOpenBooking}
            className={`px-8 py-3 transition-all duration-300 border ${
              isScrolled 
                ? 'bg-neutral-900 text-white border-neutral-900 hover:bg-gold hover:border-gold' 
                : 'bg-transparent text-white border-white hover:bg-white hover:text-neutral-900'
            }`}
          >
            RESERVAR
          </button>
        </div>

        <button 
          onClick={onOpenBooking}
          className="md:hidden text-gold font-semibold tracking-widest text-xs"
        >
          RESERVAR
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
