import Ads from "@/components/Ads";
import Collection from "@/components/Collection";
import DiscoverNft from "@/components/DiscoverNft";
import FirstCollection from "@/components/FirstCollection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import People from "@/components/People";
import Container from "@/components/ui/container";

const page = () => {
  return (
    <div>
      <Container>
        <HeroSection />
        <Ads />
        <FirstCollection />
        <Collection />
        <People />
        <DiscoverNft />
        <Footer />
      </Container>
    </div>
  );
};

export default page;
