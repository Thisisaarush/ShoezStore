import Image from "next/image";

export const HeroImage = ({ ImageUrl }: String | any) => {
  return (
    <div className="w-90 h-128 relative">
      <Image
        src={ImageUrl}
        alt="heroImage"
        layout="fill"
        className="object-cover"
      />
      <span className="w-90 h-128 border border-black absolute -top-4 -left-4 -z-10"></span>
    </div>
  );
};
