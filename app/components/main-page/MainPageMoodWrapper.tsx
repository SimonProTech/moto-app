import Image from "next/image";
import Wrapper from "@/app/components/Wrapper";
import { MainPageMood } from "@/app/components/main-page/MainPageMood";

export const MainPageMoodWrapper = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        className="absolute z-10 bottom-0 opacity-30 -left-20"
        src="/assets/landing-page/opony-slad.png"
        width={400}
        height={200}
        alt="slad-opon"
      />
      <Wrapper>
        <MainPageMood />
      </Wrapper>
      <Image
        className="absolute top-20 z-10 opacity-30 -right-20"
        src="/assets/landing-page/opony-slad.png"
        width={400}
        height={200}
        alt="slad-opon"
      />
    </div>
  );
};
