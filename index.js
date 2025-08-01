import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

import connectDB from "./utils/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to JobDhundo Backend",
    success: true,
  });
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "https://jobdhundo-frontend.onrender.com", // Replace with your frontend URL
  credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));

app.options('*',cors());

const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
