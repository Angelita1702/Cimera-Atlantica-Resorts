
export enum BrandLine {
  GRAND_ELEGANCE = 'Grand Elegance',
  CITY_HUB = 'City Hub',
  SUN_FUN = 'Sun & Fun'
}

export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isMirror?: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  line: BrandLine;
  image: string;
  description: string;
  rooms: Room[];
}

export interface CityChapter {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  narrative: string;
  image: string;
  hotel: Hotel;
}

export interface BookingState {
  cityId: string;
  hotelId: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}
