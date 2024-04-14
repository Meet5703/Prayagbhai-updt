import React from "react";

const VerticalTabsSkeleton = () => {
  return (
    <div className="px-4 md:px-10 mt-12">
      <div className="flex flex-col gap-2 py-10">
        <h1 className="text-sm text-orange-500 font-bold md:text-base animate-pulse"></h1>
        <p className="text-3xl md:text-4xl font-[900] animate-pulse"></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  md:grid-rows-1 w-full h-full">
        {/* Tab List */}
        <div className="w-full bg-transparent col-span-1 ">
          <div className="flex overflow-x-scroll w-full md:overflow-x-hidden h-full  md:flex-col gap-6 whitespace-nowrap md:whitespace-normal my-3 md:my-0 ">
            {[...Array(4).keys()].map((index) => (
              <div key={index} className="w-full md:w-auto animate-pulse">
                <div className="w-28 h-20 md:w-full md:h-32 bg-gray-300 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="col-span-1 md:col-span-2 w-full flex-1 bg-white md:p-4">
          {[...Array(4).keys()].map((index) => (
            <div
              key={index}
              className="bg-white space-y-6 mt-8 px-3 md:ml-20 animate-pulse"
            >
              <div className="text-4xl bg-transparent font-bold h-12 w-64 md:w-full animate-pulse"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent">
                <div className="col-span-1 bg-transparent space-y-4">
                  {[...Array(4).keys()].map((innerIndex) => (
                    <div
                      key={innerIndex}
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-full"></div>
                      <div className="h-6 w-60 md:w-72 bg-gray-300 rounded-lg"></div>
                    </div>
                  ))}
                </div>
                <div className="col-span-1 bg-transparent">
                  <div className="w-full h-96 md:h-72 bg-gray-300 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTabsSkeleton;
