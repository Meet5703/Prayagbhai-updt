import NavbarByMe from "@/components/navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="fixed w-full z-50">
        <NavbarByMe />
      </div>
      <div>your transuction has been failed</div>;
    </>
  );
};

export default page;
