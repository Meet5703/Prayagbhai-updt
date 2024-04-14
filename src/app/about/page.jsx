"use client";
import NavbarByMe from "@/components/navbar";
import NavbarSkeleton from "@/components/skeletons/navbarskele";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../../assets/624x316.png";
import img2 from "../../assets/720.png";
import img3 from "../../assets/343.png";

const About3 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <NavbarSkeleton />
          <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6  py-10 px-4">
            <p className="font-bold text-base md:text-2xl leading-3 text-[#feba01] animate-pulse"></p>
            <p className="font-bold text-2xl md:text-4xl md:mb-4 leading-9 text-gray-800 md:-mt-1 animate-pulse"></p>
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
              <div className="w-full lg:w-6/12">
                <p className="font-normal text-base text-justify leading-6 text-gray-600 mt-6 animate-pulse">
                  {/* Placeholder for first paragraph */}
                </p>
                <p className="font-normal text-base text-justify leading-6 text-gray-600 mt-6 animate-pulse">
                  {/* Placeholder for second paragraph */}
                </p>
              </div>
              <div className="w-full lg:w-6/12">
                <div className="lg:block hidden w-full animate-pulse">
                  {/* Placeholder for large image */}
                </div>
                <div className="lg:hidden sm:block hidden w-full animate-pulse">
                  {/* Placeholder for medium image */}
                </div>
                <div className="sm:hidden block w-full animate-pulse">
                  {/* Placeholder for small image */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="sticky top-0">
            <NavbarByMe />
          </div>
          <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6   py-10 px-4">
            <p className="font-bold text-base md:text-2xl leading-3 text-[#feba01]  ">
              About Us
            </p>
            <p className="font-bold text-2xl md:text-4xl md:mb-4 leading-9 text-gray-800 md:-mt-1">
              Empowering Careers, Fulfilling Dreams
            </p>
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
              <div className="w-full lg:w-6/12">
                <p className="font-normal text-base text-justify leading-6 text-gray-600 mt-6">
                  At Data Skills Hub, we understand the challenges faced by
                  students and working professionals in landing their dream
                  jobs. That's why we offer a unique Pay after Placement program
                  designed to bridge the gap between education and employment.
                  Through this innovative initiative, students and professionals
                  can enroll in our courses with the assurance that they will
                  only pay after securing a job in their desired field. Our
                  comprehensive training, personalized mentorship, and industry
                  connections prepare participants to excel in interviews and
                  stand out to employers. With our Pay after Placement program,
                  we empower individuals to turn their career aspirations into
                  reality, providing a pathway to success and fulfillment in
                  their chosen professions.
                </p>
                <p className="font-normal text-base text-justify leading-6 text-gray-600 mt-6">
                  Our mission at Data Skills Hub is to empower individuals with
                  the knowledge, skills, and opportunities needed to achieve
                  their career aspirations. Through innovative education
                  programs, personalized support, and industry connections, we
                  strive to bridge the gap between learning and employment,
                  enabling our students and professionals to realize their full
                  potential and thrive in their chosen fields.
                </p>
              </div>
              <div className="w-full lg:w-6/12">
                <Image
                  className="lg:block hidden w-full"
                  src={img1}
                  width={1000}
                  height={1000}
                  alt="people discussing on board"
                />
                <Image
                  className="lg:hidden sm:block hidden w-full"
                  src={img2}
                  width={1000}
                  height={1000}
                  alt="people discussing on board"
                />
                <Image
                  className="sm:hidden block w-full"
                  src={img3}
                  width={1000}
                  height={1000}
                  alt="people discussing on board"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About3;
