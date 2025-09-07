import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ Enable CORS (allow frontend at port 3000 to connect)
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Dream Schema + Model
const dreamSchema = new mongoose.Schema({
  title: String,
  text: String,
});

const Dream = mongoose.model("Dream", dreamSchema);

// ✅ Routes
app.get("/api/dreams", async (req, res) => {
  const dreams = await Dream.find();
  res.json(dreams);
});

app.post("/api/dreams", async (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) {
    return res.status(400).json({ error: "Title and text are required" });
  }

  const newDream = new Dream({ title, text });
  await newDream.save();
  res.status(201).json(newDream);
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
