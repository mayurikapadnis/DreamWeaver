
import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-center py-20 px-6 bg-gradient-to-b from-[#1e1f26] via-[#2b2d3a] to-[#1a1b22] text-white">
      <h1 className="text-6xl font-extrabold mb-6 text-pink-300 drop-shadow-lg">
        DreamWeaver
      </h1>
      
      <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto mb-8">
        Turn your dreams into unforgettable films.  
        DreamWeaver captures your imagination and transforms it into  
        breathtaking cinematic experiences 🎥✨.
      </p>

      <div className="flex justify-center gap-4">
        <Link href="/new-dream">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-gray-900 font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
            Start Dreaming
          </button>
        </Link>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 rounded-xl border border-pink-300 text-pink-300 font-semibold hover:bg-pink-300 hover:text-gray-900 transition-all duration-300">
            Watch Demo
          </button>
        </a>
      </div>
    </section>
  );
}
