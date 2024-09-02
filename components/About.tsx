"use client";
import React, { useRef, useState, useEffect } from 'react';

const About: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSectionElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`p-5 sm:p-10 bg-white-200 flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">About Me</h2>
      <p className="text-md sm:text-lg text-gray-700 mb-2 sm:mb-4">Md Jahirul Islam</p>
      <p className="text-md sm:text-lg text-gray-700 mb-2 sm:mb-4">I love to invent and build.</p>
      <p className="text-md sm:text-lg text-gray-700 mb-4 sm:mb-6 text-center max-w-lg">
        Full-Stack Developer | JavaScript, TypeScript, Node.js, Python, PHP, C/C++ | Data Structures & Algorithms
      </p>
    </section>
  );
};

export default About;
