"use client";

import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const items = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/Jahir.jpg"
            width={45}
            height={45}
            alt="Jahirul Islam"
            className="rounded-full object-cover"
          />
          <span className="font-bold text-lg hidden sm:block">
            Jahirul Islam
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-black transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-800"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 font-medium">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="hover:text-black transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;