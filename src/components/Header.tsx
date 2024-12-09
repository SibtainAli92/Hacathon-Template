import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
    return (
        <div className="bg-black text-gray-200 p-4">
            <div className="mx-auto flex flex-col md:flex-row justify-between items-center text-center">
                {/* Left Section: Text and Link */}
                <div className="flex flex-col md:flex-row items-center">
                    <h1 className="pl-4 xl:pl-96 font-Poppins text-gray-100 text-base sm:text-lg md:text-xl">
                        Sign up and get 20% off your first order.
                    </h1>
                    <Link href="hcg" className="underline font-bold mt-2 md:mt-0 md:ml-4">
                        Sign Up Now
                    </Link>
                </div>

                {/* Close Icon Section */}
                <div className="mt-4 xl:pr-16 md:mt-0 md:ml-auto">
                    <button
                        aria-label="Close Header"
                        className=" flex items-center justify-center text-2xl hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        <RxCross1 className="sm:block hidden"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
