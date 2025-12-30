import Wrapper from "@/app/components/Wrapper";
import ImageSlider from "@/app/components/ImageSlider";
import Header from "@/app/components/header/Header";
import LandingPage from "@/app/components/main-page/LandingPage";
import LandingPageMarquee from "@/app/components/main-page/LandingPageMarquee";
import FeatureGrid from "@/app/components/main-page/FeatureGrid";
import LatestAddedTrips from "@/app/components/main-page/LatestAddedTrips";

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
    </>
  );
}
