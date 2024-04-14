import Pay from "@/components/Pay";
import NavbarByMe from "@/components/navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>
      <Pay />
    </>
  );
};

export default page;
