import { RouteInterface } from "@/types/app";
import { createClient } from "@/utils/supabase/server";
import { PostgrestResponse } from "@supabase/supabase-js";

export async function fetchSimilarRoutes({
  region_name,
  difficulty,
}: {
  region_name: string;
  difficulty: string;
}): Promise<RouteInterface[] | []> {
  const supabase = await createClient();

  if (!region_name || !difficulty) {
    return [];
  }

  const { data, error }: PostgrestResponse<RouteInterface> = await supabase
    .from("routes")
    .select(
      `
    *,
    route_difficulties!inner(*),
    route_surfaces!inner(*),
    route_regions!inner(*),
    moto_ride_types!inner(*)
    `,
    )
    .ilike("route_regions.region_name", region_name.toString())
    .ilike("route_difficulties.difficulty_level", difficulty.toString());

  // error code for no data
  if (error?.code === "PGRST116") {
    return [];
  }

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}
