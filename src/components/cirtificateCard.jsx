import React from "react";
import masterclassGif from "../assets/cirti.jpeg";
import Image from "next/image";
import img2 from "../assets/logocarduser.png";

const Cirtificate = () => {
  return (
    <div className="mt-10 w-full flex flex-col justify-center gap-4 ml-1 mr-6 md:gap-0 md:grid md:grid-cols-4 pb-10">
      <div className="cardSection__content space-y-10 col-span-2 ml-4 md:ml-[25%] md:mr-[10%] mt-14">
        <div className="space-y-2">
          <h2
            className="md:text-lg font-bold text-[#ffa83c] "
            data-aos="fade-right"
            data-aos-duration="500"
          >
            CERTIFICATION
          </h2>
          <p
            className="font-bold text-3xl w-4/5"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            Get certified to become a pro!
          </p>
        </div>

        <div>
          <span
            className="flex items-center gap-2"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
              arrow_right_alt
            </span>
            <p>Certification recognized in 300+ companies</p>
          </span>
          <br />
          <span
            className="flex items-center gap-2"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
              arrow_right_alt
            </span>
            <p>Prove that your skills are certified to employers</p>
          </span>

          <br />
          <span
            className="flex items-center gap-2"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
              arrow_right_alt
            </span>
            <p>Be a recruiter-magnet in LinkedIn with your certifications</p>
          </span>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        className="cardSection__video col-span-2 "
      >
        <Image
          className="w-4/5 ml-6 md:ml-0 md:w-1/2 mt-12 shadow-lg border border-gray-600 "
          src={masterclassGif}
          alt="gif"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Cirtificate;
