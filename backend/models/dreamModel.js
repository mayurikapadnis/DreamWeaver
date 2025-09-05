import mongoose from "mongoose";

const dreamSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  { timestamps: true }
);

const Dream = mongoose.model("Dream", dreamSchema);
export default Dream;
