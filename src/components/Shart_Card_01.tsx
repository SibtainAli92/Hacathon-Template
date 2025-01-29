// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";

// interface ClothesCard {
//   image: string;
//   name: string;
//   ratingImage: string;
//   price: string;
//   orignalPrice?: string;
//   discountCopen?: string;
// }

// export default async function ClothesCard() {
//   const products = `*[_type == "products"]{
//   _id,
//     image,
//     name,
//     rating,
//     price,
//     ratingCount,
//     tags,
// }`;

//   const productData = await client.fetch(products);
//   console.log(productData);
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//   {productData.map((element: any) => (
//     <Link
//       href={`/category/${element._id}`}
//       key={element._id}
//       className="group relative"
//     >
//       <div className="flex flex-col gap-4 relative">
//         {/* Image Section */}
//         <div className="relative w-[295px] h-[298px] mx-auto">
//           <Image
//             src={urlFor(element.image).url()}
//             alt={"showimage"}
//             width={200}
//             height={200}
//             className="rounded-2xl object-cover w-full h-full gap-2 transform transition-transform duration-300 hover:scale-110"
//           />
//           {/* Add to Cart Button */}
//           <button
//             className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             onClick={(e) => {
//               e.preventDefault(); // Prevent navigation when clicking the button
//               console.log("Product added to cart:", element);
//             }}
//           >
//             Add to Cart
//           </button>
//         </div>

//         {/* Product Info */}
//         <div className="text-center">
//           <h4 className="font-bold">{element.name}</h4>
//           <div className="flex justify-center gap-4 text-sm">
//             <p className="font-bold">{element.price}</p>
//             <p className="text-gray-400 line-through">Rating: {element.rating}</p>
//             <p className="text-gray-400 line-through">
//               Rating Count: {element.ratingCount}
//             </p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   ))}
// </div>

//   );
// }
