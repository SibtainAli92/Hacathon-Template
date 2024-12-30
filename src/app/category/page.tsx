"use client";

import { useState } from "react";
import ClothesCard from "@/components/Shart_Card_01";

export default function Category() {
  const [isPriceOpen, setPriceOpen] = useState(true);
  const [isColorOpen, setColorOpen] = useState(true);
  const [isSizeOpen, setSizeOpen] = useState(true);
  const [isStyleOpen, setStyleOpen] = useState(true);

  return (
    <div>
      <div className="w-full sm:w-64 bg-white border rounded-lg p-4 ml-20">
        {/* first page start*/}
        <h2 className="text-lg font-semibold mb-4 flex justify-between items-center">
          Filters
          <span className="text-black">
            <i className="fas fa-sliders-h"></i> {/* Icon for filters */}
          </span>
        </h2>

        {/* Categories */}
        <div className="mb-6">
          {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map(
            (category) => (
              <div
                key={category}
                className="flex justify-between items-center py-2 cursor-pointer hover:text-black text-gray-700"
              >
                <span>{category}</span>
                <i className="fas fa-chevron-right text-black"></i>{" "}
                {/* Right arrow icon */}
              </div>
            )
          )}
        </div>

        {/* Price Slider */}
        <div className="mb-6">
          <h3
            className="text-lg font-semibold mb-4 flex justify-between items-center cursor-pointer"
            onClick={() => setPriceOpen(!isPriceOpen)}
          >
            Price
            <span>
              <span className="text-black">{isSizeOpen ? "˄" : "˅"}</span>
            </span>
          </h3>
          {isPriceOpen && (
            <>
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
            </>
          )}
        </div>

        {/* Colors */}
        <div className="mb-6">
          <h3
            className="text-lg font-semibold mb-4 flex justify-between items-center cursor-pointer"
            onClick={() => setColorOpen(!isColorOpen)}
          >
            Colors
            <span>
              <span className="text-black">{isSizeOpen ? "˄" : "˅"}</span>
            </span>
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

        {/* Size Options */}
        <div className="mb-6">
          <h3
            className="text-lg font-semibold mb-4 flex justify-between items-center cursor-pointer"
            onClick={() => setSizeOpen(!isSizeOpen)}
          >
            Size
            <span>
              <span className="text-black">{isSizeOpen ? "˄" : "˅"}</span>
            </span>
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
                "3X-Large",
                "4X-Large",
              ].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 text-sm border rounded-full hover:bg-black hover:text-white bg-[#F0F0F0]"
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dress Style */}
        <div className="mb-6">
          <h3
            className="text-lg font-semibold mb-4 flex justify-between items-center cursor-pointer"
            onClick={() => setStyleOpen(!isStyleOpen)}
          >
            Dress Style
            <span>
              <span className="text-black">{isSizeOpen ? "˄" : "˅"}</span>
            </span>
          </h3>
          {isStyleOpen && (
            <>
              {["Casual", "Formal", "Party", "Gym"].map((style) => (
                <div
                  key={style}
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-black text-gray-700"
                >
                  <span>{style}</span>
                  <i className="fas fa-chevron-right text-black"></i>{" "}
                  {/* Right arrow */}
                </div>
              ))}
            </>
          )}
        </div>

        {/* Apply Filter Button */}
        <div className="text-center">
          <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800">
            Apply Filter
          </button>
        </div>
        {/* first page end */}

        {/* second page start */}
      </div>
      <div className="h-auto flex flex-col justify-center px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-extrabold mb-8">
          YOU MIGHT ALSO LIKE
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>

        <button className="text-black w-40 sm:w-56 lg:w-[237px] h-12 sm:h-14 lg:h-[66px] rounded-full bg-white p-4 flex justify-center mx-auto border mt-8">
          View All
        </button>

        {/* second page end */}

        {/* third page start */}
        {/* New Arrival Section */}
        <div className="h-auto flex flex-col justify-center mt-10 px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-extrabold mb-8">
            NEW ARRIVAL
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>

          <button className="text-black w-40 sm:w-56 lg:w-[237px] h-12 sm:h-14 lg:h-[66px] rounded-full bg-white p-4 flex justify-center mx-auto border mt-8">
            View All
          </button>
        </div>
        {/* third page end */}

        {/* Divider */}
        <hr className="my-12" />

        {/* fourth page start */}
        {/* Top Selling Section */}
        <div className="h-auto flex flex-col justify-center px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-extrabold mb-8">
            TOP SELLING
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <button className="text-black w-40 sm:w-56 lg:w-[237px] h-12 sm:h-14 lg:h-[66px] rounded-full bg-white p-4 flex justify-center mx-auto border mt-8">
            View All
          </button>
        </div>

        {/* fourth page end */}

        {/* fivth page start */}
        <div className="bg-black text-white p-6 sm:p-8 lg:p-10  max-w-[1100px] flex flex-col items-center rounded-2xl -mb-7 mx-auto">
          {/* Content Wrapper */}
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center md:text-left">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>

            {/* Input and Button */}
            <div className="flex flex-col justify-center gap-4 md:gap-2 w-full h-[180px] md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-full text-center  focus:outline-none w-full md:w-[349px] h-[48px] text-black"
              />
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium w-full md:w-[349px] h-[48px]">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* fivth page end */}
      </div>
    </div>
  );
}
