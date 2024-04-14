"use client";
// Import necessary modules and functions
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarByMe from "@/components/navbar";

// Define the component
function Page({ params: { id } }) {
  // Access dynamic route parameter

  const [user, setUser] = useState({
    username: "",
    email: "",
    number: "",
    courses: []
  });

  useEffect(() => {
    if (id) {
      getUserDetails(); // Fetch user details when id is available
    }
  }, [id]); // Add id to the dependency array

  const getUserDetails = async () => {
    try {
      const response = await axios.put(`/api/users/payment/${id}`);
      console.log("User details response:", response.data.user); // Log response data
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>
      <div className="text-center flex flex-col items-center justify-center w-screen h-screen text-2xl md:text-5xl text-green-600 bg-green-200">
        PAYMENT SUCCESSFULL
        <p className=" text-sm md:text-3xl bg-transparent">
          Welcome To Data Skills Hub
        </p>
      </div>
    </>
  );
}

// Export the component
export default Page;
