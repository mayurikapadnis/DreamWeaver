"use client";
import { useState } from "react";

export default function NewDreamForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState(""); // ✅ success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/dreams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, text }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✨ Dream saved successfully!");
        setTitle("");
        setText("");
      } else {
        setMessage("❌ Failed to save dream.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Server error.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">🌙 Save Your Dream</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Dream Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300"
          required
        />

        <textarea
          placeholder="Describe your dream..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/20 h-32 placeholder-gray-300"
          required
        />

        <button
          type="submit"
          className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 font-semibold text-gray-900 shadow-md hover:scale-105 transition-all"
        >
          Save Dream
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-lg font-medium">{message}</p>
      )}
    </div>
  );
}
