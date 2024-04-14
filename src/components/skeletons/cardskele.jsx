import React from "react";

const CardSkeleton = () => {
  return (
    <section className="md:py-16 mt-12 md:mt-20">
      <h1 className="text-center text-[#ffa83c] font-bold uppercase animate-pulse">
        {/* Skeleton for heading */}
      </h1>
      <br />
      <h1 className="text-center text-2xl md:text-4xl font-bold animate-pulse">
        {/* Skeleton for subheading */}
      </h1>
      <br />
      <p className="text-center text-sm text-gray-500 animate-pulse">
        {/* Skeleton for description */}
      </p>
      <br />
      <div className="container m-auto px-2 text-gray-500 md:px-12 xl:px-0">
        <div className="xl:p-20 grid-rows-4 md:grid-rows-1 grid grid-cols-1 gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="row-span-1 col-span-1 px-4 bg-gray-300 rounded-2xl shadow-xl py-12 sm:px-12 lg:px-3 xl:px-8 md:mb-20 relative h-full animate-pulse"
            >
              <div className="md:mb-12 md:space-y-4 bg-gray-300">
                <h3 className="text-2xl font-semibold bg-gray-300 animate-pulse">
                  {/* Skeleton for heading */}
                </h3>
                <br className="md:hidden" />
                <p className="mb-6 bg-gray-300">
                  {/* Skeleton for description */}
                </p>
              </div>
              <div className="w-2/4 lg:w-2/3 xl:w-2/4 hidden md:block ml-auto -mb-12 absolute bg-gray-300 -bottom-4 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <div className="hidden sm:flex sm:items-center">
          <div className="text-white text-sm font-semibold border bg-[rgb(83,15,184)] px-6 py-3 rounded-lg hover:text-[rgb(83,15,184)] hover:border-[rgb(83,15,184)] hover:bg-white ease-in-out duration-300 animate-pulse">
            {/* Skeleton for button text */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSkeleton;
