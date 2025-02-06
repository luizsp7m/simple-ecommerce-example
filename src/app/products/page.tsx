import { Suspense } from "react";

import Filter from "./components/Filter";
import FilteredProducts from "./components/FilteredProducts";
import Hero from "./components/Hero";
import FilteredProductsLoading from "./components/FilteredProductsLoading";

export default async function ProductsPage(props: {
  searchParams?: Promise<{
    category?: string;
    sortBy?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div>
      <Hero />

      <div className="space-y-6 my-6">
        <Filter
          selectedCategory={searchParams?.category}
          selectedSortBy={searchParams?.sortBy}
        />

        <Suspense
          key={JSON.stringify(searchParams)}
          fallback={<FilteredProductsLoading />}
        >
          <FilteredProducts searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
