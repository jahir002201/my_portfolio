
"use client";

import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const technologies = [
  "Full-Stack Development",
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "AJAX",
  "PHP",
  "Laravel",
  "SQL",
  "MySQL",
  "Git & GitHub",
];

const responsibilities = [
  "Built and maintained production web applications using Laravel, PHP, and SQL.",
  "Developed responsive frontend interfaces using HTML, CSS, Bootstrap, and JavaScript.",
  "Implemented interactive features using jQuery and AJAX.",
  "Designed relational databases and optimized SQL queries.",
  "Developed backend functionality using Laravel MVC architecture and REST APIs.",
  "Used Git and GitHub for version control and collaborative development.",
  "Deployed applications on AWS EC2 using Linux and Nginx.",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Career Journey
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Professional Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            My professional journey in full-stack development,
            backend engineering, and production-ready web applications.
          </p>
        </div>

        <div className="relative border-l-2 border-blue-100 pl-6 md:pl-10">
          <article className="relative rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
            <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-white bg-blue-600 md:-left-[49px]" />

            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  Professional Experience
                </span>

                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                  Full-Stack Developer
                </h3>

                <p className="mt-2 flex items-center gap-2 font-medium text-blue-600">
                  <BriefcaseBusiness size={18} />
                  Synex Digital
                </p>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-blue-600" />
                  Mar 2023 – Oct 2024
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-gray-600">
              Worked on full-stack web development, building and
              maintaining production applications using Laravel,
              PHP, SQL, and modern frontend technologies in a
              collaborative startup environment.
            </p>

            <div className="mt-7">
              <h4 className="mb-4 text-lg font-semibold text-gray-900">
                Key Responsibilities
              </h4>

              <ul className="space-y-3">
                {responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-gray-600 md:text-base"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-blue-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-gray-900">
                Technologies & Skills
              </h4>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}