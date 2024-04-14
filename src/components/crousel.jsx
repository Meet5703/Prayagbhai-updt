"use client";
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import image1 from "../assets/accenture.avif";
import image2 from "../assets/amazon.png";
import image3 from "../assets/swiggy.avif";
import image4 from "../assets/google.png";
import image5 from "../assets/adobe.png";

const CarouselAds = () => {
  const containerRef = useRef(null);
  const logos = [image2, image3, image1, image4, image5];

  useEffect(() => {
    const handleAnimationIteration = () => {
      containerRef.current.style.transform = "translateX(0)";
      containerRef.current.classList.remove("animate-slide");
      containerRef.current.offsetHeight; // Trigger reflow
      containerRef.current.classList.add("animate-slide");
    };

    containerRef.current.addEventListener(
      "animationiteration",
      handleAnimationIteration
    );
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "animationiteration",
          handleAnimationIteration
        );
      }
    };
  }, []);

  return (
    <section className="w-full mt-12 md:mt-20">
      <p className="    text-lg text-center  font-sans text-gray-500">
        Exciting opportunities await you with these companies! (500+ Companies)
      </p>
      <div className="w-full flex carousel mt-3 py-4">
        <div
          ref={containerRef}
          className="flex items-center justify-center md:justify-start animate-slide "
        >
          {logos.map((image, index) => (
            <Image
              key={index}
              className="grayscale hover:grayscale-0 md:w-auto md:h-auto"
              src={image}
              alt={`Logo ${index}`}
              width={150}
              height={150}
            />
          ))}
          {logos.map((image, index) => (
            <Image
              key={index + logos.length}
              className="grayscale hover:grayscale-0 md:w-auto md:h-auto"
              src={image}
              alt={`Logo ${index}`}
              width={150}
              height={150}
            />
          ))}
          {logos.map((image, index) => (
            <Image
              key={index + 2 * logos.length}
              className="grayscale hover:grayscale-0 md:w-auto md:h-auto"
              src={image}
              alt={`Logo ${index}`}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselAds;
