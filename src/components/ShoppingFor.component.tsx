import { ImageWithName } from "./ImageWithName.component";
import Men from "../../public/images/men.webp";
import Women from "../../public/images/women.webp";
import Kids from "../../public/images/kids.webp";

export const ShoppingFor = () => {
  return (
    <div className="flex flex-col w-4/5 mx-auto mb-40">
      <h1 className="font-medium text-4xl mb-20">Who Are You Shopping For</h1>
      <div className="flex justify-between items-center">
        <ImageWithName ImageUrl={Men} Name="Men's" />
        <ImageWithName ImageUrl={Women} Name="Women's" />
        <ImageWithName ImageUrl={Kids} Name="Kids'" />
      </div>
    </div>
  );
};
