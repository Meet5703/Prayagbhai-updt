"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import img1 from "../assets/dslogo1.png";

const NavbarByMe = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);
  const currentPath = window.location.pathname;
  const [activeTab, setActiveTab] = useState(currentPath);
  const mobileMenuRef = useRef(null);

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const getUserDetails = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/users/profile");
      console.log(response.data);
      setData(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error.message);
      setData(null);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    if (!isLoading && shouldReload) {
      setShouldReload(false); // Reset shouldReload
      window.location.reload(); // Reload the page
    }
  }, [isLoading, shouldReload]);

  useEffect(() => {
    if (
      currentPath == "/signup" ||
      currentPath == "/login" ||
      currentPath == "/profile" ||
      currentPath == "/resetpassword" ||
      currentPath == "/forgotpassword" ||
      currentPath == "verifyemail"
    ) {
      setActiveTab("/");
    }
  }, [currentPath]);
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await axios.get("/api/users/logout");
      setIsLoggedIn(false);
      setShouldReload(true); // Set shouldReload to true on logout
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    let handleOutsideClick = (event) => {
      if (mobileMenuRef.current) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  const handleLoginSignup = () => {
    getUserDetails();
  };

  return (
    <nav className="z-50 ">
      <div className="pt-4">
        <div className="container px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <Link href="/">
                <Image
                  src={img1}
                  alt="logo"
                  height={120}
                  priority
                  width={120}
                />
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4 bg-transparent">
              <Link
                href="/"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/")}
              >
                Home
              </Link>
              <Link
                href="/blogs"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/blogs" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/blogs")}
              >
                Blogs
              </Link>
              <Link
                href="/explore"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/explore" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/explore")}
              >
                Explore
              </Link>
              <Link
                href="/about"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/about" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/about")}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/contact" && "bg-violet-900 text-white"
                }`}
                onClick={() => handleSetActiveTab("/contact")}
              >
                Contact
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center">
              {isLoading ? (
                <p>Loading...</p>
              ) : isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    {data && (
                      <a
                        className="bg-violet-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-6"
                        href="/profile"
                      >
                        {" "}
                        {data.user.username.charAt(0).toUpperCase()}
                      </a>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className=" hidden btn btn-primary"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="btn btn-primary flex items-center px-4 py-3 justify-around w-full text-purple-800 hover:text-white border border-purple-800 hover:bg-purple-800 hover:border-purple-500 duration-200 transition-all ease-in-out rounded-xl "
                  onClick={handleLoginSignup}
                >
                  <span className="material-symbols-outlined bg-transparent">
                    login
                  </span>
                  Sign up / Login
                </Link>
              )}
            </div>

            <div
              className="sm:hidden cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>

          <div
            ref={mobileMenuRef}
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } sm:hidden bg-transparent border-t-2 py-2 transition-all relative ease-in-out duration-500`}
          >
            <div className="flex flex-col gap-y-4 items-center">
              <Link
                onClick={() => setActiveTab("/")}
                href="/"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/" && "bg-violet-900 text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/blogs"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/blogs" && "bg-violet-900 text-white"
                }`}
              >
                Blogs
              </Link>
              <Link
                href="/explore"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/explore" && "bg-violet-900 text-white"
                }`}
              >
                Explore
              </Link>
              <Link
                href="/about"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/about" && "bg-violet-900 text-white"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`ease-in-out hover:bg-violet-900 font-medium px-4 py-2 rounded-lg focus:bg-violet-800 focus:text-white text-violet-700 active:border border-purple-800 hover:border-2 hover:text-lg duration-150 hover:text-white transition-all ${
                  activeTab === "/contact" && "bg-violet-900 text-white"
                }`}
              >
                Contact
              </Link>
              {isLoading ? (
                <p>Loading...</p>
              ) : isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <div className=" flex-col  bg-violet-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-6 absolute -top-16 right-0">
                    {data && (
                      <a href="/profile">
                        {" "}
                        {data.user.username.charAt(0).toUpperCase()}
                      </a>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="hidden btn btn-primary"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="btn btn-primary flex items-center px-4 py-3 justify-around w-fit text-purple-800 hover:text-white border border-purple-800 hover:bg-purple-800 hover:border-purple-500 duration-200 transition-all ease-in-out rounded-xl "
                  onClick={handleLoginSignup}
                >
                  Sign up / Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarByMe;
