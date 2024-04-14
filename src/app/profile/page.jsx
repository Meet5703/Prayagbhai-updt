"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import img1 from "../../assets/dslogo1.png";
import Image from "next/image";
import NavbarByMe from "@/components/navbar";

const ProfilePage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null); // Initialize userData as null

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/profile");
      setUserData(response.data.user);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  // Render user details only when data is available
  return (
    <div className="overflow-x-hidden">
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 ">
        <div className="bg-white shadow-lg rounded-lg px-8 mt-20 py-12 max-w-lg w-full mx-auto">
          <Image
            src={img1}
            width={1000}
            height={1000}
            alt="logo"
            className="mx-auto w-56 mb-8 bg-transparent"
          />

          {userData && (
            <>
              <div className="flex  items-center justify-center w-14 h-14  bg-violet-500 text-white text-2xl font-bold rounded-full mb-8">
                {userData.username.charAt(0).toUpperCase()}
              </div>
              <p className="text-lg md:text-xl bg-transparent flex flex-col md:flex-row gap-4 md:items-center mb-4">
                <span className="text-[#5311B9] md:text-2xl bg-transparent items-center font-bold">
                  Username:
                </span>
                <span className="bg-transparent ml-1 text-sm md:text-xl">
                  {userData.username}
                </span>
              </p>
              <p className="text-lg md:text-xl bg-transparent flex flex-col md:flex-row gap-4 md:items-center mb-4">
                <span className="text-[#5311B9] md:text-2xl bg-transparent items-center font-bold">
                  Email:
                </span>
                <span className="bg-transparent ml-1 text-sm md:text-xl">
                  {userData.email}
                </span>
              </p>
              <p className="text-lg md:text-xl bg-transparent flex flex-col md:flex-row gap-4 md:items-center mb-4">
                <span className="text-[#5311B9] md:text-2xl bg-transparent items-center font-bold">
                  Number:
                </span>
                <span className="bg-transparent ml-1 text-sm md:text-xl">
                  {userData.number}
                </span>
              </p>
              <p className="text-lg md:text-xl bg-transparent flex flex-col md:flex-row gap-4 md:items-center mb-8">
                <span className="text-[#5311B9] md:text-2xl bg-transparent items-center font-bold">
                  Courses:
                </span>
                <span className="bg-transparent ml-1 text-sm md:text-xl">
                  {userData.courses}
                </span>
              </p>
            </>
          )}
          <button
            className="bg-red-500 text-white px-8 py-3 rounded-md text-lg mt-4 hover:bg-red-600 focus:outline-none"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
