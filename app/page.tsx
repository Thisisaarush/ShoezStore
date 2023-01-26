//components
import {
  Carousel,
  Recommended,
  Giftings,
  Trending,
  ShoppingFor,
} from "@components";

export default function Home() {
  return (
    <main>
      <Carousel />
      <Recommended />
      <Giftings />
      <Trending />
      <ShoppingFor />
    </main>
  );
}
