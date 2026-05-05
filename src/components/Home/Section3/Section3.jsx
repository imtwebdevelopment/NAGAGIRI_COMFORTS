import React from "react";
import {
  FaCar,
  FaClockRotateLeft,
  FaWifi,
  FaBowlFood,
  FaGlassWaterDroplet,
} from "react-icons/fa6";

const Section3 = () => {
  const array = [
    {
      icon: FaGlassWaterDroplet,
      title: "24 Hours Water Facility",
      desc: "Stay refreshed with our reliable 24-hour water supply, ensuring you have access to clean and safe water whenever you need it. Whether it's for drinking or bathing, we've got you covered.",
    },
    {
      icon: FaCar,
      title: "Plenty Parking Facility",
      desc: "Enjoy the convenience of ample parking space, making it easy for you to bring your vehicle without any hassle. Our secure parking area gives you peace of mind during your stay.",
    },
    {
      icon: FaClockRotateLeft,
      title: "24 Hours Support",
      desc: "Our dedicated team is available around the clock to assist you with any queries or needs, ensuring a seamless experience. Your comfort and satisfaction are our top priorities.",
    },
    {
      icon: FaWifi,
      title: "Wifi Facility",
      desc: "Stay connected with high-speed Wi-Fi available throughout the resort, perfect for both leisure and business needs. Share your experiences online or catch up on work without interruption.",
    },
    {
      icon: FaBowlFood,
      title: "Quality Food",
      desc: "Savor delicious, locally inspired cuisine prepared with the freshest ingredients, ensuring a delightful dining experience. Our menu caters to all tastes, promising satisfaction with every meal.",
    },
  ];

  return (
    <div className="bg-[#fffaf1] py-8 px-4 sm:px-6 lg:px-8">
      {/* top section */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-marcellus text-center leading-tight mb-4">
          Facilities & Highlights of our Hotel
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Designed for the discerning traveler, a tailored retreat providing
          exceptional experiences.
        </p>
      </section>

      {/* bottom section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {array.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center text-center h-full">
                  <IconComponent className="text-4xl mb-4 text-primary" />
                  <h2 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 flex-grow">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Section3;
