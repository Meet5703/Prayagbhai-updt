"use client";
/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../assets/python.png";
import img2 from "../assets/dsa.webp";
import img3 from "../assets/mltoolbox.avif";
import img4 from "../assets/deeplearning.avif";
import img5 from "../assets/sql.avif";
import img6 from "../assets/statistics.png";
import img7 from "../assets/statistics.png";
import img8 from "../assets/supervised.png";
import img9 from "../assets/neural.avif";
import img10 from "../assets/unsupervised.png";
import img11 from "../assets/projects.png";
import img12 from "../assets/generativeai.avif";
import Image from "next/image";
import Link from "next/link";

function Curriculum() {
  return (
    <div className="mt-36">
      <div className="md:ml-28 ml-4">
        <h1 className="text-[#FFB907] uppercase font-bold md:text-lg">
          Syllabus
        </h1>

        <span className="flex w-full md:flex-row  flex-col md:space-x-12 xl:space-x-28">
          <p className="text-3xl font-bold ">
            Data Skills Hub's world-class curriculum
          </p>
          <Link
            data-aos="fade-up"
            data-aos-duration="500"
            href="#"
            className="ov-btn-slide-left w-4/5 md:w-fit mt-6 md:mt-0  scale-75 md:scale-0"
          >
            <div className="flex py-2 md:py-0 items-center gap-2 bg-transparent">
              <span className="bg-transparent">Download Brochure</span>
              <span className="material-symbols-outlined bg-transparent">
                download
              </span>
            </div>
          </Link>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div
          className="col-span-1 w-full"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-28 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup1").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img1}
                  alt="python"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Python
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup1 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Introduction of Python
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Data Type</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Operators</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Type conversion
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    List, Tuple, Dictionary
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Condition</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Loop</p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-28 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup2").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img2}
                  alt="dsa"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    DSA
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup2 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Arrays</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Linked Lists
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Stacks & Queues
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Trees</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Tries & Heaps
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Searching & Sorting Algorithms
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Recursion</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Hashing & Two Pointers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-28 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup3").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img5}
                  alt="SQL"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    SQL
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup3 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Introduction to Databases & BigQuery Setup
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Extracting data using SQE functions
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Filtering & Subqueries
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Joins</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    GROUP BY & Aggregation
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Window Functions
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Date and Time Functions & CTEs (Common Table Expressions)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Indexes & Partitioning
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-28 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup4").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img3}
                  alt="Math for machine learning"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Math for Machine learning
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup4 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Classification
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Hyperplanes
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Halfspaces</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Advanced Python
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Python Refreshers
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Calculus</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Optimization
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Gradient Descent
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Principal Component Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-28 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup5").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img9}
                  alt="Introduction to Neural Networks & Machine Learning"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Introduction to Neural Networks & Machine Learning
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup5 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Introduction to Classical Machine Learning
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Linear Regression
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Polynomial Regression, Bias-Variance Tradeoff,
                    Regularization
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Cross Validation
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Logistic Regression
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Perceptron and Softmax Classification
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Introduction to Clustering, K-Means
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    K-Means++, Hierarchical Clustering
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-28 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup11").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img10}
                  alt="Unsupervised learning & Recommender Systems"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Unsupervised learning & Recommender Systems
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup11 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Introduction to Clustering, k-Means
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    k-Means++, Hierarchical Clustering
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Gaussian Mixture Models (GMM)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Anomaly/Outlier/Novelty Detection
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    PCA (Principal Component Analysis), t-SNE (t-distributed
                    Stochastic Neighbor Embedding)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Recommender Systems
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Time Series Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-28 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup13").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img11}
                  alt="Projects"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Projects
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup13 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    SQL Project
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Machine Learning Project
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Deep Learning Project
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Generative AI Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-1 w-full"
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-8 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup6").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img1}
                  alt="Advance Python"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Advance Python
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup6 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">OOPS</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Function</p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-8 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup7").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img3}
                  alt="ML tool box"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    ML tool box
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup7 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Pandas</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Numpy</p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-8 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup8").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img6}
                  alt="Statistics"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Statistics
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup8 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Probability
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Bayes Theorem
                  </p>
                </div>

                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Distribution
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Descriptive Statistics, outlier treatment
                  </p>
                </div>

                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Confidence Intervals
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Central Limit Theorem
                  </p>
                </div>

                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Hypothesis Testing, AB Testing
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">ANOVA</p>
                </div>

                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Correlation
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    EDA (Exploratory Data Analysis), Feature Engineering,
                    Missing value treatmen
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-8 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup9").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img8}
                  alt="Supervised Learning"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Supervised Learning
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup9 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    MLE (Maximum Likelihood Estimation), MAP (Maximum A
                    Posteriori Estimation), Confidence Intervals
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Classification Metrics
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Imbalanced Data
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Decision Trees
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Bagging</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Naive Bayes
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    SVM (Support Vector Machine)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-8 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup10").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img3}
                  alt="NLP"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    NLP
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup10 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Dataset overview: Amazon Fine Food reviews (EDA)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Data Cleaning: Deduplication
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Why convert text to a vector?
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Bag of Words (BoW)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Text Preprocessing: Stemming, Stop-word removal,
                    Tokenization, Lemmatization
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Uni-gram, bi-gram, n-grams
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    TF-IDF (term frequency-inverse document frequency)
                  </p>
                </div>

                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Why use the log in IDF?
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Word2Vec</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Avg-Word2Vec, TF-IDF weighted Word2Vec
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Bag of Words (code sample)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Text Preprocessing (code sample)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Bi-Grams and n-grams (code sample)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    TF-IDF (code sample)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Word2Vec (code sample)
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Avg-Word2Vec and TFIDF-Word2Vec (Code Sample)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-8 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup12").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img4}
                  alt="Specialization 2: Deep Learning"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Specialization 2: Deep Learning
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup12 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Neural Networks
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Perceptron</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Hidden Layers
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">TensorFlow</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Keras</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Forward & Backward Propagation
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Multilayer Perceptrons (MLPs)
                  </p>
                </div>

                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">Callbacks</p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Tensorboard
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Optimization
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                    Hyperparameter Tuning
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            x-data="{ open: false }"
            className="md:h-fit flex w-full flex-col md:ml-8 relative overflow-hidden py-3 "
          >
            <div
              onClick={() => {
                document.querySelector(".myPopup14").classList.toggle("hidden");
              }}
              className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-4/5 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2 bg-white">
                <Image
                  src={img12}
                  alt="Generative AI"
                  className="w-16 h-16 bg-white"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center gap-3 bg-white">
                  <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                    Generative AI
                  </h4>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="myPopup14 hidden md:w-4/5 bg-white p-4">
              <div className="flex flex-col gap-4 bg-white">
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  Introduction of Generative AI
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  Generative AI for Text Generation
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  Generative AI for Machine Translation
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  Generative AI for Creative Content Generation
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  Advanced Topics in Generative AI with NLP
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  LLMs: Use Cases and Potentials
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  Hugging Face Hub: A Gateway to Generative AI
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  Prompt Engineering: The Art of Guiding LLMs
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  RAG: A Versatile Tool for Generative AI
                  </p>
                </div>
                <div className="ml-8 flex px-6 py-2  items-center">
                  <span className="material-symbols-outlined font-semibold">
                    arrow_forward_ios
                  </span>
                  <p className="font-semibold text-lg  py-1 px-4">
                  Fine-tuning: Unveiling the Potential of LLMs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Curriculum;
