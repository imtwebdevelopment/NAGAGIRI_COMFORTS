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
    <section className="bg-[#1a1b23] pt-20 pb-10 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: About */}
          <div className="flex flex-col gap-6">
            <img
              className="max-w-[160px] filter brightness-0 invert"
              src={logo}
              alt="Nagagiri Comforts Logo"
            />
            <p className="text-sm leading-relaxed font-light text-gray-400">
              Experience the perfect blend of spiritual serenity and modern comfort at Nagagiri Comforts, your premier retreat in the heart of Horanadu.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/accomodationnagagiri/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] transition-all duration-300 group">
                <FaFacebook className="text-lg group-hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/nagagiri_comforts/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:shadow-[0_0_15px_rgba(220,39,67,0.5)] transition-all duration-300 group">
                <FaInstagram className="text-lg group-hover:scale-110" />
              </a>
              <a href="https://www.youtube.com/@nagagiricomforts" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300 group">
                <FaYoutube className="text-lg group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Contact */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white font-playfair font-bold text-xl relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Contact Us
            </h2>
            <div className="flex flex-col gap-5 mt-2">
              <div className="flex items-start gap-4">
                <FaLocationDot className="text-primary text-xl mt-1 shrink-0" />
                <p className="text-sm leading-relaxed">
                  Hebbale Kalasa Hornadu Road<br />
                  Chikmagalur District - 577124
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-lg shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:adishjain73@gmail.com" className="text-[0.8rem] hover:text-primary transition-colors">
                    adishjain73@gmail.com
                  </a>
                  <a href="mailto:nagagiricomforts26@gmail.com" className="text-[0.8rem] hover:text-primary transition-colors">
                    nagagiricomforts26@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMobileScreenButton className="text-primary text-lg shrink-0" />
                <a href="tel:+919035090689" className="text-sm hover:text-primary transition-colors">
                  +91 903 509 0689
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white font-playfair font-bold text-xl relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Quick Links
            </h2>
            <nav className="mt-2">
              <ul className="flex flex-col gap-3">
                {['Home', 'About', 'Places To Visit', 'Gallery', 'Blog', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link
                      to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`}
                      onClick={handleExploreClick}
                      className="text-sm hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Location */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white font-playfair font-bold text-xl relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Our Location
            </h2>
            <div className="mt-2 rounded-xl overflow-hidden border border-white/10 shadow-2xl h-48">
              <iframe
                title="Google Maps Location of Nagagiri Comforts"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.584411575398!2d75.34926337489814!3d13.251377487090314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb362d714e4d23%3A0x3a345d04f91a8135!2sNagagiri%20Comforts!5e0!3m2!1sen!2sin!4v1722515561849!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light text-gray-500 uppercase tracking-widest text-center md:text-left">
          <p>© {new Date().getFullYear()} Nagagiri Comforts. All Rights Reserved.</p>
          
          <p className="normal-case tracking-normal text-gray-400 font-normal">
            Developed by <span className="text-primary font-medium">Innomatrics Technologies</span>
          </p>

          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
