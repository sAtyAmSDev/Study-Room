import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BGImg from "../../assets/heroBG.webp";
import axios from "axios";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const LoginApi = async () => {
    try {
      if (!email || !password) {
        console.log("Please fill in all fields");
        return;
      }
      let body = {
        email,
        password,
      };

      await axios
        .post("http://localhost/api/user/login", body, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          const UserToken = res.data.token;
          localStorage.setItem("UserToken", JSON.stringify(UserToken));
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
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

        <div className="relative  text-white gap-6 flex flex-col h-[50vh] items-center justify-center ">
          <div className="flex flex-col gap-3">
            <label className="text-xl ">Email</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Your Email"
              className=" placeholder:text-purple-500 text-xl bg-transparent border-2 outline-none  border-purple-600 rounded-md py-2 px-3 w-1/1"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-xl">Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Your Password"
              className=" placeholder:text-purple-500 text-xl bg-transparent border-2 outline-none border-purple-600 rounded-md py-2 px-3 w-1/1"
            />
          </div>
          <div className="flex items-center justify-around gap-20 ">
            <button
              onClick={LoginApi}
              className=" bg-purple-600  p-2 rounded-lg cursor-pointer text-xl  flex justify-center items-center"
            >
              Sign In
            </button>
            <Link to="/SignUp" className="flex justify-center items-center   ">
              <a className="text-purple-600 rounded-lg cursor-pointer text-xl ">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;