"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Product() {
  // count product
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      rating: 5,
      review:
        "I absolutely love this t-shirt! The design is unique, and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "August 14, 2023",
    },
    {
      id: 2,
      name: "Alex M.",
      rating: 5,
      review:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "August 15, 2023",
    },
    {
      id: 3,
      name: "Ethan R.",
      rating: 5,
      review:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "August 16, 2023",
    },
    {
      id: 4,
      name: "Olivia P.",
      rating: 5,
      review:
        "As a UX/UI enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "August 17, 2023",
    },
    {
      id: 5,
      name: "Liam K.",
      rating: 5,
      review:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "August 18, 2023",
    },
    {
      id: 6,
      name: "Ava H.",
      rating: 5,
      review:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "August 19, 2023",
    },
  ];
  return (
    <div>
      {/* First page start */}
      <div>
        <div className="mx-auto max-w-[1440px] gap-6 lg:gap-16 h-auto xl:h-[820px] px-10 py-6 xl:items-start items-center flex xl:flex-row flex-col">
          {/* image section start  */}
          <div className="lg:w-[553px] w-auto  h-[500px] flex px-10  lg:flex-row flex-col-reverse lg:gap-5 md:gap-3 gap-10 items-center">
            <div className="lg:w-[76px] w-auto h-[416px] lg:flex lg:flex-col flex flex-row gap-2 lg:gap-8">
              <span className="w-[76px] h-[80px] rounded-md flex items-center bg-[#F9F1E7]">
                <Image
                  src={"/side1.png"}
                  alt="related images"
                  height={80}
                  width={76}
                />
              </span>
              <span className="w-[76px] h-[80px] rounded-md flex items-center bg-[#F9F1E7]">
                <Image
                  src={"/side2.png"}
                  alt="related images"
                  height={80}
                  width={76}
                />
              </span>
              <span className="w-[76px] h-[80px] rounded-md flex items-center bg-[#F9F1E7]">
                <Image
                  src={"/side3.png"}
                  alt="related images"
                  height={80}
                  width={76}
                />
              </span>
            </div>

            <div className="lg:h-[500px] h-[280px] lg:w-[423px] xs:w-[324px] w-[280px] bg-[#F9F1E7] flex justify-center items-center rounded-xl">
              <Image
                src={"/main-image.png"}
                alt="Single Images"
                className="rounded-lg"
                height={391}
                width={481}
              />
            </div>
          </div>
          {/* image section end */}

          {/* details section start */}
          <div className="h-auto xl:h-[730px] text-wrap lg:w-[606px] w-auto flex flex-col gap-4">
            <h2 className="font-poppins text-4xl font-extrabold">
              ONE LIFE GRAPHIC T-SHIRT
            </h2>

            <div className="flex gap-5 items-center">
              <Image src={"/45.5.png"} alt="rating" width={139} height={24} />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">$260</span>
              <span className="line-through text-2xl text-gray-400 ml-2">
                $300
              </span>
              <span className="rounded-xl text-center py-1 bg-red-200 h-[28px] w-[58px] text-red-500">
                -40%
              </span>
            </div>

            <p className="text-1xl font-normal w-auto lg:w-[424px] text-gray-600">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>
            <hr />

            {/* color */}
            <div className="w-[123px] h-[63px] flex flex-col gap-3 justify-between">
              <p className="font-normal font-poppins text-gray-700 text-sm/[21px]">
                Section Colors
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="w-[30px] h-[30px] rounded-full bg-[#4F4631] flex justify-center items-center"
                >
                  <Image src="/tick (2).png" alt="tick" width={13} height={9} />
                </button>
                <button
                  type="button"
                  className="w-[30px] h-[30px] rounded-full bg-[#314F4A]"
                ></button>
                <button
                  type="button"
                  className="w-[30px] h-[30px] rounded-full bg-[#31344F]"
                ></button>
              </div>
            </div>
            <hr />
            {/* Choose size */}
            <div className="h-[63px] flex flex-col gap-3 justify-between mt-3">
              <p className="font-normal font-poppins text-gray-700 text-sm/[21px]">
                Choose Size
              </p>
              <div className=" flex items-center w-auto md:w-[500px] gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center sm:w-[104px] w-[54px] h-[48px] rounded-full hover:bg-black hover:text-white bg-[#F0F0F0]"
                >
                  Small
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center md:w-[104px] w-[70px] h-[48px] rounded-full hover:bg-black hover:text-white bg-[#F0F0F0]"
                >
                  Medium
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center text-white md:w-[86px] w-[56px] h-[48px] rounded-full bg-black"
                >
                  Large
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center md:w-[104px] w-[69px] h-[48px] rounded-full hover:bg-black hover:text-white bg-[#F0F0F0]"
                >
                  X-large
                </button>
              </div>
            </div>

            <hr className="mt-10" />

            {/* button */}
            <div className="flex flex-row gap-3 mt-4">
              <span className="h-16 w-[200px] bg-[#F0F0F0] gap-8 border-[#9F9F9F] text-base font-medium rounded-full flex items-center justify-center">
                <button type="button" onClick={decrement} className="text-3xl">
                  -
                </button>
                <p>{count}</p>
                <button type="button" onClick={increment} className="text-3xl">
                  +
                </button>
              </span>
              <Link href="/brand">
                <button
                  type="button"
                  className="flex items-center justify-center text-white sm:w-[400px] w-[130px] h-16 rounded-full bg-black"
                >
                  Add To Cart
                </button>
              </Link>
            </div>

            <hr className="mt-10 mb-6" />
          </div>
          {/* details section end */}
        </div>
      </div>
      {/* First page end */}

      {/* Second page start */}
      <div className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Tabs Section */}
          <div className="flex justify-center text-2xl font-[Satoshi] space-x-6 text-gray-500 border-b">
            <button className="pb-2 border-b-2 border-transparent hover:border-black text-black">
              Product Details
            </button>
            <button className="pb-2 border-b-2 border-black text-black">
              Rating & Reviews
            </button>
            <button className="pb-2 border-b-2 border-transparent hover:border-black">
              FAQs
            </button>
          </div>

          {/* Reviews Header */}
          <div className="mt-6 flex justify-between items-center">
            <h1 className="text-2xl font-[Satoshi] font-bold">
              All Reviews (451)
            </h1>
            <div className="flex items-center space-x-4">
              <select
                className="border rounded-full p-2 bg-white"
                defaultValue="Latest"
              >
                <option value="Latest">Latest</option>
                <option value="Highest">Highest Rating</option>
                <option value="Lowest">Lowest Rating</option>
              </select>
              <button className=" py-2 bg-black text-white rounded-full">
                Write a Review
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl shadow-md p-4 flex flex-col space-y-4"
              >
                <div className="flex items-center space-x-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-4xl">
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex items-center  space-x-2">
                  <span className="text-lg font-semibold">{review.name}</span>
                  <span>
                    <Image src="/tick.png" alt="tick" width={24} height={24} />
                  </span>
                </div>
                <p className="text-gray-500">{review.review}</p>
                <p className="text-gray-700 text-sm">Posted on {review.date}</p>
                <button className="self-end text-gray-400 hover:text-black">
                  ●●●
                </button>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 border rounded-full bg-gray-200 hover:bg-gray-300">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
      {/* Second page end */}

      {/* third page start */}
      <div className="h-auto flex flex-col justify-center px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-extrabold mb-8">
          YOU MIGHT ALSO LIKE
        </h1>

        <button className="text-black w-40 sm:w-56 lg:w-[237px] h-12 sm:h-14 lg:h-[66px] rounded-full bg-white p-4 flex justify-center mx-auto border mt-8">
          View All
        </button>
      </div>
      {/* third page end */}
    </div>
  );
}
