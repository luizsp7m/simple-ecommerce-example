"use client";

import { ReactNode } from "react";
import { CartContextProvider } from "../../contexts/CartContext";

export function CartProvider({ children }: { children: ReactNode }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
