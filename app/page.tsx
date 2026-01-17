import Wrapper from "@/app/components/Wrapper";
import ImageSlider from "@/app/components/ImageSlider";
import Header from "@/app/components/header/Header";
import LandingPage from "@/app/components/main-page/LandingPage";
import LandingPageMarquee from "@/app/components/main-page/LandingPageMarquee";
import FeatureGrid from "@/app/components/main-page/FeatureGrid";
import LatestAddedTrips from "@/app/components/main-page/LatestAddedTrips";
import { MainPageMood } from "@/app/components/main-page/MainPageMood";
import { FAQ } from "@/app/components/main-page/Faq";
import Image from "next/image";
import { MainPageMoodWrapper } from "@/app/components/main-page/MainPageMoodWrapper";
import { CTASection } from "@/app/components/main-page/CTASection";
import { Footer } from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <Wrapper>
        <Header />
        <LandingPage />
      </Wrapper>
      <LandingPageMarquee />
      <Wrapper>
        <FeatureGrid />
        <LatestAddedTrips />
      </Wrapper>
      <MainPageMoodWrapper />
      <Wrapper>
        <FAQ />
      </Wrapper>
      <CTASection />
      <div className="rounded-t-2xl mx-4 mt-32 bg-gray-50">
        <Wrapper>
          <Footer />
        </Wrapper>
        <Wrapper>
          <div className="relative h-[150px] flex justify-center items-center overflow-hidden">
            <span
              className="bg-gradient-to-r absolute -top-14 from-indigo-50 via-indigo-100 to-indigo-200
           bg-clip-text text-transparent
           text-[14.2rem] font-semibold"
            >
              MotoCrew
            </span>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
