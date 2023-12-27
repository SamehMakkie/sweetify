import Hero from "@/views/Hero/Hero";
import Navbar from "@/views/Navbar/Navbar";

export default function Home() {
  return (
    <section className="flex flex-col w-full min-h-screen items-center">
      <Navbar />
      <Hero />
    </section>
  );
}
