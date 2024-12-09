import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white text-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">
        <h1 className="md:text-4xl font-extrabold text-[70px]/[70px] -mr-5 font-Poppins">SHOP.CO</h1>
        <nav className="flex-grow">
          <ul className="list-none flex flex-col md:flex-row space-y-4 mt-1 md:space-y-0 md:space-x-8 justify-center">
            <li className="hover:underline flex items-center gap-1">
              <Link href="/" className="text-lg hover:text-[#504f4d]">
                Shop
              </Link>
              <IoChevronDownOutline />

            </li>
            <li className="hover:underline">
              <Link href="/about" className="text-lg hover:text-[#504f4d]">
                On Sale
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="/project" className="text-lg hover:text-[#504f4d]">
                New Arrivals
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="/contact" className="text-lg hover:text-[#504f4d]">
                Brand
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center -mb-3 -mt-3 mr-5 h-12 md:h-14 w-full md:w-[540px] bg-[#F5F5F5] rounded-full overflow-hidden">
          <label htmlFor="Search-bar" className="flex items-center w-full">
            <BsSearch className="text-2xl ml-4" />
            <input
              type="text"
              placeholder="Search for Product..."
              id="Search-bar"
              className="flex-grow outline-none placeholder:text-lg bg-transparent py-2 px-4"
            />
          </label>
        </div>
        <Image
          src="/Frame.png"
          alt="frame"
          width={62}
          height={24}
          className="object-center -mt-3 -mr-16 -mb-3 "
        />
      </div>
    </div>
  );
}