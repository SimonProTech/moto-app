import Image from "next/image";
import Link from "next/link";

interface TripNavigationLinksProps {
  GPS_meta_lat: number;
  GPS_meta_lot: number;
  GPS_start_lat: number;
  GPS_start_lon: number;
}

export const TripNavigationLinks = ({
  GPS_meta_lot,
  GPS_meta_lat,
  GPS_start_lat,
  GPS_start_lon,
}: TripNavigationLinksProps) => {
  const wazeUrl = `https://waze.com/ul?ll=${GPS_meta_lat},${GPS_meta_lot}&from=${GPS_start_lat},${GPS_start_lon}&navigate=yes`;
  const googleUrl = `https://www.google.com/maps/dir/?api=1&origin=${GPS_start_lat},${GPS_start_lon}&destination=${GPS_meta_lat},${GPS_meta_lot}`;
  const appleUrl = `http://maps.apple.com/?saddr=${GPS_start_lat},${GPS_start_lon}&daddr=${GPS_meta_lat},${GPS_meta_lot}`;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      {/* Waze */}
      <Link
        href={wazeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center md:justify-start justify-center md:w-max w-full gap-3 px-5 py-2 rounded-full bg-[#D9F3FF] text-[#005A7A] shadow-sm hover:shadow-md transition"
      >
        <Image
          src="/assets/navigateIcons/waze_icon.svg"
          alt="Waze"
          width={28}
          height={28}
        />
        <span className="text-sm font-semibold">Otwórz w Waze</span>
      </Link>

      {/* Google Maps */}
      <Link
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center md:justify-start justify-center md:w-max w-full gap-3 px-5 py-2 rounded-full bg-[#E3F7E8] text-[#1B6E2A] shadow-sm hover:shadow-md transition"
      >
        <Image
          src="/assets/navigateIcons/google_map_icon.svg"
          alt="Google Maps"
          width={24}
          height={24}
        />
        <span className="text-sm font-semibold">Otwórz w Google Maps</span>
      </Link>

      {/* Apple Maps */}
      <Link
        href={appleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-5 py-2 md:justify-start justify-center md:w-max w-full rounded-full bg-[#F2F2F7] text-[#1C1C1E] shadow-sm hover:shadow-md transition"
      >
        <Image
          src="/assets/navigateIcons/apple_map_icon.svg"
          alt="Apple Maps"
          width={26}
          height={26}
        />
        <span className="text-sm font-semibold">Otwórz w Apple Maps</span>
      </Link>
    </div>
  );
};
