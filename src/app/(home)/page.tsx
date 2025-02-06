import Slider from "./components/Slider";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoryList from "./components/CategoryList";

export default function Home() {
  return (
    <div>
      <Slider />

      <div className="my-8 space-y-6">
        <FeaturedProducts />
        <CategoryList />
      </div>
    </div>
  );
}
