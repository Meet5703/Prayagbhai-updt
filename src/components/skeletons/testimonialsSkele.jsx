import React from "react";

const TestimonialSkeleton = () => {
  return (
    <div className="w-3/4 m-auto mt-20">
      <h6 className="text-[#ffa83c] -ml-8 md:text-2xl animate-pulse">
        TESTIMONIALS
      </h6>
      <p className="text-3xl font-semibold w-screen -ml-8 md:text-5xl animate-pulse">
        Explore Inspiring Alumni Journeys{" "}
      </p>
      <div className="mt-20 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {[...Array(3).keys()].map((index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-xl border-[#4c1d95] h-full md:mb-10 md:mr-5 md:scale-100 scale-[0.85] px-4 py-2 md:p-10 animate-pulse"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full"></div>
                <div className="h-6 w-28 md:w-36 bg-gray-300 rounded-lg"></div>
              </div>
              <div className="h-full bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSkeleton;
