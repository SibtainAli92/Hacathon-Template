"use client";
import { useState } from "react";

export default function Brand() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="p-4 md:p-8 mx-auto w-fit">
      {/* first page start */}
      <div className="text-sm text-gray-900 mb-6 ">
        <span className="cursor-pointer hover:underline">Home</span> /{" "}
        <span className="font-semibold">Cart</span>
      </div>

      {/* Main Content */}
      <h1 className="text-2xl md:text-3xl font-extrabold mb-8">YOUR CART</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="col-span-2 space-y-6">
          {[
            // Mock data
            {
              name: "Gradient Graphic T-shirt",
              size: "Large",
              color: "White",
              price: 145,
              image: "/pink.png",
            },
            {
              name: "Checkered Shirt",
              size: "Medium",
              color: "Red",
              price: 180,
              image: "/shirt.png",
            },
            {
              name: "Skinny Fit Jeans",
              size: "Large",
              color: "Blue",
              price: 240,
              image: "/pent.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl shadow-md p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg"
              />
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-900 text-sm">
                  Size: {item.size} <br /> Color: {item.color}
                </p>
                <p className="mt-2 font-semibold">${item.price}</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="h-10 w-[120px] bg-[#F0F0F0] gap-4 border-[#9F9F9F] text-base font-medium rounded-full flex items-center justify-between px-3">
                  <button
                    type="button"
                    onClick={decrement}
                    className="text-3xl"
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button
                    type="button"
                    onClick={increment}
                    className="text-3xl"
                  >
                    +
                  </button>
                </span>
              </div>
              <button className="text-red-500 hover:text-red-700 mt-4 sm:mt-0">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 space-y-6">
          <h2 className="text-2xl font-semibold">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">$565</span>
            </div>
            <div className="flex justify-between">
              <span>Discount (-20%)</span>
              <span className="text-red-500 font-semibold">-$113</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-semibold">$15</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$467</span>
            </div>
          </div>

          {/* Promo Code Input */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 px-4 py-2 border rounded-full"
            />
            <button className="bg-black text-white px-4 py-2 rounded-full w-full sm:w-auto">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800">
            Go to Checkout →
          </button>
        </div>
      </div>
      {/* first page end */}
    </div>
  );
}
