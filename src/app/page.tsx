import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ClothesCard from "@/components/Shart_Card_01";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


export default function Home() {
  return (
    <div>
      <Navbar />
      {/* First page start */}
      <div className="h-screen flex justify-center items-center bg-[url('/Rectangle.png')] bg-cover mx-auto">
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
      <div className="space-y-7 py-20 w-full max-w-[1239px] h-auto bg-[#F0F0F0] mx-auto rounded-3xl px-4 sm:px-8">
  {/* Section Title */}
  <h1 className="flex justify-center font-extrabold text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 md:mb-16 text-center">
    BROWSE BY DRESS STYLE
  </h1>

  {/* First Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-full">
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-full">
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
        &quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
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
        &quot;Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&quot;
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
        &quot;As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on point with the latest trends.&quot;
      </p>
    </div>
  </div>
</div>

      {/* Sixth page end

      {/* Seventh page start */}
      <div className="bg-black text-white p-6 sm:p-8 lg:p-10 w-full max-w-[1100px] flex flex-col items-center rounded-2xl -mb-7 mx-auto">
  {/* Content Wrapper */}
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center md:text-left">
      STAY UP TO DATE ABOUT OUR LATEST OFFERS
    </h2>

    {/* Input and Button */}
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full md:w-auto">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 px-4 py-2 rounded-full text-center md:text-left focus:outline-none w-full md:w-[349px] h-[48px] text-black"
      />
      <button className="bg-white text-black px-4 py-2 rounded-full font-medium w-full md:w-[349px] h-[48px]">
        Subscribe to Newsletter
      </button>
    </div>
  </div>
</div>

      {/* Seventh page end */}

      {/* Eight page start */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Grid Container */}
  <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[248px_104px_136px_149px_149px] gap-y-10 lg:gap-28">
    {/* Left Section */}
    <div>
      <h2 className="text-xl font-bold">SHOP.CO</h2>
      <p className="mt-4 text-sm">
        We have clothes that suit your style and which you&apos;re proud to wear. From women to men.
      </p>
      <div className="flex space-x-4 mt-6">
        <Link href="">
          <Image src="/twitter.png" alt="twitter" width={28} height={28} />
        </Link>
        <Link href="https://www.facebook.com/login.php/">
          <Image src="/facebook.png" alt="facebook" width={28} height={28} />
        </Link>
        <Link href="https://www.instagram.com/accounts/login/?hl=en">
          <Image src="/instagram.png" alt="instagram" width={28} height={28} />
        </Link>
        <Link href="https://github.com/login">
          <Image src="/github.png" alt="github" width={28} height={28} />
        </Link>
      </div>
    </div>

    {/* Company Section */}
    <div>
      <h3 className="text-lg font-semibold">COMPANY</h3>
      <ul className="mt-4 space-y-2 text-sm">
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Features</a></li>
        <li><a href="#" className="hover:underline">Works</a></li>
        <li><a href="#" className="hover:underline">Career</a></li>
      </ul>
    </div>

    {/* Help Section */}
    <div>
      <h3 className="text-lg font-semibold">HELP</h3>
      <ul className="mt-4 space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Customer Support</a></li>
        <li><a href="#" className="hover:underline">Delivery Details</a></li>
        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>

    {/* FAQ Section */}
    <div>
      <h3 className="text-lg font-semibold">FAQ</h3>
      <ul className="mt-4 space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Account</a></li>
        <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
        <li><a href="#" className="hover:underline">Orders</a></li>
        <li><a href="#" className="hover:underline">Payments</a></li>
      </ul>
    </div>

    {/* Resources Section */}
    <div>
      <h3 className="text-lg font-semibold">RESOURCES</h3>
      <ul className="mt-4 space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Free Books</a></li>
        <li><a href="#" className="hover:underline">Development Tutorial</a></li>
        <li><a href="#" className="hover:underline">How to - Blog</a></li>
        <li><a href="#" className="hover:underline">Youtube Playlist</a></li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="border-t border-gray-200 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
    <p className="text-sm text-gray-600 text-center md:text-left">
      Shop.co © 2000-2023, All Rights Reserved
    </p>
    <div className="flex gap-2 flex-wrap justify-center md:justify-start">
      <Image src="/visa.png" alt="Visa" width={66} height={40} />
      <Image src="/master-card.png" alt="MasterCard" width={66} height={40} />
      <Image src="/paypal.png" alt="PayPal" width={66} height={40} />
      <Image src="/apple-pay.png" alt="Apple Pay" width={66} height={40} />
      <Image src="/google-pay.png" alt="Google Pay" width={66} height={40} />
    </div>
  </div>
</div>

      {/* Eight page end */}
    </div>
  );
}