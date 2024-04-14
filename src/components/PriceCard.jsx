"use client";
import React, { useState, useEffect } from "react";
import masterclassGif from "../assets/10780490_19197131-Photoroom.png-Photoroom.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const PriceCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
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
      }
    };
    getUserDetails();
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <section className="px-8">
      <div className=" mt-10 w-full rounded-2xl  flex flex-col justify-center gap-4  md:gap-0 md:grid md:grid-cols-4 pb-10">
        <div className=" bg-transparent cardSection__content space-y-10 col-span-2 ml-1 md:ml-[25%] md:mr-[10%] mt-14">
          <div className="space-y-2 bg-transparent">
            <h2
              className="bg-transparent ml-1 md:text-lg font-bold text-[#ffa83c] "
              data-aos="fade-right"
              data-aos-duration="500"
            >
              PROGRAM FEE
            </h2>
            <p
              className="bg-transparent text-white font-[900] text-4xl w-4/5"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              Let's enroll!
            </p>
          </div>

          <div className="flex items-center gap-2 bg-transparent">
            <span className="text-yellow-400 material-symbols-outlined scale-75 p-1 rounded-full bg-[#a97eee]">
              percent
            </span>
            <span className="text-xl bg-transparent font-semibold text-yellow-500">
              <i className="bg-transparent ml-1">Limited Time Offer</i>
              <span className="text-white bg-transparent"> -20% off</span>
            </span>
          </div>
          <div className="px-6 bg-[#7636de] md:px-0 md:bg-transparent shadow-xl shadow-gray-400 text-white border-2 border-violet-950 rounded-2xl">
            <div className="rounded-t-2xl font-bold text-yellow-400 flex items-center gap-2 bg-[#7636de] text-2xl md:text-3xl p-5">
              <span className="bg-[#7636de] material-symbols-outlined">
                currency_rupee
              </span>
              8000rs
            </div>
            <div className="bg-transparent w-full ">
              <h1 className="text-2xl rounded-b-2xl font-semibold p-5 bg-[#7636de]">
                Total Price : 8000rs
                <span
                  className="ml-6"
                  style={{
                    textDecoration: "line-through",
                    backgroundColor: "transparent"
                  }}
                >
                  10000rs
                </span>
              </h1>
            </div>
          </div>

          <Link
            data-aos="fade-down"
            data-aos-duration="500"
            href={isLoggedIn ? "/pay" : "/login"} // Redirect based on login state
            className="ov-btn-slide-left scale-75 md:scale-0 "
          >
            <div className="flex items-center gap-2 bg-transparent">
              <span className="bg-transparent">Enroll now</span>
              <span className="material-symbols-outlined bg-transparent">
                keyboard_double_arrow_right
              </span>
            </div>
          </Link>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="cardSection__video hidden md:block col-span-2 bg-transparent"
        >
          <Image
            className="w-4/5 ml-6 md:ml-0 md:w-1/2 mt-16 bg-transparent"
            src={masterclassGif}
            alt="gif"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default PriceCard;
