import Image from "next/image";
import { SearchTripsButton } from "@/app/components/common/SearchTripsButton";
import Wrapper from "@/app/components/Wrapper";

export const CTASection = () => {
  return (
    <section className="relative mt-44 px-4">
      <div className="relative overflow-visible">
        <Wrapper>
          <Image
            src="/assets/landing-page/cta_section.png"
            alt="Motocykl na górskiej trasie"
            width={700}
            height={500}
            priority
            className="
            absolute
            -left-56
            -top-32
            z-20
            object-contain
            drop-shadow-2xl
          "
          />
        </Wrapper>

        <div
          className="
          relative
          z-10
          h-[320px]
          w-[70%]
          ml-auto
          rounded-2xl
          bg-gradient-to-r
          from-gray-50
          to-gray-100
          flex
          items-center
          justify-center
          overflow-visible
        "
        >
          <div className="text-right">
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
              <SearchTripsButton customStyles="py-3 flex justify-center items-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
