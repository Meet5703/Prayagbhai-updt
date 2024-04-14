import Blogs from "@/components/blogs/Blog";
import NavbarByMe from "@/components/navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <NavbarByMe />

      <Blogs />
    </div>
  );
};

export default page;
