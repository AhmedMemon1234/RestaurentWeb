"use client"; // Add this line to ensure client-side rendering

import { useState } from 'react';
import { FaHamburger, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaHamburger className="text-orange-500 text-3xl" />
          <h1 className="text-xl font-semibold">Spicy Flavours</h1>
        </div>

        {/* Navigation (Visible on Desktop) */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="/" className="hover:text-orange-500">Home</a>
          <a href="/menu" className="hover:text-orange-500">Menu</a>
          <a href="/Abouthome" className="hover:text-orange-500">About</a>
          <a href="/Contactmain" className="hover:text-orange-500">Contact</a>
        </nav>

        {/* Contact Icon */}
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-orange-500 text-2xl" />
          <span className="hidden md:block text-lg">+123 456 7890</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <FaHamburger className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible only when menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white p-4 space-y-4">
          <a href="#home" className="block hover:text-orange-500">Home</a>
          <a href="#menu" className="block hover:text-orange-500">Menu</a>
          <a href="#about" className="block hover:text-orange-500">About</a>
          <a href="#contact" className="block hover:text-orange-500">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
