"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYelp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-10 border-t-2 border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-5 bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"
            >
              Affordable Street Eats
            </motion.h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Discovering the best street food across Uttarakhand. We connect
              food lovers with authentic local flavors at honest prices.
            </p>
            <div className="flex space-x-5">
              {[
                {
                  icon: <FaFacebook className="w-5 h-5" />,
                  color: "hover:text-blue-400",
                },
                {
                  icon: <FaInstagram className="w-5 h-5" />,
                  color: "hover:text-pink-500",
                },
                {
                  icon: <FaTwitter className="w-5 h-5" />,
                  color: "hover:text-blue-300",
                },
               
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-5 text-orange-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Explore", href: "/explore" },
                { name: "Blog", href: "/blog" },
                { name: "About Us", href: "/about" },
                { name: "Add Your Stall", href: "/submit-vendor" },
              ].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-xl font-semibold mb-5 text-orange-400">
              Popular Cities
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Dehradun", href: "/explore/dehradun" },
                { name: "Haridwar", href: "/explore/haridwar" },
                { name: "Rishikesh", href: "/explore/rishikesh" },
                { name: "Mussoorie", href: "/explore/mussoorie" },
              ].map((city, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={city.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {city.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-5 text-orange-400">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-orange-400" />
                <span className="text-gray-300">
                Dehradun, Uttarakhand
                </span>
              </motion.li>
              <motion.li
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone className="mr-3 text-orange-400" />
                <span className="text-gray-300">+91 97193 51076</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="mr-3 text-orange-400" />
                <a
                  href="mailto:neeraj95578@gmail.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  neeraj95578@gmail.com
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Affordable Street Eats. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-orange-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-orange-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Creator Attribution */}
        <motion.div
          className="mt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="flex items-center justify-center gap-1">
            Crafted by
            <a
              href="https://portfolio-six-xi-87.vercel.app/"
              className="text-lime-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neeraj Yadav
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
