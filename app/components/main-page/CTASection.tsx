import Image from "next/image";
import { SearchTripsButton } from "@/app/components/common/SearchTripsButton";
import Wrapper from "@/app/components/Wrapper";

export const CTASection = () => {
  return (
    <section className="relative mx-4">
      <div
        className="absolute rounded-2xl w-full min-lp:left-1/2 bottom-0 left-0 min-lp:top-1/2 min-lp:-translate-x-1/2 translate-y-20 min-lp:-translate-y-1/2 z-20 bg-gradient-to-r
          from-gray-50
          to-gray-100 min-lp:h-[290px] h-full"
      />
      <Wrapper>
        <div className="flex relative min-lp:flex-row flex-col gap-8 md:gap-0 items-center">
          <Image
            src="/assets/landing-page/cta_section.png"
            alt="Motocykl na górskiej trasie"
            width={600}
            height={300}
            sizes=" (max-width: 640px) 100vw, (max-width: 900px) 75vw, (max-width: 1280px) 60vw, 50vw "
            priority
            className="z-50 min-lp:-translate-y-12 pointer-events-none select-none -translate-x-5 -translate-y-12 min-lp:-translate-x-20"
          />

          <div
            className="
          relative
          z-50
          w-full
          flex
          items-center
          justify-center
          overflow-visible
        "
          >
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-900">
                Odkrywaj{" "}
                <span
                  className="font-instrument pr-[0.08em] bg-gradient-to-r from-indigo-500 to-pink-600
      bg-clip-text text-transparent italic"
                >
                  najlepsze
                </span>{" "}
                trasy
              </h2>

              <p className="mt-4 text-center text-gray-800">
                Zakręty, widoki i drogi stworzone dla motocyklistów.
              </p>
              <div className="mt-5">
                <SearchTripsButton
                  type="button"
                  customStyles="py-3 flex justify-center items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
