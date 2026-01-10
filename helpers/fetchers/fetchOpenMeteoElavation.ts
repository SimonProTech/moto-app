import { getElevationProfile } from "@/helpers/open-meteo-helpers/getElevationProfile";

interface FetchOpenMeteoElavationPoints {
  GPS_start_lon: number;
  GPS_start_lat: number;
  GPS_meta_lon: number;
  GPS_meta_lat: number;
}

interface OSRMDataR {
  geometry: {
    coordinates: [number, number][];
  };
}

export const fetchOpenMeteoElavation = async ({
  GPS_meta_lon,
  GPS_start_lon,
  GPS_start_lat,
  GPS_meta_lat,
}: FetchOpenMeteoElavationPoints) => {
  try {
    const res = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${GPS_start_lon},${GPS_start_lat};${GPS_meta_lon},${GPS_meta_lat}?overview=full&geometries=geojson&steps=true`,
    );

    if (!res.ok) {
      throw new Error(`OSRM error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.routes?.length) {
      throw new Error("OSRM returned no routes");
    }

    const osrmResponseGeometry: OSRMDataR = data.routes[0];

    const geometry = osrmResponseGeometry.geometry.coordinates;
    return await getElevationProfile(geometry);
  } catch (e) {
    console.error("Elevation fetch error:", e);
    return null;
  }
};
