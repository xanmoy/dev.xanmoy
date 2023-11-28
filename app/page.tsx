import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Encryption />
      </div>
      </main>
      <Footer />
    </>
  );
}
