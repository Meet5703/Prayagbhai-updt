"use client";
import NavbarByMe from "@/components/navbar";
// Import necessary modules and functions
import axios from "axios";
import { useRouter } from "next/navigation"; // Changed from "next/navigation" to "next/router"
import { useEffect, useState } from "react";

// Define the component
const SuccessPage = () => {
  const router = useRouter();

  const [userId, setUserId] = useState(null); // State to store the user ID

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.post(`/api/users/profile`);
        const userId = response.data.user._id; // Extract user ID from profile data
        setUserId(userId); // Set user ID in component state
      } catch (error) {
        console.log(error.message);
      }
    };

    getUserDetails();
  }, []); // Empty dependency array to run only once after component mounts

  // Redirect to success page with user ID once it's obtained
  useEffect(() => {
    if (userId) {
      router.push(`/success/${userId}`); // Redirect to success page with user ID
    }
  }, [userId]); // Run whenever userId changes

  // Render loading or redirecting message
  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>
      <div>Redirecting...</div>;
    </>
  );
};

// Export the component
export default SuccessPage;
