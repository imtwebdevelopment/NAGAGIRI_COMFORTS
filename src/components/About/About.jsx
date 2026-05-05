import React from "react";
import Slider from "react-slick";
import Section2 from "../Home/Section2/Section2";
import image1 from "../../assets/AboutUs/whychooseus/nagagiri_comforts1.webp"
import image2 from "../../assets/AboutUs/whychooseus/nagagiri_comforts2.webp"
import image3 from "../../assets/AboutUs/whychooseus/nagagiri_comforts3.webp"
import image4 from "../../assets/AboutUs/whychooseus/nagagiri_comforts4.webp"
import image5 from "../../assets/AboutUs/whychooseus/nagagiri_comforts5.webp"
import Section4 from "../Home/Section4/Section4";

const About = () => {
  const array = [
    {
      id: 1,
      img: image1,
      alt: "nagagiri Comforts Horanadu",
      title: "Serene Hilltop Location",
      desc: "Nestled in the tranquil surroundings of Horanadu, near the revered Annapoorneshwari Temple, Nagagiri Comforts offers a peaceful retreat away from the hustle and bustle of city life. Our scenic hilltop setting provides a perfect escape for relaxation and rejuvenation.",
    },
    {
      id: 2,
      img: image2,
      alt: "nagagiri Comforts Horanadu",
      title: "Spacious and Comfortable Rooms",
      desc: "Our well-appointed rooms are designed to accommodate 3-4 guests comfortably, making them ideal for families and groups. Each room is thoughtfully furnished to ensure a cozy and homely environment, where you can unwind and enjoy your stay.",
    },
    {
      id: 3,
      img: image3,
      alt: "nagagiri Comforts Horanadu",
      title: "Exceptional Hospitality",
      desc: "At Nagagiri Comforts, we take pride in our exceptional hospitality. Our dedicated staff, including the owner, are committed to making your stay as pleasant and enjoyable as possible. From personalized service to warm welcomes, we ensure that every guest feels valued and cared for.",
    },
    {
      id: 4,
      img: image5,
      alt: "nagagiri Comforts Horanadu",
      title: "Delicious Homemade Meals",
      desc: "Indulge in delicious meals prepared fresh on request. Our kitchen serves a variety of dishes that cater to your taste, ensuring you have a satisfying dining experience during your stay.",
    },
    {
      id: 5,
      img: image4,
      alt: "nagagiri Comforts Horanadu",
      title: "Convenience and Comfort",
      desc: "We offer a range of amenities to enhance your comfort, including 24/7 hot water supply and assistance with car cleaning. While internet coverage might be limited due to our scenic location, the peaceful environment more than compensates for it.",
    },
  ];
  return (
    <div>
      {/* Right Div */}
      <section className="py-10 conatiner mx-auto">
        <Section2 />
      </section>

      {/* 2nd section */}
      <section className="bg-[#f3eee8] px-5">
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-marcellus">Why Choose Us</h1>
          {array.map((items)=>(
            <>
              <div key={items.id} className="mt-7 flex flex-col gap-5">
                {/* <img src={items.img} alt={items.alt} className="max-w-40" /> */}
                <h1 className="font-semibold uppercase text-primary text-2xl">{items.title}</h1>
                <p className="font-extralight">{items.desc}</p>
              </div>
            </>
          ))}
        </div>
      </section>


      {/* 3rd Section */}
      <section>
        <Section4/>
      </section>
    </div>
  );
};

export default About;
