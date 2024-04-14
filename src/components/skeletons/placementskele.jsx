import React from "react";

const PlacementSkeleton = () => {
  return (
    <div>
      <section>
        <div className="container max-w-full mx-auto py-12 px-6">
          <h1 className="text-center text-4xl text-black font-bold leading-snug tracking-wider animate-pulse"></h1>
          <p className="text-center text-lg text-gray-700 mt-2 md:px-72 animate-pulse"></p>
          <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded animate-pulse"></div>

          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8 md:py-12">
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Placeholder for card 1 */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                <div className="text-black rounded-lg pb-20 shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-4xl font-bold uppercase p-3 pb-0 text-center tracking-wide animate-pulse"></h1>
                    <br />
                  </div>

                  <div className="flex flex-wrap mt-3 px-6">
                    {/* Placeholder for list items */}
                    <ul>
                      <li className="bg-gray-300 flex items-center animate-pulse">
                        <div className="rounded-full p-2 fill-current text-green-700 animate-pulse">
                          <span className="material-symbols-outlined">
                            check
                          </span>
                        </div>
                        <span className="text-gray-700 text-lg ml-3 animate-pulse"></span>
                      </li>
                      {/* Add more list item placeholders as needed */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Placeholder for card 2 */}
              <div className="w-full pb-20 max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 rounded-lg shadow-lg">
                <div className="text-sm leading-none rounded-t-lg bg-[#4c1d95] text-white font-semibold uppercase py-4 text-center tracking-wide animate-pulse"></div>
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-4xl font-bold uppercase p-3 pb-0 text-center tracking-wide animate-pulse"></h1>
                  <br />
                </div>
                <div className="flex pl-12 justify-start sm:justify-start mt-3">
                  {/* Placeholder for list items */}
                  <ul>
                    <li className="bg-gray-300 flex items-center animate-pulse">
                      <div className="rounded-full p-2 fill-current text-green-700 animate-pulse">
                        <span className="material-symbols-outlined">check</span>
                      </div>
                      <span className="text-gray-700 text-lg ml-3 animate-pulse"></span>
                    </li>
                    {/* Add more list item placeholders as needed */}
                  </ul>
                </div>
              </div>
              {/* Placeholder for card 3 */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                <div className="text-black rounded-lg pb-20 shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-4xl font-bold uppercase p-3 pb-0 text-center tracking-wide animate-pulse"></h1>
                    <br />
                  </div>
                  <div className="flex flex-wrap mt-3 px-6">
                    {/* Placeholder for list items */}
                    <ul>
                      <li className="bg-gray-300 flex items-center animate-pulse">
                        <div className="rounded-full p-2 fill-current text-green-700 animate-pulse">
                          <span className="material-symbols-outlined">
                            check
                          </span>
                        </div>
                        <span className="text-gray-700 text-lg ml-3 animate-pulse"></span>
                      </li>
                      {/* Add more list item placeholders as needed */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementSkeleton;
