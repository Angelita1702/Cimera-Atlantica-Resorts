
import React from 'react';
import { CITIES } from '../constants';

interface Props {
  onBookRoom: (cityId: string, hotelId: string, roomId: string) => void;
}

const MirrorRooms: React.FC<Props> = ({ onBookRoom }) => {
  const madridRoom = CITIES[0].hotel.rooms[0];
  const mirrorRooms = CITIES.slice(1).map(c => ({
    city: c.name,
    cityId: c.id,
    hotelId: c.hotel.id,
    room: c.hotel.rooms[0]
  }));

  return (
    <section id="rooms" className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Madrid Anchor */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video md:aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src={madridRoom.image} 
                alt="Madrid Iconic Room" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-8 left-8">
                <span className="bg-gold text-white px-4 py-2 text-[10px] tracking-widest uppercase">El Origen: Madrid</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-serif italic mb-8">La Suite que inició el viaje</h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                Cada detalle en esta habitación fue diseñado para una celebración que no ocurrió. La simetría de los espejos, el tono marfil de las paredes y la vista infinita sobre Madrid. Decidimos llevar este ADN a cada destino de Cimera Atlántica para que nunca te sientas lejos de casa.
              </p>
              <button 
                onClick={() => onBookRoom('madrid', 'h-madrid', madridRoom.id)}
                className="group inline-flex flex-col"
              >
                <span className="text-gold text-xs tracking-[0.4em] font-bold mb-2">RESERVAR ESTE ICONO</span>
                <div className="h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mirror Gallery */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">Reflejos Alrededor del Mundo</span>
            <h3 className="text-4xl font-serif italic">Habitaciones Espejo</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mirrorRooms.map((item, idx) => (
            <div key={idx} className="group cursor-pointer" onClick={() => onBookRoom(item.cityId, item.hotelId, item.room.id)}>
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 relative">
                <img 
                  src={item.room.image} 
                  alt={item.room.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="border border-white text-white px-6 py-3 text-[10px] tracking-widest uppercase backdrop-blur-sm">Reservar Reflejo</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-serif mb-1 italic">{item.room.name}</h4>
                  <p className="text-[10px] tracking-widest text-white/40 uppercase">{item.city}</p>
                </div>
                <span className="text-gold text-sm font-light">Desde {item.room.price}€</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MirrorRooms;
