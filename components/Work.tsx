"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  image: string;
  link: string;
  stack: string[];
  category: string;
};

const projects: Project[] = [
  {
    title: "YumFood Platform",
    desc: "Full-stack food ordering platform featuring JWT authentication, shopping cart, order management, and an admin dashboard.",
    image: "/images/django+react.png",
    link: "https://yumfood-client.vercel.app/",
    stack: ["Django", "React", "PostgreSQL", "JWT"],
    category: "Full-Stack",
  },
  {
    title: "Blog Management Platform",
    desc: "Blog platform with authentication, profile management, CRUD operations, categories, search, and AJAX-powered content.",
    image: "/images/blogs.jpg",
    link: "https://github.com/jahir002201/blogs",
    stack: ["Laravel", "PHP", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    category: "Web Application",
  },
  {
    title: "Library Management API",
    desc: "REST API for books, authors, members, and borrowing with JWT authentication, role-based permissions, and Swagger documentation.",
    image: "/images/drf.png",
    link: "https://library-management-sigma-gules.vercel.app/swagger/",
    stack: ["Python", "Django", "DRF", "JWT", "Swagger"],
    category: "Backend API",
  },
  {
    title: "Grafto Nursery E-commerce",
    desc: "Full-stack nursery e-commerce platform combining Laravel MVC, REST APIs, and React.js for plant and category management, shopping cart, orders, and user management.",
    image: "/images/laravel_mvc_api.jpg",
    link: "https://github.com/jahir002201/grafto",
    stack: [
      "PHP",
      "Laravel",
      "MVC",
      "REST API",
      "React.js",
      "MySQL",
      "E-commerce",
    ],
    category: "Full-Stack",
  },
  {
    title: "Mini E-commerce",
    desc: "Full-stack e-commerce application built with Laravel, React, Inertia.js, and MySQL, featuring a modern Tailwind CSS interface and SSLCommerz payment gateway integration.",
    image: "/images/mini-ecommerce.jpg",
    link: "https://github.com/jahir002201/mini-ecommerce",
    stack: [
      "Laravel",
      "React",
      "Inertia.js",
      "MySQL",
      "Tailwind CSS",
      "Vite",
      "SSLCommerz",
    ],
    category: "E-commerce",
  },
  {
    title: "Event Management System",
    desc: "Event management application featuring role-based access, event scheduling, RSVP functionality, and workflow automation.",
    image: "/images/django_mvt.png",
    link: "https://event-management-b7om.onrender.com",
    stack: ["Django", "Tailwind CSS", "PostgreSQL"],
    category: "Web Application",
  },
  {
    title: "PhiMart E-commerce",
    desc: "Full-stack shopping platform with authentication, product management, cart, orders, reviews, image uploads, and admin tools.",
    image: "/images/reactDjango.jpg",
    link: "https://phimart-client-tau.vercel.app/",
    stack: ["React", "Vite", "Django REST", "PostgreSQL", "JWT"],
    category: "E-commerce",
  },
  {
    title: "Blood Pressure API",
    desc: "Laravel REST API for a health-tracking application, featuring authentication and CRUD operations.",
    image: "/images/laravel.jpg",
    link: "https://github.com/jahir002201/bloodpressure",
    stack: ["Laravel", "PHP", "MySQL", "REST API"],
    category: "Backend API",
  },
  {
    title: "Cyber Expert",
    desc: "Responsive React application with reusable components, dynamic state management, Tailwind CSS, and API-based data fetching.",
    image: "/images/react_API.png",
    link: "https://cyber-expert-xi.vercel.app/",
    stack: ["React", "Tailwind CSS", "Lucide React", "Fetch API"],
    category: "Frontend",
  },
];

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

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
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`scroll-mt-20 overflow-hidden bg-gray-50 px-4 py-16 transition-all duration-700 sm:px-6 sm:py-20 lg:px-8 ${
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      } motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:opacity-100`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Selected Projects
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            My <span className="text-blue-600">Work</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            A selection of projects demonstrating my experience in full-stack
            development, REST APIs, e-commerce, and modern web technologies.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Project count */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            Featured projects
          </p>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold text-gray-700">
            {projects.length} Projects
          </span>
        </div>

        {/* Responsive project grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3 xl:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none"
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                />

                <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/95 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-700 sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {project.desc}
                </p>

                {/* Technology tags */}
                <div className="mt-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Built with
                  </h4>

                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <li
                        key={technology}
                        className="max-w-full break-words rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} (opens in a new tab)`}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  View Project
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub call to action */}
        <div className="mt-12 text-center sm:mt-14">
          <p className="text-sm text-gray-600">
            Interested in exploring more of my code?
          </p>

          <a
            href="https://github.com/jahir002201"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Explore My GitHub <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;