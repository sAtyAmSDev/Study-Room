import React, { useState, useEffect } from "react";
import { IoMdMic, IoMdVolumeHigh } from "react-icons/io";
import { MdOutlineStopCircle } from "react-icons/md";
import BGImg from "../assets/heroBG.webp";
import AiVoice5 from "../assets/AiVoice/aivoice5.gif";
import axios from "axios";
import Markdown from "react-markdown";
import { useNavigate } from "react-router-dom";
const MrBot = () => {
  const [InputData, setInputData] = useState(" ");
  const [prompt, setPrompt] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [data, setData] = useState(
    "Mr Bot is here to help you with your studies! Whether you need answers to tricky questions, help with math problems, tips for writing essays, or just someone to quiz you on what you've learned, Mr. Bot has got your back. Designed to make learning easy and fun, Mr. Bot is friendly, patient, and always ready to explain things in a way that’s simple and clear. Let’s study together and reach your goals step by step!"
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
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


  const fetchSpeech = new SpeechSynthesisUtterance();

  useEffect(() => {
    const handleVoicesChanged = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);

      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]);
        fetchSpeech.voice = availableVoices[0];
      }
    };

    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

    handleVoicesChanged();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const TextToVoice = (data) => {
    if (!data) {
      console.error("No text provided for speech synthesis");
      return;
    }

    if (!selectedVoice) {
      console.error("No voice selected or available");
      return;
    }

    if (window.speechSynthesis.speaking) {
      console.warn("Speech synthesis is already in progress. Cancelling...");
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance();
    utterance.text = data;
    utterance.voice = selectedVoice;

    utterance.onstart = () => {
      console.log("Speech synthesis started.");
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      console.log("Speech synthesis ended.");
      setIsSpeaking(false);
    };

    utterance.onerror = (event) => {
      console.error("Speech synthesis error:", event.error);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const FetchApi = async (recognizedPrompt) => {
    try {
      if (!recognizedPrompt) {
        console.error("Prompt is empty, skipping API call.");
        return;
      }

      console.log("Fetching API with prompt:", recognizedPrompt);

      const response = await axios.post(
        `${process.env.API_URL}/api/bot/chat`,
        { prompt: `${recognizedPrompt}` },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const resText = response.data.candidates[0].content.parts[0].text;
      console.log("API Response:", resText);

      setData(resText);
      TextToVoice(resText);
    } catch (error) {
      alert("Error fetching API:", error.message);
    }
  };

  const VoiceToText = () => {
    setIsListening(true);
    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-US";
    recognition.onresult = function (event) {
      const recognizedText = event.results[0][0].transcript;
      console.log("Recognized text:", recognizedText);

      setPrompt(recognizedText);
      FetchApi(recognizedText);
    };

    recognition.onerror = (error) => {
      console.error("Speech recognition error:", error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
      <div className=" flex text-white font-Poppins justify-center ">
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

          <div className="relative mt-20 text-white flex flex-col items-start justify-center  py-8 sm:p-0 sm:gap-12 gap-10 md:flex-row ">
            <div className="flex  justify-center flex-col  gap-5  items-center w-full  md:w-1/2 md:flex-col   ">
              <div className="flex flex-col items-center justify-center    ">
                <h1 className="text-4xl font-code font-semibold ">Mr Bot</h1>
                <img
                  src={AiVoice5}
                  alt="Chat Bot"
                  className="w-44 mb-4 sm:w-56 "
                />
                <p className="text-center text-2xl font-code  ">{prompt}</p>
              </div>
              <div className=" top-48 right-16    ">
                <button
                  onClick={VoiceToText}
                  className="p-5 bg-zinc-700 rounded-full text-2xl cursor-pointer hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                >
                  {isListening ? <MdOutlineStopCircle /> : <IoMdMic />}
                </button>
              </div>
            </div>{" "}
            <div className="">
           
            </div>

            {data ? (
            <div className="bg-[#151425] md:w-full shadow-sm shadow-violet-900 p-3  rounded-lg gap-2 flex flex-col font-Poppins text-xl  ">
              {/* <div>
              <span className="text-blue-500  font-semibold ">
                your  Prompt :{" "}
              </span>
              {prompt}
            </div> */}
             <Markdown className="flex flex-col gap-3  text-xl   ">
              {data}
            </Markdown>
              <IoMdVolumeHigh
                className="cursor-pointer text-xl"
                onClick={() => TextToVoice(data)}
              />
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

          <div className="absolute top-2 left-2 w-[90%]  ">
            <label
              htmlFor="voiceSelect"
              className="block mb-2 text-base md:text-xl "
            >
              Select Voice:
            </label>
            <select
              className="bg-transparent text-white  rounded-md border-2 border-gray-400  p-2 text-xs md:text-lg w-1/2 md:w-auto "
              onChange={(e) => setSelectedVoice(voices[e.target.value])}
              disabled={voices.length === 0}
            >
              <option value="">Select Voice</option>
              {voices.map((voice, index) => (
                <option
                  key={index}
                  value={index}
                  className="bg-[#191327] text-white rounded-md border-2 p-2 text-xs md:text-lg"
                >
                  {voice.name} - {voice.lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
  );
};

export default MrBot;
