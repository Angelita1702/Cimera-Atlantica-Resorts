
import { BrandLine, CityChapter } from './types';

export const CITIES: CityChapter[] = [
  {
    id: 'madrid',
    name: 'Madrid',
    title: 'El Vacío de las Promesas',
    subtitle: 'Capítulo I: El Origen',
    narrative: 'En la suite presidencial del Cimera Grand Elegance Madrid, el silencio era ensordecedor. Una boda cancelada, un vestido que nunca cruzó el umbral y un brindis que se quedó en susurro. Fue aquí, entre techos artesonados y vistas a la Castellana, donde el final de una historia se convirtió en el prólogo de otra.',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=2000',
    hotel: {
      id: 'h-madrid',
      name: 'Cimera Grand Elegance Madrid',
      line: BrandLine.GRAND_ELEGANCE,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
      description: 'Un icono de sofisticación clásica en el corazón de España.',
      rooms: [
        {
          id: 'r-mad-iconic',
          name: 'Suite Real del Desengaño',
          description: 'La habitación donde todo comenzó. Refleja una elegancia melancólica con vistas imperiales.',
          image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200',
          price: 850
        }
      ]
    }
  },
  {
    id: 'bogota',
    name: 'Bogotá',
    title: 'Reflejos en la Niebla',
    subtitle: 'Capítulo II: La Reflexión',
    narrative: 'A 2600 metros más cerca de las estrellas, la búsqueda de respuestas comenzó en el City Hub. Una ciudad vibrante que ofrecía el contraste perfecto para procesar el peso del pasado.',
    image: 'https://images.unsplash.com/photo-1583531352515-88841314dd95?auto=format&fit=crop&q=80&w=2000',
    hotel: {
      id: 'h-bogota',
      name: 'Cimera City Hub Bogotá',
      line: BrandLine.CITY_HUB,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
      description: 'Modernidad y dinamismo en el centro financiero.',
      rooms: [
        {
          id: 'r-bog-mirror',
          name: 'Mirror Room Bogotá',
          description: 'Inspirada en Madrid, esta habitación replica la disposición exacta para invitar a la introspección.',
          image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
          price: 320,
          isMirror: true
        }
      ]
    }
  },
  {
    id: 'mexico',
    name: 'Ciudad de México',
    title: 'El Pulso del Reencuentro',
    subtitle: 'Capítulo III: El Movimiento',
    narrative: 'En el bullicio de Reforma, el Sun & Fun de CDMX trajo color al relato. Un recordatorio de que la vida sigue latiendo, incluso cuando nosotros nos detenemos.',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=2000',
    hotel: {
      id: 'h-mexico',
      name: 'Cimera Sun & Fun México',
      line: BrandLine.SUN_FUN,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
      description: 'Diversión y energía en una de las metrópolis más grandes del mundo.',
      rooms: [
        {
          id: 'r-mex-mirror',
          name: 'Mirror Room CDMX',
          description: 'La misma estética madrileña, bañada por la luz dorada del sol mexicano.',
          image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
          price: 450,
          isMirror: true
        }
      ]
    }
  },
  {
    id: 'paris',
    name: 'París',
    title: 'El Vals de la Soledad',
    subtitle: 'Capítulo IV: La Aceptación',
    narrative: 'París no es solo para amantes. En el Grand Elegance, aprendimos que caminar solo por el Sena es una forma de libertad que no conocíamos.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000',
    hotel: {
      id: 'h-paris',
      name: 'Cimera Grand Elegance Paris',
      line: BrandLine.GRAND_ELEGANCE,
      image: 'https://images.unsplash.com/photo-1551882547-ff43c33fcae4?auto=format&fit=crop&q=80&w=1200',
      description: 'Lujo atemporal a pasos de la Torre Eiffel.',
      rooms: [
        {
          id: 'r-par-mirror',
          name: 'Mirror Room Paris',
          description: 'Elegancia francesa fundida con el ADN del origen madrileño.',
          image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1200',
          price: 950,
          isMirror: true
        }
      ]
    }
  },
  {
    id: 'londres',
    name: 'Londres',
    title: 'Estructura en el Caos',
    subtitle: 'Capítulo V: La Reconstrucción',
    narrative: 'Entre ladrillo visto y el City Hub de Londres, la historia comenzó a adquirir una nueva estructura. Ya no era un lamento, sino un plan.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000',
    hotel: {
      id: 'h-london',
      name: 'Cimera City Hub London',
      line: BrandLine.CITY_HUB,
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200',
      description: 'Eficiencia y diseño industrial en el corazón del East End.',
      rooms: [
        {
          id: 'r-lon-mirror',
          name: 'Mirror Room London',
          description: 'Un espacio de simetría perfecta que calma los ecos de Madrid.',
          image: 'https://images.unsplash.com/photo-1560185893-a55caf7a1751?auto=format&fit=crop&q=80&w=1200',
          price: 580,
          isMirror: true
        }
      ]
    }
  },
  {
    id: 'lisboa',
    name: 'Lisboa',
    title: 'La Luz del Nuevo Día',
    subtitle: 'Capítulo VI: El Renacer',
    narrative: 'El viaje culmina en el Sun & Fun de Lisboa. El Tajo reflejando la misma luz que una vez vimos en Madrid, pero esta vez, con la promesa de un nuevo amanecer.',
    image: 'https://images.unsplash.com/photo-1512100356956-c1c447411a55?auto=format&fit=crop&q=80&w=2000',
    hotel: {
      id: 'h-lisboa',
      name: 'Cimera Sun & Fun Lisboa',
      line: BrandLine.SUN_FUN,
      image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80&w=1200',
      description: 'Luz y alegría mediterránea frente al estuario.',
      rooms: [
        {
          id: 'r-lis-mirror',
          name: 'Mirror Room Lisboa',
          description: 'El círculo se cierra. La habitación espejo se llena de la luz de Lisboa.',
          image: 'https://images.unsplash.com/photo-1578683062331-da08064f2771?auto=format&fit=crop&q=80&w=1200',
          price: 390,
          isMirror: true
        }
      ]
    }
  }
];
