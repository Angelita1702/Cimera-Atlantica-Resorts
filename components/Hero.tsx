
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect (simulated) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Resort" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-white text-5xl md:text-8xl font-serif italic mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          Historias que habitan en ti
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          Un viaje emocional a través de seis ciudades, un hotel y una habitación que lo cambió todo.
        </p>
        <a 
          href="#narrative" 
          className="inline-block px-10 py-4 bg-gold text-white text-sm tracking-[0.2em] font-medium hover:bg-white hover:text-neutral-900 transition-all duration-500 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]"
        >
          EXPLORAR LA HISTORIA
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/50 mb-4"></div>
        <span className="text-[10px] text-white tracking-[0.4em] uppercase">Scroll</span>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
