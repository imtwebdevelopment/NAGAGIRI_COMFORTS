import React, { useState } from "react";
import logo from "../../../assets/logo_nagagiri.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelopeOpen,
  FaMobileScreen,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAlignRight, FaCircleXmark } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  const [menu, showMenu] = useState(false);

  const handleMenuOpen = () => {
    showMenu(true);
  };

  const handleMenuClose = () => {
    showMenu(false);
  };

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
    <>
      <div className="w-[100%] overflow-hidden">
        <div className="w-[100%] relative">
          {/* Top Section */}
          <div className=" bg-[#000] py-2">
            <section className="items-center container text-white mx-auto flex flex-wrap justify-center gap-5 md:gap-0  md:justify-between">
              <section className="flex  items-center gap-2">
                <FaMobileScreen />
                <a href="tel:+919035090689">
                  <h1>+91 9035090689</h1>
                </a>
              </section>
              <section className="flex items-center gap-2">
                <FaEnvelopeOpen />
                <a href="mailto:adishjain73@gmail.com">
                  <h1>adishjain73@gmail.com</h1>
                </a>
              </section>
              <section className="flex gap-3 ">
                <FaFacebook />
                <FaInstagram />
                <FaYoutube />
              </section>
            </section>
          </div>

          {/* Bottom Section */}
          <div className="bg-slate-200 shadow-sm">
            <div className="container mx-auto flex justify-between">
              {/* Left section */}
              <section className="flex gap-10">
                <section>
                  <img className="max-w-36" src={logo} alt="" />
                </section>
                <section className="menu flex hidden md:flex">
                  <ul className="flex items-center gap-10 font-semibold">
                    <li className="cursor-pointer">
                      <Link to="/" onClick={handleExploreClick}>
                        Home
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link to="/about" onClick={handleExploreClick}>
                        About
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link to="/place-to-visit" onClick={handleExploreClick}>
                        Places To Visit
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link to="/gallery" onClick={handleExploreClick}>
                        Gallery
                      </Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link to="/contact" onClick={handleExploreClick}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </section>
              {/* Right Section */}
              <section className="flex items-center hidden md:flex">
                <Link to="/contact">
                  <button className="bg-primary py-2 px-5 font-semibold rounded-lg text-white transition-all hover:bg-black">
                    CONTACT US
                  </button>
                </Link>
              </section>

              <section className="absolute right-6 block md:hidden top-1/2 ">
                {menu ? (
                  <FaCircleXmark
                    className="text-4xl menuclose"
                    onClick={handleMenuClose}
                  />
                ) : (
                  <FaAlignRight className="text-4xl" onClick={handleMenuOpen} />
                )}
              </section>
            </div>
          </div>
        </div>

        {/* Mobile mennu */}
        <section
          className={`right-1/2 h-full bg-primary text-white w-[100%] transition-transform duration-300 ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {menu && (
            <ul className="flex bg-primary py-10 text-white  flex-col items-center gap-10 font-semibold">
              <li className="cursor-pointer">
                <Link to="/" onClick={handleMenuClose}>
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/about" onClick={handleMenuClose}>
                  About
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/place-to-visit" onClick={handleMenuClose}>
                  Places To Visit
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/gallery" onClick={handleMenuClose}>
                  Gallery
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/contact" onClick={handleMenuClose}>
                  Contact
                </Link>
              </li>
              <li>
                <img className="bg-white max-w-24" src={logo} alt="" />
              </li>
              <li>
                <div className="flex gap-3 bg-white px-6 py-2 md:items-start items-center justify-center md:justify-start">
                  <FaFacebook className="cursor-pointer fill-blue-700 text-3xl" />
                  <FaInstagram className="cursor-pointer fill-pink-800 text-3xl" />
                  <FaYoutube className="cursor-pointer fill-red-700 text-3xl" />
                </div>
              </li>
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default Header;
