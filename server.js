import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/generate", async (req, res) => {
  try {
    const { idea, type } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Write a professional ${type} screenplay.

Story Idea:
${idea}

Include:
- Title
- Logline
- Character List
- Scene Headings
- Dialogue
- Camera Directions
- Sound Effects
- Fade Out
`;

    const result = await model.generateContent(prompt);

    res.json({
      script: result.response.text(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to generate script",
    });
  }
});
app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
