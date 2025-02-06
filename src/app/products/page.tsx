import Heading from "../../components/shared-components/Heading";
import ProductList from "../../components/shared-components/ProductList";
import SectionContainer from "../../components/shared-components/SectionContainer";
import { FAKE_API_BASE_URL } from "../../constants/AppConfig";
import { Product } from "../../types/Product";

import Filter from "./components/Filter";
import Hero from "./components/Hero";

async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${FAKE_API_BASE_URL}/products?limit=8`);
  const data = await response.json();

  return data;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <Hero />

      <div className="space-y-6 my-6">
        <Filter />

        <SectionContainer className="flex flex-col gap-4">
          <Heading title="Featured Products" />
          <ProductList products={products} />
        </SectionContainer>
      </div>
    </div>
  );
}
