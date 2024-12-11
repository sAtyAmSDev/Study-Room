import React, { useEffect, useState } from "react";
import BGImg from "../assets/heroBG.webp";
import axios from "axios";
import Markdown from "react-markdown";
import { MdSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const GigaScanify = () => {
  const [prompt, setPrompt] = useState("  ");
  const [file, setFile] = useState();
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState(
    "  GigaScanify is your ultimate image scanning tool that goes beyond just capturing pictures. With GigaScanify, you can quickly scan any image and unlock detailed information about its content, including metadata, object recognition, and text extraction. Whether you're analyzing photos for data, identifying objects, or gathering insights, GigaScanify makes it easy and efficient to transform your images into valuable information with just a few clicks."
  );
  const navigate = useNavigate();
  useEffect(() => {
    const UserToken = JSON.parse(localStorage.getItem("UserToken"));

    if (UserToken) {
      verifyUser(UserToken);
    } else {
      setInterval(() => {

        navigate("/SignIn");
      }, 3000);
    }
  })



  function handleChangeFile(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  const FetchApi = async () => {

    try {
      if (!prompt) {
        console.error("Prompt is empty, skipping API call.");
        return;
      }
      setLoading(true);
      setData(null)
      if (!file) {
        console.error("No file selected.");
        return;
      }
      console.log(file);

      const formData = new FormData();
      formData.append("Photo", file);
      formData.append("prompt", `only Scan the image and give full information ${prompt}`);

      console.log("Sending FormData:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      await axios
        .post(`http://localhost/api/bot/image`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log(res.data.apiResponse);
          setData(res.data.apiResponse);
          setPrompt(null);
          setLoading(false);
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (error) {
      alert("Error fetching API:", error.message);
    }
  };

  return (
    <div className="flex text-white font-Poppins justify-center ">
      <div className="absolute inset-0 z-0">
        <img
          src={BGImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 h-full bg-[#0F0E19] opacity-80 "></div>
      <div className="xl:w-[1280px] flex justify-center mx-2 md:mx-10 mt-20 p-5   border-2 border-gray-700  flex-col w-screen z-20  relative">
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

        <div className="relative  text-white flex flex-col items-center justify-center   ">
          <div className=" flex   justify-start bg-[#151425]  rounded-3xl p-3 flex-col gap-4  w-full md:flex-row  ">
            <div className="flex gap-3 w-full justify-between items-center md:justify-start md:w-1/2 ">
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="h-16 w-16 object-cover rounded-md"
                />
              )}{" "}
              <input
                className="w-1/3 md:w-full block text-sm text-slate-500 cursor-pointer min-w-min
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
                type="file"
                name="Photo"
                capture="user"
                onChange={handleChangeFile}
                accept="image/*"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <textarea
                type="text"
                name="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter Your Prompt"
                className="border-2 rounded-md p-2 bg-transparent bodrer-2 border-gray-800 outline-none text-sm   w-[100%] md:w-[90%] resize-none overflow-hidden "
                required
              />
              <button
                type="button"
                onClick={FetchApi}
                className="text-3xl right-1 w-full md:w-[10%] "
              >
                <MdSend />
              </button>
            </div>
          </div>

          {data ? (
            <div className="p-4 my-5   bg-[#151425] shadow-sm shadow-violet-900 rounded-lg gap-9 flex flex-col font-Poppins text-xl   ">
              {/* <div>
              <span className="text-blue-500  font-semibold ">
                your  Prompt :{" "}
              </span>
              {prompt}
            </div> */}
              <Markdown className="flex flex-col gap-3 text-xl ">
                {data}
              </Markdown>
            </div>
          ) : (
            <div className="flex items-center justify-center mt-5">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed "
                disabled=""
              >
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GigaScanify;
