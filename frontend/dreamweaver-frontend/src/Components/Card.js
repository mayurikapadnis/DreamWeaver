export default function Card({ title, description, gradient }) {
  return (
    <div className="relative group">
      
      {/* Gradient Glow */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} blur-lg opacity-60 group-hover:opacity-90 transition duration-500`} />
      
      {/* Card Content */}
      <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
