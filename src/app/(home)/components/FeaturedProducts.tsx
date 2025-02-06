import SectionContainer from "../../../components/shared-components/SectionContainer";
import Heading from "../../../components/shared-components/Heading";
import ProductList from "../../../components/shared-components/ProductList";

import { FAKE_API_BASE_URL } from "../../../constants/AppConfig";
import { Product } from "../../../types/Product";

async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${FAKE_API_BASE_URL}/products?limit=5`);
  const data = await response.json();

  return data;
}

export default async function FeaturedProducts() {
  const products = await getProducts();

  return (
    <SectionContainer className="flex flex-col gap-4">
      <Heading title="Featured Products" />
      <ProductList products={products} />
    </SectionContainer>
  );
}
