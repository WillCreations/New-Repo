import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <div className="mx-10 md:mx-28 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(10)].map((p) => {
          return (
            <div
              key={p}
              className="animate-pulse h-auto w-[400] rounded-md overflow-hidden bg-gray-600"
            >
              <div className="w-full h-64  rounded-md bg-gray-900 animate-pulse"></div>
              <div className="p-5">
                <div>
                  <h2 className="w-[80%] h-10 rounded-md bg-gray-900 animate-pulse "></h2>
                  <h2 className="w-[50%]  rounded-md bg-gray-900 animate-pulse mt-2 h-5"></h2>
                </div>

                <div className="flex justify-end rounded-md bg-gray-900 h-14 mt-5"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;