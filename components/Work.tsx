"use client";
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const Work: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLOptionElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="work"
      ref={ref}
      className={`transition-transform duration-1000 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'} p-6 md:p-12 lg:p-24 bg-gray-50`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
          My Work
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 text-center">
          Explore some of the projects I’ve worked on that demonstrate my skills and expertise.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example project card with image */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <Image 
                src="/images/Python.jpg" 
                alt="Project Screenshot" 
                width={500} 
                height={300} 
                className="rounded-lg" 
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Project Title
            </h3>
            <p className="text-gray-500 mb-4">
              A brief description of the project. Hover to see more details and interact with the card.
            </p>
            <a href="#" className="block mt-4 text-blue-500 hover:text-blue-700 font-semibold">
              Learn More
            </a>
          </div>
          <div className="bg-white-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <Image 
                src="/images/nodejs.png" 
                alt="Project Screenshot" 
                width={500} 
                height={300} 
                className="rounded-lg" 
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Project Title
            </h3>
            <p className="text-gray-500 mb-4">
              A brief description of the project. Hover to see more details and interact with the card.
            </p>
            <a href="#" className="block mt-4 text-blue-500 hover:text-blue-700 font-semibold">
              Learn More
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <Image 
                src="/images/Jahir.jpg" 
                alt="Project Screenshot" 
                width={500} 
                height={300} 
                className="rounded-lg" 
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Project Title
            </h3>
            <p className="text-gray-500 mb-4">
              A brief description of the project. Hover to see more details and interact with the card.
            </p>
            <a href="#" className="block mt-4 text-blue-500 hover:text-blue-700 font-semibold">
              Learn More
            </a>
          </div>
          {/* Repeat project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Work;
