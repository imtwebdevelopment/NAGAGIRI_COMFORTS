import React from "react";
import "./Section1.css";
import banner2 from "../../../assets/Home/nagagiricomfortschickmagaluru1.webp";
import banner4 from "../../../assets/Home/nagagiricomfortschickmagaluru2.webp";
import banner5 from "../../../assets/Home/nagagiricomfortschickmagaluru3.webp";
import banner6 from "../../../assets/Home/nagagiricomfortschickmagaluru4.webp";
import banner7 from "../../../assets/Home/nagagiricomfortschickmagaluru5.webp";
import banner8 from "../../../assets/Home/nagagiricomfortschickmagaluru6.webp";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const Section1 = () => {
  const fadeImages = [
    {
      url: banner2,
      alt: "nagagiri_comforts_chickmagalur",
    },
    {
      url: banner4,
      alt: "nagagiri_comforts_chickmagalur",
    },
    {
      url: banner5,
      alt: "nagagiri_comforts_chickmagalur",
    },
    {
      url: banner6,
      alt: "nagagiri_comforts_chickmagalur",
    },
    {
      url: banner7,
      alt: "nagagiri_comforts_chickmagalur",
    },
  ];

  return (
    <div className="relative">
      <div className="slide-container">
        <Fade
          autoplay={true}
          pauseOnHover={false}
          duration={2000}
          transitionDuration={500}
        >
          {fadeImages.map((fadeImage, index) => (
            <div key={index} className="relative">
              <img
                className="w-full object-cover h-[40vh] lg:h-[70vh] md:h-[50vh] sm:h-[40vh]"
                src={fadeImage.url}
                alt={fadeImage.alt}
              />
              <h2 className="hidden">{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center z-10">
          <h1 className="text-3xl sm:text-5xl font-marcellus font-bold text-black bg-[rgba(255,255,255,0.6)] py-3 px-3">
            NAGAGIRI COMFORTS
          </h1>
          <Link to="nagagiri_comforts/contact">
            <button className="bg-sky-600 py-2 sm:py-4 px-4 sm:px-8 font-semibold text-white transition-all hover:bg-primary">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
