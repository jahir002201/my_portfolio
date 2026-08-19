"use client";

import React, { useRef, useState, useEffect } from "react";

const Education: React.FC = () => {
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

  const education = [
    {
      title: "CSE Fundamentals With Phitron",
      institution: "Phitron",
      duration: "Sep 2024 – Feb 2026",
      grade: "Grade: 4.0/4.0",
      description:
        "Successfully completed an intensive Computer Science program focused on programming fundamentals, problem solving, algorithms, data structures, databases, Python, SQL, ReactJS, and machine learning.",
      areas: [
        "C",
        "C++",
        "Python",
        "Algorithms & Data Structures",
        "OOP",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Django",
        "Django REST Framework",
        "REST APIs",
        "Machine Learning",
     ],
      activities: ["XPSC", "XPSC Super Zone", "PACA"],
    },
    {
      title: "Professional Web Development",
      institution: "Creative IT Institute",
      duration: "Jun 2022 – Completed",
      description:
        "Professional web development training focused on modern full-stack application development, backend systems, frontend technologies, and practical software development.",
      areas: [
        "Full-Stack Development",
        "Laravel",
        "PHP",
        "JavaScript",
        "jQuery",
        "AJAX",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Bachelor of Science (BSc) — Mathematics (Honours)",
      institution: "National University of Bangladesh",
      duration: "2018 – 2022",
      grade: "CGPA: 3.39/4.0",
      description:
        "Completed a Bachelor of Science in Mathematics (Honours), developing strong analytical thinking, mathematical reasoning, problem-solving, and applied mathematics skills.",
      areas: [
        "Mathematics",
        "Linear Algebra",
        "Calculus",
        "Analysis",
        "Statistics",
        "Applied Mathematics",
        "Mathematical Modeling",
        "Differential Equations",
        "Fortran",
        "Mathematica",
      ],
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 px-6 bg-white transition-all duration-700 ease-in-out ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Education
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic background and professional training in computer
            science, web development, and mathematics.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Number */}
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-5">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Institution */}
              <p className="text-blue-600 font-medium mt-2">
                {item.institution}
              </p>

              {/* Duration / Grade */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-sm bg-white text-gray-600 px-3 py-1 rounded-full">
                  {item.duration}
                </span>

                {item.grade && (
                  <span className="text-sm bg-white text-gray-600 px-3 py-1 rounded-full">
                    {item.grade}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mt-5">
                {item.description}
              </p>

              {/* Key Areas */}
              <div className="mt-5">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">
                  Key Areas
                </h4>

                <div className="flex flex-wrap gap-2">
                  {item.areas.map((area, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white text-gray-700 px-2 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Activities */}
              {item.activities && (
                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    Activities
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {item.activities.map((activity, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;