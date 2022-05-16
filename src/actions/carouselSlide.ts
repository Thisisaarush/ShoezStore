import {
  CAROUSEL_SLIDE_LEFT,
  CAROUSEL_SLIDE_RIGHT,
} from "../constants/carousel";

export const carouselSlideRight = () => ({
  type: CAROUSEL_SLIDE_RIGHT,
});

export const carouselSlideLeft = () => ({
  type: CAROUSEL_SLIDE_LEFT,
});
