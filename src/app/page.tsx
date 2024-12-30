import Image from "next/image";
import ClothesCard from "@/components/Shart_Card_01";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
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
          <button className="text-white w-[160px] sm:w-[200px] lg:w-[237px] h-[45px] sm:h-[50px] lg:h-[66px] rounded-full bg-black p-3 lg:p-4">
            Shop Now
          </button>
        </div>

        <div className="relative">
          <Image
            src="/Rectangle.png"
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
                className="object-contain"
              />
            </div>
            <div className="absolute md:-left-5 left-1 top-44">
              <Image
                src="/Vector (1).png"
                alt="vector"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* First page end */}

      {/* Second page start */}
      <div className="bg-black mx-w-[1440px] py-4 sm:py-8 flex items-center justify-center mx-auto">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 lg:gap-24">
          <Image
            src="/versace.png"
            alt="versace"
            width={120}
            height={25}
            className="hover:cursor-pointer"
          />
          <Image
            src="/zara.png"
            alt="zara"
            width={70}
            height={30}
            className="hover:cursor-pointer"
          />
          <Image
            src="/gucci.png"
            alt="gucci"
            width={110}
            height={30}
            className="hover:cursor-pointer"
          />
          <Image
            src="/prada.png"
            alt="prada"
            width={140}
            height={30}
            className="hover:cursor-pointer"
          />
          <Image
            src="/calvin.png"
            alt="calvin"
            width={150}
            height={30}
            className="hover:cursor-pointer"
          />
        </div>
      </div>
      {/* Second page end */}

      {/* Second page end */}

      {/* third page start */}
      {/* New Arrival Section */}
      <div className="h-auto flex flex-col justify-center mt-10 px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-extrabold mb-8">
          NEW ARRIVAL
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ClothesCard
            image="/black.png"
            name="T-shirt with Tape Details"
            ratingImage="/45.5.png"
            price="$120"
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
          <ClothesCard
            image="/jeans.png"
            name="Faded Skinny Jeans"
            ratingImage="/45.5.png"
            price="$210"
          />
        </div>

        <button className="text-black w-40 sm:w-56 lg:w-[237px] h-12 sm:h-14 lg:h-[66px] rounded-full bg-white p-4 flex justify-center mx-auto border mt-8">
          View All
        </button>
      </div>

      {/* fourth page end */}

      {/* fifth page start */}
      <div className="space-y-7 py-20 w-full max-w-[1239px] h-auto bg-[#F0F0F0] mx-auto rounded-3xl px-4 sm:px-8">
        {/* Section Title */}
        <h1 className="flex justify-center font-extrabold text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16 text-center">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="flex flex-col gap-20 mx-auto">
          {/* First Row */}
          <div className="grid lg:grid-cols-[400px_600px] grid-cols-1 h-72 gap-3 mx-auto">
            <Image
              src="/casual.png"
              alt="Casual"
              width={407}
              height={289}
              className="w-full max-w-full h-auto rounded-lg"
            />
            <Image
              src="/formal.png"
              alt="Formal"
              width={684}
              height={289}
              className="w-full max-w-full h-auto rounded-lg"
            />
          </div>

          {/* Second Row */}
          <div className="grid lg:grid-cols-[600px_400px] grid-cols-1 h-72 gap-3 mx-auto">
            <Image
              src="/party.png"
              alt="Party"
              width={684}
              height={289}
              className="w-full max-w-full h-auto rounded-lg"
            />
            <Image
              src="/gym.png"
              alt="Gym"
              width={407}
              height={289}
              className="w-full max-w-full h-auto rounded-lg"
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

      {/* Sixth page end

      {/* Seventh page start */}
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

      {/* Seventh page end */}
    </div>
  );
}
