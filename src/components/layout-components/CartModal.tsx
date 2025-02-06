
'use client'
import Image from "next/image"
const CartModal = () => {


  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-4 z-10">CartModal
    {!cartItems ? ( 
      <div className="flex justify-between items-center">
        <div className="text-lg">Cart is empty</div>
        
      </div>
    ) : (
      // List section\
      <>
      <h2 className="text-lg font-semibold">Shopping Cart</h2>
      <div className="flex flex-col gap-8">
        {/* Cart Items */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-4">
            {/* Product Image */}
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg"
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
                  <h3 className="font-semibold text-gray-800">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm text-sm font-medium text-gray-600">
                    $49
                  </div>
                </div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
    
              {/* Quantity and Remove Button */}
              <div className="flex items-center justify-between text-sm text-gray-800">
                <span className="font-medium">Qty: 2</span>
                <button className="text-red-500 hover:underline">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      {/* Total Section */}
      <div className="flex flex-col items-end gap-2 mt-4 border-t pt-4 font-semibold text-gray-800">
        <div className="flex justify-between w-full text-lg">
          <span>Total:</span>
          <span>$98</span>
        </div>
        <div className="flex justify-between w-full">
          <span>Subtotal:</span>
          <span>$49</span>
        </div>
        {/* Shipping and Taxes */}
        <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
            
              >
                Checkout
              </button>
</div>

      </div>
    </>
    
    )}
    </div>
 
  )
}

export default CartModal
