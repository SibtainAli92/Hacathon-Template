
"use client";
import { useEffect, useState } from "react";
import { Products } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useAppDispatch } from "../../../../hooks/redux";
import { addToCart } from "../../../../redux/cartSlice";


const Page = () => {
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null)
  // const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() =>{
    const path = window.location.pathname;
    const extratedId = path.split("/").pop();

    if (extratedId){
      setId(extratedId);
    } else {
      setError("Product ID is missing")
    }
  }, [])

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProductData = async () => {
      if(!id) return
      try {
       

        // Fetch product data from Sanity using GROQ
        const productFetchData: Products[] = await client.fetch(
          groq`*[_type == "products" && _id == $id]{
              _id,
              name,
              image,
              price,
              originalPrice,
              description,
              discountCopen,
              category
          }`,
          { id } // Pass ID as a parameter for the query
        );

        if (productFetchData.length > 0) {
          setProduct(productFetchData[0]); // Set the first matching product
        } else {
          setError("No product found for the given ID.");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Failed to fetch product data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

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
          <p className="text-xl text-red-600 font-semibold mb-4">
            Oops! Something went wrong.
          </p>
          <p className="text-md text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center p-4 bg-white shadow-lg rounded-md">
          <p className="text-xl text-gray-700">No product found for this ID.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Product details page */}
      <div>
        <div className="mx-auto max-w-[1440px] gap-6 lg:gap-16 h-auto xl:h-[820px] px-10 py-6 xl:items-start items-center flex xl:flex-row flex-col">
          {/* Image Section */}
          <div className="lg:w-[553px] w-auto h-[500px] flex px-10 lg:flex-row flex-col-reverse lg:gap-5 md:gap-3 gap-10 items-center">
            <div className="lg:h-[500px] h-[280px] lg:w-[423px] xs:w-[324px] w-[280px] bg-[#F9F1E7] flex justify-center items-center rounded-xl">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  className="rounded-lg"
                  height={391}
                  width={481}
                />
              )}
            </div>
          </div>
          {/* Details Section */}
          <div className="h-auto xl:h-[730px] text-wrap lg:w-[606px] w-auto flex flex-col gap-4">
            <h2 className="font-poppins text-4xl font-extrabold">{product?.name}</h2>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">${product?.price}</span>

            </div>
            <p className="text-1xl font-normal w-auto lg:w-[424px] text-gray-600">
              {product?.description}
            </p>
            <button 
            onClick={() => {
              dispatch(addToCart(product));
            }}
            type="button" className="bg-black w-[50%] text-white text-2xl p-3 rounded-lg ">
              Add To Cart 
            </button>
            {/* Add other details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
