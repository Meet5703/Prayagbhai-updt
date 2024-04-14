import React from "react";

const JourneyCardSkeleton = () => {
  return (
    <section>
      <div>
        <h1 className="text-[#FFB907] font-bold text-3xl ml-4 mr-4 md:ml-28 mt-32 animate-pulse"></h1>
        <p className="font-bold text-5xl ml-4 mr-4 md:ml-28 mt-3 animate-pulse"></p>
        <p className="text-[14px] ml-4 mr-4 md:ml-28 mt-10 animate-pulse"></p>
      </div>
      <div className="w-full h-full md:gap-28 flex flex-col mt-20">
        <div className="ml-4 mr-4 md:mr-0 md:ml-0">
          <div className="bg-[#e5d4ff] rounded-xl shadow-xl shadow-gray-300 md:w-4/5 md:ml-28 p-6 animate-pulse">
            {/* Placeholder for Timeline */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyCardSkeleton;
