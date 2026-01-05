import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { calculateDistance } from "../helpers/calculateDistance";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SECRET_KEY!,
);
export const updateDistances = async () => {
  console.log("Pobieram wszystkie trasy...");
  const {
    data: routes,
    error,
    count,
  } = await supabase
    .from("routes")
    .select("id, GPS_start_lat, GPS_start_lon, GPS_meta_lat, GPS_meta_lon");

  if (error) {
    console.error("Błąd pobierania tras:", error.message);
    return;
  }

  console.log(`Znaleziono ${count} tras. Startuję aktualizację...`);

  for (const route of routes) {
    const result = await calculateDistance(
      route.GPS_start_lat,
      route.GPS_start_lon,
      route.GPS_meta_lat,
      route.GPS_meta_lon,
    );
    if (!result) {
      console.warn(`OSRM zwrócił null dla route_id=${route.id}, pomijam.`);
      continue;
    }
    const { distanceKm, durationMin } = result;
    const { error: updateError } = await supabase
      .from("routes")
      .update({ distance_osrm: distanceKm, duration_osrm: durationMin })
      .eq("id", route.id);
    if (updateError) {
      console.error(
        `❌ Błąd aktualizacji route_id=${route.id}:`,
        updateError.message,
      );
    } else {
      console.log(
        `✅ route_id=${route.id} → ${distanceKm} km / ${durationMin} min`,
      );
    }
  }
  console.log("🎉 Aktualizacja zakończona!");
};

updateDistances();
