"use client";

import Collection from "@/components/Collection";
import DiscoverNft from "@/components/DiscoverNft";
import FirstCollection from "@/components/FirstCollection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import NFTart from "@/components/NFTart";
import SellyourNFTS from "@/components/SellyourNFTS";

const page = () => {
  return (
    <div>
      <HeroSection />
      <NFTart />
      <FirstCollection />
      <Collection />
      <SellyourNFTS />
      <DiscoverNft />
      <Footer />
    </div>
  );
};

export default page;
