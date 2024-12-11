import React, { useEffect, useState } from "react";
import BGImg from "../assets/heroBG.webp";
import axios from "axios";
import Markdown from "react-markdown";
import { MdSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AssignmentSolver = () => {
  const [prompt, setPrompt] = useState("Enter your Question ");
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState("Looking for expert help with your assignments? You’re in the right place! We specialize in solving all types of assignment questions, no matter the subject or complexity. From math and science to history, literature, or technical subjects like engineering and programming, we’ve got you covered. Our team of skilled professionals is here to deliver accurate, well-researched, and timely solutions. Whether it’s essays, reports, research papers, or problem-solving assignments, we ensure high-quality work tailored to your requirements. Struggling with deadlines? Don’t worry – we’re quick, reliable, and always ready to help. With our support, you can focus on learning while we handle the heavy lifting. At our service, every assignment matters, and your satisfaction is our priority. Say goodbye to stress and hello to success with assignments solved across all subjects. Let us take care of your academic challenges today!");
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

  const FetchApi = async () => {
    try {
      if (!prompt) {
        console.error("Prompt is empty, skipping API call.");
        return;
      }
      setData(null)
      setLoading(true);

      const response = await axios.post(
        `${process.env.API_URL}/api/bot/chat`,
        { prompt: `only solved answer ${prompt}   ` },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const resText = response.data.candidates[0].content.parts[0].text;
      setData(resText);
      setLoading(false);
    } catch (error) {
      alert("Error fetching API:", error.message);
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

        <div className="relative items-center  text-white flex flex-col  ">
          <div className=" flex  bg-[#151425]  rounded-3xl p-3 gap-4  w-full  ">
            <textarea
              type="text"
              name="prompt"
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={prompt}
              className=" border-2 rounded-md p-2 bg-transparent bodrer-2 border-gray-800 outline-none text-sm   w-[100%] md:w-[90%] resize-none overflow-hidden "
              required
            />
            <button
              type="button"
              onClick={FetchApi}
              className="text-3xl md:w-[10%]  flex justify-center items-center "
            >
              <MdSend />
            </button>
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

export default AssignmentSolver;