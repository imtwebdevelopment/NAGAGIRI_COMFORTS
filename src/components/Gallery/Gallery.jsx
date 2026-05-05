import React, { useState } from "react";
import ModalImage from "react-modal-image";
import img1 from "../../assets/gallery/nagagiri_comforts_horanadu (1).webp";
import img2 from "../../assets/gallery/nagagiri_comforts_horanadu (2).webp";
import img3 from "../../assets/gallery/nagagiri_comforts_horanadu (3).webp";
import img4 from "../../assets/gallery/nagagiri_comforts_horanadu (4).webp";
import img5 from "../../assets/gallery/nagagiri_comforts_horanadu (5).webp";
import img6 from "../../assets/gallery/nagagiri_comforts_horanadu (6).webp";
import img7 from "../../assets/gallery/nagagiri_comforts_horanadu (7).webp";
import img8 from "../../assets/gallery/nagagiri_comforts_horanadu (8).webp";
import img9 from "../../assets/gallery/nagagiri_comforts_horanadu (9).webp";
import img10 from "../../assets/gallery/nagagiri_comforts_horanadu (10).webp";
import img11 from "../../assets/gallery/nagagiri_comforts_horanadu (11).webp";
import img12 from "../../assets/gallery/nagagiri_comforts_horanadu (12).webp";
import img13 from "../../assets/gallery/nagagiri_comforts_horanadu (13).webp";
import img14 from "../../assets/gallery/nagagiri_comforts_horanadu (14).webp";
import img15 from "../../assets/gallery/nagagiri_comforts_horanadu (15).webp";
import img16 from "../../assets/gallery/nagagiri_comforts_horanadu (16).webp";

const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallery = [
    img1,
    img2,
    img3,
    img4,
    img8,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  const showPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length
    );
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery item ${index + 1}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={gallery[currentIndex]}
              alt={`Lightbox item ${currentIndex + 1}`}
              className="max-w-screen-sm max-h-screen object-contain"
            />
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
            >
              &gt;
            </button>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
