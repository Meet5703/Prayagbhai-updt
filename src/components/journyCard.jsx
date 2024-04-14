"use client";
import React from "react";
import img1 from "../assets/8918702_4020769_prev_ui.png";
import Image from "next/image";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
const JournyCard = () => {
  return (
    <section>
      <div>
        <h1 className="text-[#FFB907] font-bold md:text-lg ml-4 mr-4 md:ml-28 mt-32">
          LEARNING JOURNEY
        </h1>
        <p className=" font-bold text-3xl ml-4 mr-4  md:ml-28 mt-3">
          Learning journey at Data Skills Hub
        </p>
        <p className="text-[14px] ml-4 mr-4 md:ml-28 mt-10">
          Master the skills with live class, reading materials and
          quizzes.Enhance your resume with hands-on industry projects. Prepare
          for success with mock interviews and seize your dream job opportunity.
        </p>
      </div>
      <div className="w-full h-full md:gap-28 flex flex-col  mt-20">
        <div className="ml-4 mr-4 md:mr-0 md:ml-0 ">
          <div className="bg-[#e5d4ff] rounded-xl shadow-xl shadow-gray-300 md:w-4/5 md:ml-28 p-6">
            <Timeline className=" bg-transparent">
              <Timeline.Item className="bg-transparent text-black">
                <Timeline.Point />
                <Timeline.Content
                  className="bg-transparent"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <Timeline.Title className="bg-transparent text-black">
                    <span className="bg-transparent text-[#530fb8] font-bold">
                      Get Enrolled in our Data Science and Generative AI Pay
                      after Placement Course
                    </span>
                  </Timeline.Title>
                  <Timeline.Body className="bg-transparent text-black">
                    <p className="bg-transparent text-black">
                      Secure your future in Data Science and Generative AI with
                      our innovative Pay after Placement course, ensuring your
                      success in the industry with financial flexibility.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="bg-transparent text-black">
                <Timeline.Point />
                <Timeline.Content
                  className="bg-transparent"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <Timeline.Title className="bg-transparent text-black">
                    <span className="bg-transparent text-[#530fb8] font-bold">
                      Work on Hands-On Projects and Build Portfolio{" "}
                    </span>
                  </Timeline.Title>
                  <Timeline.Body className="bg-transparent text-black">
                    <p className="bg-transparent text-black">
                      Gain practical experience and strengthen your portfolio
                      through immersive hands-on projects, preparing you for
                      real-world challenges and showcasing your expertise to
                      potential employers.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="bg-transparent text-black">
                <Timeline.Point />
                <Timeline.Content
                  className="bg-transparent"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <Timeline.Title className="bg-transparent text-black">
                    <span className="bg-transparent text-[#530fb8] font-bold">
                      Resume Building, Placement Training and Interview Mock
                      call Practice
                    </span>
                  </Timeline.Title>
                  <Timeline.Body className="bg-transparent text-black">
                    <p className="bg-transparent text-black">
                      Enhance your career readiness with comprehensive resume
                      building, placement training, and realistic interview mock
                      call practice, ensuring you're fully prepared to excel in
                      your job search and secure your dream position.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="bg-transparent text-black">
                <Timeline.Point />
                <Timeline.Content
                  className="bg-transparent"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <Timeline.Title className="bg-transparent text-black">
                    <span className="bg-transparent text-[#530fb8] font-bold">
                      Interviews
                    </span>
                  </Timeline.Title>
                  <Timeline.Body className="bg-transparent text-black">
                    <p className="bg-transparent text-black">
                      Streamline your job search process with direct interview
                      opportunities arranged by our team, eliminating the need
                      for individual applications and maximizing your chances of
                      securing employment.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="bg-transparent text-black">
                <Timeline.Point />
                <Timeline.Content
                  className="bg-transparent"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <Timeline.Title className="bg-transparent text-black">
                    <span className="bg-transparent text-[#530fb8] font-bold">
                      Get A Dream Job
                    </span>
                  </Timeline.Title>
                  <Timeline.Body className="bg-transparent text-black">
                    <p className="bg-transparent text-black">
                      Unlock career opportunities with our professional
                      end-to-end service, dedicated to helping you secure your
                      dream job through tailored support and expert guidance.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournyCard;
