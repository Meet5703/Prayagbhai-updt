"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../assets/mentored-by-best-removebg-preview.png";
import img2 from "../assets/learn-in-live-classes-removebg-preview.png";
import img3 from "../assets/level-up-resume-removebg-preview.png";
import img4 from "../assets/secure-a-job (1)-Photoroom.png-Photoroom.png";
import Link from "next/link";
import Aos from "aos";

const Card = () => {
  return (
    <section className="md:py-16 mt-12 md:mt-20">
      <h1
        className="text-center  text-[#ffa83c] font-bold uppercase"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        Why Data Skills Hub
      </h1>
      <br />
      <h1
        className="text-center text-2xl md:text-4xl font-bold"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        From learning to earning With Our{" "}
        <span className="text-[#ffa83c] font-bold">Pay After Placement</span>
      </h1>
      <br />
      <p
        className="text-center  text-sm text-gray-500"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        Join us, learn, get hired, and pay later!
      </p>
      <br />
      <div className="container m-auto px-2 text-gray-500 md:px-12 xl:px-0">
        <div className="xl:p-20 grid-rows-4 md:grid-rows-1 grid grid-cols-1 gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
          <div
            className="row-span-1 col-span-1 px-4  bg-white rounded-2xl shadow-xl py-12 sm:px-12 lg:px-3 xl:px-8 md:mb-20 relative h-full"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="md:mb-12 md:space-y-4  bg-white">
              <h3 className="text-2xl font-semibold bg-white text-purple-900">
                Top-notch Industry Expert Mentors
              </h3>
              <br className="md:hidden" />
              <p className="mb-6 bg-white">
                Receive personalized guidance and insights from our team of
                top-notch industry experts to propel your learning journey
                forward.
              </p>
            </div>
            <Image
              src={img}
              className="w-2/4 lg:w-2/3 xl:w-2/4 hidden md:block ml-auto -mb-12 absolute bg-transparent lg:bottom-4 xl:-bottom-4"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600}
              data-aos="fade-right"
              data-aos-duration="500"
            />
          </div>
          <div
            className="row-span-1 col-span-1  bg-white rounded-2xl shadow-xl px-4 xl:px-8 py-12 sm:px-12 lg:px-3 md:mt-20 relative h-full"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <div className="md:mb-12 md:space-y-4 bg-white">
              <h3 className="text-2xl font-semibold bg-white text-purple-900">
                Learn in Interactive Live Classes
              </h3>
              <br className="md:hidden" />
              <p className="mb-6 bg-white">
                Experience dynamic learning through interactive live classes,
                where engagement and collaboration fuel your educational
                journey.
              </p>
            </div>
            <Image
              src={img2}
              className="w-2/4 xl:w-2/4 lg:w-2/3 hidden md:block ml-auto -mb-14 absolute bg-transparent lg:bottom-8 xl:-bottom-8"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600}
              data-aos="fade-up"
              data-aos-duration="500"
            />
          </div>
          <div
            className="row-span-1 col-span-1  bg-white rounded-2xl shadow-xl px-4 xl:px-8 py-12 sm:px-12 lg:px-3 md:mb-20 relative h-full"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="md:mb-12 md:space-y-4 bg-white">
              <h3 className="text-2xl font-semibold bg-white text-purple-900">
                ATS Friendly Resume & Interview Mock call
              </h3>
              <br className="md:hidden" />
              <p className="mb-6 bg-white">
                Craft resumes optimized for Applicant Tracking Systems and hone
                interview skills through realistic mock calls, ensuring
                readiness for career advancement.
              </p>
            </div>
            <Image
              src={img3}
              className="w-2/4 xl:w-2/4 lg:w-2/3 hidden md:block ml-auto md:-mb-14 absolute bg-transparent md:-bottom-5"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600}
              data-aos="fade-down"
              data-aos-duration="500"
            />
          </div>
          <div
            className="row-span-1 col-span-1  bg-white rounded-2xl shadow-xl px-4 xl:px-8 py-12 sm:px-12 lg:px-3 md:mt-20 relative h-full"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <div className="md:mb-12 md:space-y-4 bg-white">
              <h3 className="text-2xl font-semibold bg-white text-purple-900">
                Get A Dream Job
              </h3>
              <br className="md:hidden" />
              <p className="mb-6 bg-white">
                Empower your career journey with our personalized support and
                expert resources, guiding you towards your dream job. Elevate
                your job search and secure your ideal role today.
              </p>
            </div>
            <Image
              src={img4}
              className="w-2/4 xl:w-[60%] lg:w-[70%] hidden md:block ml-auto -mb-14 absolute bg-transparent lg:bottom-5 xl:-bottom-5"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600}
              data-aos="fade-left"
              data-aos-duration="500"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <div className="hidden sm:flex sm:items-center">
          <Link
            href="/explore"
            className="text-white  text-sm font-semibold border  bg-[rgb(83,15,184)] px-6 py-3 rounded-lg hover:text-[rgb(83,15,184)] hover:border-[rgb(83,15,184)] hover:bg-white ease-in-out duration-300"
            data-aos="flip-up"
            data-aos-duration="500"
          >
            Explore Programmes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
