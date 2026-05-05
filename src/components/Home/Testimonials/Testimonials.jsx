import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Ramesh K",
      review: "A wonderful stay at Nagagiri Comforts! The rooms were exceptionally clean, and the proximity to the Annapoorneshwari Temple made our trip very convenient. Highly recommended.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      review: "Excellent service and courteous staff. The food was delicious and authentic. The serene environment provided a much-needed break from the city hustle. Will definitely visit again.",
      rating: 5,
    },
    {
      name: "Santhosh M",
      review: "The best place to stay in Horanadu. The view from the balcony was breathtaking. Ample parking space and very comfortable beds. Loved the hospitality.",
      rating: 4,
    },
    {
      name: "Anitha Gowda",
      review: "Very pleasant stay. The management was very helpful in guiding us to the nearby attractions like Kyatanmakki and Ambatheertha. The rooms are spacious and well-maintained.",
      rating: 5,
    },
    {
      name: "Vikram Reddy",
      review: "Value for money. The facilities are top-notch for the price. The staff made sure we had everything we needed during our stay. A great experience overall.",
      rating: 5,
    }
  ];

  return (
    <div className="bg-white py-20 flex flex-col gap-12">
      <section className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-gray-800 text-center">
          Testimonials
        </h1>
        <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
      </section>

      <section className="container mx-auto px-6 overflow-hidden slider-container">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-6 py-8 outline-none h-full">
              <div className="bg-white border border-gray-100 p-8 flex flex-col gap-6 h-full transition-all hover:shadow-xl group">
                <div className="flex justify-between items-start">
                  <FaQuoteLeft className="text-4xl text-primary/40 group-hover:text-primary transition-colors" />
                  <div className="flex text-[#F2994A] text-sm gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed font-sans text-[1.05rem] flex-grow">
                  {item.review}
                </p>

                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <h3 className="font-playfair font-bold text-gray-800 text-lg tracking-wide italic">
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Testimonials;
