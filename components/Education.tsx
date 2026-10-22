"use client";

import React, { useEffect, useRef, useState } from "react";

type EducationItem = {
  title: string;
  institution: string;
  duration: string;
  grade?: string;
  description: string;
  areas: string[];
  activities: string[];
};

const education: EducationItem[] = [
  {
    title: "Software Development with AI Engineering",
    institution: "Next Level",
    duration: "2026 – Present",
    description:
      "Currently enrolled in an intensive software development and AI engineering bootcamp focused on modern web development, software engineering fundamentals, databases, deployment, and AI-powered application development.",
    areas: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "LLM Application Development",
      "Prompt Engineering",
      "AI-Powered SaaS",
      "RAG Systems",
      "LangChain",
      "LangGraph",
      "Docker",
      "Nginx",
      "CI/CD",
    ],
    activities: [
      "Hands-on Learning",
      "Software Projects",
      "AI Engineering",
      "Problem Solving",
    ],
  },
  {
    title: "CSE Fundamentals with Phitron",
    institution: "Phitron",
    duration: "Sep 2024 – Feb 2026",
    grade: "Grade: 4.0/4.0",
    description:
      "Completed an intensive Computer Science program covering programming fundamentals, problem solving, algorithms, data structures, databases, Python, SQL, React, and machine learning.",
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
      "Django",
      "MVT",
      "Django REST Framework",
      "REST APIs",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "FastAPI",
      "Machine Learning",
    ],
    activities: ["XPSC", "XPSC Super Zone", "PACA"],
  },
  {
    title: "Professional Web Development",
    institution: "Creative IT Institute",
    duration: "Jun 2022 – Completed",
    description:
      "Completed professional web development training focused on full-stack application development, backend systems, frontend technologies, and practical software development.",
    areas: [
      "Full-Stack Development",
      "PHP",
      "Laravel",
      "MVC",
      "RESTful APIs",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Git & GitHub",
    ],
    activities: [
      "Communication",
      "Professional Networking",
      "Team Collaboration",
      "Technical Workshops",
      "Project Management",
    ],
  },
  {
    title: "BSc in Mathematics (Honours)",
    institution: "National University of Bangladesh",
    duration: "2018 – 2022",
    grade: "CGPA: 3.39/4.00",
    description:
      "Earned a Bachelor of Science in Mathematics (Honours), developing analytical thinking, mathematical reasoning, problem-solving, and applied mathematics skills.",
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
    activities: [
      "Science Club",
      "Mathematics Activities",
      "Academic Discussions",
      "Problem-Solving Sessions",
    ],
  },
];

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Show content immediately if animation is unnecessary or unsupported.
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`scroll-mt-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-8 ${
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      } motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:opacity-100`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
            My Learning Journey
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Education &{" "}
            <span className="text-blue-600">Training</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            My academic background, professional training, and continuous
            learning in software development and AI engineering.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-2 xl:gap-8">
          {education.map((item, index) => (
            <article
              key={item.institution + item.title}
              className="group flex min-w-0 flex-col rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-7 lg:p-8 motion-reduce:transform-none motion-reduce:transition-none"
            >
              {/* Card heading */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700 ring-1 ring-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-semibold text-blue-600">
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Duration and grade */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 sm:text-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="mr-2 h-4 w-4 shrink-0"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M16 3v4M8 3v4M3 10h18" />
                  </svg>
                  {item.duration}
                </span>

                {item.grade && (
                  <span className="inline-flex items-center rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:text-sm">
                    {item.grade}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-gray-600">
                {item.description}
              </p>

              {/* Skills and topics */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-bold text-gray-900">
                  Key Areas
                </h4>

                <div className="flex flex-wrap gap-2">
                  {item.areas.map((area) => (
                    <span
                      key={area}
                      className="max-w-full break-words rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Activities */}
              {item.activities.length > 0 && (
                <div className="mt-6 border-t border-gray-100 pt-5">
                  <h4 className="mb-3 text-sm font-bold text-gray-900">
                    Activities & Highlights
                  </h4>

                  <ul className="flex flex-wrap gap-2">
                    {item.activities.map((activity) => (
                      <li
                        key={activity}
                        className="inline-flex max-w-full items-start gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4l-3.3 3.3-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="break-words">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;