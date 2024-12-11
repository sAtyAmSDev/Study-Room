import React from "react";
import BGImg from "../assets/heroBG.webp";

const Features = () => {
  return (
    <div className=" flex text-white font-Poppins justify-center  ">
    <div className="absolute inset-0 z-0">
      <img
        src={BGImg}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="absolute inset-0 z-10 h-full bg-[#0F0E19] opacity-80 "></div>
    <div className="xl:w-[1280px] flex  mx-2 md:mx-10 mt-20 p-5  border-2 border-gray-700  flex-col w-screen z-20  relative">
      <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-8px] top-[-19px]">
        +
      </div>
      <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-8px] top-[-19px]">
        +
      </div>
      <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-8px] bottom-[-19px]">
        +
      </div>
      <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-8px] bottom-[-19px]">
        +
      </div>

      <div className="relative  text-white flex flex-col h-screen items-center justify-center ">
        <h1 className="p-5 bg-purple-950  text-3xl rounded-xl font-semibold ">
          Panding Page
        </h1>
      </div>
    </div>
  </div>
  );
};

export default Features;
