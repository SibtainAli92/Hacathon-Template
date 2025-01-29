"use client";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { useAppSelector } from "../../hooks/redux";
import { getCart } from "../../redux/cartSlice";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const productCart = useAppSelector(getCart)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [query , setquery] = useState<string>("")


  const router = useRouter();
  const serachResultHandler = () =>{
    router.push(`/search/${query}`)
  }

  
  const handleSearch = () => {
    if (query.trim() === "") {
      console.error("Search query is empty");
      return;
    }
    console.log("Searching for:", query);
    // Perform your search logic here
  };

  return (
    <div className="bg-white text-black p-4 md:p-8 max-w-[1440px] mx-auto ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-10 h-10 text-black bg-gray-200 rounded focus:outline-none hover:bg-gray-300 md:hidden"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Logo */}
        <Link href="/">
        <h1 className="text-xl md:text-4xl font-extrabold font-Poppins">
          SHOP.CO
        </h1>
        </Link>

        {/* Navigation Links */}
        <nav
          className={`hidden md:flex space-x-2 ${
            menuOpen ? "flex" : "hidden"
          } md:space-x-8`}
        >
          <Link href="/category" className="text-lg hover:text-[#504f4d] hover:underline">
            Shop
          </Link>
          <Link href="/#on-sale" className="text-lg hover:text-[#504f4d] hover:underline">
            On Sale
          </Link>
          <Link href="/#new-arrivals" className="text-lg hover:text-[#504f4d] hover:underline">
            New Arrivals
          </Link>
          <Link href="/#brand" className="text-lg hover:text-[#504f4d] hover:underline">
            Brand
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center w-fit max-w-[400px]">
          {/* Full search bar for medium+ screens */}
          <div className="hidden lg:flex items-center  bg-[#F5F5F5] rounded-full overflow-hidden w-64 xl:w-full">
            <label htmlFor="Search-bar" className="flex items-center w-full">
              <button onClick={serachResultHandler}>
              <BsSearch className="text-2xl ml-4" />
              </button>
              <input
                type="text"
                placeholder="Search for Product..."
                id="Search-bar"
                className="flex-grow outline-none placeholder:text-lg bg-transparent py-2 px-4"
                value={query}
              onChange={(e) => setquery (e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(); // Call the search function when "Enter" is pressed
                }
              }}
              />
            </label>
          </div>
          {/* Search icon for small screens */}
          <button className="flex lg:hidden  items-center justify-center w-10 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300">
            <BsSearch className="text-xl" />
          </button>
        </div>

        {/* User Icon */}
        <div className="flex gap-4 items-center md:mr-30">
          <IoMdHeartEmpty className="h-9 w-9" />
          <Link href={'/cart'} className="relative">
  <AiOutlineShoppingCart className="h-9 w-9" />
  <p className="absolute top-0 right-0 text-xs rounded-full px-2 py-1 bg-red-500 text-white transform translate-x-1/2 -translate-y-1/2">
  {productCart.length}
</p>
</Link>

        </div>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {menuOpen && (
        <div className="flex flex-col items-center space-y-2 bg-white p-4 md:hidden">
          <Link href="/category" className="text-black">
            Shop
          </Link>
          <Link href="/#on-sale" className="text-black">
            On Sale
          </Link>
          <Link href="/#new-arrivals" className="text-black">
            New Arrivals
          </Link>
          <Link href="/#brand" className="text-black">
            Brand
          </Link>
        </div>
      )}
    </div>
  );
}