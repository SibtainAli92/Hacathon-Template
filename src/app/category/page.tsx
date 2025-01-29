"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Products } from "../../../types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useAppDispatch } from "../../../hooks/redux";
import { addToCart } from "../../../redux/cartSlice";

export default function Category() {
  const dispatch = useAppDispatch();
  const [isPriceOpen, setPriceOpen] = useState(true);
  const [isColorOpen, setColorOpen] = useState(true);
  const [isSizeOpen, setSizeOpen] = useState(true);



  

  
  const [product, setProduct] = useState<Products[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const productFetchData: Products[] = await client.fetch(
          groq`*[_type == "products"]{
            _id,
            name,
            _type,
            image,
            price,
            description,
            category
          }`
        );
        setProduct(productFetchData);
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-black">Loading product, please wait...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-50">
        <div className="text-center p-6 bg-red-100 shadow-lg rounded-md">
          <p className="text-xl text-red-600 font-semibold mb-4">Something went wrong.</p>
          <p className="text-md text-red-500">{error}</p>
        </div>
      </div>
    );
  }

    
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
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.map((element: Products) => (
              <div key={element._id} className="group relative">
              <Link
                href={`/category/${element._id}`}
              >
                <div className="flex flex-col gap-4 relative">
                  {/* Image Section */}
                  <div className="relative w-[295px] h-[298px] mx-auto">
                    {element.image &&(
                    <Image
                      src={urlFor(element.image).url()}
                      alt={"showimage"}
                      width={200}
                      height={200}
                      className="rounded-2xl object-cover w-full h-full gap-2 transform transition-transform duration-300 hover:scale-110"
                    />
                  )}
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => {
                        dispatch(addToCart(element));
                      }}
                      className="absolute mt-[240px] inset-0 w-[300px] h-[60px] rounded-lg bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="text-center">
                    <h4 className="font-bold">{element.name}</h4>
                    <div className="flex justify-center gap-4 text-sm">
                      <p className="font-bold">${element.price}</p>
                    
                    </div>
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
