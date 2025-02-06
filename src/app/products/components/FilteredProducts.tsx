import SectionContainer from "../../../components/shared-components/SectionContainer";
import Heading from "../../../components/shared-components/Heading";
import ProductList from "../../../components/shared-components/ProductList";

import { FAKE_API_BASE_URL } from "../../../constants/AppConfig";
import { Product } from "../../../types/Product";

async function getProducts({
  category,
  sortBy,
}: {
  category?: string;
  sortBy?: string;
}): Promise<Product[]> {
  let FETCH_URL_CUSTOM = `${FAKE_API_BASE_URL}/products`;

  if (category) {
    FETCH_URL_CUSTOM += `/category/${category}`;
  }

  if (sortBy) {
    FETCH_URL_CUSTOM += `?sort=${sortBy}`;
  }

  const response = await fetch(FETCH_URL_CUSTOM);
  const data = await response.json();

  return data;
}

interface FilteredProductsProps {
  searchParams?: {
    category?: string;
    sortBy?: string;
  };
}

export default async function FilteredProducts({
  searchParams,
}: FilteredProductsProps) {
  const products = await getProducts({
    category: searchParams?.category,
    sortBy: searchParams?.sortBy,
  });

  console.log(searchParams);

  return (
    <SectionContainer className="flex flex-col gap-4">
      <Heading title="Featured Products" />
      <ProductList products={products} />
    </SectionContainer>
  );
}
