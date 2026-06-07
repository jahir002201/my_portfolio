"use client";

import React, { useRef, useState, useEffect } from "react";

const Overview: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const current = ref.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);

  const skills = [
    "Django",
    "Laravel",
    "React.js",
    "Next.js",
    "Node.js",
    "Python",
    "PHP",
    "REST API",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
  ];

  return (
    <section
      ref={ref}
      className={`py-20 px-6 bg-white transition-all duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Overview
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          I am a Full-Stack Developer specializing in building scalable web
          applications using Django, Laravel, React, and modern backend
          architectures. I focus on clean code, system design, and performance
          optimization while continuously improving my problem-solving skills.
        </p>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;