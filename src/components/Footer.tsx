import Link from "next/link"
import Image from "next/image"
 
export default function Footer(){
    return (
 <div className="mx-auto px-4 sm:px-6 w-fit lg:px-8">
 {/* Grid Container */}
 <div className="py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[248px_104px_136px_149px_149px] gap-y-10 lg:gap-28">
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
       <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
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

    )
}