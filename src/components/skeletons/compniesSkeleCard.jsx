import React from "react";

const CompaniesCardSkeleton = () => {
  return (
    <section className="bg-transparent p-4 md:p-8 relative mt-20">
      <span className="absolute left-[30%] -top-4 md:left-[43%] md:-top-1 flex items-center gap-2 md:text-lg shadow-xl shadow-gray-300 rounded-full px-6 py-3 bg-white">
        <h1 className="text-2xl font-bold text-[#5210B6] bg-white animate-pulse">
          7000+
        </h1>
        jobs
      </span>
      <div className="md:px-4 pb-8 mx-auto lg:pb-16 py-4">
        <div className="grid grid-cols-2 md:ml-14 md:mr-14 bg-white gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 md:py-3">
          {/* Placeholder for image */}
          <div className="bg-gray-300 w-full h-48 md:h-64 animate-pulse"></div>
          <div className="bg-gray-300 w-full h-48 md:h-64 animate-pulse"></div>
          <div className="bg-gray-300 w-full h-48 md:h-64 animate-pulse"></div>
          <div className="bg-gray-300 w-full h-48 md:h-64 animate-pulse"></div>
          <div className="bg-gray-300 w-full h-48 md:h-64 animate-pulse"></div>
          <div className="bg-gray-300 w-full h-48 md:h-64 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesCardSkeleton;
