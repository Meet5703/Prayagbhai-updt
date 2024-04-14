"use client";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "../assets/pay ap 1.avif";
import img2 from "../assets/payap2.avif";
import img3 from "../assets/paap3.avif";
import img4 from "../assets/paap4.avif";
import imgil1 from "../assets/payapp-illu1.avif";
import imgil2 from "../assets/payapp-illu2.avif";
import imgil3 from "../assets/payapp-illu3.avif";
import imgil4 from "../assets/payapp-illu4.avif";
const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="px-4 md:px-10 mt-12">
      <div className="flex flex-col gap-2 py-10">
        <h1 className="text-sm text-orange-500 font-bold md:text-base">
          DATA SKILLS HUB'S PROGRAM IN DETAIL
        </h1>
        <p className="text-3xl md:text-4xl font-[900]">How our program works</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  md:grid-rows-1 w-full h-full">
        {/* Tab List */}
        <div className="w-full bg-transparent col-span-1 ">
          <div className=" flex overflow-x-scroll w-full md:overflow-x-hidden h-full  md:flex-col gap-6 whitespace-nowrap md:whitespace-normal my-3 md:my-0 ">
            <button
              className={`focus:border md:focus:border-l-8 border-purple-600 md:py-8  shadow-xl shadow-gray-200 px-4 md:px-8 bg-white cursor-pointer rounded-md flex items-center gap-1 py-2 md:gap-6 ${
                activeTab === 0
                  ? " text-purple-900 border-2 border-purple-600"
                  : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              <Image
                className="hidden md:block w-6 bg-blend-color-burn bg-transparent"
                src={img1}
                alt="Tab 1"
                width={100}
                height={100}
              />
              <h2 className="text-sm md:text-lg font-bold bg-transparent">
                Learn from Industry <br className="md:hidden" />
                Expert in Live class
              </h2>
            </button>
            <button
              className={`focus:border md:focus:border-l-8 border-purple-600 md:py-8  shadow-xl shadow-gray-200 px-4 md:px-8 bg-white cursor-pointer rounded-md flex items-center gap-4 py-2 md:gap-6  ${
                activeTab === 1 ? " text-purple-900" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              <Image
                className="hidden md:block w-6 bg-blend-color-burn bg-transparent"
                src={img2}
                alt="Tab 1"
                width={100}
                height={100}
              />
              <h2 className="text-sm md:text-lg font-bold bg-transparent">
                Interview Training
              </h2>
            </button>
            <button
              className={`focus:border md:focus:border-l-8 border-purple-600 md:py-8  shadow-xl shadow-gray-200 px-4 md:px-8 bg-white cursor-pointer rounded-md flex items-center gap-4 py-2 md:gap-6 ${
                activeTab === 2 ? " text-purple-900" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              <Image
                className="hidden md:block w-6 bg-blend-color-burn bg-transparent"
                src={img3}
                alt="Tab 1"
                width={100}
                height={100}
              />
              <h2 className="text-sm md:text-lg font-bold bg-transparent">
                Get A Dream Job
              </h2>
            </button>
            <button
              className={`focus:border md:focus:border-l-8 border-purple-600 md:py-8  shadow-xl shadow-gray-200 px-4 md:px-8 bg-white cursor-pointer rounded-md flex items-center gap-4 py-2 md:gap-6 ${
                activeTab === 3 ? " text-purple-900" : ""
              }`}
              onClick={() => handleTabClick(3)}
            >
              <Image
                className="hidden md:block w-6 bg-blend-color-burn bg-transparent"
                src={img4}
                alt="Tab 1"
                width={100}
                height={100}
              />
              <h2 className="text-sm md:text-lg font-bold bg-transparent">
                Pay after Placement
              </h2>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="col-span-1 md:col-span-2 w-full flex-1 bg-white md:p-4">
          {activeTab === 0 && (
            <div className="bg-white space-y-6 mt-8 px-3 md:ml-20">
              <h2 className="text-4xl bg-transparent font-bold">
                Learn from Industry Expert in Live class
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent">
                <div
                  className="col-span-1 bg-transparent space-y-4"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <span className="flex items-center gap-2 bg-transparent">
                    <span className="material-symbols-outlined bg-[#ffa83c]  rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">
                      Specifically designed curriculum by industry experts
                    </p>
                  </span>
                  <span className="flex items-center gap-2 bg-transparent">
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">One to One Doubt Session</p>
                  </span>
                  <span className="flex items-center gap-2 bg-transparent">
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">
                      Hands on Industry Projects cover in Live class
                    </p>
                  </span>
                  <span className="flex items-center gap-2 bg-transparent">
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">Support Channel</p>
                  </span>
                </div>
                <div className="col-span-1 bg-transparent">
                  <Image
                    className="bg-transparent"
                    src={imgil1}
                    alt="img1"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="bg-white space-y-6 mt-8 px-3 md:ml-20">
              <h2 className="text-4xl bg-transparent font-bold">
                Interview Training
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent">
                <div className="col-span-1 bg-transparent space-y-4">
                  <span
                    className="flex items-center gap-2 bg-transparent"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">Resume Building support</p>
                  </span>
                  <span
                    className="flex items-center gap-2 bg-transparent"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">Placement Training</p>
                  </span>
                  <span
                    className="flex items-center gap-2 bg-transparent"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">
                      Interview Mock call Practice
                    </p>
                  </span>
                </div>
                <div className="col-span-1 bg-transparent">
                  <Image
                    className="bg-transparent"
                    src={imgil2}
                    alt="img1"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="bg-white space-y-6 mt-8 px-3 md:ml-20">
              <h2 className="text-4xl bg-transparent font-bold">
                Get A Dream Job
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent">
                <div className="col-span-1 bg-transparent space-y-4">
                  <span
                    className="flex items-center gap-2 bg-transparent"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">Interview referance</p>
                  </span>
                  <span
                    className="flex items-center gap-2 bg-transparent"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">Direct Interviews</p>
                  </span>
                </div>
                <div className="col-span-1 bg-transparent">
                  <Image
                    className="bg-transparent"
                    src={imgil3}
                    alt="img1"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="bg-white space-y-6 mt-8 px-3 md:ml-20">
              <h2 className="text-4xl bg-transparent font-bold">
                Pay after Placement
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent">
                <div className="col-span-1 bg-transparent space-y-4">
                  <span
                    className="flex items-center gap-2 bg-transparent"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">
                      Pay main fees after getting job
                    </p>
                  </span>
                  <span
                    className="flex items-center gap-2 bg-transparent"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
                      arrow_right_alt
                    </span>
                    <p className="bg-transparent">Minimum package 5 LPA</p>
                  </span>
                </div>
                <div className="col-span-1 bg-transparent">
                  <Image
                    className="bg-transparent"
                    src={imgil4}
                    alt="img1"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
