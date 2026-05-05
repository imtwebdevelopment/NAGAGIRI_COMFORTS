import React from "react";
import "./Section2.css";
import aboutusImage from "../../../assets/Home/nagagiricomfortchickmagaluru_about.webp";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="w-[100%] bg-secondery py-8">
      <div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row container mx-auto justify-center items-center">
        {/* Left Section */}

        <section className="w-[100%] md:w-[50%] flex flex-col items-center md:items-start gap-6  md:gap-9 px-4">
          <div className="flex flex-col  md:items-start gap-4 border-l-4 px-2 border-indigo-600">
            <p className="text-[2vmax] md:text-[1vmax] lg:text-[1vmax] px-1 ">
              WELCOME TO{" "}
              <span className="bg-primary px-2 text-white">
                NAGAGIRI COMFORTS
              </span>{" "}
              - BEST RESORTS IN HORANADU
            </p>
            <h1 className="text-4xl font-marcellus">
              THE BEST STAY IN NEAR{" "}
              <span className="text-primary">HORANADU</span>
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="text-[1.6vmax] md:text-[0.99vmax] lg:text-[0.99vmax] text-center lg:text-justify xl:text-justify md:text-justify ">
              Located in the serene surroundings of Horanadu, near the renowned
              Annapoorneshwari Temple, Nagagiri Comfort offers a welcoming
              retreat for families and travelers. Our spacious rooms comfortably
              accommodate 3-4 guests, ensuring a cozy and relaxed stay.
            </p>
            <p className="text-[1.6vmax] md:text-[0.99vmax] lg:text-[0.99vmax] text-center lg:text-justify xl:text-justify md:text-justify ">
              We pride ourselves on exceptional hospitality. Our dedicated
              staff, including the owner, are committed to making your stay as
              pleasant as possible. Enjoy delicious meals prepared fresh on
              request, and take advantage of our 24/7 hot water supply. We even
              assist with car cleaning for your convenience.
            </p>
            <p className="text-[1.6vmax] md:text-[0.99vmax] lg:text-[0.99vmax] text-center lg:text-justify xl:text-justify md:text-justify ">
              While internet coverage might be limited due to our scenic hilltop
              location, the tranquil environment more than makes up for it. We
              are confident you will have a memorable experience and look
              forward to welcoming you!
            </p>
          </div>
          <div>
            <Link to="nagagiri_comforts/contact">
              <button className="bg-sky-600 py-4 px-8 font-semibold text-white transition-all hover:bg-primary">
                CONTACT US
              </button>
            </Link>
            <div className="flex gap-3 py-4 md:items-start items-center justify-center md:justify-start">
              <FaFacebook className="cursor-pointer fill-blue-700 text-3xl" />
              <FaInstagram className="cursor-pointer fill-pink-800 text-3xl" />
              <FaYoutube className="cursor-pointer fill-red-700 text-3xl" />
            </div>
          </div>
        </section>
        {/* Right Section */}
        <section className="w-[50%] flex justify-end mx-auto">
          <img
            className="w-[100%] md:max-w-[70%] rounded-lg"
            src={aboutusImage}
            alt="nagagiri_comforts_horanadu"
          />
        </section>
      </div>
    </div>
  );
};

export default Section2;
