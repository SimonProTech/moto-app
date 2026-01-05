import { PostgrestResponse } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";
import { RouteInterface, SURFACES } from "@/types/app";

export async function fetchAllRoutes(
  page: number,
  pageSize: 26,
  searchParams: Record<string, string | undefined>,
) {
  const supabase = await createClient();

  const startIndex = (page - 1) * pageSize;
  const stopIndex = startIndex + pageSize - 1;

  let qeuryFilters = supabase.from("routes").select(
    `
    *,
    route_difficulties!inner(*),
    route_surfaces!inner(*),
    route_regions!inner(*),
    moto_ride_types!inner(*)
    `,
    {
      count: "exact",
    },
  );

  if (searchParams?.region) {
    const region = searchParams.region?.toString().toLowerCase();
    qeuryFilters = qeuryFilters.ilike("route_regions.region_name", region);
  }

  if (searchParams?.sort) {
    switch (searchParams?.sort) {
      case "easy":
        qeuryFilters = qeuryFilters.order(
          "route_difficulties(difficulty_level)",
          {
            ascending: true,
          },
        );
        break;

      case "hard":
        qeuryFilters = qeuryFilters.order(
          "route_difficulties(difficulty_level)",
          {
            ascending: false,
          },
        );
        break;

      case "latest":
        qeuryFilters = qeuryFilters.order("created_at", {
          ascending: false,
        });
        break;
      case "short":
        qeuryFilters = qeuryFilters.order("distance_osrm", {
          ascending: true,
        });
        break;
      case "long":
        qeuryFilters = qeuryFilters.order("distance_osrm", {
          ascending: false,
        });
        break;
    }
  }

  if (searchParams?.difficulty) {
    const difficulty = searchParams.difficulty?.toString().toLowerCase();
    qeuryFilters = qeuryFilters.ilike(
      "route_difficulties.difficulty_level",
      difficulty,
    );
  }

  if (searchParams?.distance) {
    switch (searchParams?.distance) {
      case "0-50":
        qeuryFilters = qeuryFilters.lte("distance_osrm", 50);
        break;
      case "51-100":
        qeuryFilters = qeuryFilters
          .gte("distance_osrm", 51)
          .lte("distance_osrm", 100);
        break;
      case "101-150":
        qeuryFilters = qeuryFilters
          .gte("distance_osrm", 101)
          .lte("distance_osrm", 150);
        break;

      default:
        const [minNum, maxNum] = searchParams?.distance.split("-");
        const minN = Number(minNum);
        const maxN = Number(maxNum);

        if (!isNaN(minN)) {
          qeuryFilters = qeuryFilters.gte("distance_osrm", minN);
        }
        if (!isNaN(maxN)) {
          qeuryFilters = qeuryFilters.lte("distance_osrm", maxN);
        }

        qeuryFilters = qeuryFilters
          .gte("distance_osrm", minNum)
          .lte("distance_osrm", maxNum);
        break;
    }
  }

  if (searchParams?.["ride-type"]) {
    const moto_rides = searchParams["ride-type"]?.split(",") ?? [];
    qeuryFilters = qeuryFilters.in("moto_ride_types.moto_ride", moto_rides);
  }

  if (searchParams?.["trip-time"]) {
    switch (searchParams?.["trip-time"]) {
      case "60":
        qeuryFilters = qeuryFilters.lte("trip_time", 60);
        break;
      case "61-120":
        qeuryFilters = qeuryFilters.gte("trip_time", 61).lte("trip_time", 120);
        break;
      case "121-180":
        qeuryFilters = qeuryFilters.gte("trip_time", 120).lte("trip_time", 180);
        break;
      case "181":
        qeuryFilters = qeuryFilters.gte("trip_time", 181);
        break;
    }
  }

  if (searchParams?.surface) {
    const surface = searchParams?.surface.split(",") ?? [];

    let allowed = [...surface];

    if (surface.includes("Mieszana")) {
      allowed.push(SURFACES["Asfalt+Górska"], SURFACES["Asfalt+Mieszane"]);
    }

    allowed = [...new Set(allowed)];

    qeuryFilters = qeuryFilters.in("route_surfaces.surface", allowed);
  }

  qeuryFilters = qeuryFilters.range(startIndex, stopIndex);

  const { data, error, count } = await qeuryFilters;

  if (error) {
    console.error("Supabase error:", error.message);
    return {
      data: [],
      count: 0,
    };
  }

  if (!data) {
    return {
      data: [],
      count: 0,
    };
  }

  return {
    data: (data as RouteInterface[]) ?? [],
    count,
  };
}

export async function fetchLatestAddedRoutes(): Promise<RouteInterface[]> {
  const supabase = await createClient();
  const { data, error }: PostgrestResponse<RouteInterface> = await supabase
    .from("routes")
    .select(
      `
    *,
    moto_ride_types!inner(moto_ride),
    route_difficulties ( * ),
    route_surfaces ( * ),
    route_regions ( * )
    `,
    )
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) throw new Error(error.message);
  return data ?? [];
}
