
import React from 'react';
import { CITIES } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="sticky top-24 z-30 hidden lg:block pointer-events-none">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start space-y-8 bg-white/20 backdrop-blur-md p-6 rounded-full w-fit pointer-events-auto border border-white/30 ml-auto">
          {CITIES.map((city, index) => (
            <a 
              key={city.id} 
              href={`#${city.id}`}
              className="group relative flex items-center justify-end w-full"
            >
              <span className="absolute right-8 text-[10px] tracking-[0.3em] uppercase text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {city.name}
              </span>
              <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-gold group-hover:scale-125 transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
