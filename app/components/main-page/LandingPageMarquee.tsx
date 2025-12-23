import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const INFO_MARQUEE = [
  { id: 1, text: "Odkrywaj trasy w całej Polsce" },
  { id: 2, text: "Ponad 200+ gotowych tras" },
  {
    id: 3,
    text: "Warszawa • Kraków • Wrocław • Gdańsk • Poznań • i wiele innych",
  },
  { id: 4, text: "Twoja ekipa na szosie" },
  { id: 5, text: "Od Bałtyku po Bieszczady — jedź gdzie chcesz" },
  { id: 6, text: "Trasy miejskie, górskie i nad jeziorami" },
  { id: 7, text: "Zamek, jezioro, serpentyna — wybierz swój klimat" },
  { id: 8, text: "Mapa tras rośnie z każdą jazdą" },
];

const LandingPageMarquee = () => {
  return (
    <section className="pt-44">
      <Marquee
        autoFill
        speed={50}
        gradientColor="#c7ffd8"
        className="z-40 h-24 bg-ring rounded-full border-2 border-black cursor-default font-medium w-full text-foreground"
      >
        <div className="flex items-center whitespace-nowrap text-[15px] md:text-base text-black/80">
          {INFO_MARQUEE.map((item) => (
            <React.Fragment key={item.id}>
              <span
                className="
                flex-none
                text-center
                mx-6
                px-5 py-1.5
                rounded-full
                bg-white/10
                border
                text-black
                border-gray-700
                text-sm md:text-base
                font-light
                shadow-md
                transition-colors
                duration-300
              "
              >
                {item.text}
              </span>
              {item.id % 2 === 0 ? (
                <Image
                  alt="Motocrew"
                  width={40}
                  height={50}
                  className="mx-4 pointer-events-none select-none"
                  src="/assets/landing-page/moto-marq.svg"
                />
              ) : (
                <Image
                  alt="Motocrew"
                  width={40}
                  height={50}
                  className="mx-4 pointer-events-none select-none"
                  src="/assets/landing-page/trip-marquee.svg"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default LandingPageMarquee;
