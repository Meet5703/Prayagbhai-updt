import React from "react";
import masterclassGif from "../assets/prayag-icon.png";
import Image from "next/image";
import img2 from "../assets/logocarduser.png";

const Card2 = () => {
  return (
    <div className="-mt-28 md:mt-0 w-full flex flex-col items-center gap-4 ml-1 mr-6 md:gap-1 md:grid md:grid-cols-4 pb-10">
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        className="cardSection__video col-span-2"
      >
        <Image
          className="mt-20"
          src={masterclassGif}
          alt="masterclass"
          width={1000}
          height={1000}
        />
      </div>

      <div
        className="cardSection__content col-span-2 px-4 mt-14"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <h2 className="md:text-lg font-bold text-[#ffa83c] ">
          LIVE MASTERCLASS
        </h2>
        <p className="font-bold text-3xl w-full">
          Level up your skills, learn from the best
        </p>
        <br className="md:hidden" />
        <div className="flex md:grid md:grid-cols-4 items-center">
          <span className="md:col-span-1">
            <Image
              className="scale-[0.4] p-1  bg-purple-400 rounded-full"
              src={img2}
              alt="masterclass"
            />
          </span>
          <span className="md:col-span-3 space-y-4">
            <h1 className="text-xl font-bold w-full">
              Experience the masterclass
            </h1>
            <p className="text-sm">Learn with the best</p>
          </span>
        </div>
        <br className="md:hidden" />
        <br className="md:hidden" />

        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
            arrow_right_alt
          </span>
          <p>Engage in Real-time Learning Experiences with Live Master Class</p>
        </span>
        <br />
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
            arrow_right_alt
          </span>
          <p>Start from Scratch and Gain In-Demand Industry Skills</p>
        </span>
        <br />
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
            arrow_right_alt
          </span>
          <p>
            Experience Real-life Case Studies Solved Live with Industry Experts
          </p>
        </span>
        <br />
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
            arrow_right_alt
          </span>
          <p>
            Interact with mentors, one to one doubts sessions also available
          </p>
        </span>
      </div>
    </div>
  );
};

export default Card2;
