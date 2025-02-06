"use client";

import Image from "next/image";
import { useCart } from "../../hooks/useCart";
import { currencyFormatter } from "../../utils/currencyFormatter";

const CartModal = () => {
  const { productsInCart, total, handleRemoveProductFromCart } = useCart();

  const hasProductsInCart = productsInCart.length > 0;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-4 z-10">
      {!hasProductsInCart ? (
        <div className="flex justify-between items-center">
          <div className="text-lg">Cart is empty</div>
        </div>
      ) : (
        // List section\
        <>
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* Cart Items */}
            {productsInCart.map((productInCart, index) => (
              <div key={index} className="flex gap-4">
                {/* Product Image */}
                <Image
                  src={productInCart.product.image}
                  alt="cart"
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />

                {/* Product Details */}
                <div className="flex flex-col justify-between w-full gap-4">
                  {/* Title, Price, and Description */}
                  <div>
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold text-gray-800 max-w-[256px] truncate">
                        {productInCart.product.title}
                      </h3>
                      <div className="p-1 bg-gray-50 rounded-sm text-sm font-medium text-gray-600">
                        {currencyFormatter(productInCart.product.price)}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">Available</div>
                  </div>

                  {/* Quantity and Remove Button */}
                  <div className="flex items-center justify-between text-sm text-gray-800">
                    <span className="font-medium">
                      Qty: {productInCart.quantity}
                    </span>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() =>
                        handleRemoveProductFromCart(productInCart.product.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="flex flex-col items-end gap-2 mt-4 border-t pt-4 font-semibold text-gray-800">
            <div className="flex justify-between w-full text-lg">
              <span>Total:</span>
              <span>{currencyFormatter(total)}</span>
            </div>
            {/* Shipping and Taxes */}
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="flex justify-between text-sm gap-2">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
