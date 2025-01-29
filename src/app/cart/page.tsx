"use client";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { decrementQuantity, getCart, incrementQuantity, removeFromTheCart } from "../../../redux/cartSlice";
import { Products } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Brand() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const productCart = useAppSelector(getCart) || []; // Fallback for cart
    let totalPrice = 0;

    useEffect(() => {
        if (productCart.length > 0 || loading) {
            setLoading(false); // Disable loading after data is fetched
        }
    }, [productCart]);

    productCart.forEach((item: Products) => {
        totalPrice += item.price * item.quantity;
    });

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-black">Loading product, please wait...</p>
      </div>
        );
    }


    return (
        <div className="p-4 md:p-8 mx-auto w-fit">
            {/* first page start */}
            <div className="text-sm text-gray-900 mb-6 ">
                <span className="cursor-pointer hover:underline">Home</span> /{" "}
                <span className="font-semibold">Cart</span>
            </div>

            {/* Main Content */}
            <h1 className="text-2xl md:text-3xl font-extrabold mb-8">YOUR CART</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cart Items Section */}
                <div className="col-span-2 space-y-6">
                    {productCart.length > 0 ? (
                        productCart.map((item: Products, index: number) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl shadow-md p-4"
                            >
                                {item.image && (
                                    <Image
                                        src={urlFor(item.image).url()}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-lg"
                                        height={100}
                                        width={100}
                                    />
                                )}
                                <div className="flex-1 text-center sm:text-left">
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <p className="mt-2 font-semibold">${item.price}</p>
                                </div>
                                <div className="flex items-center justify-center sm:justify-start">
                                    <span className="h-10 w-[120px] bg-[#F0F0F0] gap-4 border-[#9F9F9F] text-base font-medium rounded-full flex items-center justify-between px-3">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (item.quantity > 1) {
                                                    dispatch(decrementQuantity(item));
                                                }
                                            }}
                                            className="text-3xl"
                                        >
                                            -
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                dispatch(incrementQuantity(item));
                                            }}
                                            className="text-3xl"
                                        >
                                            +
                                        </button>
                                    </span>
                                </div>
                                <button
                                    className="text-red-500 hover:text-red-700 mt-4 sm:mt-0"
                                    onClick={() => {
                                        dispatch(removeFromTheCart(item._id));
                                    }}
                                >
                                    <i className="fas fa-trash">Remove</i>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-red-400 font-medium">
                            Your cart is empty. Add some products to see them here!
                        </p>
                    )}
                </div>

                {/* Order Summary Section */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 space-y-6">
                    <h2 className="text-2xl font-semibold">Order Summary</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="font-semibold">${totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-red-500 font-semibold">-${totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery Fee</span>
                            <span className="font-semibold">$00</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>${totalPrice}</span>
                        </div>
                    </div>

                    {/* Promo Code Input */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="text"
                            placeholder="Add promo code"
                            className="flex-1 px-4 py-2 border rounded-full"
                        />
                        <button className="bg-black text-white px-4 py-2 rounded-full w-full sm:w-auto">
                            Apply
                        </button>
                    </div>

                    {/* Checkout Button */}
                    <Link href={"/checkout"}>
                        <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800">
                            Go to Checkout →
                        </button>
                    </Link>
                </div>
            </div>
            {/* first page end */}
        </div>
    );
}
