"use client";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { client } from "@/sanity/lib/client";
import {  useEffect, useState } from "react";
import { endthreeproduct, startthreeproduct } from "@/sanity/lib/quries";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../../redux/cartSlice";
import { useAppDispatch } from "../../hooks/redux";

export default function Home() {
  type Products = {
    _id: string;
    image: string;
    name: string;
    ratingImage: string;
    price: number;
    originalPrice: number;
    discountCopen: string;
  };


  const [startproducts, setstartProducts] = useState<Products[]>([]);
  const [endproducts, setendProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const fetchedProducts = await client.fetch(startthreeproduct);
        setstartProducts(fetchedProducts);
      } catch  {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false); // Ensure loading is false regardless of success or error
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const fetchedProducts = await client.fetch(endthreeproduct);
        setendProducts(fetchedProducts);
      } catch  {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false); // Ensure loading is false regardless of success or error
      }
    };
  
    fetchProducts();
  }, []);

  // Display loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center flex flex-col items-center p-4 bg-white shadow-lg rounded-md">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-semibold text-gray-700">Loading products...</p>
        </div>
      </div>
    );
  }

  // Display error message
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-xl font-semibold text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* First page start */}
      <div className="flex md:flex-row flex-col items-center bg-[#F2F0F1] justify-evenly">
        {/* Text Content */}
        <div className="flex flex-col md:items-start items-center space-y-6">
          <h1 className="font-extrabold text-3xl md:text-start text-center sm:text-4xl lg:text-6xl leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="font-normal text-sm text-center md:text-start sm:text-base lg:text-lg lg:max-w-[600px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link href="/category">
            <button className="text-white w-[160px] sm:w-[200px] lg:w-[237px] h-[45px] sm:h-[50px] lg:h-[66px] rounded-full bg-black p-3 lg:p-4">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="relative">
          <Image
            src="/rectangle_2.png"
            alt="back-ground"
            width={500}
            height={500}
            className=""
          />

          {/* Decorative Images */}
          <div className="">
            <div className="absolute top-1 right-1">
              <Image
                src="/Vector.png"
                alt="vector"
                width={104}
                height={104}
                className="object-contain transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="absolute md:-left-5 left-1 top-44">
              <Image
                src="/Vector (1).png"
                alt="vector"
                width={56}
                height={56}
                className="object-contain transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* First page end */}

      {/* Second page start */}
      <div className="bg-black mx-w-[1440px] py-4 sm:py-8 flex items-center justify-center mx-auto">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 lg:gap-24 transf">
          <Image
            src="/versace.png"
            alt="versace"
            width={120}
            height={25}
            className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="/zara.png"
            alt="zara"
            width={70}
            height={30}
            className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="/gucci.png"
            alt="gucci"
            width={110}
            height={30}
            className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="/prada.png"
            alt="prada"
            width={140}
            height={30}
            className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
          <Image
            src="/calvin.png"
            alt="calvin"
            width={150}
            height={30}
            className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      {/* Second page end */}

      {/* third page start */}
      {/* New Arrival Section */}
      {/* New Arrival Section */}
      <div
        className="h-auto flex flex-col justify-center mt-10 px-4 md:px-8 ml-7"
        id="new-arrivals"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-extrabold mb-8">
          NEW ARRIVAL
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {startproducts.map((element: Products) => (
            <div key={element._id} className="group relative">
                <div className="flex flex-col gap-4 relative">
                  {/* Image Section */}
                  <div className="relative w-[295px] h-[298px] mx-auto">
              <Link href={`/category/${element._id}`}>
                    <Image
                      src={urlFor(element.image).url()}
                      alt={"showimage"}
                      width={200}
                      height={200}
                      className="rounded-2xl object-cover w-full h-full gap-2 transform transition-transform duration-300 hover:scale-110"
                      />
                      </Link>
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
            </div>
          ))}
        </div>

        <button
    
          className="text-black w-40 sm:w-56 lg:w-[237px] h-12 sm:h-14 lg:h-[66px] rounded-full bg-white p-4 flex justify-center mx-auto border mt-8"
        >
          View All
        </button>
      </div>
      {/* third page end */}

      {/* Divider */}
      <hr className="my-12" />

      {/* fourth page start */}
      {/* Top Selling Section */}
      <div
        className="h-auto flex flex-col justify-center px-4 md:px-8 ml-7"
        id="on-sale"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-extrabold mb-8">
          TOP SELLING
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {endproducts.map((element: Products) => (
            <div key={element._id} className="group relative">
                <div className="flex flex-col gap-4 relative">
                  {/* Image Section */}
                  <div className="relative w-[295px] h-[298px] mx-auto">
              <Link href={`/category/${element._id}`}>
                    <Image
                      src={urlFor(element.image).url()}
                      alt={"showimage"}
                      width={200}
                      height={200}
                      className="rounded-2xl object-cover w-full h-full gap-2 transform transition-transform duration-300 hover:scale-110"
                    />
              </Link>
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
            </div>
          ))}
        </div>

        <button className="text-black w-40 sm:w-56 lg:w-[237px] h-12 sm:h-14 lg:h-[66px] rounded-full bg-white p-4 flex justify-center mx-auto border mt-8">
          View All
        </button>
      </div>

      {/* fourth page end */}

      {/* fifth page start */}
      <div
        className="space-y-7 py-20 w-full max-w-[1239px] h-auto bg-[#F0F0F0] mx-auto rounded-3xl px-4 sm:px-8"
        id="brand"
      >
        {/* Section Title */}
        <h1 className="flex justify-center font-extrabold text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16 text-center">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="flex flex-col gap-3 mx-auto">
          {/* First Row */}
          <div className="grid lg:grid-cols-[400px_600px] grid-cols-1 gap-3 mx-auto">
            <Image
              src="/casual.png"
              alt="Casual"
              width={407}
              height={289}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Image
              src="/formal.png"
              alt="Formal"
              width={684}
              height={289}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Second Row */}
          <div className="grid lg:grid-cols-[600px_400px] grid-cols-1 gap-3 mx-auto">
            <Image
              src="/party.png"
              alt="Party"
              width={684}
              height={289}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Image
              src="/gym.png"
              alt="Gym"
              width={407}
              height={289}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* fifth page end */}

      {/* Sixth page start */}
      <div className="mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mt-16 sm:mt-20 md:mt-28">
          OUR HAPPY CUSTOMERS
        </h1>

        {/* Arrows Container */}
        <div className="flex justify-end mt-4 md:-mt-8 mr-4 sm:mr-12 lg:mr-20 space-x-4">
          <GoArrowLeft className="h-[30px] w-[30px] cursor-pointer" />
          <GoArrowRight className="h-[30px] w-[30px] cursor-pointer" />
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 p-4 md:p-10">
          {/* Card 1 */}
          <div className="space-y-5 bg-[#F0F0F0] p-7 mx-auto rounded-3xl flex flex-col max-w-[400px] h-auto shadow-md">
            <Image src="/stars.png" alt="stars" width={138} height={22} />
            <span className="flex gap-2 items-center">
              <p className="font-medium">Sarah M.</p>
              <Image src="/tick.png" alt="tick" width={24} height={24} />
            </span>
            <p className="text-sm sm:text-base">
              &quot;I&apos;m blown away by the quality and style of the clothes
              I received from Shop.co. From casual wear to elegant dresses,
              every piece I&apos;ve bought has exceeded my expectations.&quot;
            </p>
          </div>

          {/* Card 2 */}
          <div className="space-y-5 bg-[#F0F0F0] p-7 mx-auto rounded-3xl flex flex-col max-w-[400px] h-auto shadow-md">
            <Image src="/stars.png" alt="stars" width={138} height={22} />
            <span className="flex gap-2 items-center">
              <p className="font-medium">Alex K.</p>
              <Image src="/tick.png" alt="tick" width={24} height={24} />
            </span>
            <p className="text-sm sm:text-base">
              &quot;Finding clothes that align with my personal style used to be
              a challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.&quot;
            </p>
          </div>

          {/* Card 3 */}
          <div className="space-y-5 bg-[#F0F0F0] p-7 mx-auto rounded-3xl flex flex-col max-w-[400px] h-auto shadow-md">
            <Image src="/stars.png" alt="stars" width={138} height={22} />
            <span className="flex gap-2 items-center">
              <p className="font-medium">James L.</p>
              <Image src="/tick.png" alt="tick" width={24} height={24} />
            </span>
            <p className="text-sm sm:text-base">
              &quot;As someone who is always on the lookout for unique fashion
              pieces, I am thrilled to have stumbled upon Shop.co. The selection
              of clothes is not only diverse but also on point with the latest
              trends.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Sixth page end */}
    </div>
  );
}
