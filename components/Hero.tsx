"use client";

import Fireworks from "./Fireworks";

const Hero = () => {
  const technologies = ["Django", "Laravel", "React", "Next.js"];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('/images/bg.png')] bg-cover bg-center px-5 py-24 text-white sm:px-8"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Fireworks Background */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-25">
        <Fireworks />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Welcome Badge */}
        <p className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
          Welcome to my portfolio
        </p>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-gray-200">Hey, I&apos;m</span>

          <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Jahirul Islam
          </span>
        </h1>

        {/* Role */}
        <h2 className="mt-6 text-xl font-medium text-gray-200 sm:text-2xl md:text-3xl">
          Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg md:text-xl">
          Building clean, scalable web applications with modern technologies and AI-powered solutions.
        </p>

        {/* Technology Badges */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="/Resume_Django.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Download CV
            <span aria-hidden="true">↓</span>
          </a>

          <a
            href="https://github.com/jahir002201"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/jahirul12/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Scroll Hint */}
        <a
          href="#about"
          className="mt-12 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-300"
        >
          Explore my portfolio
          <span className="animate-bounce" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;