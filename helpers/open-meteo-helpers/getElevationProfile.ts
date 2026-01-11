import { limitPoints } from "@/helpers/open-meteo-helpers/limitPoints";
import { samplePolyline } from "@/helpers/open-meteo-helpers/samplePolyline";

interface ElevDataResponse {
  elevation: number[];
}

export async function getElevationProfile(geometry: [number, number][]) {
  try {
    let simplified = samplePolyline({ points: geometry, interval: 500 });
    simplified = limitPoints({ points: simplified, max: 100 });

    const lats = simplified.map((p) => p[1]).join(",");
    const lons = simplified.map((p) => p[0]).join(",");

    const elevRes = await fetch(
      `https://api.open-meteo.com/v1/elevation?latitude=${lats}&longitude=${lons}`,
      {
        next: { revalidate: 60 * 60 * 24 * 30 },
      },
    );

    const elevData: ElevDataResponse = await elevRes.json();

    return elevData.elevation.map((elev, i) => ({
      lat: simplified[i][1],
      lon: simplified[i][0],
      elevation: elev,
      index: i,
    }));
  } catch (e) {
    return [];
  }
}
