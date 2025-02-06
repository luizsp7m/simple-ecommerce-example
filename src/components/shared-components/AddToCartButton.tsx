"use client";

import { Product } from "../../types/Product";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  return (
    <button
      onClick={() => alert(`Add product ${product.title} to cart`)}
      className="rounded-xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white"
    >
      Add to Cart
    </button>
  );
}
