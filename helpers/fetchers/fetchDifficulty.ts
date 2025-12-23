import { ROUTE_DIFFICULTIES } from "@/types/app";
import { createClient } from "@/utils/supabase/server";
import { PostgrestResponse } from "@supabase/supabase-js";

export async function fetchDifficulties(): Promise<ROUTE_DIFFICULTIES[]> {
  const supabase = await createClient();
  const { data, error }: PostgrestResponse<ROUTE_DIFFICULTIES> = await supabase
    .from("route_difficulties")
    .select("*");

  if (error) throw new Error(error.message);
  return data ?? [];
}
