'use client';
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterLinks from "@/app/components/FooterLinks";

const Footer = ({children}) => {
  const currentYear = new Date().getFullYear();

  

  return (
    <footer className="bg-slate-900 text-gray-300 mt-16 pt-12 pb-6">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              We deliver exceptional products and services to help you succeed in your journey.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <FooterLinks />
            
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/inbox" className="text-gray-400 hover:text-green-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get special offers and updates!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white text-sm placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
              <button className="px-4 py-2 bg-green-500 text-white rounded font-semibold text-sm hover:bg-green-600 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">
            &copy; {currentYear} Eureka. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-green-500 transition">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-500 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-500 transition">
              Unsubscribe
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
