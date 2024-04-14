import React from "react";

const CarouselSkeleton = () => {
  // Create an array of placeholders to mimic the appearance of your images
  const placeholders = Array.from({ length: 15 }, (_, index) => index);

  return (
    <section className="w-full mt-12 md:mt-20">
      <p className="text-lg bg-gray-300 animate-pulse w-1/2 text-center font-sans text-gray-500"></p>
      <div className="w-full flex carousel mt-3 py-4">
        <div className="flex items-center justify-center md:justify-start animate-slide ">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="w-40 h-20 bg-gray-300 m-2 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSkeleton;
