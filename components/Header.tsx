"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [hidden, setHidden] = useState(true);

  const toggleMenu = () => {
    setHidden(!hidden);
  };

  const handleLinkClick = () => {
    setHidden(true); 
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-5 text-gray-900 z-50">
      <div className="flex-1 flex justify-center">
        <Image
          src="/images/Jahir.jpg"
          className="rounded-full"
          height={50}
          width={50}
          alt="logo"
        />
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 flex-grow justify-center">
        <a href="#home" className="hover:text-gray-400 font-bold">Home</a>
        <a href="#about" className="hover:text-gray-400 font-bold">About</a>
        <a href="#work" className="hover:text-gray-400 font-bold">Work</a>
        <a href="#contact" className="hover:text-gray-400 font-bold">Contact</a>
      </nav>
      
      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-xl" aria-label="Toggle menu">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={`md:hidden ${hidden ? 'hidden' : 'flex'} flex-col space-y-2 absolute top-16 right-0 w-full p-5 shadow-md`}>
        <a href="#home" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">Home</a>
        <a href="#about" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">About</a>
        <a href="#work" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">Work</a>
        <a href="#contact" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
