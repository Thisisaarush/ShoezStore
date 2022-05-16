import Image from "next/image";
import arrowTilt from "../../public/icons/arrowTilt.svg";

export const Footer = () => {
  return (
    <div className="bg-black text-white p-16 flex flex-col justify-evenly items-center">
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="text-3xl mb-2">{"Don't miss something"}</h1>
        <h2 className="font-orbitron text-3xl">Cool</h2>
      </div>
      <div className="flex gap-20">
        <span className="flex justify-center items-center">
          <p className="mr-1">Instagram</p>
          <Image src={arrowTilt} alt="arrow tilt" width={8} height={8} />
        </span>
        <span className="flex justify-center items-center">
          <p className="mr-1">Twitter</p>
          <Image src={arrowTilt} alt="arrow tilt" width={8} height={8} />
        </span>
        <h2 className="font-orbitron text-xl">Shoez Store</h2>
        <span className="flex justify-center items-center">
          <p className="mr-1">LinkedIn</p>
          <Image src={arrowTilt} alt="arrow tilt" width={8} height={8} />
        </span>
        <span className="flex justify-center items-center">
          <p className="mr-1">GitHub</p>
          <Image src={arrowTilt} alt="arrow tilt" width={8} height={8} />
        </span>
      </div>
    </div>
  );
};
