export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-white/10 bg-[#1a1b22]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-gray-400">
        
        {/* Brand */}
        <h2 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
          DreamWeaver © {new Date().getFullYear()}
        </h2>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-fuchsia-400 transition">Twitter</a>
          <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
          <a href="#" className="hover:text-purple-400 transition">Docs</a>
        </div>
      </div>
    </footer>
  );
}
