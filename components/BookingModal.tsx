
import React, { useState, useEffect } from 'react';
import { CITIES } from '../constants';
import { BookingState } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialState?: Partial<BookingState>;
}

const BookingModal: React.FC<Props> = ({ isOpen, onClose, initialState }) => {
  const [booking, setBooking] = useState<BookingState>({
    cityId: initialState?.cityId || CITIES[0].id,
    hotelId: initialState?.hotelId || CITIES[0].hotel.id,
    roomId: initialState?.roomId || CITIES[0].hotel.rooms[0].id,
    checkIn: initialState?.checkIn || '',
    checkOut: initialState?.checkOut || '',
    guests: initialState?.guests || 2
  });

  const [step, setStep] = useState<'form' | 'confirmation'>('form');

  useEffect(() => {
    if (initialState) {
      setBooking(prev => ({ ...prev, ...initialState }));
    }
  }, [initialState]);

  if (!isOpen) return null;

  const currentCity = CITIES.find(c => c.id === booking.cityId) || CITIES[0];
  const currentHotel = currentCity.hotel;
  const currentRoom = currentHotel.rooms.find(r => r.id === booking.roomId) || currentHotel.rooms[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl animate-[modalIn_0.4s_ease-out]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 'form' ? (
          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Preview Area */}
            <div className="w-full lg:w-1/3 bg-neutral-100 min-h-[300px] relative">
              <img 
                src={currentRoom.image} 
                className="w-full h-full object-cover" 
                alt="Selected room preview"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 mb-2 block">{currentCity.name}</span>
                <h3 className="text-2xl font-serif italic">{currentHotel.name}</h3>
              </div>
            </div>

            {/* Form Area */}
            <div className="w-full lg:w-2/3 p-10 md:p-16">
              <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">Sistema de Reservas</span>
              <h2 className="text-4xl font-serif mb-10 italic">Inicie su propia historia</h2>

              <form onSubmit={handleBooking} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest text-neutral-400 uppercase">Destino</label>
                    <select 
                      value={booking.cityId}
                      onChange={(e) => {
                        const cityId = e.target.value;
                        const city = CITIES.find(c => c.id === cityId)!;
                        setBooking({
                          ...booking, 
                          cityId, 
                          hotelId: city.hotel.id,
                          roomId: city.hotel.rooms[0].id
                        });
                      }}
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-3 text-sm focus:border-gold outline-none transition-all appearance-none"
                    >
                      {CITIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest text-neutral-400 uppercase">Huéspedes</label>
                    <input 
                      type="number" 
                      min="1" 
                      max="4"
                      value={booking.guests}
                      onChange={(e) => setBooking({...booking, guests: parseInt(e.target.value)})}
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-3 text-sm focus:border-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest text-neutral-400 uppercase">Check-In</label>
                    <input 
                      type="date" 
                      required
                      value={booking.checkIn}
                      onChange={(e) => setBooking({...booking, checkIn: e.target.value})}
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-3 text-sm focus:border-gold outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest text-neutral-400 uppercase">Check-Out</label>
                    <input 
                      type="date" 
                      required
                      value={booking.checkOut}
                      onChange={(e) => setBooking({...booking, checkOut: e.target.value})}
                      className="w-full bg-neutral-50 border-b border-neutral-200 py-3 text-sm focus:border-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="pt-8 flex flex-col items-center">
                  <p className="text-xl font-serif italic mb-6">Precio estimado: <span className="text-gold font-normal">{currentRoom.price}€ / noche</span></p>
                  <button 
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-4 text-xs tracking-[0.3em] font-medium hover:bg-gold transition-all duration-500 uppercase"
                  >
                    Confirmar Disponibilidad
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="p-16 text-center animate-[fadeIn_0.5s_ease-out]">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-serif mb-6 italic">Reserva Confirmada</h2>
            <p className="text-neutral-500 max-w-md mx-auto mb-10 font-light leading-relaxed">
              Su historia en {currentCity.name} está lista para comenzar. Hemos enviado los detalles de su estancia en {currentHotel.name} a su correo electrónico.
            </p>
            <div className="bg-neutral-50 p-6 rounded-sm max-w-sm mx-auto mb-10 text-left border border-neutral-100">
               <p className="text-[10px] tracking-widest text-neutral-400 uppercase mb-2">Detalles:</p>
               <p className="text-sm text-neutral-800 mb-1"><strong>Estancia:</strong> {currentRoom.name}</p>
               <p className="text-sm text-neutral-800"><strong>Fechas:</strong> {booking.checkIn} - {booking.checkOut}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gold text-xs tracking-[0.3em] font-semibold border-b border-gold pb-1 hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300"
            >
              CERRAR Y EXPLORAR
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default BookingModal;
