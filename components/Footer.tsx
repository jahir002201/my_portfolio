import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 px-4 py-10 text-white sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 text-center sm:flex-row sm:text-left">
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Jahirul<span className="text-blue-400">.</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Full-Stack Developer · Building for the web
            </p>
          </div>

          <nav
            aria-label="Social links"
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href="https://github.com/jahir002201"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-200 transition hover:border-blue-400 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/jahirul12/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-200 transition hover:border-blue-400 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:jahir002201@gmail.com"
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Email Me
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-gray-400 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Md Jahirul Islam. All rights reserved.
          </p>
          <a
            href="#home"
            className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;