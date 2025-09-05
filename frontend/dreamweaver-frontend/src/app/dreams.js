"use client";
import { useEffect, useState } from "react";

export default function DreamsPage() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dreams")
      .then((res) => res.json())
      .then((data) => setDreams(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-pink-400 mb-6">✨ Your Dreams</h1>
      {dreams.length === 0 ? (
        <p className="text-gray-400">No dreams saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dreams.map((dream) => (
            <div
              key={dream._id}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700"
            >
              <h2 className="text-xl font-semibold text-purple-300">{dream.title}</h2>
              <p className="text-gray-300 mt-2">{dream.description}</p>
              <p className="text-xs text-gray-500 mt-3">
                Saved on {new Date(dream.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
