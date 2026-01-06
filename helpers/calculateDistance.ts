export const calculateDistance = async (
  startLat: number,
  startLon: number,
  endLat: number,
  endLon: number,
) => {
  try {
    const res = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${startLon},${startLat};${endLon},${endLat}?overview=false`,
    );
    const data = await res.json();

    if (!data.routes || data.routes.length === 0) {
      return null;
    }
    const route = data.routes[0];
    return {
      distanceKm: route.distance / 1000,
      durationMin: route.duration / 60,
    };
  } catch (e) {
    console.error("OSRM error:", e);
    return null;
  }
};
