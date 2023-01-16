import { FastAverageColor } from "fast-average-color";

const fac = new FastAverageColor();

export const getImageAvgColor = async (img: string) => {
  const image = new Image();
  image.crossOrigin = "";
  image.src = img;
  return await fac.getColorAsync(image, { algorithm: "dominant" });
};
