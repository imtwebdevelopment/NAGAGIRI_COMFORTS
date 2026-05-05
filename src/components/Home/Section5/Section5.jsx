import React, { useRef, useState, useEffect } from "react";
import {
  FaMobileScreenButton,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCircleCheck,
  FaCircleXmark,
  FaXmark,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo_nagagiri.png";
import roomImg from "../../../assets/Home/nagagiricomfortschickmagaluru5.webp";

const Section5 = () => {
  const form = useRef();
  const [modal, setModal] = useState({ show: false, status: "success", message: "" });

  useEffect(() => {
    if (modal.show) {
      const timer = setTimeout(() => {
        setModal((prev) => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [modal.show]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kx9egfc", "template_fbkyicv", form.current, {
        publicKey: "a3QFm_r04btKGnCMf",
      })
      .then(
        () => {
          setModal({
            show: true,
            status: "success",
            message: "Thank you! Your inquiry has been sent successfully. We will get back to you soon.",
          });
          form.current.reset();
        },
        (error) => {
          setModal({
            show: true,
            status: "error",
            message: "Oops! Something went wrong. Please try again later or contact us directly.",
          });
        }
      );
  };

  return (
    <div className="bg-[#fef9f1] min-h-[500px] flex flex-col md:flex-row">
      {/* Left Section - Form */}
      <div className="flex-1 px-8 py-10 md:px-20 lg:px-32 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
          </Link>
          <div className="h-0.5 bg-orange-400 w-16 mb-2"></div>
          <span className="text-gray-500 tracking-[0.2em] text-base md:text-lg font-semibold uppercase">
            Reach Us
          </span>
          <h1 className="text-4xl font-marcellus text-gray-800 leading-tight">
            Send Us Your Enquires
          </h1>
          <p className="text-gray-600 text-base md:text-lg mt-1">
            Create Unforgettable Memories at Nagagiri Comforts Today.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 mt-2">
          <input
            type="text"
            name="user_name"
            placeholder="Name*"
            required
            className="w-full p-2 border border-gray-400 bg-white focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email*"
            required
            className="w-full p-2 border border-gray-400 bg-white focus:outline-none focus:border-primary"
          />
          <input
            type="tel"
            name="user_mobile"
            placeholder="Mobile Number*"
            required
            className="w-full p-2 border border-gray-400 bg-white focus:outline-none focus:border-primary"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="3"
            className="w-full p-2 border border-gray-400 bg-white focus:outline-none focus:border-primary resize-none"
          />
          <button
            type="submit"
            className="w-full bg-[#2d2e3a] text-white py-3 font-bold tracking-widest hover:bg-primary transition-all duration-300"
          >
            SEND
          </button>
        </form>
      </div>

      {/* Right Section - Image & Overlay */}
      <div className="flex-1 relative min-h-[300px] md:min-h-full">
        <img
          src={roomImg}
          alt="Room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-marcellus leading-tight mb-3 drop-shadow-lg">
            Plan an Unforgettable Experience in Nagagiri Comforts Today
          </h2>
          <p className="text-white italic text-base mb-8 drop-shadow-md">
            " Best Resorts In Chikmagalur "
          </p>

          <a
            href="tel:+919035090689"
            className="bg-[#5d3a1a] text-white px-5 py-2 rounded-md flex items-center gap-3 hover:bg-white hover:text-[#5d3a1a] transition-all duration-300 shadow-xl"
          >
            <FaMobileScreenButton />
            <span className="font-bold text-sm md:text-base">+91 903 509 0689</span>
          </a>

          <div className="absolute bottom-6 right-6 flex gap-3">
            <a href="https://www.facebook.com/accomodationnagagiri/" target="_blank" rel="noopener noreferrer" className="bg-black/50 backdrop-blur-md text-white p-2.5 rounded hover:bg-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] transition-all group">
              <FaFacebookF size={18} className="group-hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/nagagiri_comforts/" target="_blank" rel="noopener noreferrer" className="bg-black/50 backdrop-blur-md text-white p-2.5 rounded hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:shadow-[0_0_15px_rgba(220,39,67,0.5)] transition-all group">
              <FaInstagram size={18} className="group-hover:scale-110" />
            </a>
            <a href="https://www.youtube.com/@nagagiricomforts" target="_blank" rel="noopener noreferrer" className="bg-black/50 backdrop-blur-md text-white p-2.5 rounded hover:bg-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all group">
              <FaYoutube size={18} className="group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
      {/* Custom Modal */}
      {modal.show && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <style>{`
            @keyframes modalFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalZoomIn {
              from { opacity: 0; transform: scale(0.95) translateY(10px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-modal-fade { animation: modalFadeIn 0.3s ease-out forwards; }
            .animate-modal-zoom { animation: modalZoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
          `}</style>
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-modal-fade"
            onClick={() => setModal((prev) => ({ ...prev, show: false }))}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-modal-zoom">
            <div className={`h-2.5 w-full ${modal.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <button 
              onClick={() => setModal((prev) => ({ ...prev, show: false }))}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-300"
            >
              <FaXmark size={22} />
            </button>
            <div className="p-10 flex flex-col items-center text-center gap-5">
              <div className={`p-5 rounded-full ${modal.status === 'success' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'} shadow-inner`}>
                {modal.status === 'success' ? <FaCircleCheck size={56} /> : <FaCircleXmark size={56} />}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-marcellus text-gray-800">
                  {modal.status === 'success' ? 'Thank You!' : 'Oops!'}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {modal.status === 'success' ? 'Message Sent Successfully' : 'Delivery Failed'}
                </p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                {modal.message}
              </p>
              <button 
                onClick={() => setModal((prev) => ({ ...prev, show: false }))}
                className={`mt-4 w-full py-3.5 rounded-xl font-bold text-white tracking-widest transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                  modal.status === 'success' 
                    ? 'bg-green-500 hover:bg-green-600 shadow-xl shadow-green-100' 
                    : 'bg-red-500 hover:bg-red-600 shadow-xl shadow-red-100'
                }`}
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section5;

