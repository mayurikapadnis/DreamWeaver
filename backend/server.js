import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dreamRoutes from "./routes/dreamRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
//app.use("/dreams", dreamRoutes);
app.use("/api/dreams", dreamRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
