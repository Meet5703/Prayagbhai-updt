"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import img1 from "../assets/wepik-export-202404081730305xPQ.png";
import Image from "next/image";
const DataScience = () => {
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/profile");
      if (response.data) {
        setData(response.data);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error.message);
      setData(null);
      setIsLoggedIn(false);
      router.push("/login");
    }
  };

  // Empty dependency array to ensure it runs only once
  return (
    <main className="flex flex-col md:flex-row mt-0 md:-mt-9 relative">
      <section className="lg:mx-20 md:w-[40%] z-20 flex flex-col justify-center gap-16 px-8">
        <div className="md:mt-24 items-center md:items-start flex flex-col gap-5">
          <strong
            className=" font-[900] text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <p
              className="text-2xl lg:text-[40px] xl:text-5xl"
              style={{ lineHeight: 1.3 }}
            >
              Data Science &{" "}
              <span className="text-[#ffa72d]"> Generative AI</span>
            </p>
          </strong>
          <div className="w-16 rounded lg:w-32 h-1 bg-gradient-to-r from-[#530fb8] via-[#7328e3] to-[#8343e3]"></div>
          <span data-aos="fade-right" data-aos-duration="500">
            <p className="text-lg text-gray-500">
              Welcome to our Data Science and Generative AI Course! Our
              comprehensive course, designed to equip you with cutting-edge
              skills for real-world applications.
            </p>
          </span>
        </div>
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex w-full md:flex-row flex-col gap-y-4 md:mr-52">
            <span className="flex flex-col w-full">
              <p className="text-base md:text-2xl text-[#ffa72d]">Price</p>
              <p className="text-base md:text-xl text-white bg-[#530fb8] border border-[#530fb8] px-6 py-2 rounded-md text-center">
                8000 ₹
              </p>
            </span>
            <span className="flex flex-col md:ml-8 lg:ml-6 w-full">
              <p className="text-base w-full md:text-2xl text-[#ffa72d]">
                Start Date
              </p>
              <p className="text-base md:text-xl text-white bg-[#530fb8] border border-[#530fb8] px-6 py-2 rounded-md text-center">
                15-05-2024
              </p>
            </span>
          </div>
          <Link
            data-aos="fade-right"
            data-aos-duration="500"
            onClick={getUserDetails}
            href="/pay"
            className="ov-btn-slide-left"
          >
            <div className=" text-center py-3 md:py-0 md:text-base md:px-8 px-0 flex items-center gap-4 bg-transparent">
              <span className="bg-transparent ml-[30%]  md:ml-[35%]">
                Enroll Now
              </span>
            </div>
          </Link>
          <div className="flex md:flex-row flex-col w-full ">
            <span
              data-aos="fade-right"
              data-aos-duration="500"
              className="mt-10 md:animate-bounce w-fit shadow-[3px_10px_18px_#c299ff,_-3px_-10px_18px_#c299ff]  "
            >
              <p className="text-sm px-10 xl:px-10 py-3 xl:py-3 lg:text-center lg:px-0 shadow-2xl w-fit font-bold text-[#530fb8] bg-white">
                *Only 30 Seats Available
              </p>
            </span>
            <span
              data-aos="fade-right"
              data-aos-duration="500"
              className="mt-10 md:ml-10 md:animate-bounce w-fit shadow-[3px_10px_18px_#c299ff,_-3px_-10px_18px_#c299ff]  "
            >
              <p className="text-sm px-9 xl:px-9 xl:py-3  md:px-10 lg:px-0 lg:text-center py-3 w-fit shadow-2xl  font-bold text-[#530fb8] bg-white">
                No coding skills required
              </p>
            </span>
          </div>
        </div>
      </section>
      <section className="w-full md:w-[100%] pt-16 lg:pt-40 xl:pt-24 xl:scale-100 lg:scale-150 2xl:scale-75 hidden md:block">
        <Image
          data-aos="fade-left"
          data-aos-duration="500"
          className="w-full"
          src={img1}
          alt="main-2"
          width={1000}
          height={1000}
        />
      </section>
    </main>
  );
};

export default DataScience;
