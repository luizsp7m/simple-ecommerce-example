'use client'
import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);
  // Temporary stock value
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center gap-4">
            {/* Decrease button */}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span>{quantity}</span>
            {/* Increase button */}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
              disabled={quantity >= stock}
            >
              +
            </button>
          </div>
          {/* Stock Info */}
          <div className="text-xs">
            Only <span className="text-orange-500">{stock - quantity} items</span> left!
            <br /> {"Don't"} miss it
          </div>
        </div>
      </div>
      {/* Add to Cart Button */}
      <button
        className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white"
      
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Add;
