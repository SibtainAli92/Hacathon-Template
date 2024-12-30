export default function Header() {
    return (
   <div>
     {/* Seventh page start */}
     <div className="bg-black text-white p-6 sm:p-8 lg:p-10  max-w-[1100px] flex flex-col items-center rounded-2xl -mb-7 mx-auto">
        {/* Content Wrapper */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center md:text-left">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>

          {/* Input and Button */}
          <div className="flex flex-col justify-center gap-4 md:gap-2 w-full h-[180px] md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-full text-center  focus:outline-none w-full md:w-[349px] h-[48px] text-black"
            />
            <button className="bg-white text-black px-4 py-2 rounded-full font-medium w-full md:w-[349px] h-[48px]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Seventh page end */}
   </div>
    );
}