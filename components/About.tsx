"use client";

import React, { useRef, useState, useEffect } from "react";

const About: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const current = ref.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 px-6 bg-gray-50 transition-all duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>

          <p className="text-lg text-gray-600 mb-4">
            Hi, I’m <span className="font-semibold">Md Jahirul Islam</span>
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            I am a Full-Stack Developer passionate about building scalable,
            production-ready web applications using Django, Laravel, and React.
            I enjoy solving complex problems and designing clean backend systems.
          </p>

          <p className="text-gray-600">
            Focused on clean architecture, REST APIs, system design, and
            performance optimization.
          </p>
        </div>

        {/* Right Stats Card */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold">1.5+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="text-gray-600">Projects Built</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold">3+</h3>
            <p className="text-gray-600">Tech Stacks</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-600">DSA Problems</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;