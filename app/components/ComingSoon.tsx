import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EmailFormForComingSoonPage from "@/app/coming-soon/components/EmailFormForComingSoonPage";
import Image from "next/image";

export const ComingSoon = () => {
  return (
    <>
      <div className="w-full md:pl-10 z-20 pr-5 pl-5 md:pr-5 lg:pr-30 mx-auto container">
        <div className="flex w-full gap-10 z-30 pt-8 pb-10 h-full flex-col items-end justify-center">
          <h1 className="text-[70px] md:text-right text-left max-w-2xl font-bold">
            Twoja jazda, Twoja ekipa, Twój plan —{" "}
            <span className="relative inline-block after:content-[''] after:absolute after:-translate-y-4 after:rounded-full after:left-0 after:ml-5 after:bottom-0 after:w-[94%] after:h-[8px] after:bg-ring">
              już wkrótce.
            </span>
          </h1>
          <div className="flex flex-col gap-5 max-w-[550px] ml-auto text-left md:text-right w-full">
            <p className="text-lg text-gray-300 text-left lg:text-right">
              Planowanie motocyklowych wypadów jeszcze nigdy nie było tak proste
              — przygotuj się na nową drogę!
            </p>
            <EmailFormForComingSoonPage />
            <div className="flex items-center ml-auto gap-5 justify-end">
              <div className="flex -space-x-2 items-center">
                <Avatar className="border-2 border-ring">
                  <AvatarImage
                    src={`${process.env.NEXT_PUBLIC_HOST_NAME}/assets/coming-soon-images/avatar-face-1.jpg`}
                  />
                  <AvatarFallback>F1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-ring">
                  <AvatarImage
                    src={`${process.env.NEXT_PUBLIC_HOST_NAME}/assets/coming-soon-images/avatar-face-3.jpg`}
                  />
                  <AvatarFallback>F2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-ring">
                  <AvatarImage
                    src={`${process.env.NEXT_PUBLIC_HOST_NAME}/assets/coming-soon-images/avatar-face-2.jpg`}
                  />
                  <AvatarFallback>F3</AvatarFallback>
                </Avatar>
              </div>
              <small className="ml-auto italic">Zapisz się już teraz!</small>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center select-none right-0 absolute z-10 md:inset-0">
        <Image
          alt="Czarne moto"
          width={500}
          height={600}
          className="md:w-[55%] w-full"
          src="/assets/coming-soon-images/coming-soon-moto-black.png"
        />
      </div>
    </>
  );
};
