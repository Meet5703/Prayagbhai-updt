import React from "react";

const NavbarSkeleton = () => {
  return (
    <nav className="bg-gray-300 font-sans w-full m-0 sticky top-0 z-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="animate-pulse">
              <div className="h-10 w-20 bg-gray-400 rounded"></div>
            </div>

            {/* Navigation links */}
            <div className="hidden sm:flex sm:items-center sm:gap-4 bg-transparent">
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>

            {/* User actions */}
            <div className="hidden sm:flex sm:items-center">
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden cursor-pointer">
              <div className="animate-pulse">
                <div className="h-8 w-8 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="sm:hidden bg-transparent border-t-2 py-2 transition-all ease-in-out duration-500">
            <div className="flex flex-col gap-y-4 items-center">
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
              <div className="animate-pulse">
                <div className="h-8 w-16 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSkeleton;
