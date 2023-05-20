import Image from "next/image";
import Dashboard from "@/components/Dashboard";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Dashboard />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <About />
        <Projects />
      </div>
    </main>
  );
}
