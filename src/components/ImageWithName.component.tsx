import Image from "next/image";

export type ImageComponent = {
  ImageUrl?: any;
  Name?: String;
};

export const ImageWithName = ({ ImageUrl, Name }: ImageComponent) => {
  return (
    <div>
      <div className="w-90 h-110 relative">
        <Image src={ImageUrl} alt="new collection shoes" layout="fill" className="object-cover" />
      </div>
      <p className="text-custom-dark-grey pt-4">{Name}</p>
    </div>
  );
};
