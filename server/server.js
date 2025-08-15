import express from "express";
import "dotenv/config";
import { db } from "./libs/dbConnect.js";

const app = express();
const PORT = 8000;

app.use("/api", (req, res) => {
  res.status(200).json({
    message: "Hello, World!",
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
