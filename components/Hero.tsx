"use client";
import Fireworks from "./Fireworks";

const Hero = () => {
return(
<section id="home" className="relative bg-[url('/images/bg.png')] bg-cover bg-center h-screen flex items-center justify-center text-white">
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-black opacity-20"><Fireworks/></div>

  <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8">
    {/* Left Side Content */}
    <div className="text-center md:text-left max-w-lg md:max-w-xl mx-4 z-10">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Welcome to My Portfolio</h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-6">Web Developer | Designer | Programmer</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <a href="/resume.pdf" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">Download CV</a>
        <a href="https://github.com/jahir002201" aria-label="GitHub Profile" className="bg-gray-600 px-6 py-3 rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-105 duration-300 flex items-center space-x-2">
          <i className="fab fa-github text-2xl font-bold"></i>
        </a>
        <a href="https://www.linkedin.com/in/jahirul12" aria-label="LinkedIn Profile" className="bg-gray-600 px-6 py-3 rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-105 duration-300 flex items-center space-x-2">
          <i className="fab fa-linkedin text-2xl font-bold"></i>
        </a>
      </div>
    </div>

    {/* Right Side Coding Animation */}
    <div className="hidden md:block max-w-lg mx-4 mt-8 md:mt-0 z-10">
      <div className="flex flex-col items-center justify-center h-full">
      </div>
    </div>
  </div>
</section>
);
};
export default Hero;