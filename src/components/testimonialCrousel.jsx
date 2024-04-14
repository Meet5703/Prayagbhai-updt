"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        opacity: "1",
        backgroundColor: "#4c1d95",
        padding: "7px 4px",
        width: "30px",
        height: "30px",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        opacity: "1",
        backgroundColor: "#4c1d95",
        padding: "7px 4px",
        width: "30px",
        zIndex: "1",
        height: "30px",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
};

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="w-3/4 m-auto mt-20">
      <h6 className="text-[#ffa83c] -ml-8 md:text-lg ">TESTIMONIALS</h6>
      <p className="text-3xl font-semibold w-screen -ml-8 md:text-3xl">
        Explore Inspiring Alumni Journeys{" "}
      </p>
      <div className="mt-20 bg-black">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="space-x-4 ml-2 grid grid-flow-row-dense grid-rows-1"
            >
              <div className="bg-white row-span-1 grid-flow-row border rounded-lg shadow-xl border-[#4c1d95] md:ml-2 md:mt-10 h-full md:mb-10 md:mr-5 md:scale-100 scale-[0.85] mb-8 px-4 py-2 md:p-10">
                <div className="flex h-full items-center space-x-4 mb-6 bg-white">
                  <Image
                    className="bg-white rounded-full w-12 object-cover h-12"
                    src={d.img}
                    alt="imgs"
                    width={1000}
                    height={1000}
                  />
                  <span>
                    <p className="bg-white md:text-2xl">{d.name}</p>
                    <p className="bg-white md:text-lg">@{d.companyName}</p>
                  </span>
                </div>
                <div>
                  <p className="bg-white h-full">{d.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Neha",
    companyName: "Paytm",
    img: img1,
    review:
      " Data Skills Hub propelled my transition from sales to Data Science, providing expert guidance and practical training that secured my dream role. I'm grateful for their transformative support and dedication."
  },
  {
    name: "Dinesh",
    companyName: "PayPal",
    img: img2,
    review:
      "Transitioning from marketing, Data Skills Hub's comprehensive program equipped me for Data Science success. Their personalized approach and industry insights were invaluable in navigating this career shift."
  },
  {
    name: "Priyanka",
    companyName: "Deloitte",
    img: img3,
    review:
      "Coming from a QA background, transitioning to Data Science seemed daunting until I found Data Skills Hub. Their structured program and industry-focused curriculum empowered me to pursue my passion."
  },
  {
    name: "Nidhi",
    companyName: "Capgemini",
    img: img4,
    review:
      "As a backend developer, Data Skills Hub provided me with the tools and knowledge to transition into Data Science. Their practical approach and supportive environment made the journey smooth and rewarding."
  },
  {
    name: "Nisha",
    companyName: "Myntra",
    img: img5,
    review:
      "Data Skills Hub helped me transition from networking to Data Science seamlessly. Their program provided me with the skills and confidence to pursue new opportunities in this rapidly evolving field of study."
  },
  {
    name: "Naman",
    companyName: "Myntra",
    img: img6,
    review:
      "As a QA professional, Data Skills Hub empowered my transition to Data Science. Their tailored training and mentorship were instrumental in securing a rewarding role in this dynamic field."
  },
  {
    name: "Praneeta",
    companyName: "Zomato",
    img: img7,
    review:
      "Data Skills Hub facilitated my transition from backend development to Data Science with their comprehensive training and supportive environment. I'm grateful for their guidance in navigating this career transition."
  },
  {
    name: "Sakshatha",
    companyName: "Swiggy",
    img: img8,
    review:
      "Data Skills Hub enabled my transition to Data Science as a fresher, equipping me with essential skills and industry knowledge. Their program laid the foundation for my successful career journey."
  }
];

export default Testimonial;
