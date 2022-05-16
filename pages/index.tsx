import type { NextPage } from "next";
import { Footer } from "../src/components/Footer.component";
import { HeroSection } from "../src/components/HeroSection.component";
import { NavigationDesktop } from "../src/components/NavigationDesktop.component";
import { NewCollection } from "../src/components/NewCollection.component";
import { PopularNow } from "../src/components/PopularNow.component";
import { ShoppingFor } from "../src/components/ShoppingFor.component";

const Home: NextPage = () => {
  return (
    <>
      <NavigationDesktop />
      <HeroSection />
      <NewCollection />
      <PopularNow />
      <ShoppingFor />
      <Footer />
    </>
  );
};

export default Home;
