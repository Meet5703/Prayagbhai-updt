import React from "react";

const ContactSkeleton = () => {
  return (
    <div className="mt-20 grid grid-cols-1 px-3 md:grid-cols-2">
      <div className="md:block hidden col-span-1">
        <h2 className="text-3xl xl:text-5xl bg-transparent pt-16 text-center text-gray-900 animate-pulse">
          How can we help you ?
        </h2>
        <div className="w-full h-96 bg-gray-300 animate-pulse"></div>
      </div>
      <div className="col-span-1 md:mt-32 md:mr-28">
        <div className="py-12">
          <div className="w-full px-4 py-2">
            <div className="bg-white bg-transparent shadow-[#6105bd] rounded-lg px-6 py-8 shadow-md animate-pulse">
              <h1 className="text-3xl md:text-5xl mb-5 text-[#6105bd] bg-transparent font-[700] animate-pulse">
                Contact Us
              </h1>
              <div className="mb-4 bg-white relative flex animate-pulse">
                <div className="border-2 rounded-md peer py-4 px-2 bg-transparent w-full focus:border-[#6105bd] focus:outline-none animate-pulse"></div>
              </div>
              <div className="mb-4 relative flex bg-transparent animate-pulse">
                <div className="border-2 pl-10 rounded-md peer py-4 px-2 bg-transparent w-full focus:border-[#6105bd] focus:outline-none animate-pulse"></div>
              </div>
              <div className="mb-4 bg-transparent relative flex animate-pulse">
                <div className="border-2 rounded-md peer py-4 bg-transparent px-2 w-full focus:border-[#6105bd] focus:outline-none animate-pulse"></div>
              </div>
              <div className="mb-4 bg-transparent relative flex animate-pulse">
                <div className="border-2 rounded-md peer p-2 bg-transparent w-full focus:border-[#6105bd] focus:outline-none animate-pulse"></div>
              </div>
              <div className="flex bg-transparent justify-center animate-pulse">
                <button className="bg-[#6105bd] hover:bg-purple-700 text-white font-bold py-2 xl:px-44 rounded px-24 focus:outline-none focus:shadow-outline text-xl animate-pulse">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;
