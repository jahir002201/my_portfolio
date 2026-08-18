"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const Work: React.FC = () => {
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

  const projects = [
    {
      title: "YumFood Platform",
      desc: "Full-stack food ordering system with JWT auth, cart, orders, and admin dashboard.",
      image: "/images/django+react.png",
      link: "https://yumfood-client.vercel.app/",
      stack: ["Django", "React", "PostgreSQL", "JWT"],
    },
    {
      title: "Event Management System",
      desc: "Role-based event system with scheduling, RSVP, and automation workflows.",
      image: "/images/django_mvt.png",
      link: "https://event-management-b7om.onrender.com",
      stack: ["Django", "Tailwind", "PostgreSQL"],
    },
    {
      title: "Blood Pressure API",
      desc: "RESTful Laravel API for health tracking system with authentication and CRUD operations.",
      image: "/images/laravel.jpg",
      link: "https://github.com/jahir002201/bloodpressure",
      stack: ["Laravel", "PHP", "MySQL", "REST API"],
    },
  ];

  return (
    <section
      id="work"
      ref={ref}
      className={`py-20 px-6 bg-gray-50 transition-all duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Work
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of real-world projects showcasing my skills in backend
            development, full-stack systems, and scalable architecture.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Work;