"use client"; // Add this line to ensure client-side rendering

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import the icons

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center border-b border-gray-600 pb-8 mb-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold text-orange-500">Spicy Flavours</h1>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="www.facebook.com" className="hover:text-orange-500">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="www.twitter.com" className="hover:text-orange-500">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="www.instagram.com" className="hover:text-orange-500">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="www.youtube.com" className="hover:text-orange-500">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul>
              <li><a href="/Abouthome" className="hover:text-orange-500">About Us</a></li>
              <li><a href="/Mainmenu" className="hover:text-orange-500">Menu</a></li>
              <li><a href="/Contactmain" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Customer Service</h4>
            <ul>
              <li><a href="#faq" className="hover:text-orange-500">FAQ</a></li>
              <li><a href="#terms" className="hover:text-orange-500">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-orange-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <ul>
              <li><a href="www.facebook.com" className="hover:text-orange-500">Facebook</a></li>
              <li><a href="www.twitter.com" className="hover:text-orange-500">Twitter</a></li>
              <li><a href="www.instagram.com" className="hover:text-orange-500">Instagram</a></li>
              <li><a href="www.youtube.com" className="hover:text-orange-500">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul>
              <li><a href="tel:+1234567890" className="hover:text-orange-500">+123 456 7890</a></li>
              <li><a href="mailto:info@spicyflavours.com" className="hover:text-orange-500">ahmed@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2024 Spicy Flavours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
