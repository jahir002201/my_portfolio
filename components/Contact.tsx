"use client";
import React, { useRef, useState, useEffect } from 'react';

const Contact: React.FC = () => {
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
      id="contact"
      ref={ref}
      className={`p-10 bg-gray-100 transition-transform duration-1000 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600">
          I’d love to hear from you! Whether you have a question or just want to connect, feel free to reach out.
        </p>
      </div>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
          <textarea
            id="message"
            className="border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            rows={6}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
