import Image from "next/image";
import React from "react";
import img2 from "../assets/ntflx.png";
import img3 from "../assets/ibm.png";
import img4 from "../assets/microsoft.png";
import img5 from "../assets/google.png";
import img6 from "../assets/amazon.png";
import img7 from "../assets/adobe.png";

const CompniesCard = () => {
  return (
    <section className="bg-transparent p-4  md:p-8 relative mt-20">
      <span className="absolute left-[30%] -top-4 md:left-[43%] md:-top-1 flex items-center gap-2 md:text-lg  shadow-xl shadow-gray-300 rounded-full px-6  py-3 bg-white">
        <h1 className=" text-2xl font-bold text-[#5210B6] bg-white">7000+</h1>
        jobs
      </span>
      <div className=" md:px-4 pb-8 mx-auto lg:pb-16 py-4">
        <div className="grid grid-cols-2 md:ml-14 md:mr-14 bg-white gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 md:py-3">
          <Image
            src={img2}
            alt="ntflx"
            width={200}
            height={200}
            className="bg-transparent grayscale hover:cursor-pointer  hover:grayscale-0 flex items-center lg:justify-center"
          />
          <Image
            src={img3}
            alt="ibm"
            width={200}
            height={200}
            className="bg-transparent grayscale hover:cursor-pointer  hover:grayscale-0 flex items-center lg:justify-center"
          />
          <Image
            src={img4}
            alt="microsoft"
            width={200}
            height={200}
            className="bg-transparent grayscale hover:cursor-pointer  hover:grayscale-0 flex items-center lg:justify-center"
          />
          <Image
            src={img5}
            alt="google"
            width={200}
            height={200}
            className="bg-transparent grayscale hover:cursor-pointer  hover:grayscale-0 flex items-center lg:justify-center"
          />
          <Image
            src={img6}
            alt="amazon"
            width={200}
            height={200}
            className="bg-transparent grayscale hover:cursor-pointer  hover:grayscale-0 flex items-center lg:justify-center"
          />
          <Image
            src={img7}
            alt="adobe"
            width={200}
            height={200}
            className="bg-transparent grayscale hover:cursor-pointer  hover:grayscale-0 flex items-center lg:justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default CompniesCard;
