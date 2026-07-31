import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Chat Assistant Endpoint powered by Gemini API
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: "GEMINI_API_KEY environment variable is not configured. Please add it in AI Studio Secrets panel." 
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const systemInstruction = `
You are the official AI Portfolio Assistant for Zahra Zaranwala.
Answer questions from recruiters, hiring managers, engineers, and visitors accurately, enthusiastically, and professionally.

ZAHRA ZARANWALA PROFILE KNOWLEDGE BASE:
- Full Name: Zahra Zaranwala
- Current Status: Final Year Electronics & Communication Engineering Student at Government Engineering College (GEC), Dahod, Gujarat, India.
- Career Goal: Building Intelligent Digital Solutions.
- Bio & Focus: Passionate about Artificial Intelligence, Embedded Systems, Automation, Signal Processing, and future Robotics. She aims to combine hardware intelligence and software innovation.
- Contact Details: Email: zaranwalazahra@gmail.com / zahrazaran40@gmail.com, GitHub: https://github.com/zahratech123, LinkedIn: https://linkedin.com/in/gecdhd-ec-zahra
- Achievements: 2 Gold Medals & 1 Silver Medal in NCC (National Cadet Corps), 40+ Certifications, 2100+ LinkedIn followers, 50+ technical posts, Infosys Wingspan DUELIST, WARRIOR, and ACE Badges.
- Leadership: Google Student Ambassador, Skill Airo Volunteer, Internshala Student Partner, conducted faculty interviews.
- Projects: 
  1. Zaranwala Grocery Project (Digital business concept & web app)
  2. Premium Portfolio Website (Responsive, SEO optimized, glassmorphic UI)
  3. Calculator Web App (Frontend logic in JS/HTML/CSS)
  4. AI / ML Learning Dashboard Concept (ML progress, prompt engineering, GenAI workflows)
- Key Certifications & Courses: Lean Six Sigma Yellow Belt, Data Science with AI, AWS Summit India, Agnirva Space Internship, Google Gemini Campus Hero, CNNs, MATLAB SSIP.
- Industrial Visits & Internships: Kaynes Semicon OSAT, eInfochips, Indian Air Force Exhibition, Smart City Conclave, i-Hub Gujarat, IBM SkillsBuild, GenAI Data Analytics.

INSTRUCTIONS:
- Keep responses engaging, well-structured, friendly, and concise (2-3 paragraphs max).
- Use bullet points when listing skills or achievements.
- Maintain 100% accuracy based on Zahra's profile facts.
- Highlight her ambition to build intelligent digital solutions and work at top tech companies (Google, NVIDIA, OpenAI, Tesla, Microsoft).
`;

      const contents = [];
      if (Array.isArray(history)) {
        for (const item of history) {
          contents.push({
            role: item.sender === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }]
          });
        }
      }
      contents.push({ role: 'user', parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "I'm glad to answer any questions about Zahra's projects, AI skills, and background!";
      res.json({ reply: replyText });
    } catch (err: any) {
      console.error("Gemini Chat API Error:", err);
      res.status(500).json({ 
        error: "Failed to process chat request.",
        details: err.message || String(err)
      });
    }
  });

  // Serve static files / Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
