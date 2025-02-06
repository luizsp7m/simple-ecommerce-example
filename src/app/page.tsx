import { Suspense } from "react";

import Filter from "./components/Filter";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";

export default function Home() {
  return (
    <div>
      <Hero />
      <Filter />
      <Slider />

      <Suspense fallback={<span>Loading...</span>}>
        <ProductList />
      </Suspense>

      <Suspense fallback={<span>Loading...</span>}>
        <CategoryList />
      </Suspense>
    </div>
  );
}
