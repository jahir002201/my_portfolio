"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  "Django",
  "Laravel",
  "React.js",
  "Next.js",
  "TypeScript",
  "Python",
  "PHP",
  "REST APIs",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "AWS",
];

const Overview: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

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
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="overview"
      ref={ref}
      className={`scroll-mt-20 overflow-hidden bg-white px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-8 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:opacity-100`}
    >
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
          What I Do
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Professional <span className="text-blue-600">Overview</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          I’m a Full-Stack Developer focused on building practical web
          applications with Django, Laravel, React, and modern backend
          technologies. I enjoy designing REST APIs, working with databases,
          writing maintainable code, and improving application performance.
          I’m continuously developing my software engineering and AI
          application development skills.
        </p>

        <div className="mt-9">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
            Technologies & Tools
          </h3>

          <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:px-4"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Overview;