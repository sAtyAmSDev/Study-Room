import React, { useCallback, useEffect, useState } from "react";
import { IoMdMic } from "react-icons/io";
import { MdOutlineStopCircle } from "react-icons/md";
import Image from "./assets/giphy.gif";
import axios from "axios";

const App = () => {
  const [speech, setSpeech] = useState("How Are You");
  const [isListening, setIsListening] = useState(false);
  const [data, setData] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  let SpeechApi = new SpeechSynthesisUtterance();
  let recognition = null;
  const FetchVoice = () => {
    let GetVoices = window.speechSynthesis.getVoices();
    setVoices(GetVoices);
    setSelectedVoice(GetVoices[0]);
  };

  useEffect(() => {
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = FetchVoice;
    }
    FetchVoice();
  }, []);

  const SpeechFetch = () => {
    if (!window.webkitSpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    if (!recognition) {
      recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-GB";

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);

      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        console.log("Transcript:", transcript);
        setSpeech(transcript);
      };
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const FetchApi = useCallback(() => {
    if (!speech.trim()) {
      console.log("Please say something.");
      return;
    }

    const API_KEY = "AIzaSyCtyNnfDRqSN3IoyvGUY_cSHop8ayoM8O8";
    if (!API_KEY) {
      alert("Enter your API Key");
      return;
    }

    const ApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `Tone: The text is written in a casual, conversational, and friendly tone, like a chatbot or assistant talking to a friend.

Plain Text: It avoids any special symbols like markdown, tags, or unnecessary formatting. It is plain text that mimics a simple chat response.

Respond in a conversational and friendly tone. Imagine you're speaking to someone in a casual, helpful way, giving clear explanations and tips. Based on the question or topic given by the user, answer naturally, as if you're a friend helping them understand. no any sumbole like this "😁 and * ** "

Here’s the user’s input: "${speech}"`,
            },
          ],
        },
      ],
    };

    axios
      .post(ApiUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        const ResText = data.candidates[0].content.parts[0].text;
        console.log(ResText);

        setData(ResText);

        TextToVoice(ResText);

        setSpeech("");
      })

      .catch((err) => {
        console.error(
          "API Error:",
          err.response ? err.response.data : err.message
        );
        alert(
          "Error: " +
            (err.response ? err.response.data.error.message : err.message)
        );
      });
  }, [speech]);

  const TextToVoice = (text) => {
    SpeechApi.text = text;
    SpeechApi.voice = selectedVoice;
    window.speechSynthesis.speak(SpeechApi);
    setIsSpeaking(true);

    SpeechApi.onend = () => {
      setIsSpeaking(false);
    };
  };

  const handleVoiceChange = (event) => {
    const voice = voices[event.target.value];
    setSelectedVoice(voice);
  };

  useEffect(() => {
    if (speech) {
      FetchApi();
    }
  }, [speech, FetchApi]);

  return (
    <div className="relative bg-black h-screen w-full text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-semibold">Mr Bot</h1>
      <img src={Image} alt="" className="w-80" />

      <p>{speech}</p>

      <div className="absolute top-2 left-4 ">
        <label htmlFor="voiceSelect" className="block mb-2 text-xl">
          Select Voice:
        </label>
        <select className=" bg-zinc-900 py-2 px-4 rounded-full scroll-m-1  "
          id="voiceSelect"
          onChange={handleVoiceChange}
          disabled={voices.length === 0}
        >
          {voices.map((voice, index) => (
            <option className=" outline-none  px-5" key={index} value={index}>
              {voice.name} - {voice.lang}
            </option>
          ))}
        </select>
      </div>

      <div className="absolute bottom-10">
        <button
          onClick={SpeechFetch}
          className="p-4 bg-zinc-700 rounded-full text-5xl cursor-pointer"
        >
          {isListening ? <MdOutlineStopCircle /> : <IoMdMic />}
        </button>
      </div>
    </div>
  );
};

export default App;
