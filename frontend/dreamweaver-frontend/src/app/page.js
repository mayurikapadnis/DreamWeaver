import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-20">
        <Card
          title="Describe Your Dream"
          description="Write down your dream in words and let DreamWeaver interpret it."
          gradient="from-cyan-400 via-sky-400 to-blue-500"
        />
        <Card
          title="AI Generates Story"
          description="Our agents build a cinematic narrative out of your dream."
          gradient="from-pink-400 via-fuchsia-400 to-purple-500"
        />
        <Card
          title="Watch the Magic"
          description="See your dream turned into an immersive short film with visuals, sound, and voice."
          gradient="from-green-400 via-emerald-400 to-teal-500"
        />
      </section>
    </main>
  );
}
