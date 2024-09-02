"use client";
import React, { useRef, useState, useEffect } from 'react';

const Overview: React.FC = () => {
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
      ref={ref}
      className={`px-4 py-8 bg-gray-200 transition-transform duration-1000 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
    >
      <div className="text-center py-8">
        <h2 className="text-4xl font-bold mb-4">Overview</h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          As a passionate Full-Stack Developer with a diverse skill set in JavaScript, TypeScript, Node.js, Python, PHP, and C/C++, I specialize in creating scalable web applications. With a strong foundation in Data Structures & Algorithms, I thrive in solving complex problems and optimizing code for performance. Currently, I'm focused on mastering React and Next.js while expanding my knowledge in modern software development practices and cybersecurity. I&apos;m always eager to learn new technologies and collaborate on innovative projects.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Node.js Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-64">
          <div className="w-full h-32 flex items-center justify-center bg-gray-50">
            <i className="fab fa-node-js text-6xl text-green-600"></i>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Node.js</h3>
          </div>
        </div>

        {/* Python Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-64">
          <div className="w-full h-32 flex items-center justify-center bg-gray-50">
            <i className="fab fa-python text-6xl text-blue-600"></i>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Python</h3>
          </div>
        </div>

        {/* PHP Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-64">
          <div className="w-full h-32 flex items-center justify-center bg-gray-50">
            <i className="fab fa-php text-6xl text-blue-400"></i>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">PHP</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
