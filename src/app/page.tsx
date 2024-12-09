import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* First page start */}
      <div className="h-screen flex justify-center items-center bg-[url('/Rectangle.png')] bg-cover">
        <div className="flex w-11/12 h-[465px] flex-col md:flex-row">
          <div className="flex flex-col flex-1 gap-4 justify-center px-4">
            <h1 className="font-extrabold text-4xl md:text-[70px] relative inline-block w-full md:w-[670px] h-auto">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="font-normal text-base md:text-[18px] relative inline-block w-full md:w-[600px]">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="text-white w-[237px] h-[66px] rounded-full bg-black p-4">
              Shop Now
            </button>
          </div>
        </div>

        <div className="absolute top-2 right-4 w-[700px] flex justify-between">
          <Image 
            src="/Vector.png" 
            alt="vector"
            width={104}
            height={104}
            className="absolute top-2 right-2"
          /> 
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
      <div className="bg-black sm:w-auto h-auto flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-10"> 
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
    </div>
  );
}