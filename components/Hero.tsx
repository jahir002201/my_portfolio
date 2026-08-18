"use client";

import Fireworks from "./Fireworks";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-[url('/images/bg.png')] bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Fireworks layer */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Fireworks />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        
        {/* Heading (Typography improved) */}
        <h1 className="font-bold leading-tight tracking-tight">
          <span className="block text-xl md:text-2xl text-gray-200">
            Hey, I’m
          </span>

          <span className="block text-3xl md:text-5xl text-white mt-2">
            Jahirul Islam
          </span>

          <span className="block text-lg md:text-2xl text-gray-300 mt-4 font-normal">
            I build scalable web applications
          </span>
        </h1>

        {/* Role / Badge */}
        <p className="text-sm md:text-base mt-6 tracking-widest uppercase text-gray-300">
          Full-Stack Developer • Django • Laravel • React
        </p>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-gray-200 mt-4">
          Turning ideas into clean, fast & production-ready systems 🚀
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          
          <a
            href="/Resume_Django.pdf"
            className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition hover:scale-105"
          >
            Download CV
          </a>

          <a
            href="https://github.com/jahir002201"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition hover:scale-105"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jahirul12"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition hover:scale-105"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;