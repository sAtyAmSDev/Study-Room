import React, { useEffect, useState } from "react";
import BGImg from "../assets/heroBG.webp";
import axios from "axios";
import Markdown from "react-markdown";
import { MdSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PDFExplainer = () => {
  const [selectoption, setSelectOption] = useState("");
  const [file, setFile] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState(
    " AI-Powered PDF Explainer: Simplify Your Documents Our innovative AI PDF Explainer revolutionizes how you interact with PDFs. This cutting-edge functionality allows you to extract, summarize, and understand the content of any PDF document with ease. With intelligent summarization, you can quickly grasp the key points of lengthy files. The Q&A feature empowers you to ask specific questions about the document and get instant, accurate answers. Additionally, you can annotate and make detailed notes, ensuring that you retain the most critical insights for your projects or studies. Whether you're analyzing reports, reviewing research papers, or breaking down complex legal or technical documents, our AI-driven PDF Explainer is here to save time and enhance your understanding. It's the ultimate tool for students, professionals, and anyone seeking smarter ways to work with PDFs!"
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
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const extractTextFromPDF = async (e) => {
    if (!file) {
      alert("Please upload a PDF file first.");
      return;
    }
    const pdfData = await file.arrayBuffer();
    const pdfjsLib = window["pdfjs-dist/build/pdf"];

    const pdfDoc = await pdfjsLib.getDocument(pdfData).promise;
    var text = " ";
    for (let i = 1; i <= 2; i++) {
      const pdfRes = await pdfDoc.getPage(1);
      const pdfObject = await pdfRes.getTextContent();
      const pagetext = pdfObject.items.map((j) => {
        if (j.height != 0) {
          return j.str;
        }
      });
      text += pagetext;
    }
    return text;
  };

  const FetchApi = async () => {
    const text = await extractTextFromPDF();
    if (text == undefined) {
      return alert("Pdf file is empty");
    }
    try {
      if (!prompt) {
        console.error("Prompt is empty, skipping API call.");
        window.location.reload(false);
        return;
      }
      setLoading(true);
      setData(null);

      const response = await axios.post(
        `${process.env.API_URL}/api/bot/chat`,
        { prompt: `give me ${selectoption} for this para "${text} "` },
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
            <div className="flex gap-3  justify-between items-center md:justify-start w-full md:w-1/4 lg:w-1/2 ">
              <input
                className="md:w-full block text-sm text-slate-500 cursor-pointer min-w-min
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
                onChange={(e) => handleFileChange(e)}
                type="file"
                accept="application/pdf"
                required
              />
            </div>
            <div className="flex items-center gap-3  font-Poppins md:w-full ">
              <select
                id="countries"
                onClick={(e) => {
                  setSelectOption(e.target.value);
                }}
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full font-Poppins"
              >
                <option selected>Pdf Summary</option>
                <option>Pdf Question</option>
                <option>Pdf Question Answer</option>
                <option>Notes</option>
              </select>

              <button
                type="button"
                onClick={() => FetchApi()}
                className="text-3xl right-1 "
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

export default PDFExplainer;
