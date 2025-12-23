import { MOTO_RIDE_STYLE } from "@/types/app";
import { createClient } from "@/utils/supabase/server";
import { PostgrestResponse } from "@supabase/supabase-js";

export async function fetchMotoStyle(): Promise<MOTO_RIDE_STYLE[]> {
  const supabase = await createClient();
  const { data, error }: PostgrestResponse<MOTO_RIDE_STYLE> = await supabase
    .from("moto_ride_types")
    .select("*")
    .order("moto_ride");

  if (error) throw new Error(error.message);
  return data ?? [];
}
