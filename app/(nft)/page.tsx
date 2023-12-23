import Ads from "@/components/Ads";
import Collection from "@/components/Collection";
import DiscoverNft from "@/components/DiscoverNft";
import FirstCollection from "@/components/FirstCollection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import People from "@/components/People";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import OutlineButon from "@/components/ui/outlineButon";
import PrimaryButton from "@/components/ui/primaryButton";

const page = () => {
  return (
    <div>
      <Container>
        <Hero />
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
