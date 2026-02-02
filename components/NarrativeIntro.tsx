
import React from 'react';

const NarrativeIntro: React.FC = () => {
  return (
    <section id="narrative" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold text-xs tracking-[0.4em] uppercase mb-6 block">El Prólogo</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-12 italic leading-tight">
            Todo comenzó con un silencio, en una habitación que lo esperaba todo y no recibió nada.
          </h2>
          <div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-light">
            <p>
              Cimera Atlántica Resorts no es solo una colección de hoteles de lujo. Es un mapa de emociones trazado por un viaje real. Imagina una suite en Madrid, preparada para la mañana de una boda que nunca ocurrió. Las flores frescas, el champán helado y una cama que quedó perfectamente hecha.
            </p>
            <p>
              Ese vacío no fue el final. Fue el impulso para buscar la misma paz, la misma luz y el mismo refugio en otros rincones del mundo. Desde la altitud de Bogotá hasta la luz del Tajo en Lisboa, replicamos esa habitación —la Habitación Espejo— para que cada viajero pueda encontrar su propio punto de partida.
            </p>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border-r border-neutral-100 last:border-0">
              <span className="block text-3xl font-serif mb-2">Grand Elegance</span>
              <p className="text-xs tracking-widest text-neutral-400 uppercase">Sofisticación Clásica</p>
            </div>
            <div className="text-center p-8 border-r border-neutral-100 last:border-0">
              <span className="block text-3xl font-serif mb-2">City Hub</span>
              <p className="text-xs tracking-widest text-neutral-400 uppercase">Energía Urbana</p>
            </div>
            <div className="text-center p-8">
              <span className="block text-3xl font-serif mb-2">Sun & Fun</span>
              <p className="text-xs tracking-widest text-neutral-400 uppercase">Luz y Vitalidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeIntro;
