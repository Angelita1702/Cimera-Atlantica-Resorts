
import React from 'react';

interface Props {
  onOpenBooking: () => void;
}

const Footer: React.FC<Props> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col items-start mb-8">
              <span className="font-serif text-3xl tracking-widest text-neutral-900">
                CIMERA ATLÁNTICA
              </span>
              <span className="text-xs tracking-[0.4em] font-medium text-gold">
                RESORTS
              </span>
            </div>
            <p className="text-neutral-500 font-light max-w-sm leading-relaxed italic">
              "Un viaje que comenzó en una suite de Madrid y terminó por enseñarnos que el verdadero lujo es encontrar el reflejo de uno mismo en cualquier rincón del mundo."
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-8">Navegación</h4>
            <ul className="space-y-4 text-sm font-light text-neutral-600">
              <li><a href="#" className="hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#narrative" className="hover:text-gold transition-colors">La Historia</a></li>
              <li><a href="#rooms" className="hover:text-gold transition-colors">Mirror Rooms</a></li>
              <li><button onClick={onOpenBooking} className="hover:text-gold transition-colors">Reservas</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-8">Experiencias</h4>
            <ul className="space-y-4 text-sm font-light text-neutral-600">
              <li><span className="hover:text-gold cursor-default">Grand Elegance</span></li>
              <li><span className="hover:text-gold cursor-default">City Hub</span></li>
              <li><span className="hover:text-gold cursor-default">Sun & Fun</span></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-neutral-100 space-y-8 md:space-y-0">
          <p className="text-xs text-neutral-400 tracking-widest">
            © 2024 CIMERA ATLÁNTICA RESORTS. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-xs text-neutral-400 hover:text-neutral-900 tracking-widest transition-colors">INSTAGRAM</a>
            <a href="#" className="text-xs text-neutral-400 hover:text-neutral-900 tracking-widest transition-colors">LINKEDIN</a>
            <a href="#" className="text-xs text-neutral-400 hover:text-neutral-900 tracking-widest transition-colors">VIMEO</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
