
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NarrativeIntro from './components/NarrativeIntro';
import CityChapter from './components/CityChapter';
import MirrorRooms from './components/MirrorRooms';
import Timeline from './components/Timeline';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import { CITIES } from './constants';
import { BookingState } from './types';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialBookingState, setInitialBookingState] = useState<Partial<BookingState> | undefined>(undefined);

  const handleOpenBooking = () => {
    setInitialBookingState(undefined);
    setIsBookingOpen(true);
  };

  const handleBookSpecificRoom = (cityId: string, hotelId: string, roomId: string) => {
    setInitialBookingState({ cityId, hotelId, roomId });
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-neutral-50 selection:bg-gold selection:text-white">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main>
        <Hero />
        <NarrativeIntro />
        
        <div className="relative">
          <Timeline />
          <div id="chapters">
            {CITIES.map((city, index) => (
              <CityChapter 
                key={city.id} 
                city={city} 
                index={index} 
              />
            ))}
          </div>
        </div>

        <MirrorRooms onBookRoom={handleBookSpecificRoom} />

        <section className="py-40 bg-white text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-10">Tu historia continúa aquí</h2>
            <p className="text-neutral-500 font-light text-lg mb-12 italic leading-relaxed">
              No dejes que el tiempo pase sin ser habitado. Reserva hoy tu estancia en cualquier Cimera Atlántica y descubre por qué algunas habitaciones son espejos de nuestra propia alma.
            </p>
            <button 
              onClick={handleOpenBooking}
              className="px-12 py-5 bg-gold text-white text-sm tracking-[0.4em] font-medium hover:bg-neutral-900 transition-all duration-700"
            >
              COMENZAR LA RESERVA
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialState={initialBookingState}
      />
    </div>
  );
};

export default App;
