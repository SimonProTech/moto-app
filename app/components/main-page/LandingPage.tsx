import React from "react";
import Link from "next/link";
import SliderWrapper from "./SliderWrapper";

const LandingPage = () => {
  return (
    <section className="h-max z-30 pt-36 relative w-full">
      <div className="max-w-2xl text-my-white flex flex-col gap-10">
        <h1 className="font-bold text-[55px]">
          Nie musisz jechać daleko, żeby poczuć wolność.
        </h1>
        <div className="max-w-sm">
          <h2 className="text-xl text-gray-200 leading-10">
            Odkrywaj lokalne trasy, spoty i klimat. Zbieraj momenty, nie tylko
            kilometry.
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/trasy"
            className="py-2 hover:scale-95 font-medium transition-all px-6 rounded-full bg-ring duration-500 text-foreground"
          >
            Przeglądaj trasy
          </Link>
          <Link
            href="/coming-soon"
            className="py-2 px-6 border-my-white border-1 rounded-full duration-500 hover:scale-95 transition-all"
          >
            Dołącz do startu
          </Link>
        </div>
      </div>
      <div className="ml-auto w-max block">
        <SliderWrapper />
      </div>
    </section>
  );
};

export default LandingPage;
