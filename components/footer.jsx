"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYelp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Affordable Street Eats</h3>
            <p className="mb-4">
              Discovering the best street food across Uttarakhand. We connect food lovers with authentic local flavors at honest prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors">
                <FaYelp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link href="/explore" className="hover:text-orange-400 transition-colors">Explore</Link></li>
              <li><Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/submit-vendor" className="hover:text-orange-400 transition-colors">Add Your Stall</Link></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Popular Cities</h4>
            <ul className="space-y-2">
              <li><Link href="/explore/dehradun" className="hover:text-orange-400 transition-colors">Dehradun</Link></li>
              <li><Link href="/explore/haridwar" className="hover:text-orange-400 transition-colors">Haridwar</Link></li>
              <li><Link href="/explore/rishikesh" className="hover:text-orange-400 transition-colors">Rishikesh</Link></li>
              <li><Link href="/explore/mussoorie" className="hover:text-orange-400 transition-colors">Mussoorie</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-orange-500" />
                <span>123 Food Street, Dehradun, Uttarakhand</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-orange-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-orange-500" />
                <a href="mailto:info@affordablestreeteats.com" className="hover:text-orange-400 transition-colors">
                  info@affordablestreeteats.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Affordable Street Eats. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;