import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FloatingSocialMedia = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 flex flex-col space-y-4 z-50">
      {/* Call Button */}
      <a
        href="tel:+919035090689"
        className="flex items-center justify-center w-13 h-13 bg-blue-500 text-white rounded-full shadow-[0_4px_15px_rgba(59,130,246,0.5)] hover:bg-blue-600 hover:scale-110 transition-all duration-300"
      >
        <span className="text-2xl">📞</span>
      </a>
      {/* Facebook */}
      <a
        href="https://www.facebook.com/accomodationnagagiri/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white rounded-full shadow-[0_4px_15px_rgba(24,119,242,0.4)] hover:shadow-[0_4px_20px_rgba(24,119,242,0.6)] hover:scale-110 transition-all duration-300"
      >
        <FaFacebookF size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/nagagiri_comforts/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full shadow-[0_4px_15px_rgba(220,39,67,0.4)] hover:shadow-[0_4px_20px_rgba(220,39,67,0.6)] hover:scale-110 transition-all duration-300"
      >
        <FaInstagram size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+919035090689"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
  );
};

export default FloatingSocialMedia;
