import React from "react";

const DataScienceSkeleton = () => {
  return (
    <main className="flex flex-col md:flex-row mt-0 relative">
      <section className="lg:mx-20 md:w-[40%] flex flex-col justify-center gap-16 px-8">
        <div className="md:mt-24 items-center md:items-start flex flex-col gap-5">
          <div
            className="bg-gray-300 w-full h-16 md:h-24 animate-pulse"
            data-aos="fade-right"
            data-aos-duration="1000"
          ></div>
          <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex w-full md:flex-row flex-col gap-y-4 md:mr-52">
            <div className="flex flex-col w-full">
              <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
              <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
            </div>
            <div className="flex flex-col md:ml-8 lg:ml-6 w-full">
              <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
              <div className="w-full h-8 bg-gray-300 animate-pulse"></div>
            </div>
          </div>
          <div className="bg-gray-300 w-full h-12 md:h-16 animate-pulse ov-btn-slide-left"></div>
          <div className="flex md:flex-row flex-col w-full">
            <div className="mt-10 md:animate-bounce w-full h-12 md:h-16 bg-gray-300 animate-pulse"></div>
            <div className="mt-10 md:ml-10 md:animate-bounce w-full h-12 md:h-16 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      </section>
      <section className="w-full md:w-[36%] pt-20 pl-10 md:pl-20 hidden md:block">
        <div className="w-full h-full bg-gray-300 animate-pulse"></div>
      </section>
    </main>
  );
};

export default DataScienceSkeleton;
