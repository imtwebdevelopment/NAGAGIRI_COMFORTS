import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo_nagagiri.png";
import {
  FaFacebook,
  FaLocationDot,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMobileScreenButton,
} from "react-icons/fa6";

const Footer = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-[#e2e8f0] border-t-2 border-t-slate-950 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <img
              className="max-w-[12rem]"
              src={logo}
              alt="nagagiri_comforts_logo"
            />

            <div className="flex gap-3 items-center justify-center py-4 ml-auto mr-auto">
              <FaFacebook className="cursor-pointer fill-blue-700 text-center text-3xl" />
              <FaInstagram className="cursor-pointer fill-pink-800 text-3xl" />
              <FaYoutube className="cursor-pointer fill-red-700 text-3xl" />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3">
            <h2 className="font-bold text-primary text-lg">Contact</h2>
            <div className="flex items-center gap-2">
              <FaLocationDot className="flex-shrink-0" />
              <p className="text-center lg:text-left">
                Hebbale Kalasa Hornadu Road Chikmagalur District - 577124
              </p>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="flex-shrink-0" />
              <p>E-mail: adishjain73@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <FaMobileScreenButton className="flex-shrink-0" />
              <p>+91 903 509 0689</p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4">
            <h2 className="font-bold text-primary text-lg">Quick Links</h2>
            <nav>
              <ul className="flex flex-col items-center lg:items-start gap-2">
                <li>
                  <Link to="/" onClick={handleExploreClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={handleExploreClick}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/place-to-visit"
                    onClick={handleExploreClick}
                  >
                    Places To Visit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    onClick={handleExploreClick}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={handleExploreClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-full lg:w-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.584411575398!2d75.34926337489814!3d13.251377487090314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb362d714e4d23%3A0x3a345d04f91a8135!2sNagagiri%20Comforts!5e0!3m2!1sen!2sin!4v1722515561849!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
