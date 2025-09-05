"use client";

import { useState } from "react";

export default function NewDreamPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setMessage("⚠️ Please enter both title and description.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("http://localhost:5000/api/dreams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Dream saved successfully!");
        setTitle("");
        setDescription("");
      } else {
        setMessage(data.message || "❌ Failed to save dream.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error connecting to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-16">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
        <h1 className="text-3xl font-bold mb-6 text-cyan-300">Write Your Dream 🌙</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Dream title"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-cyan-400"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your dream..."
            rows={6}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-white hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Dream"}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-gray-200">{message}</p>}
      </div>
    </main>
  );
}
