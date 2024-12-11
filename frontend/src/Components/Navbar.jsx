import React, { useContext, useEffect, useState } from "react";
import Logo from "/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [Loging] = useState(false);
  const [PopUp, setPopUp] = useState(false)
  const { Responce } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate()


  const LogOut = () => {
    localStorage.removeItem("UserToken");
    navigate("/")
    window.location.reload()
  }

  useEffect(() => {
    window.addEventListener("click", () => { })
  }, [])




  return (
    <div className="fixed top-0  w-full z-[999] h-20 flex justify-center items-center">

      <div className="absolute inset-0 h-full bg-[#0F0E19] opacity-90 backdrop-blur-9xl"></div>

      <div className="relative z-10 flex items-center justify-between w-full h-16 text-white md:px-11 px-4 py-10 xl:w-[1280px] font-Poppins  ">
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="Study Room Logo" className="w-12 h-10 " />
          <h1 className="text-xl font-extrabold ">Study Room</h1>
        </div>

        <div
          className={
            menu
              ? "gap-10 flex absolute  top-0 w-screen right-0 h-screen flex-col bg-[#0F0E19] justify-center items-center  "
              : "hidden md:flex gap-5  "
          }
        >
          <ul className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5">
            <MdClose
              onClick={() => {
                setMenu(false);
              }}
              className=" md:hidden flex absolute top-5 right-5 text-4xl "
            />
            <li>
              <Link to="/">
                <a
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="uppercase font-code text-xl md:text-[15px] text-gray-300 hover:text-purple-700 active:text-purple-700 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/MrBot">
                <a
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="uppercase font-code text-xl md:text-[15px] text-gray-300 hover:text-purple-700 active:text-purple-700 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  AI Assistants
                </a>
              </Link>
            </li>

            <li>
              <Link to="/QuestionPapers">
                <a
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="uppercase font-code text-xl md:text-[15px] text-gray-300 hover:text-purple-700 active:text-purple-700 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  Question Papers
                </a>
              </Link>
            </li>

            <li className="md:hidden visible">
              <Link to="/">
                <a
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="uppercase font-code text-xl md:text-[15px] text-gray-300 hover:text-purple-700 active:text-purple-700 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  Features
                </a>
              </Link>
            </li>
            <li className="md:hidden visible">
              <Link to="/AboutUs">
                <a
                  onClick={() => {
                    setMenu(false);
                  }}
                  className="uppercase font-code text-xl md:text-[15px] text-gray-300 hover:text-purple-700 active:text-purple-700 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  About Us
                </a>
              </Link>
            </li>
          </ul>

          {!Loging ? (
            <div className="relative flex gap-5 md:gap-0 items-center">

              {
                Responce ? <button onClick={() => setPopUp(true)} className="uppercase font-code text-2xl text-gray-300 hover:text-purple-700 active:text-purple-700 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"><FaRegUserCircle /></button> : <Link to="/signin">
                  <a
                    href="/SignIn"
                    className="button cursor-pointer relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 text-n-8  "
                  >
                    <span className="relative z-10 text-black hover:text-purple-800 text-base font-semibold">
                      Sign In
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
                </Link>
              }


              {PopUp && <div onPointerLeave={() => {
                setPopUp(false)
              }} className="absolute  top-1 right-1 w-max h-max flex-col  p-5 rounded-lg bg-[#141021]  ">
                <div className="flex font-Poppins  gap-4  items-center  mb-5 ">
                  <button className="uppercase font-code text-3xl text-gray-300 hover:text-purple-700 active:text-purple-700 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"><FaRegUserCircle /></button>
                  {Responce ? <div>
                    <h1 className="text-xl font-Poppins "> {Responce.data?.user?.name}
                    </h1>
                    <p className="text-xs font-Poppins  ">{Responce.data?.user?.email}</p>
                  </div> : "User Name"}
                </div>
                <div>
                  <button onClick={() => LogOut()} className="bg-purple-900 p-2 rounded-lg  font-Poppins text-md text-gray-300 transition duration-300 ease-in-out transform hover:scale-90 active:scale-75 ">Logout</button>
                </div>
              </div>}

            </div>
          ) : (
            " "
          )}
        </div>
        <MdMenu
          onClick={() => {
            setMenu(true);
          }}
          className="text-4xl md:hidden "
        />
      </div>
    </div>
  );
};

export default Navbar;
