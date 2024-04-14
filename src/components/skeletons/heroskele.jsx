import React from "react";

const HeroSkeleton = () => {
  return (
    <main className="flex flex-col md:flex-row mt-10">
      <section className="md:ml-40 lg:ml-[10%] md:w-[40%] lg:w-full flex flex-col justify-center gap-16 px-8">
        <div className="md:mt-24 flex flex-col gap-5">
          <strong className="flex items-center text-lg md:text-2xl gap-4 text-green-500">
            <span className="material-symbols-outlined scale-150 bg-gray-300 animate-pulse w-12 h-12 rounded-full"></span>
            <span className="bg-gray-300 animate-pulse w-24 h-6 rounded-md"></span>
          </strong>
          <strong className="text-3xl  md:text-5xl font-semibold">
            <h1>
              <span className="text-[rgba(255,163,34,0.95)] bg-gray-300 animate-pulse w-96 h-10 inline-block rounded-md"></span>{" "}
            </h1>
          </strong>
          <span>
            <p className="w-4/5 bg-gray-300 animate-pulse text-lg text-gray-500 h-16 rounded-md"></p>
          </span>
        </div>
        <div>
          <div className="animate-pulse bg-gray-300 text-white w-40 h-12 rounded-md"></div>
        </div>
        <div className="">
          <section className="w-full  flex">
            <div className="flex w-full justify-center md:w-1/2  py-6 px-2 items-center gap-4 border-r border-gray-600 lg:ml-1">
              <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full"></div>
              <div className=" w-full lg:w-1/2 lg:ml-1 ">
                <div className="animate-pulse bg-gray-300 w-20 h-8 rounded-md"></div>
                <div className="animate-pulse bg-gray-300 w-16 h-4 rounded-md"></div>
              </div>
            </div>
            <div className="flex w-full lg:ml-3 justify-center md:w-1/2  py-6 px-3 items-center gap-4">
              <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full"></div>
              <div className=" w-full xl:w-1/2 lg:ml-1">
                <div className="animate-pulse bg-gray-300 w-20 h-8 rounded-md"></div>
                <div className="animate-pulse bg-gray-300 w-16 h-4 rounded-md"></div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="w-full lg:w-full md:w-[60%] pt-20 scale-125 hidden md:block">
        <div className="animate-pulse bg-gray-300 w-96 h-60 rounded-md"></div>
      </section>
    </main>
  );
};

export default HeroSkeleton;
