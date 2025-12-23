import { ROUTE_REGIONS } from "@/types/app";
import { createClient } from "@/utils/supabase/server";
import { PostgrestResponse } from "@supabase/supabase-js";

export async function fetchRegions(): Promise<ROUTE_REGIONS[]> {
  const supabase = await createClient();
  const { data, error }: PostgrestResponse<ROUTE_REGIONS> = await supabase
    .from("route_regions")
    .select("*");

  if (error) throw new Error(error.message);
  return data ?? [];
}
