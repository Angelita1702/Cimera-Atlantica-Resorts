
import React from 'react';
import { CityChapter as CityType, BrandLine } from '../types';

interface Props {
  city: CityType;
  index: number;
}

const CityChapter: React.FC<Props> = ({ city, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section id={city.id} className="min-h-screen py-24 flex items-center bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 md:gap-20`}>
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Brand Overlay Tag */}
            <div className="absolute top-8 left-8 bg-white px-6 py-3 shadow-xl">
              <p className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-1">Cimera Line</p>
              <p className="font-serif text-lg italic text-neutral-900">{city.hotel.line}</p>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <span className="text-gold text-xs tracking-[0.5em] uppercase mb-4 block">{city.subtitle}</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 text-neutral-900 leading-tight">
                {city.name}
              </h2>
              <h3 className="text-2xl font-serif italic mb-8 text-neutral-500">
                &ldquo;{city.title}&rdquo;
              </h3>
              <p className="text-neutral-600 text-lg font-light leading-relaxed mb-10">
                {city.narrative}
              </p>
              
              <div className="pt-8 border-t border-neutral-100">
                <p className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-4">El Refugio</p>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-serif mb-2">{city.hotel.name}</h4>
                    <p className="text-sm text-neutral-500 font-light">{city.hotel.description}</p>
                  </div>
                </div>
                <a 
                  href="#rooms"
                  className="inline-flex items-center text-gold text-xs tracking-[0.3em] font-semibold hover:translate-x-2 transition-transform duration-300"
                >
                  VER HABITACIÓN ESPEJO <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background Decorative Element */}
      <div className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} opacity-[0.03] pointer-events-none translate-y-1/4`}>
        <span className="text-[30rem] font-serif italic select-none">{city.name}</span>
      </div>
    </section>
  );
};

export default CityChapter;
