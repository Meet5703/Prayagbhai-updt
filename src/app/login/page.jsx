"use client";
import React, { useEffect, useState } from "react";
import NavbarByMe from "@/components/navbar";
import NavbarSkeleton from "@/components/skeletons/navbarskele";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import img1 from "../../assets/bgsignup.png";

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response);

      router.push("/");
      setLoading(false); // Make sure to set loading to false after the redirect
      toast.success("Login successful");
    } catch (error) {
      console.log("login error", error);
      if (error.response && error.response.status === 400) {
        setLoginError("Invalid email or password");
      } else {
        setLoginError("An error occurred. Please try again later.");
      }
      setLoading(false);
      toast.error(loginError); // Displaying the loginError using toast.error()
    }
  };

  return (
    <>
      {loading ? (
        <NavbarSkeleton />
      ) : (
        <>
          <div className="fixed w-full z-50">
            <NavbarByMe />
          </div>

          <div className="h-[100vh] pt-28 items-center flex justify-center px-5 lg:px-0 ">
            <div className="max-w-screen-xl bg-transparent border shadow sm:rounded-lg flex items-center justify-center flex-1">
              <div className="flex-1  text-center hidden md:flex">
                <Image
                  className="mt-12 xl:m-16 xl:w-2/3 xl:scale-100 lg:scale-75 lg:pb-24 bg-contain bg-center bg-no-repeat bg-transparent"
                  src={img1}
                  alt="login"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div className=" flex flex-col items-center">
                  <div className="text-center">
                    <h1 className="text-2xl xl:text-4xl font-extrabold text-[#6105bd]">
                      Student Login
                    </h1>
                    <p className="text-[12px] text-gray-500">
                      Hey enter your details to create your account
                    </p>
                  </div>
                  <div className="w-full flex-1 mt-8">
                    <div className="mx-auto max-w-xs flex flex-col gap-4">
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
                        onClick={onLogin}
                        className="mt-5 tracking-wide font-semibold bg-[#6105bd] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        disabled={btnDisabled}
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
                        <span className="ml-3 bg-transparent">Login</span>
                      </button>
                      {/* Forgot password link */}
                      <a href="/forgotpassword">
                        <span className="text-[#6105bd] font-semibold">
                          Forgot Password?
                        </span>
                      </a>
                      {/* Error message */}
                      {loginError && (
                        <p className="mt-4 text-red-500">{loginError}</p>
                      )}
                      {/* Sign up link */}
                      <p className="mt-6 text-xs text-gray-600 text-center">
                        Already have an account?
                        <a href="/signup">
                          <span className="text-[#6105bd] font-semibold">
                            Sign up
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
