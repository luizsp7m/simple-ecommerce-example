import { createContext, ReactNode, useMemo, useState } from "react";
import { Product } from "../types/Product";

interface ProductInCart {
  product: Product;
  quantity: number;
  total: number;
}

interface CartContextProps {
  productsInCart: ProductInCart[];
  total: number;
  handleAddProductToCart: (product: Product, quantity: number) => void;
  handleRemoveProductFromCart: (productId: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [productsInCart, setProductsInCart] = useState<ProductInCart[]>([]);

  function handleAddProductToCart(product: Product, quantity: number) {
    const existingProductIndex = productsInCart.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...productsInCart];
      updatedProducts[existingProductIndex].quantity += quantity;
      updatedProducts[existingProductIndex].total =
        updatedProducts[existingProductIndex].quantity * product.price;

      setProductsInCart(updatedProducts);
    } else {
      const newProductInCart: ProductInCart = {
        product,
        quantity,
        total: product.price,
      };

      setProductsInCart([...productsInCart, newProductInCart]);
    }
  }

  function handleRemoveProductFromCart(productId: number) {
    const existingProductIndex = productsInCart.findIndex(
      (item) => item.product.id === productId
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...productsInCart];
      updatedProducts.splice(existingProductIndex, 1);

      setProductsInCart(updatedProducts);
    }
  }

  const total = useMemo(() => {
    return productsInCart.reduce((total, item) => total + item.total, 0);
  }, [productsInCart]);

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        total,
        handleAddProductToCart,
        handleRemoveProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
