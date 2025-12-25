import { RouteInterface } from "@/types/app";
import { createClient } from "@/utils/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export async function fetchSingleRoute({
  id,
  tripName,
}: {
  id: string;
  tripName: string;
}): Promise<RouteInterface | null> {
  const supabase = await createClient();

  if (!id || !tripName) {
    return null;
  }

  const { data, error }: PostgrestSingleResponse<RouteInterface> =
    await supabase
      .from("routes")
      .select(
        `
        *,
        route_regions!inner(region_name),
        moto_ride_types!inner(moto_ride),
        route_difficulties!inner(difficulty_level),
        route_surfaces!inner(surface)
      `,
      )
      .eq("u_id", id)
      .ilike("trip_name", tripName)
      .limit(1)
      .single();

  // error code for no data
  if (error?.code === "PGRST116") {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return data ?? {};
}
