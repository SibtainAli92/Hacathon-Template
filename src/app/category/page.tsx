"use client";

import { useState } from "react";
import ClothesCard from "@/components/Shart_Card_01";

export default function Category() {
  const [isPriceOpen, setPriceOpen] = useState(true);
  const [isColorOpen, setColorOpen] = useState(true);
  const [isSizeOpen, setSizeOpen] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Filters Section */}
      <aside className="w-full lg:w-1/4 bg-white border rounded-lg p-6 lg:ml-10">
        <h2 className="text-xl font-bold mb-6">Filters</h2>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map(
            (category) => (
              <div
                key={category}
                className="flex justify-between items-center py-2 cursor-pointer text-gray-700 hover:text-black"
              >
                <span>{category}</span>
                <i className="fas fa-chevron-right text-gray-500"></i>
              </div>
            )
          )}
        </div>

        {/* Price Filter */}
        <div className="mb-8">
          <h3
            className="text-lg font-semibold mb-4 flex justify-between items-center cursor-pointer"
            onClick={() => setPriceOpen(!isPriceOpen)}
          >
            Price
            <i
              className={`fas fa-chevron-${
                isPriceOpen ? "up" : "down"
              } text-gray-500`}
            ></i>
          </h3>
          {isPriceOpen && (
            <div>
              <input
                type="range"
                className="w-full"
                min="50"
                max="200"
                defaultValue="100"
                step="10"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>
          )}
        </div>

        {/* Colors Filter */}
        <div className="mb-8">
          <h3
            className="text-lg font-semibold mb-4 flex justify-between items-center cursor-pointer"
            onClick={() => setColorOpen(!isColorOpen)}
          >
            Colors
            <i
              className={`fas fa-chevron-${
                isColorOpen ? "up" : "down"
              } text-gray-500`}
            ></i>
          </h3>
          {isColorOpen && (
            <div className="grid grid-cols-5 gap-2">
              {[
                "#FF0000",
                "#0000FF",
                "#008000",
                "#FFFF00",
                "#800080",
                "#FFA500",
                "#FFC0CB",
                "#000000",
                "#FFFFFF",
                "#808080",
              ].map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          )}
        </div>

        {/* Size Filter */}
        <div className="mb-8">
          <h3
            className="text-lg font-semibold mb-4 flex justify-between items-center cursor-pointer"
            onClick={() => setSizeOpen(!isSizeOpen)}
          >
            Size
            <i
              className={`fas fa-chevron-${
                isSizeOpen ? "up" : "down"
              } text-gray-500`}
            ></i>
          </h3>
          {isSizeOpen && (
            <div className="flex flex-wrap gap-2">
              {[
                "XX-Small",
                "X-Small",
                "Small",
                "Medium",
                "Large",
                "X-Large",
                "XX-Large",
              ].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 text-sm border rounded-full hover:bg-black hover:text-white bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Apply Filter Button */}
        <div className="text-center">
          <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800">
            Apply Filter
          </button>
        </div>
      </aside>

      {/* Products Section */}
      <main className="flex-grow px-6 lg:px-12 py-8 ml-7">
        <h1 className="text-3xl font-extrabold mb-6">Casual</h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ClothesCard
            image="/pink.png"
            name="Gradient Graphic T-Shirt"
            ratingImage="/3.5.png"
            price="$145"
          />
          <ClothesCard
            image="/purple.png"
            name="Polo With Tipping Details"
            ratingImage="/45.5.png"
            price="$180"
          />
          <ClothesCard
            image="/white.png"
            name="Black Striped T-Shirt"
            ratingImage="/5.0.png"
            price="$210"
            orignalPrice="$150"
            discountCopen="-30%"
          />
          <ClothesCard
            image="/pent.png"
            name="Skinny Fit Jeans"
            ratingImage="/3.5.png"
            price="$240"
            orignalPrice="$260"
            discountCopen="-20%"
          />
          <ClothesCard
            image="/shirt.png"
            name="Chequered Shirt"
            ratingImage="/45.5.png"
            price="$180"
          />
          <ClothesCard
            image="/orange.png"
            name="Sleeve Striped T-shirt"
            ratingImage="/45.5.png"
            price="$130"
            orignalPrice="$160"
            discountCopen="-30%"
          />
          <ClothesCard
            image="/green.png"
            name="Vertical Striped Shirt"
            ratingImage="/5.0.png"
            price="$212"
            orignalPrice="$232"
            discountCopen="-20%"
          />
          <ClothesCard
            image="/orange (2).png"
            name="Courage Graphic T-Shirt"
            ratingImage="/4.0.png"
            price="$145"
          />
          <ClothesCard
            image="/short.png"
            name="Loose Fit Bermuda Short"
            ratingImage="/3.0.png"
            price="$80"
          />
        </div>
      </main>
    </div>
  );
}
