import React, { useEffect, useState } from "react";
import Logo from "/Logo.png";
import BGImg from "../assets/heroBG.webp";
import HeroSectionImg from "../assets/HeroSectionimg.svg";
import Underline from "../assets/Underline.webp";
import img1 from "../assets/Image/img1.webp";
import img2 from "../assets/Image/img2.webp";
import img6 from "../assets/Image/img6.webp";
import img8 from "../assets/Image/img8.webp";
import img9 from "../assets/Image/img9.webp";
import img10 from "../assets/Image/img10.webp";

import { MdKeyboardArrowRight, MdMessage } from "react-icons/md";

import {
  RiHomeSmile2Line,
  RiFilePdf2Line,
  RiSearch2Line,
  RiRobot2Line,
  RiMessage2Fill,
  RiImage2Line,
} from "react-icons/ri";

import {
  FaBook,
  FaElementor,
  FaFilePdf,
  FaImage,
  FaRobot,
  FaRegNewspaper,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Home = () => {
  const { Responce, setResponce } = useContext(AuthContext)

  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  // const verifyUser = async (UserToken) => {
  //   try {
  //     await axios
  //       .get("http://localhost/api/user/profile", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${UserToken}`
  //         },
  //       })
  //       .then((res) => {
  //         setResponce(res)
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  useEffect(() => {
    // // const UserToken = JSON.parse(localStorage.getItem("UserToken"));

    // // if (UserToken) {
    // //   verifyUser(UserToken);
    // // } else {
    // //   navigate("/SignIn");
    // }
    const handleMouseMove = (e) => {
      setMouseMove({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getFloatStyle = (offsetX, offsetY) => {
    const floatAmount = 10;
    const x = (mouseMove.x - window.innerWidth / 2) / window.innerWidth;
    const y = (mouseMove.y - window.innerHeight / 2) / window.innerHeight;

    return {
      transform: `translate(${offsetX + x * floatAmount}px, ${offsetY + y * floatAmount
        }1px)`,
    };
  };

  return (
    <div className="bg-[#0F0E19]  relative w-full items-center justify-center text-white flex flex-col  font-Poppins ">
      <div className="  absolute inset-0 z-0">
        <img
          src={BGImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-[#0F0E19] opacity-80 "></div>

      <div className=" relative z-20 w-full xl:w-[1280px] font-Poppins h-full flex flex-col text-xl">
        {/* Hero Section start */}
        <div className="flex justify-center mx-2 md:mx-10 mt-20 pt-5 border-2 border-gray-700 h-[34pc] lg:h-[33pc] relative">
          <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] top-[-17px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] top-[-17px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] bottom-[-14px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] bottom-[-14px]">
            +
          </div>

          {/* Start Section */}
          <div className="absolute h-screen w-full  z-10 flex items-center justify-center">
            <div className="relative flex items-start justify-center p-10 border-2 border-gray-900 rounded-full h-[80%] w-[80%]">
              <div
                className="circul bg-blue-700 p-3  rounded-full right-12 absolute"
                style={getFloatStyle(0, 0)}
              ></div>
            </div>
            <div className="absolute p-10 border-2 border-gray-900 rounded-full h-[70%] w-[70%] flex items-start">
              <div
                className="circul bg-gray-700 p-3 rounded-full left-0  absolute"
                style={getFloatStyle(0, 10)}
              ></div>
            </div>
            <div className="flex justify-center absolute p-10 border-2 border-gray-900  rounded-full h-[60%] w-[60%]">
              <div
                className="circul bg-yellow-700 p-2 rounded-full top-[-15px] absolute"
                style={getFloatStyle(5, 10)}
              ></div>
            </div>
            <div className="flex items-start absolute p-10 border-2 border-gray-900 rounded-full h-[50%] w-[50%]">
              <div
                className="circul bg-blue-800 p-2 rounded-full left-[33px] top-[200px] absolute"
                style={getFloatStyle(10, 0)}
              ></div>
            </div>
            <div className="flex items-start absolute p-10 border-2 border-gray-900 rounded-full h-[40%] w-[40%]">
              <div
                className="circul bg-gray-400 p-1 rounded-full right-[15px] absolute"
                style={getFloatStyle(10, 0)}
              ></div>
            </div>
          </div>

          <div className="relative flex flex-col items-center h-full w-full z-40 gap-30 p-2 md:px-12 lg:px-16  ">
            <div className="flex flex-col items-center gap-10 md:gap-3  ">
              <h1 className=" text-3xl md:text-4xl md:leading-relaxed  text-center  font-extrabold leading-snug  ">
                Unlock Your Full{" "}
                <span className="relative  ">
                  Learning{" "}
                  <img
                    className="absolute right-0 bottom-[-10px] "
                    src={Underline}
                    alt=""
                  />
                </span>{" "}
                Potential with Smart Study Tools!
              </h1>
              <p className="text-xl text-center text-gray-300 leading-normal ">
                AI-powered assistance, solved question papers, assignments, and
                more everything you need to study smarter, not harder, for
                <span className="text-purple-400 font-semibold "> All Students</span>
              </p>
              <div>
                <a className="button  cursor-pointer relative inline-flex items-center justify-center h-10 transition-colors hover:text-color-1 px-6 py-2 text-n-8   ">
                  <span className="relative z-10 text-black hover:text-purple-800 text-sm font-semibold">
                    Get started
                  </span>
                  <svg
                    className="absolute top-0 left-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                    ></path>
                  </svg>
                  <svg
                    className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                    height="44"
                    viewBox="0 0 100 44"
                    preserveAspectRatio="none"
                    fill="white"
                  >
                    <polygon
                      fill="white"
                      fill-rule="nonzero"
                      points="100 0 100 44 0 44 0 0"
                    ></polygon>
                  </svg>
                  <svg
                    className="absolute top-0 right-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="absolute bottom-[-85%] md:bottom-[-75%]   h-[35pc] rounded-2xl overflow-hidden  flex justify-center">
              <div className="Float absolute w-full  top-[30%] lg:left-[-24pc] lg:top-[1%] hidden xl:flex ">
                <div
                  style={getFloatStyle(10, 0)}
                  className="bg-[#27283D] p-3 text-2xl flex gap-6 rounded-lg absolute left-96 "
                >
                  <RiHomeSmile2Line className="cursor-pointer hover:text-purple-700 hover:scale-300" />
                  <RiFilePdf2Line className="cursor-pointer hover:text-purple-700 hover:scale-300" />
                  <RiSearch2Line className="cursor-pointer hover:text-purple-700 hover:scale-300" />
                  <RiRobot2Line className="cursor-pointer hover:text-purple-700 hover:scale-300" />
                </div>
              </div>

              <img
                src={HeroSectionImg}
                alt=""
                className="h-48 md:h-72  w-full lg:full  "
              />
            </div>
          </div>
        </div>
        {/* Main Section start */}
        <div className="flex justify-center mx-2 md:mx-10 md:pt-12 lg:pt-10 pt-5 border-2 border-gray-700 h-full relative">
          <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] top-[-17px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] top-[-17px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] bottom-[-14px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] bottom-[-14px]">
            +
          </div>

          <div className=" relative p-2 md:px-12 lg:px-16 mt-24 mb-14  gap-10 md:gap-8   flex flex-col items-center z-30 w-screen ">
            <div className="flex gap-3 items-center justify-center flex-wrap lg:gap-5 ">
              <button className="flex gap-2 text-sm items-center cursor-pointer ">
                <FaRobot className="text-3xl" />
                <span className="hover:text-purple-600">AI Assistant</span>
              </button>
              <button className="flex gap-2 text-sm items-center cursor-pointer">
                <FaRegNewspaper className="text-3xl" />
                <span className="hover:text-purple-600">Question Papers</span>
              </button>
              <button className="flex gap-2 text-sm items-center cursor-pointer">
                <FaBook className="text-3xl" />
                <span className="hover:text-purple-600">
                  Assignments & Solutions
                </span>
              </button>
              <button className="flex gap-2 text-sm items-center cursor-pointer">
                <FaImage className="text-3xl" />
                <span className="hover:text-purple-600">Image Analysis</span>
              </button>
              <button className="flex gap-2 text-sm items-center cursor-pointer">
                <FaFilePdf className="text-3xl" />
                <span className="hover:text-purple-600">Pdf Analysis</span>
              </button>
            </div>

            <div className="flex gap-10 md:gap-8  flex-wrap lg:flex-nowrap  justify-center lg:justify-start lg:items-center  md:items-start  ">
              <div className="flex flex-col items-center lg:items-start md:items-start  gap-10 md:gap-8 lg:gap-5 lg:w-1/2 ">
                <h1 className=" text-center lg:text-start text-3xl font-extrabold ">
                  All-in-One{" "}
                  <span className="text-4xl text-purple-600 ">Learning</span>{" "}
                  Tools for Your Success
                </h1>
                <p className="text-justify texl-xl">
                  Our platform provides an integrated suite of tools to enhance
                  your learning experience. With our AI Assistant, get instant
                  help anytime for any subject. Practice and learn more
                  effectively with solved question papers and assignments. Plus,
                  create custom tests, analyze diagrams, and even upload PDFs
                  for detailed analysis—all in one place.
                </p>
                <div className="bg-[#27283D] relative md:mx-3 lg:mx-0 p-3 text-2xl flex gap-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                  <FaRobot className="cursor-pointer hover:text-purple-700 hover:scale-125 transform transition-transform duration-300 ease-in-out" />

                  <FaRegNewspaper className="cursor-pointer hover:text-purple-700 hover:scale-125 transform transition-transform duration-300 ease-in-out" />

                  <FaBook className="cursor-pointer hover:text-purple-700 hover:scale-125 transform transition-transform duration-300 ease-in-out" />

                  <FaImage className="cursor-pointer hover:text-purple-700 hover:scale-125 transform transition-transform duration-300 ease-in-out" />

                  <FaFilePdf className="cursor-pointer hover:text-purple-700 hover:scale-125 transform transition-transform duration-300 ease-in-out" />
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-center lg:w-1/2  ">
                <svg
                  className="absolute  bottom-[-5pc]  lg:left-[-16pc]  left-[-25pc] text-black "
                  xmlns="http://www.w3.org/2000/svg"
                  width="522"
                  height="182"
                  viewBox="0 0 522 182"
                  fill="none"
                >
                  <path
                    d="M0.333333 179C0.333333 180.473 1.52724 181.667 3 181.667C4.47276 181.667 5.66667 180.473 5.66667 179C5.66667 177.527 4.47276 176.333 3 176.333C1.52724 176.333 0.333333 177.527 0.333333 179ZM517 3.5L522 5.88675V0.113249L517 2.5V3.5ZM3 179.5H131.782V178.5H3V179.5ZM212.282 99V83H211.282V99H212.282ZM291.782 3.5H517.5V2.5H291.782V3.5ZM212.282 83C212.282 39.0934 247.875 3.5 291.782 3.5V2.5C247.323 2.5 211.282 38.5411 211.282 83H212.282ZM131.782 179.5C176.241 179.5 212.282 143.459 212.282 99H211.282C211.282 142.907 175.688 178.5 131.782 178.5V179.5Z"
                    fill="#252134"
                  />
                </svg>
                <div className="relative z-10 border-2 p-28 rounded-full text-4xl animate-spin-slow ">
                  <FaRobot
                    className="absolute top-0 right-10 cursor-pointer hover:text-purple-700 hover:scale-150 
             transform origin-center animate-rotate-icons"
                  />
                  <FaRegNewspaper
                    className="absolute left-[-1pc] top-[45%] cursor-pointer hover:text-purple-700 hover:scale-150 
             transform origin-center animate-rotate-icons"
                  />
                  <FaBook
                    className="absolute right-[-1pc] top-[45%] cursor-pointer hover:text-purple-700 hover:scale-150 
             transform origin-center animate-rotate-icons"
                  />
                  <FaBook
                    className="absolute bottom-[5px] left-10 cursor-pointer hover:text-purple-700 hover:scale-150 
             transform origin-center animate-rotate-icons"
                  />
                  <FaImage
                    className="absolute bottom-[5px] right-10 cursor-pointer hover:text-purple-700 hover:scale-150 
             transform origin-center animate-rotate-icons"
                  />
                  <FaFilePdf
                    className="absolute top-0 left-10 cursor-pointer hover:text-purple-700 hover:scale-150 
             transform origin-center animate-rotate-icons"
                  />
                </div>

                <div className="z-10 absolute border-2 p-16 rounded-full "></div>
                <div className=" absolute border-2 p-7 rounded-full  flex items-center justify-center cursor-pointer">
                  <img
                    src={Logo}
                    alt="LOGO"
                    className="absolute hover:scale-[2.4] cursor-pointer transform transition-transform duration-300 ease-in-out "
                  />
                </div>
                <svg
                  className="absolute  bottom-7 right-[-4.5pc] lg:right-[7pc] "
                  xmlns="http://www.w3.org/2000/svg"
                  width="162"
                  height="76"
                  viewBox="0 0 162 76"
                  fill="none"
                >
                  <path
                    d="M0.333333 3C0.333333 1.52724 1.52724 0.333336 3 0.333336C4.47276 0.333336 5.66667 1.52724 5.66667 3C5.66667 4.47276 4.47276 5.66666 3 5.66666C1.52724 5.66666 0.333333 4.47276 0.333333 3ZM157 72.5L162 70.1132V75.8868L157 73.5V72.5ZM84.5606 38C84.5606 36.5272 85.7545 35.3333 87.2272 35.3333C88.7 35.3333 89.8939 36.5272 89.8939 38C89.8939 39.4728 88.7 40.6667 87.2272 40.6667C85.7545 40.6667 84.5606 39.4728 84.5606 38ZM3 2.5H52.2273V3.5H3V2.5ZM122.227 72.5H157.5V73.5H122.227V72.5ZM87.7272 38C87.7272 57.0538 103.173 72.5 122.227 72.5V73.5C102.621 73.5 86.7272 57.6061 86.7272 38H87.7272ZM52.2273 2.5C71.8334 2.5 87.7272 18.3939 87.7272 38H86.7272C86.7272 18.9462 71.2811 3.5 52.2273 3.5V2.5Z"
                    fill="#252134"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Service Section start */}
        <div className="flex justify-center mx-2 md:mx-10 md:py-12 lg:py-10 py-5 border-2 border-gray-700 h-full relative">
          <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] top-[-17px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] top-[-17px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] bottom-[-14px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] bottom-[-14px]">
            +
          </div>

          <div className="  flex flex-col gap-10 md:gap-16  z-30 p-2 md:px-12 lg:px-16  ">
            <h1 className="  text-3xl md:text-4xl md:leading-relaxed md:text-start  text-center  font-extrabold leading-snug ">
              Unlock Your Full Potential with Our{" "}
              <span className="relative text-purple-500 font-extrabold">
                {" "}
                <img
                  src={Underline}
                  alt=""
                  className="absolute right-0 w-48 "
                />
                Smart Learning
              </span>{" "}
              Tools
            </h1>

            <div className="flex gap-8 flex-col-reverse md:flex-row w-full">
              <div className="flex flex-col gap-4 items-start md:w-1/2   ">
                <h1 className="text-2xl font-semibold ">AI Study Assistant</h1>
                <p className="text-base  ">
                  Get instant solutions to all your academic questions with our
                  AI-powered assistant. Whether it’s a concept you’re struggling
                  to understand or a tricky question from your textbook, the AI
                  Assistant is available 24/7 to provide clear, step-by-step
                  explanations. It’s like having a personal tutor ready to help
                  at any moment. With its advanced algorithms, it adapts to your
                  learning needs, ensuring personalized and accurate responses
                  to enhance your understanding.
                </p>
                <a className="button cursor-pointer relative inline-flex items-center justify-center h-10 transition-colors hover:text-color-1 px-6 text-n-8  ">
                  <Link to="/MrBot">
                    <span className="relative z-10 text-black hover:text-purple-800 text-sm font-semibold">
                      Ask AI Now
                    </span>
                  </Link>

                  <svg
                    className="absolute top-0 left-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                    ></path>
                  </svg>
                  <svg
                    className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                    height="44"
                    viewBox="0 0 100 44"
                    preserveAspectRatio="none"
                    fill="white"
                  >
                    <polygon
                      fill="white"
                      fill-rule="nonzero"
                      points="100 0 100 44 0 44 0 0"
                    ></polygon>
                  </svg>
                  <svg
                    className="absolute top-0 right-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="w-full flex justify-center md:w-1/2  ">
                <img
                  src={img1}
                  alt=""
                  className="w-[90%] md:w-full shadow-lg shadow-purple-800  rounded-3xl"
                />
              </div>
            </div>

            <div className="flex gap-10 w-full flex-col md:flex-row  ">
              <div className="w-full flex justify-center md:w-1/2 ">
                <img
                  src={img10}
                  alt=""
                  className="w-[90%] md:w-full shadow-lg shadow-purple-800  rounded-3xl"
                />
              </div>
              <div className="flex flex-col gap-4 items-start md:w-1/2   ">
                <h1 className="text-2xl font-semibold ">Question Papers</h1>
                <p className="text-base  ">
                  Access a comprehensive library of past exam papers with
                  detailed solutions to help you prepare thoroughly for your
                  tests. These papers are categorized by subject, class, and
                  difficulty level, so you can focus on the areas you need to
                  improve. Each solution is carefully crafted to explain key
                  concepts, ensuring you learn while you practice. Regularly
                  practicing with these papers can help you build confidence and
                  score better in your exams.
                </p>
                <a className="button cursor-pointer relative inline-flex items-center justify-center h-10 transition-colors hover:text-color-1 px-6 text-n-8  ">
                  <Link to="/QuestionPapers">
                    <span className="relative z-10 text-black hover:text-purple-800 text-sm font-semibold">
                      Explore Question Papers
                    </span>
                  </Link>

                  <svg
                    className="absolute top-0 left-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                    ></path>
                  </svg>
                  <svg
                    className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                    height="44"
                    viewBox="0 0 100 44"
                    preserveAspectRatio="none"
                    fill="white"
                  >
                    <polygon
                      fill="white"
                      fill-rule="nonzero"
                      points="100 0 100 44 0 44 0 0"
                    ></polygon>
                  </svg>
                  <svg
                    className="absolute top-0 right-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex gap-8 flex-col-reverse md:flex-row w-full">
              <div className="flex flex-col gap-4 items-start md:w-1/2   ">
                <h1 className="text-2xl font-semibold ">
                  Assignment And Question Solver
                </h1>
                <p className="text-base  ">
                  Simplify your assignment work with pre-solved examples and
                  guidance. Whether it’s a challenging math problem or a
                  literature analysis, our assignment tools provide step-by-step
                  solutions tailored to your needs. You can also upload your
                  assignments to get detailed, customized solutions, making your
                  academic journey stress-free and efficient.
                </p>
                <a className="button cursor-pointer relative inline-flex items-center justify-center h-10 transition-colors hover:text-color-1 px-6 text-n-8  ">
                  <Link to="/AssignmentSolver">
                    <span className="relative z-10 text-black hover:text-purple-800 text-sm font-semibold">
                      Solve Any Assignment
                    </span>
                  </Link>

                  <svg
                    className="absolute top-0 left-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                    ></path>
                  </svg>
                  <svg
                    className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                    height="44"
                    viewBox="0 0 100 44"
                    preserveAspectRatio="none"
                    fill="white"
                  >
                    <polygon
                      fill="white"
                      fill-rule="nonzero"
                      points="100 0 100 44 0 44 0 0"
                    ></polygon>
                  </svg>
                  <svg
                    className="absolute top-0 right-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="w-full flex justify-center md:w-1/2 ">
                <img
                  src={img9}
                  alt=""
                  className="w-[90%] md:w-full shadow-lg shadow-purple-800  rounded-3xl"
                />
              </div>
            </div>

            <div className="flex gap-10 w-full flex-col md:flex-row ">
              <div className="w-full flex justify-center md:w-1/2 ">
                <img
                  src={img8}
                  alt=""
                  className="w-[90%] md:w-full shadow-lg shadow-purple-800  rounded-3xl"
                />
              </div>{" "}
              <div className="flex flex-col gap-4 items-start md:w-1/2   ">
                <h1 className="text-2xl font-semibold ">
                  Custom Question Builder
                </h1>
                <p className="text-base  ">
                  Personalize your practice by creating custom quizzes based on
                  your syllabus. With the Question Builder, you can set
                  difficulty levels, select topics, and generate targeted
                  questions to challenge yourself. This feature is perfect for
                  students who want focused practice or for teachers looking to
                  prepare tailored assessments for their students.
                </p>
                <a className="button cursor-pointer relative inline-flex items-center justify-center h-10 transition-colors hover:text-color-1 px-6 text-n-8  ">
                  <Link to="/CustomQuestionBuilder">
                    <span className="relative z-10 text-black hover:text-purple-800 text-sm font-semibold">
                      Build a Test
                    </span>
                  </Link>

                  <svg
                    className="absolute top-0 left-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                    ></path>
                  </svg>
                  <svg
                    className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                    height="44"
                    viewBox="0 0 100 44"
                    preserveAspectRatio="none"
                    fill="white"
                  >
                    <polygon
                      fill="white"
                      fill-rule="nonzero"
                      points="100 0 100 44 0 44 0 0"
                    ></polygon>
                  </svg>
                  <svg
                    className="absolute top-0 right-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex gap-8 flex-col-reverse md:flex-row w-full">
              <div className="flex flex-col gap-4 items-start md:w-1/2   ">
                <h1 className="text-2xl font-semibold ">Image Analyzer</h1>
                <p className="text-base  ">
                  Upload any image or diagram, such as biology structures,
                  physics circuits, or even geography maps, and get an instant
                  explanation of what it represents. This AI-powered tool
                  simplifies complex visual information, making it easier to
                  grasp the core concepts. It’s especially useful for
                  understanding textbook diagrams or preparing for practical
                  exams.
                </p>
                <a className="button cursor-pointer relative inline-flex items-center justify-center h-10 transition-colors hover:text-color-1 px-6 text-n-8  ">
                  <Link to="/GigaScanify">
                    <span className="relative z-10 text-black hover:text-purple-800 text-sm font-semibold">
                      Analyze Image And Explain
                    </span>
                  </Link>

                  <svg
                    className="absolute top-0 left-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                    ></path>
                  </svg>
                  <svg
                    className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                    height="44"
                    viewBox="0 0 100 44"
                    preserveAspectRatio="none"
                    fill="white"
                  >
                    <polygon
                      fill="white"
                      fill-rule="nonzero"
                      points="100 0 100 44 0 44 0 0"
                    ></polygon>
                  </svg>
                  <svg
                    className="absolute top-0 right-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="w-full flex justify-center md:w-1/2 ">
                <img
                  src={img6}
                  alt=""
                  className="w-[90%] md:w-full shadow-lg shadow-purple-800  rounded-3xl"
                />
              </div>
            </div>

            <div className="flex gap-10 w-full flex-col md:flex-row ">
              <div className="w-full flex justify-center   md:w-1/2 ">
                <img
                  src={img2}
                  alt=""
                  className="w-[90%] md:w-full shadow-lg shadow-purple-800  rounded-3xl"
                />
              </div>{" "}
              <div className="flex flex-col gap-4 items-start md:w-1/2   ">
                <h1 className="text-2xl font-semibold ">PDF Explainer</h1>
                <p className="text-base  ">
                  Upload any PDF document, and our advanced AI tools will break
                  it down into easy-to-understand sections. Highlight important
                  points, summarize chapters, and get explanations for key terms
                  in seconds. This is a perfect tool for reviewing study
                  material, summarizing lengthy notes, or analyzing academic
                  papers efficiently.
                </p>
                <a className="button cursor-pointer relative inline-flex items-center justify-center h-10 transition-colors hover:text-color-1 px-6 text-n-8  ">
                  <Link to="/PDFExplainer">
                    <span className="relative z-10 text-black hover:text-purple-800 text-sm font-semibold">
                      Analyze PDF And Explain
                    </span>
                  </Link>

                  <svg
                    className="absolute top-0 left-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                    ></path>
                  </svg>
                  <svg
                    className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                    height="44"
                    viewBox="0 0 100 44"
                    preserveAspectRatio="none"
                    fill="white"
                  >
                    <polygon
                      fill="white"
                      fill-rule="nonzero"
                      points="100 0 100 44 0 44 0 0"
                    ></polygon>
                  </svg>
                  <svg
                    className="absolute top-0 right-0"
                    width="21"
                    height="44"
                    viewBox="0 0 21 44"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      stroke-width="2"
                      d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center items-center mx-2 md:mx-10 p-3 border-2 border-gray-700 h-full  relative">
          <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] top-[-17px]  ">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] top-[-17px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] bottom-[-14px]">
            +
          </div>
          <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] bottom-[-14px]">
            +
          </div>

          <div className="w-full flex flex-col  md:flex-row md:justify-between justify-center items-center p-2 md:px-12 lg:px-16  ">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link to="/">
                <a className="hover:text-purple-700">StudyRoom™</a>.
              </Link>{" "}
              All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <Link to="/AboutUs">
                  <a className="hover:text-purple-700 me-4 md:me-6 cursor-pointer ">
                    About
                  </a>
                </Link>
              </li>

              <li>
                <Link to="/AboutUs">
                  <a className="hover:text-purple-700 me-4 md:me-6 cursor-pointer ">
                    Privacy Policy
                  </a>{" "}
                </Link>
              </li>
              {/* <li>
                <Link to="/">
                  <a className="hover:text-purple-700 me-4 md:me-6 cursor-pointer ">
                    Licensing
                  </a>
                </Link>
              </li> */}
              <li>
                <Link to="/AboutUs">
                  {" "}
                  <a className="hover:text-purple-700">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
