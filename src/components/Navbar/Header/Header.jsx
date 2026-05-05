import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo_nagagiri.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelopeOpen,
  FaMobileScreen,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { FaAlignRight, FaCircleXmark } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  const [menu, showMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = () => {
    showMenu(true);
  };

  const handleMenuClose = () => {
    showMenu(false);
  };

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Places To Visit', path: '/places-to-visit' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <div className={`w-full fixed top-0 left-0 z-[1000] transition-all duration-500 ${scrolled ? "translate-y-[-40px]" : "translate-y-0"}`}>
        {/* Top Section - Hidden on Scroll for cleaner look */}
        <div className="bg-[#1a1b23] py-1.5 text-[12px] font-medium tracking-widest text-gray-400 uppercase">
          <div className="container mx-auto px-6 flex justify-center sm:justify-between items-center">
            <div className="flex items-center gap-8">
              <section className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group">
                <FaMobileScreen className="text-primary group-hover:scale-110 transition-transform" />
                <a href="tel:+919035090689">+91 9035090689</a>
              </section>
              <section className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer hidden md:flex group">
                <FaEnvelopeOpen className="text-primary group-hover:scale-110 transition-transform" />
                <div className="flex flex-row items-center gap-4">
                  <a href="mailto:adishjain73@gmail.com">adishjain73@gmail.com</a>
                  <span className="text-gray-600">|</span>
                  <a href="mailto:nagagiricomforts26@gmail.com">nagagiricomforts26@gmail.com</a>
                </div>
              </section>
            </div>
            <section className="flex gap-6 items-center hidden sm:flex">
              <a href="https://www.facebook.com/accomodationnagagiri/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-400 hover:text-[#1877F2] cursor-pointer transition-all hover:scale-125" />
              </a>
              <a href="https://www.instagram.com/nagagiri_comforts/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-400 hover:text-[#E4405F] cursor-pointer transition-all hover:scale-125" />
              </a>
              <a href="https://www.youtube.com/@nagagiricomforts" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-gray-400 hover:text-[#FF0000] cursor-pointer transition-all hover:scale-125" />
              </a>
            </section>
          </div>
        </div>

        {/* Main Header - Clean Professional Aesthetic */}
        <div className={`w-full transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl h-20"
          : "bg-white h-24 border-b border-gray-100"
          }`}>
          <div className="container mx-auto px-6 h-full flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" onClick={handleExploreClick} className="relative group flex items-center">
              <img
                className={`transition-all duration-500 object-contain ${scrolled ? "max-h-[60px] max-w-[110px]" : "max-h-[80px] max-w-[140px]"
                  } hover:brightness-110`}
                src={logo}
                alt="Nagagiri Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center gap-10 text-[1.05rem] font-medium tracking-wide text-gray-800 font-sans">
                {navItems.map((item) => (
                  <li key={item.name} className="relative group py-2">
                    <Link
                      to={item.path}
                      onClick={handleExploreClick}
                      className={`transition-all duration-300 ${location.pathname === item.path ? "text-primary" : "text-gray-800 hover:text-primary"
                        }`}
                    >
                      {item.name}
                    </Link>
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/contact">
                <button className="relative group overflow-hidden bg-gradient-to-r from-primary to-[#ff847c] py-3.5 px-9 text-[12px] font-black tracking-[0.2em] rounded-full text-white shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                  <span className="relative z-10">BOOK NOW</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="absolute -inset-4 bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                </button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={handleMenuOpen}
                className="p-3 bg-gray-50 rounded-xl text-gray-800 hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <FaAlignRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${menu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={handleMenuClose}
      >
        <section
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${menu ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <img className="max-w-[120px]" src={logo} alt="Logo" />
              <button onClick={handleMenuClose} className="p-2 text-gray-400 hover:text-primary transition-colors">
                <FaCircleXmark className="text-3xl" />
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <li
                    key={item.name}
                    className={`transition-all duration-500 ${menu ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleMenuClose}
                      className="text-2xl font-marcellus text-gray-800 hover:text-primary transition-colors flex items-center justify-between group"
                    >
                      {item.name}
                      <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-12"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-12">
              <div className="flex gap-6 mb-8">
                <FaFacebook className="text-2xl text-gray-400 hover:text-[#1877F2] transition-colors cursor-pointer" />
                <FaInstagram className="text-2xl text-gray-400 hover:text-[#E4405F] transition-colors cursor-pointer" />
                <FaYoutube className="text-2xl text-gray-400 hover:text-[#FF0000] transition-colors cursor-pointer" />
              </div>
              <Link to="/contact" onClick={handleMenuClose}>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold tracking-widest hover:bg-black transition-colors">
                  RESERVE YOUR STAY
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
