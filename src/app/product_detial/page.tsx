import Image from "next/image"


export default function Product(){
    return (
        
    <div>
        {/* First page start */}
        <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Left Section: Images */}
          <div className="flex flex-col space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/main-image.png" // Replace with your image path
                alt="One Life Graphic T-Shirt"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src="/side1.png" // Replace with your image path
                  alt="Alternate View"
                  width={150}
                  height={150}
                  className="w-full object-cover"
                />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src="/side2.png" // Replace with your image path
                  alt="Alternate View"
                  width={150}
                  height={150}
                  className="w-full object-cover"
                />
              </div>
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src="/side3.png" // Replace with your image path
                  alt="Alternate View"
                  width={150}
                  height={150}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="flex items-center space-x-2">
              <div className="text-yellow-500 text-lg">★★★★☆</div>
              <span className="text-gray-500 text-sm">4.5/5</span>
            </div>
            <div>
              <span className="text-xl font-bold text-green-600">$260</span>
              <span className="line-through text-gray-400 ml-2">$300</span>
              <span className="text-sm text-red-500 ml-2">-40%</span>
            </div>
            <p className="text-gray-600">
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable
              fabric, it offers superior comfort and style.
            </p>

            {/* Color Options */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Select Colors</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-green-800 border-2 border-black"></button>
                <button className="w-8 h-8 rounded-full bg-gray-700 border-2"></button>
                <button className="w-8 h-8 rounded-full bg-teal-500 border-2"></button>
              </div>
            </div>

            {/* Size Options */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Choose Size</h3>
              <div className="flex space-x-4">
                {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-lg border ${
                      size === 'Large' ? 'bg-black text-white' : 'bg-gray-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button className="px-3 py-2">-</button>
                <input
                  type="number"
                  defaultValue="1"
                  className="w-12 text-center border-l border-r"
                />
                <button className="px-3 py-2">+</button>
              </div>
              <button className="px-6 py-2 bg-black text-white rounded-lg">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* First page end */}

    </div>

    )
}
