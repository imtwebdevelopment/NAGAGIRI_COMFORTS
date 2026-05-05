import React from "react";
import ambathhertha from "../../../assets/PlacesToVisit/ambatheertha.png";
import annapoorneshwariTemple from "../../../assets/PlacesToVisit/annapoorneshwaritemple.png";
import kudereMukha from "../../../assets/PlacesToVisit/kuderemukh.png";
import kythanaMakki from "../../../assets/PlacesToVisit/kythanamakhi.png";
import myruthiHill from "../../../assets/PlacesToVisit/MyruthiHill.png";
import panvaraUpavarage from "../../../assets/PlacesToVisit/pandavaraupvarage.png";
import raniJhari from "../../../assets/PlacesToVisit/ranijhari.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Section4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 3, // Adjust as needed for tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 2, // Only one slide at a time on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const array = [
    {
      img: annapoorneshwariTemple,
      title: "Annapoorneshwari",
      desc: "Lorem Ipsum is a great to read",
      km: "4.9 KM",
    },
    {
      img: ambathhertha,
      title: "Ambatheertha",
      desc: "Lorem Ipsum is a great to read",
      km: "3.2 KM",
    },
    {
      img: kythanaMakki,
      title: "Kyatanmakki",
      desc: "Lorem Ipsum is a great to read",
      km: "12 KM",
    },
    {
      img: myruthiHill,
      title: "Myruthi Hill",
      desc: "Lorem Ipsum is a great to read",
      km: "24.6 KM",
    },
    {
      img: kudereMukha,
      title: "Kudremukh Peak",
      desc: "Lorem Ipsum is a great to read",
      km: "24.6 KM",
    },
    {
      img: raniJhari,
      title: "Rani jery",
      desc: "Lorem Ipsum is a great to read",
      km: "23.5 KM",
    },
    {
      img: panvaraUpavarage,
      title: " Pandavara Uparge",
      desc: "Lorem Ipsum is a great to read",
      km: "25 KM",
    },
  ];

  return (
    <div className="bg-[#f3eee8] py-10 flex flex-col gap-14">
      {/* Top section */}
      <section className="flex flex-col gap-4">
        <h1 className="text-5xl font-marcellus text-center">
          Nearest Places To Visit
        </h1>
        <p className="text-greyColor text-center">
          Designed for the discerning traveler, a tailored retreat providing
          exceptional experiences.
        </p>
      </section>

      {/* Bottom section */}
      <section>
        <div className="slider-container container mx-auto overflow-hidden">
          <Slider {...settings}>
            {array.map((item) => (
              <div key={item.title} className="flex flex-col">
                <img src={item.img} alt={item.title} />
                <h1 className="text-center mt-5 text-[1.7vmax] md:text-[1.2vmax] lg:text-[1.2vmax] xl:text-[1.2vmax] uppercase font-bold text-primary">
                  {item.title}
                </h1>
                <p className="text-center uppercase font-bold text-black">
                  {item.km}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <Link to="nagagiri_comforts/contact">
          <button className="bg-sky-600 py-2 sm:py-4 px-4 sm:px-8 font-semibold text-white transition-all hover:bg-primary">
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section4;
