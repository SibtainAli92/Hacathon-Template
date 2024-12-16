import Image from "next/image";
import Navbar from "@/components/Navbar";
import ClothesCard from "@/components/Shart_Card_01";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* First page start */}
      <div className="h-screen flex justify-center items-center bg-[url('/Rectangle.png')] bg-cover">
  <div className="flex w-full h-[465px] flex-col md:flex-row">
    <div className="flex flex-col flex-1 gap-4 justify-center px-4">
      <h1 className="font-extrabold text-6xl md:text-[70px] relative inline-block w-full md:w-[670px] h-auto">
        FIND CLOTHES <br />THAT MATCHES <br />YOUR STYLE
      </h1>
      <p className="font-normal text-base md:text-[18px] relative inline-block w-full md:w-[600px]">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </p>
      <button className="text-white w-[237px] h-[66px] rounded-full bg-black p-4">
        Shop Now
      </button>
    </div>
  </div>

  <div className="absolute top-2 right-4 w-[700px] mt-52 flex justify-between">
    <Image 
      src="/Vector.png" 
      alt="vector"
      width={104}
      height={104}
      className="absolute top-2 right-2"
    /> 
    </div>
    <div className="absolute top-2 right-4 w-[700px] mt-28 flex justify-between">
    <Image 
      src="/Vector (1).png" 
      alt="vector"
      width={56}
      height={56}
      className="absolute left-2 top-96"
    />         
  </div>
</div>
      {/* First page end */}

      {/* Second page start */}
      <div className="bg-black w-full h-32 flex items-center justify-center">
  <div className="flex flex-wrap justify-center gap-24"> 
    <Image 
      src="/versace.png" 
      alt="versace"
      width={166}
      height={33}
      className="text-lg hover:cursor-pointer"
    />
    <Image 
      src="/zara.png" 
      alt="zara"
      width={91}
      height={38}
      className="text-lg hover:cursor-pointer"
    />
    <Image 
      src="/gucci.png" 
      alt="gucci"
      width={156}
      height={36}
      className="text-lg hover:cursor-pointer"
    />
    <Image 
      src="/prada.png" 
      alt="prada"
      width={194}
      height={32}
      className="text-lg hover:cursor-pointer"
    />
    <Image 
      src="/calvin.png" 
      alt="calvin"
      width={206}
      height={33}
      className="text-lg hover:cursor-pointer"
    />
  </div>
</div>
      {/* Second page end */}

      {/* third page start */}
      <div className="h-[938px] flex flex-col justify-center -mt-10">
  <h1 className="lg:text-6xl text-4xl text-center font-extrabold mb-4">
    NEW ARRIVAL
  </h1>

  <div className="flex flex-col md:flex-row justify-center gap-7">
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

  <button className="text-black w-[237px] h-[66px] rounded-full bg-white p-4 flex justify-center mx-auto border mt-10">
    View All
  </button>
</div>
      {/* third page end */}

      <hr />

      {/* fourth page start */}
      <div className="h-[938px] flex flex-col justify-center -mt-10">
  <h1 className="lg:text-6xl text-4xl text-center font-extrabold mb-4">
    TOP SELLING
  </h1>

  <div className="flex flex-col md:flex-row justify-center gap-7">
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

  <button className="text-black w-[237px] h-[66px] rounded-full bg-white p-4 flex justify-center mx-auto border mt-10">
    View All
  </button>
</div>
      {/* fourth page end */}

      {/* fifth page start */}
      <div className="space-y-7 py-20 w-full max-w-[1239px] h-auto bg-[#F0F0F0] mx-auto rounded-3xl">
  <h1 className="flex justify-center font-extrabold text-4xl mb-16">
    BROWSE BY DRESS STYLE
  </h1>

  <div className="flex flex-col md:flex-row gap-6 mx-auto w-fit">
    <Image 
      src="/casual.png" 
      alt="casual"
      width={407}
      height={289}
      className="w-full max-w-[407px] h-auto"
    />
    <Image 
      src="/formal.png" 
      alt="formal"
      width={684}
      height={289}
      className="w-full max-w-[684px] h-auto"
    />
  </div>

  <div className="flex flex-col md:flex-row gap-6 mx-auto w-fit">
    <Image 
      src="/party.png" 
      alt="party"
      width={684}
      height={289}
      className="w-full max-w-[684px] h-auto"
    />
    <Image 
      src="/gym.png" 
      alt="gym"
      width={407}
      height={289}
      className="w-full max-w-[407px] h-auto"
    />
  </div>
</div>
      {/* fifth page end */}
    </div>
  );
}