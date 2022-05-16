import { ImageWithName } from "./ImageWithName.component";

// images
import new1 from "../../public/images/new1.png";
import new2 from "../../public/images/new2.png";
import new3 from "../../public/images/new3.png";

export const NewCollection = () => {
  return (
    <div className="flex flex-col py-20 px-36 mb-28">
      <h1 className="text-4xl font-medium">New Collection</h1>
      <div className="flex justify-between items-center">
        <ImageWithName ImageUrl={new1} Name="New Balance X-90" />
        <span className="pt-36">
          <ImageWithName ImageUrl={new2} Name="Conver Zone" />
        </span>
        <ImageWithName ImageUrl={new3} Name="Nike Air Max 2" />
      </div>
    </div>
  );
};
