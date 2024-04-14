"use client";
import Contact from "@/components/contactForm";
import NavbarByMe from "@/components/navbar";
import ContactSkeleton from "@/components/skeletons/contactskele";
import NavbarSkeleton from "@/components/skeletons/navbarskele";
import React, { useEffect, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {" "}
      {loading ? (
        <>
          <NavbarSkeleton />
          <ContactSkeleton />
        </>
      ) : (
        <>
          <div className="fixed  top-0  w-full z-50">
            <NavbarByMe />
          </div>
          <Contact />
        </>
      )}
    </>
  );
};

export default page;
