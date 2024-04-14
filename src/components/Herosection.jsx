import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from "../assets/girl (1).png";
const Herosection = () => {
  return (
    <main className="flex flex-col md:flex-row mt-10">
      <section className="md:ml-40 lg:ml-[10%] md:w-[40%] lg:w-full   flex flex-col justify-center gap-16 px-8">
        <div className="md:mt-24 flex flex-col gap-5">
          <strong className="flex items-center text-lg md:text-2xl gap-4 text-green-500">
            <span
              data-aos="fade-right"
              data-aos-duration="500"
              className="material-symbols-outlined scale-150"
            >
              check_circle
            </span>
            <span data-aos="fade-right" data-aos-duration="500">
              Your Upskilling Partner
            </span>
          </strong>
          <strong
            className="text-3xl md:text-5xl font-semibold"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h1>
              Your
              <span className="text-[rgba(255,163,34,0.95)]"> Dream job </span>
              Awaits: Let's Make It Happen
            </h1>
          </strong>
          <span data-aos="fade-right" data-aos-duration="500">
            <p className="w-4/5 text-lg text-gray-500">
              Discover new skills outside the classroom, with guidance from
              India's most accomplished industry mentors.
            </p>
          </span>
        </div>
        <div>
          <Link
            href="/explore"
            className="text-white  text-sm font-semibold border  bg-[rgb(83,15,184)] px-6 py-3 rounded-lg hover:text-[rgb(83,15,184)] hover:border-[rgb(83,15,184)] hover:bg-white ease-in-out duration-300"
            data-aos="flip-up"
            data-aos-duration="500"
          >
            Explore Programmes
          </Link>
        </div>
        <div className="bg-white">
          <section className="w-full bg-white  flex">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="flex w-full justify-center md:w-1/2 bg-white py-6 px-2 items-center gap-4 border-r border-gray-600 lg:ml-1"
            >
              <span>
                <img
                  src="https://static-artifacts-assets.skillovilla.com/assets/icons/briefcase-colored.svg?auto=format&q=35&cs=srgb"
                  alt="HeroImg"
                />
              </span>
              <span className="bg-white w-full lg:w-1/2 lg:ml-1 ">
                <h3 className="text-base md:text-2xl text-center md:text-left bg-white font-bold">
                  90%
                </h3>
                <h3 className="text-[10px] md:text-base bg-white text-gray-500 text-center md:text-left">
                  Placements
                </h3>
              </span>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="flex w-full lg:ml-3 justify-center md:w-1/2 bg-white py-6 px-3 items-center gap-4"
            >
              <span>
                <img
                  className="lg:scale-125 xl:scale-100"
                  src="https://static-artifacts-assets.skillovilla.com/assets/icons/rupee-colored.svg?auto=format&q=35&cs=srgb"
                  alt="HeroImg"
                />
              </span>
              <span className="bg-white w-full xl:w-1/2 lg:ml-0">
                <h3 className="text-base md:text-2xl text-center md:text-left bg-white font-bold">
                  35 Lac
                </h3>
                <h3 className="text-[10px] md:text-base bg-white text-gray-500 text-center md:text-left">
                  Packages upto
                </h3>
              </span>
            </div>
          </section>
        </div>
      </section>
      <section className="w-full lg:w-full md:w-[60%] pt-20 scale-125 hidden md:block">
        <Image
          data-aos="fade-left"
          data-aos-duration="500"
          width={500}
          height={500}
          src={img1}
          alt="main-2"
        />
      </section>
    </main>
  );
};

export default Herosection;
