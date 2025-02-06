import Link from "next/link";
import Image from "next/image";
import SectionContainer from "./SectionContainer";

import { FAKE_API_BASE_URL } from "../constants/AppConfig";
import { Product } from "../types/Product";
import { currencyFormatter } from "../utils/currencyFormatter";
import { AddToCartButton } from "./AddToCartButton";

async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${FAKE_API_BASE_URL}/products?limit=8`);
  const data = await response.json();

  return data;
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <SectionContainer>
      <h1 className="text-2xl font-semibold tracking-wide">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded">
            <div className="relative h-[256px] m-4">
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  alt="Product 1"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </div>

            <div className="p-4 border-t">
              <div className="flex justify-between gap-2 items-center truncate">
                <span className="font-medium truncate text-gray-500">
                  {product.title}
                </span>

                <span className="font-semibold text-gray-600">
                  {currencyFormatter(product.price)}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <span className="font-medium text-gray-500">Quantity: 1</span>
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
