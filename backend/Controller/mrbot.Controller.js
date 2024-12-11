import axios from "axios";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyBU9pFJpX1N8sdF51wshn-e2sd00UZp6lo");

export const MrBotChat = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }
  console.log(prompt);

  const ApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAAq6kdXA7TtdiGjZXMgw01hffLlPmYyds`;

  try {
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `${prompt}`,
            },
          ],
        },
      ],
    };

    const response = await axios.post(ApiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Error while communicating with the API:", {
      message: error.message,
      response: error.response?.data,
    });
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const GigaScanify = async (req, res) => {
  console.log(req.file);
  
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const { mimetype, path } = req.file;
  const prompts = req.body.prompt;
  console.log(prompts);

  try {
    const apiResponse = await getApi(mimetype, path, prompts);
    res.send({
      apiResponse: apiResponse,
    });

    fs.unlink(path, (err) => {
      if (err) {
        console.error(`Error removing file: ${err}`);
        return;
      }
      console.log(`File removed: ${path}`);
    });
  } catch (error) {
    console.error("Error during API call:", error);
    res.status(500).send({ error: "Failed to process the file with the API." });
  }
};

const getApi = async (mimetype, path, prompts) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Give me all deep information about this image and ${prompts} give me plain text`;
    const image = {
      inlineData: {
        data: Buffer.from(fs.readFileSync(`${path}`)).toString("base64"),
        mimeType: `${mimetype}`,
      },
    };
    const result = await model.generateContent([prompt, image]);
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.error("Error in getApi:", error);
    throw error;
  }
};
