"use client";
import React, { useRef, useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLFooterElement>(null);

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
    <footer
      ref={ref}
      className={`p-5 bg-gray-500 text-white text-center transition-transform duration-1000 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
    >
      <div className="flex justify-center mb-4">
        <a
          href="https://github.com/jahir002201"
          className="mx-2 text-gray-300 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jahirul12"
          className="mx-2 text-gray-300 hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-sm">&copy; 2024 Md Jahirul Islam. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
