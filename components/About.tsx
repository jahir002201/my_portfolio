"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const About: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "1.5+", label: "Years Experience" },
    { value: "20+", label: "Projects Built" },
    { value: "3+", label: "Tech Stacks" },
    { value: "500+", label: "DSA Problems" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`scroll-mt-20 overflow-hidden bg-gray-50 px-5 py-20 transition-all duration-700 ease-in-out sm:px-8 lg:py-24 ${
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="group relative w-full max-w-xs sm:max-w-sm">
              {/* Decorative Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-300 opacity-20 blur-xl transition duration-500 group-hover:opacity-40" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Md Jahirul Islam - Full-Stack Developer"
                  width={500}
                  height={600}
                  className="aspect-[5/6] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>

              {/* Photo Label */}
              <div className="absolute -bottom-4 -right-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg sm:-right-5">
                <p className="text-sm font-bold text-gray-900">
                  Md Jahirul Islam
                </p>
                <p className="mt-1 text-xs text-blue-600">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* About Text and Stats */}
          <div className="pt-4 lg:pt-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Who I Am
            </p>

            <h3 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              Hi, I&apos;m{" "}
              <span className="text-blue-600">Md Jahirul Islam</span>
            </h3>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              I am a Full-Stack Developer passionate about building scalable,
              production-ready web applications using Django, Laravel, and
              React. I enjoy solving complex problems and designing clean
              backend systems.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              My focus is on clean architecture, REST APIs, system design, and
              performance optimization. I continuously explore new technologies
              to build reliable and user-friendly digital experiences.
            </p>

            {/* Stats Grid */}
            <div className="mt-9 grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                >
                  <h4 className="text-2xl font-extrabold text-blue-600 sm:text-3xl">
                    {stat.value}
                  </h4>

                  <p className="mt-2 text-sm leading-5 text-gray-600 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Let&apos;s Connect
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;