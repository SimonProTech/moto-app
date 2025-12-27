export interface RouteInterface {
  id: string;
  u_id: string;
  starting_city: string;
  ending_city: string;
  trip_name: string;
  trip_description: string;
  distance: number;
  trip_time: number;
  attractions: string;
  attraction_type: string;
  GPS_start_lat: number;
  GPS_start_lon: number;
  GPS_meta_lat: number;
  GPS_meta_lon: number;
  trip_stops: string;
  GPS_waypoints: any;
  trip_images?: string | null;
  author?: string | null;
  storytelling: string;
  route_surfaces: ROUTE_SURFACE;
  route_regions: ROUTE_REGIONS;
  route_difficulties: ROUTE_DIFFICULTIES;
  moto_ride_types: MOTO_RIDE_TYPES;
}

export interface MOTO_RIDE_TYPES {
  id: number;
  moto_ride: MotoRideName;
}

export interface ROUTE_SURFACE {
  id: number;
  surface: SURFACES;
  created_at: string;
}

export interface ROUTE_REGIONS {
  id: number;
  region_name: REGIONS;
}

export enum REGIONS {
  "Dolnośląskie",
  "Kujawsko-Pomorskie",
  "Lubelskie",
  "Lubuskie",
  "Łódzkie",
  "Małopolskie",
  "Mazowieckie",
  "Opolskie",
  "Podkarpackie",
  "Podlaskie",
  "Pomorskie",
  "Śląskie",
  "Świętokrzyskie",
  "Warmińsko-Mazurskie",
  "Wielkopolskie",
  "Zachodniopomorskie",
}

export enum SURFACES {
  Asfalt = "Asfalt",
  "Asfalt+Górska" = "Asfalt+Górska",
  "Asfalt+Mieszane" = "Asfalt+Mieszana",
  "Górska" = "Górska",
  "Mieszana" = "Mieszana",
}

export interface ROUTE_DIFFICULTIES {
  id: number;
  difficulty_level: CHOOSE_LVL;
}

export interface MOTO_RIDE_STYLE {
  id: number;
  moto_ride: MOTO_RIDE;
}

export enum MOTO_RIDE {
  Górska,
  Krajobrazowa,
  Miejska,
  "Off-road",
  Rekreacyjna,
  Sportowa,
  Turystyczna,
  Wymagająca,
}

export type MotoRideName = keyof typeof MOTO_RIDE;

export enum CHOOSE_LVL {
  Łatwa,
  Średnia,
  Wymagająca,
}

export interface FilterMobileViewProviderProps {
  filters: {
    regions: ROUTE_REGIONS[];
    routeDifficulties: ROUTE_DIFFICULTIES[];
    motoridestyles: MOTO_RIDE_STYLE[];
  };
}
