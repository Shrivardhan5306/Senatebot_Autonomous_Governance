import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiController from "./controllers/aiController.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "AI Governance Engine Running 🚀" });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "AI Governance Engine",
    uptime: process.uptime()
  });
});

app.post("/ai/process", aiController);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`AI Engine running on port ${PORT}`);
});
