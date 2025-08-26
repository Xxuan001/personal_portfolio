"use client";
import { useState } from "react";
import { motion } from "framer-motion";

function Collapsible({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl dark:border-gray-800 bg-white dark:bg-[#111] shadow transition">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
      >
        {title}
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">{children}</div>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d0d0d] text-gray-800 dark:text-gray-100 font-sans">
      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-tight">My Portfolio</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </nav>
      </header>

      {/* Parallax Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Hey, I’m [Your Name] 👋</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A [Your Role] passionate about building beautiful & functional digital experiences.
          </p>
        </motion.div>

        {/* Background parallax image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/your-photo.png')" }}
        />
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 space-y-12 mt-16">
        {/* About */}
        <section id="about">
          <Collapsible title="About Me">
            <p>
              I’m a [your role]. I’ve been working with [technologies/skills] and I love creating
              impactful projects that solve real problems.
            </p>
          </Collapsible>
        </section>

        {/* Projects */}
        <section id="projects">
          <Collapsible title="Projects">
            <ul className="space-y-4 mt-4">
              <li className="p-4 border rounded-lg dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Project 1 – Short description here
              </li>
              <li className="p-4 border rounded-lg dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Project 2 – Short description here
              </li>
              <li className="p-4 border rounded-lg dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Project 3 – Short description here
              </li>
            </ul>
          </Collapsible>
        </section>

        {/* Contact */}
        <section id="contact">
          <Collapsible title="Contact">
            <p className="text-lg">
              Email me at{" "}
              <a
                href="mailto:youremail@example.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                youremail@example.com
              </a>
            </p>
          </Collapsible>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto p-6 border-t border-gray-200 dark:border-gray-800 text-sm text-center text-gray-600 dark:text-gray-400 mt-16">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}
