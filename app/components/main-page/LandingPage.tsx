import React from "react";
import Link from "next/link";
import SliderWrapper from "./SliderWrapper";
import { SearchTripsButton } from "@/app/components/common/SearchTripsButton";

const LandingPage = () => {
  return (
    <section className="z-30 h-[700px] min-lp:h-[800px] lg:pt-36 sm:pt-32 pt-20 relative w-full">
      <div className="lg:max-w-2xl  w-full px-10 text-my-white flex flex-col gap-10">
        <h1 className="font-bold lg:text-left text-center text-[55px]">
          Nie musisz jechać daleko, żeby poczuć wolność.
        </h1>
        <div className="lg:max-w-sm w-full">
          <h2 className="text-xl lg:text-left text-center text-gray-200 leading-10">
            Odkrywaj lokalne trasy, spoty i klimat. Zbieraj momenty, nie tylko
            kilometry.
          </h2>
        </div>

        <div className="flex items-center lg:max-w w-full lg:flex-row flex-col gap-4">
          <SearchTripsButton customStyles="w-[60%] lg:w-max justify-center" />
          <Link
            href="/coming-soon"
            className="py-2 px-6 lg:block hidden border-my-white border-1 rounded-full duration-500 hover:scale-95 transition-all"
          >
            Dołącz do startu
          </Link>
        </div>
      </div>
      <div className="ml-auto absolute right-10 xl:bottom-10 bottom-0  min-lp:block hidden w-max">
        <SliderWrapper />
      </div>
    </section>
  );
};

export default LandingPage;
