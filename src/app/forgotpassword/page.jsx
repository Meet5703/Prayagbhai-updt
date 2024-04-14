"use client";
import React, { useState } from "react";
import axios from "axios";
import NavbarByMe from "@/components/navbar";
import Image from "next/image";
import img1 from "../../assets/bgsignup.png";
import toast from "react-hot-toast";

const ForgotPasswordPage = () => {
  const [user, setUser] = useState({
    email: ""
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const onSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsButtonDisabled(true); // Disable the button
    try {
      const response = await axios.post("/api/users/forgotpass", user);
      console.log("data", response);
      toast.success("Mail sent successfully. Please check your inbox.");
      // Clear the input field after successful submission
      setUser({ email: "" });
    } catch (error) {
      console.log("signup error", error);
      // Handle error
    } finally {
      setIsButtonDisabled(false); // Re-enable the button
    }
  };

  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>

      <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
        <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1  text-center hidden md:flex">
            <Image
              className="m-12 xl:m-16 w-2/3 bg-contain bg-center bg-no-repeat bg-transparent"
              src={img1}
              width={1000}
              alt="forgot password"
              height={1000}
            />
          </div>
          <div className="lg:w-1/2 xl:w-5/12 pt-40 p-6 sm:p-12">
            <div className=" flex flex-col items-center">
              <div className="text-center">
                <h1 className="text-2xl xl:text-4xl font-extrabold text-[#6105bd]">
                  Forgot Password
                </h1>
                <p className="text-[12px] text-gray-500">
                  Hey enter your email to reset your password
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

                  <button
                    onClick={onSignup}
                    className="mt-5 tracking-wide font-semibold bg-[#6105bd] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    disabled={isButtonDisabled}
                  >
                    <span class="material-symbols-outlined bg-transparent">
                      send
                    </span>
                    <span className="ml-3 bg-transparent">Send Mail</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
