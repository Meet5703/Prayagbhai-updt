import React from "react";
import img1 from "../../assets/dslogo1.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-screen flex-col flex items-center justify-center">
      <Image
        className="w-32 animate-pulse"
        src={img1}
        alt="Loading"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Loading;
