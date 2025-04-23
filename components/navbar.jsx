"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiSearch, FiX, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaUtensils } from "react-icons/fa";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const searchButtonRef = useRef(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target) &&
        !searchButtonRef.current?.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/explore" },
    { 
      id: 3, 
      name: "Cities", 
      path: "/explore", // Main cities link
      sub: [
        { id: 31, name: "Dehradun", path: "/explore/dehradun" },
        { id: 32, name: "Haridwar", path: "/explore/haridwar" },
        { id: 33, name: "Rishikesh", path: "/explore/rishikesh" },
        { id: 34, name: "Mussoorie", path: "/explore/mussoorie" },
      ] 
    },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "About", path: "/about" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log("Searching for:", searchQuery);
    // Example: router.push(`/search?q=${searchQuery}`);
    setShowSearch(false);
    setSearchQuery("");
  };

  // Custom SVG Logo
  const Logo = () => (
    <svg 
      width="160" 
      height="40" 
      viewBox="0 0 160 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-auto"
    >
      {/* Food Cart Icon */}
      <path 
        d="M10 20L15 10H25L30 20H10Z" 
        fill="#F97316" 
        stroke="#F97316" 
        strokeWidth="2"
      />
      <circle cx="13" cy="27" r="3" fill="#F97316" />
      <circle cx="27" cy="27" r="3" fill="#F97316" />
      
      {/* Utensil Icon */}
      <path 
        d="M40 10V30M45 15L50 10L55 15L50 20L45 15Z" 
        stroke="#F97316" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      
      {/* Text: Affordable Street Eats */}
      <text 
        x="65" 
        y="25" 
        fontFamily="Arial" 
        fontSize="16" 
        fontWeight="bold" 
        fill="#F97316"
      >
        ASE
      </text>
    </svg>
  );

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.id} className="relative group">
              <Link
                href={link.path}
                className={`font-medium text-sm uppercase tracking-wider transition-colors ${
                  pathname === link.path || 
                  (link.sub && link.sub.some(sub => pathname === sub.path))
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {link.name}
              </Link>
              {link.sub && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.sub.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem.path}
                      className={`block px-4 py-2 ${
                        pathname === subItem.path
                          ? "bg-orange-50 text-orange-600"
                          : "text-gray-800 hover:bg-orange-50"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <button 
            ref={searchButtonRef}
            className="ml-2 p-2 text-gray-700 hover:text-orange-500"
            onClick={() => {
              setShowSearch(!showSearch);
              setSearchQuery("");
            }}
          >
            {showSearch ? <FiX className="w-5 h-5" /> : <FiSearch className="w-5 h-5" />}
          </button>
          
          <Link
            href="/submit-vendor"
            className="ml-2 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors"
          >
            Add Your Stall
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            ref={searchButtonRef}
            className="text-gray-700"
            onClick={() => {
              setShowSearch(!showSearch);
              setSearchQuery("");
            }}
          >
            {showSearch ? <FiX className="w-5 h-5" /> : <FiSearch className="w-5 h-5" />}
          </button>
          <Sheet>
            <SheetTrigger className="focus:outline-none">
              <FiMenu className="w-6 h-6 text-gray-800" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center">
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.id} className="pb-1">
                    <Link
                      href={link.path}
                      className={`block py-3 px-4 rounded-lg text-lg ${
                        pathname === link.path || 
                        (link.sub && link.sub.some(sub => pathname === sub.path))
                          ? "bg-orange-100 text-orange-600 font-medium"
                          : "text-gray-800 hover:bg-orange-50"
                      }`}
                    >
                      {link.name}
                      {link.sub && (
                        <span className="float-right">+</span>
                      )}
                    </Link>
                    {link.sub && (
                      <div className="ml-6 mt-1 space-y-1">
                        {link.sub.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.path}
                            className={`block py-2 px-4 ${
                              pathname === subItem.path
                                ? "text-orange-600 bg-orange-50"
                                : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                            } rounded-lg`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-orange-500 hover:text-orange-700">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-orange-500 hover:text-orange-700">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-orange-500 hover:text-orange-700">
                    <FaUtensils className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div 
          ref={searchRef}
          className={`fixed left-0 right-0 bg-white border-b border-gray-200 px-4 py-3 z-40 ${
            scrolled ? "top-16" : "top-20"
          } shadow-sm`}
        >
          <form 
            onSubmit={handleSearch}
            className={`relative flex items-center ${
              typeof window !== 'undefined' && window.innerWidth >= 768 ? "max-w-2xl mx-auto" : ""
            }`}
          >
            <FiSearch className="absolute left-3 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                typeof window !== 'undefined' && window.innerWidth >= 768 
                  ? "Search street foods across Uttarakhand..." 
                  : "Search street foods near you..."
              }
              className="w-full pl-10 pr-16 py-2 text-sm rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
              autoFocus
            />
            <button 
              type="button"
              onClick={() => {
                setShowSearch(false);
                setSearchQuery("");
              }}
              className="absolute right-10 text-gray-400 hover:text-gray-600"
            >
              <FiX className="w-4 h-4" />
            </button>
            <button 
              type="submit"
              className="absolute right-3 text-orange-500 hover:text-orange-700"
            >
              <FiMapPin className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;