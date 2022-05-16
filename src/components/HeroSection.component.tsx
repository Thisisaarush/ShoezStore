import { HeroImage } from "./HeroImage.component";
import { Button } from "./Button.component";

// images
import heroImage from "../../public/images/hero.jpg";

export const HeroSection = () => {
  return (
    <div className="flex justify-evenly items-center px-20 py-32">
      <HeroImage ImageUrl={heroImage} />

      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="w-4/5 text-6xl font-medium mb-14">
          Discover Fashion For Your Sports Needs
        </h1>
        <div className="mb-24">
          <p className="uppercase font-bold">Protection, Reimagined</p>
          <p>Introducing New Z3 Pro Design for More Comfort and Protection</p>
        </div>
        <Button title="Shop Now" />
      </div>
    </div>
  );
};
