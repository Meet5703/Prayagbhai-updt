import React from "react";

const CourseCardSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 rounded-lg shadow-lg animate-pulse">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <div className="w-full h-80 md:h-auto bg-gray-300 rounded-lg"></div>
      </div>
      <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
        <div className="h-6 w-2/3 bg-gray-300 rounded-lg mb-4"></div>
        <div className="h-8 w-full bg-gray-300 rounded-lg mb-4"></div>
        <div className="h-8 w-4/5 bg-gray-300 rounded-lg mb-4"></div>
        <div className="h-32 w-full bg-gray-300 rounded-lg mb-4"></div>
        <div className="flex justify-center flex-col gap-4">
          <div className="h-12 w-full bg-yellow-500 rounded-lg"></div>
          <div className="h-12 w-36 bg-[rgb(83,15,184)] rounded-lg"></div>
        </div>
        <div className="flex mt-4 md:flex-row flex-col gap-8 xl:ml-28">
          <div className="h-12 w-full bg-gray-300 rounded-lg"></div>
          <div className="h-12 w-full bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
