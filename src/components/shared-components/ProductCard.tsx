import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

import { Product } from "../../types/Product";
import { currencyFormatter } from "../../utils/currencyFormatter";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
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
  );
}
