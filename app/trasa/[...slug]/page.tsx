import { fetchSingleRoute } from "@/helpers/fetchers/fetchSingleRoute";
import { notFound } from "next/navigation";
import { BreadCrumbTripDetail } from "@/app/trasa/components/BreadCrumbTripDetail";
import TripDetailsTopHeader from "@/app/trasa/components/TripDetailsTopHeader";
import TripDetailsMiddleSection from "@/app/trasa/components/TripDetailsMiddleSection";
import { TripDetailsLocationInfoWrapper } from "@/app/trasa/components/TripDetailsLocationInfoWrapper";
import TripSimilarPlaces from "@/app/trasa/components/TripSimilarPlaces";
import { TripNavigationLinks } from "@/app/trasa/components/TripNavigationLinks";
import { TripChart } from "@/app/trasa/components/TripChart";
import { fetchOpenMeteoElavation } from "@/helpers/fetchers/fetchOpenMeteoElavation";

const Page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  const [id, tripName] = slug;

  if (!id || !tripName) return notFound();

  const normalizedTripName = decodeURIComponent(tripName).replace(/-/g, " ");

  const route = await fetchSingleRoute({
    id,
    tripName: normalizedTripName,
  });

  if (!route) return notFound();

  const distance = {
    distance_osrm: route.distance_osrm,
    duration_osrm: route.duration_osrm,
  };

  const { GPS_meta_lon, GPS_meta_lat, GPS_start_lat, GPS_start_lon } = route;

  const elevationProfile = await fetchOpenMeteoElavation({
    GPS_meta_lat,
    GPS_start_lat,
    GPS_start_lon,
    GPS_meta_lon,
  });

  return (
    <>
      <BreadCrumbTripDetail
        region={route.route_regions}
        tripName={route.trip_name}
      />

      <TripDetailsTopHeader moto_ride_types={route.moto_ride_types} />

      <div className="flex items-center justify-center my-12 gap-7 flex-col relative">
        <h1 className="text-3xl text-center font-extrabold md:text-4xl text-foreground">
          {route.trip_name}
        </h1>
        <p className="text-center text-lg leading-8">{route.storytelling}</p>
      </div>

      <TripDetailsMiddleSection
        difficultyLevel={route.route_difficulties}
        distance={distance}
        db_distance={route.distance}
        duration={route.trip_time}
        surface={route.route_surfaces}
      />

      <div className="my-20">
        <TripChart
          startingCity={route.starting_city}
          endingCity={route.ending_city}
          elevationProfile={elevationProfile}
          moto_ride_types={route.moto_ride_types}
        />
      </div>

      <TripDetailsLocationInfoWrapper
        startLon={route.GPS_start_lon}
        startLat={route.GPS_start_lat}
        metaLon={route.GPS_meta_lon}
        metaLat={route.GPS_meta_lat}
        endCity={route.ending_city}
        startCity={route.starting_city}
        moto_ride_types={route.moto_ride_types}
      />

      <TripNavigationLinks
        GPS_start_lon={route.GPS_start_lon}
        GPS_meta_lat={route.GPS_meta_lat}
        GPS_meta_lot={route.GPS_meta_lon}
        GPS_start_lat={route.GPS_start_lat}
      />

      <TripSimilarPlaces
        region={route.route_regions.region_name}
        diff={route.route_difficulties.difficulty_level}
      />
    </>
  );
};

export default Page;
