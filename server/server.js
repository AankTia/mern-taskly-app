import express from "express";
import "dotenv/config";
import userRoute from "./routes/user.route.js";
import { errorHandler } from "./libs/middleware.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/api/v1/users", userRoute);

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.use(errorHandler)

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
