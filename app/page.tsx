import Wrapper from "@/app/components/Wrapper";
import ImageSlider from "@/app/components/ImageSlider";
import LandingPage from "@/app/components/main-page/LandingPage";
import LandingPageMarquee from "@/app/components/main-page/LandingPageMarquee";
import FeatureGrid from "@/app/components/main-page/FeatureGrid";
import LatestAddedTrips from "@/app/components/main-page/LatestAddedTrips";
import { FAQ } from "@/app/components/main-page/Faq";
import { MainPageMoodWrapper } from "@/app/components/main-page/MainPageMoodWrapper";
import { CTASection } from "@/app/components/main-page/CTASection";

export default function Home() {
  return (
    <main>
      <ImageSlider />
      <Wrapper>
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
    </main>
  );
}
