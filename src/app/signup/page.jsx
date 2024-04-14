"use client";
import NavbarByMe from "@/components/navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import img1 from "../../assets/bgsignup.png";
const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    number: ""
  });
  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.number.length > 0
    ) {
      setBtndisabled(false);
    } else {
      setBtndisabled(true);
    }
  }, [user]);
  const [btndisabled, setBtndisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSignup = async (e) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success", response);
      router.push("/login");
    } catch (error) {
      console.log("signup error", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>
      <div className="h-[100vh] items-center flex justify-center px-5 pt-40 lg:px-0">
        <div className="xl:max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1  text-center hidden md:flex">
            <Image
              className="mt-12 xl:m-16 xl:w-2/3 xl:scale-100 lg:scale-75 lg:pb-24 bg-contain bg-center bg-no-repeat bg-transparent"
              src={img1}
              alt="signup"
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className=" flex flex-col items-center">
              <div className="text-center">
                <h1 className="text-2xl xl:text-4xl font-extrabold text-[#4c1d95]">
                  Sign up
                </h1>
                <p className="text-[12px] text-gray-500">
                  Hey enter your details to create your account
                </p>
              </div>
              <div className="w-full mt-8">
                <div className="mb-4 bg-white relative flex">
                  <input
                    name="username"
                    className="border-2 rounded-md peer py-4 px-2 bg-transparent  w-full focus:border-[#6105bd] focus:outline-none"
                    id="username"
                    type="text"
                    required
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                  <label
                    htmlFor="username"
                    className={`absolute cursor-text bg-transparent top-5 ${
                      user.username
                        ? "hidden"
                        : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[2px]  peer-focus:bg-[#6105bd] peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                    }`}
                  >
                    Name
                  </label>
                </div>

                <div className="mb-4 bg-white relative flex">
                  <input
                    name="email"
                    className="border-2 rounded-md peer py-4 px-2 bg-transparent  w-full focus:border-[#6105bd] focus:outline-none"
                    id="email"
                    type="email"
                    required
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  <label
                    htmlFor="email"
                    className={`absolute cursor-text bg-transparent top-5 ${
                      user.email
                        ? "hidden"
                        : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[2px]  peer-focus:bg-[#6105bd] peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                    }`}
                  >
                    Email
                  </label>
                </div>

                <div className="mb-4 relative flex bg-white">
                  <input
                    name="number"
                    className="border-2 pl-10 rounded-md peer py-4 px-2 bg-transparent w-full focus:border-[#6105bd] focus:outline-none"
                    id="number"
                    type="number"
                    required
                    value={user.number}
                    onChange={(e) => {
                      setUser({ ...user, number: e.target.value });
                    }}
                  />
                  <p
                    className={`absolute top-[28%] bg-transparent peer-focus-visible:block left-2 ${
                      user.number ? "peer-focus:block" : "hidden"
                    }`}
                  >
                    +91
                  </p>
                  <label
                    htmlFor="number"
                    className={`absolute cursor-text bg-transparent top-[17px] ${
                      user.number
                        ? "hidden"
                        : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[2px]  peer-focus:bg-[#6105bd] peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                    }`}
                  >
                    Mobile Number
                  </label>
                </div>

                <div className="mb-4 bg-white relative flex">
                  <input
                    name="password"
                    className="border-2 rounded-md peer py-4 px-2 bg-transparent  w-full focus:border-[#6105bd] focus:outline-none"
                    id="password"
                    type="password"
                    required
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <label
                    htmlFor="password"
                    className={`absolute peer-focus:text-xs cursor-text bg-transparent top-5 ${
                      user.password
                        ? "hidden"
                        : " peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[2px]  peer-focus:bg-[#6105bd] peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                    }
                     
                  }`}
                  >
                    Password
                  </label>
                </div>
                <button
                  onClick={onSignup}
                  className="mt-5 tracking-wide font-semibold bg-[#4c1d95] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2 bg-transparent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3 bg-transparent">Sign Up</span>
                </button>
                <a href="/forgotpassword">
                  <span className="text-[#4c1d95] font-semibold">
                    Forgot Password?
                  </span>
                </a>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href="/login">
                    <span className="text-[#4c1d95] font-semibold">
                      Sign in
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
