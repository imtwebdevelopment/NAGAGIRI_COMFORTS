import React from 'react';
import banner from "../../assets/Home/nagagiricomfortschickmagaluru2.webp";
import blog1 from "../../assets/Home/nagagiricomfortschickmagaluru1.webp";
import blog2 from "../../assets/Home/nagagiricomfortschickmagaluru3.webp";
import blog3 from "../../assets/Home/nagagiricomfortschickmagaluru4.webp";
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Horanadu: Spiritual Serenity",
      excerpt: "Horanadu is home to the revered Annapoorneshwari Temple. Discover the best time to visit and how to make the most of your spiritual journey.",
      image: blog1,
      date: "May 10, 2024",
      author: "Nagagiri Admin"
    },
    {
      id: 2,
      title: "Top 5 Hidden Gems Near Nagagiri Comforts",
      excerpt: "Beyond the temple, explore Kyatanmakki Hills, Ambatheertha, and more. We've curated a list of must-visit spots near our resort.",
      image: blog2,
      date: "May 15, 2024",
      author: "Travel Guide"
    },
    {
      id: 3,
      title: "Experience Malnad Hospitality: Our Story",
      excerpt: "At Nagagiri Comforts, hospitality is in our roots. Read about our journey and why our guests feel like they're staying with family.",
      image: blog3,
      date: "May 20, 2024",
      author: "Adish Jain"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <img src={banner} alt="Blog Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-playfair font-bold">Our Blog</h1>
        </div>
      </div>

      {/* Blog List Section */}
      <section className="bg-secondery py-20 px-5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">Latest Stories</h2>
            <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full"></div>
            <p className="text-greyColor mt-6 max-w-2xl mx-auto italic font-sans">
              Discover travel tips, local insights, and stories from the heart of Horanadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-xs font-semibold text-primary uppercase tracking-widest font-sans">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 font-sans font-light text-[0.95rem] mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
