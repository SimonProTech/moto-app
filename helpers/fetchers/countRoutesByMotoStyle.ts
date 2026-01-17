import { createClient } from "@/utils/supabase/server";
import { MOTO_RIDE } from "@/types/app";

interface CountRoutesByMotoStyleProps {
  moto_ride: MOTO_RIDE;
  countTotal: number;
  id: number;
}

export const countRoutesByMotoStyle = async (): Promise<
  CountRoutesByMotoStyleProps[] | null
> => {
  const supabase = await createClient();

  try {
    // 1. Pobierz typy jazdy
    const { data: types, error: typesError } = await supabase
      .from("moto_ride_types")
      .select("id, moto_ride");

    if (typesError) throw typesError;

    // 2. Pobierz trasy
    const { data: routes, error: routesError } = await supabase
      .from("routes")
      .select("trip_ride_type_id");

    if (routesError) throw routesError;

    // 3. Policz
    const result: CountRoutesByMotoStyleProps[] = types.map((type) => {
      const countTotal = routes.filter(
        (r) => r.trip_ride_type_id === type.id,
      ).length;

      return {
        id: type.id,
        moto_ride: type.moto_ride as MOTO_RIDE,
        countTotal,
      };
    });

    return result;
  } catch (err) {
    console.error("countRoutesByMotoStyle error:", err);
    return null;
  }
};
