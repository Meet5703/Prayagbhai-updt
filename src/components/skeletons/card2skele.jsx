import React from "react";

const Card2Skeleton = () => {
  return (
    <div className="-mt-28 md:mt-0 w-full flex flex-col items-center gap-4 ml-1 mr-6 md:gap-1 md:grid md:grid-cols-4 pb-10">
      <div className="cardSection__video col-span-2 animate-pulse bg-gray-300 rounded-lg overflow-hidden">
        <div className="relative w-full h-0 pb-[100%]">
          {/* Placeholder for the image */}
          <div className="absolute inset-0">
            <div className="h-full w-full bg-gray-200"></div>
          </div>
        </div>
      </div>

      <div className="cardSection__content col-span-2 px-4 mt-14 animate-pulse">
        <div className="h-6 bg-gray-200 w-2/3 rounded-lg mb-4"></div>
        <div className="h-4 bg-gray-200 w-1/2 rounded-lg mb-4"></div>
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col">
            <div className="h-4 bg-gray-200 w-1/2 rounded-lg mb-2"></div>
            <div className="h-3 bg-gray-200 w-1/3 rounded-lg"></div>
          </div>
        </div>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 w-full rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card2Skeleton;
