"use client";

import React, { useRef, useState, useEffect } from "react";

const Footer: React.FC = () => {
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

  return (
    <footer
      ref={ref}
      className={`bg-gray-700 text-white py-12 px-6 transition-all duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">

          <a
            href="https://github.com/jahir002201"
            target="_blank"
            className="px-5 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jahirul12"
            target="_blank"
            className="px-5 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:jahir002201@gmail.com"
            className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Email Me
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Md Jahirul Islam. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;