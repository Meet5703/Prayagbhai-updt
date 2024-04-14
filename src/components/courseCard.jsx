"use client";
import React, { useState } from "react";
import Img1 from "../assets/Data_Analysis_asg_01.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
const CourseCard = () => {
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
  return (
    <div className="flex flex-col md:flex-row  p-8 rounded-lg shadow-lg ">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <div
          className="w-full h-full rounded-lg overflow-hidden "
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <Image
            src={Img1}
            alt="Data Analyst Course"
            layout="responsive"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-bold text-[rgb(255,168,60)]">
          Build Your Career With Our
        </h2>
        <h2
          className="text-3xl md:text-4xl font-bold  mb-2"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          Data Science and Generative AI course
        </h2>
        <p
          className="text-lg text-gray-800  mb-4"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          Welcome to our Data Science and Generative AI Course! Our
          comprehensive course, designed to equip you with cutting-edge skills
          for real-world applications.
        </p>
        <div className="mb-4">
          <h3
            className="text-2xl font-bold  mb-2"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            Key Features
          </h3>
          <ul
            className="list-disc list-inside text-lg text-gray-800 "
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <li>Interactive Live Classes</li>
            <li>One to One Doubt Session</li>
            <li>Real-world case studies</li>
            <li>Pay after Placement</li>
            <li>Resume Building</li>
            <li>Interview Mock call Practice</li>
            <li>Support community</li>
          </ul>
        </div>
        <div
          className="flex justify-center flex-col gap-4"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <p
            data-aos="fade-left"
            data-aos-duration="500"
            className="text-white w-fit p-2 bg-yellow-500 font-semibold text-lg"
          >
            Limited Seats available
          </p>
          <Link
            onClick={getUserDetails}
            href="/pay"
            className="text-white text-center  text-sm font-semibold border  bg-[rgb(83,15,184)] px-6 py-3 rounded-lg hover:text-[rgb(83,15,184)] hover:border-[rgb(83,15,184)] hover:bg-white ease-in-out duration-300"
          >
            Enroll Now
          </Link>
        </div>
        <div className="flex mt-4 md:flex-row flex-col gap-8  xl:ml-28">
          <Link
            data-aos="fade-up"
            data-aos-duration="500"
            href="#"
            className="ov-btn-slide-left scale-75 md:scale-0"
          >
            <div className="flex py-2 items-center gap-2 bg-transparent">
              <span className="bg-transparent">Download Brochure</span>
              <span className="material-symbols-outlined bg-transparent">
                download
              </span>
            </div>
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-duration="500"
            href="/explore"
            className="ov-btn-slide-left scale-75 md:scale-0 "
          >
            <div className="flex items-center py-2 gap-2 bg-transparent">
              <span className="bg-transparent">Learn More</span>
              <span className="material-symbols-outlined bg-transparent">
                keyboard_double_arrow_right
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
