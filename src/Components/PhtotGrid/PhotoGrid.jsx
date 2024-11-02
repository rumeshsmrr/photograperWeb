import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/photo1.jpg";
import img2 from "../../assets/images/photo2.jpeg";
import img3 from "../../assets/images/photo3.jpeg";
import img4 from "../../assets/images/photo4.jpeg";
import img5 from "../../assets/images/photo5.jpeg";
import img6 from "../../assets/images/photo6.jpg";
import img7 from "../../assets/images/photo7.jpeg";
import img8 from "../../assets/images/photo8.png";
import img9 from "../../assets/images/photo9.jpeg";
import img10 from "../../assets/images/photo10.jpg";
import img11 from "../../assets/images/photo11.jpg";
import img12 from "../../assets/images/photo12.png";
import img14 from "../../assets/images/photo14.png";
import img15 from "../../assets/images/photo15.jpg";
import img16 from "../../assets/images/photo16.jpg";

const cards = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img14,
  img15,
  img16,
];

export default function PhotoGrid() {
  const sliderRef = useRef(null);
  const imagesToShow = 3; // Number of images to show at once

  // Duplicate the first few images at the end and the last few at the beginning
  const extendedCards = [
    ...cards.slice(cards.length - imagesToShow),
    ...cards,
    ...cards.slice(0, imagesToShow),
  ];

  // Automatically move to the next set of images every 3 seconds
  useEffect(() => {
    const scrollContainer = sliderRef.current;

    const slide = () => {
      if (scrollContainer) {
        // Scroll by the width of the images to show
        scrollContainer.scrollBy({
          left: scrollContainer.offsetWidth / imagesToShow,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(slide, 3000);

    const handleScroll = () => {
      // Check if scrolled to the end of the extended list
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.offsetWidth
      ) {
        // Disable smooth behavior to reset scroll position instantly
        scrollContainer.style.scrollBehavior = "auto";
        scrollContainer.scrollLeft = scrollContainer.offsetWidth / imagesToShow;
        scrollContainer.style.scrollBehavior = "smooth";
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [imagesToShow]);

  return (
    <div id="photoGrid" className="overflow-hidden mt-10 px-4 md:px-10">
      <motion.div
        className="font-regular text-[30px] mb-10 titleLineSpace"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        Showcasing our <br /> best
        <span className="text-accent"> work</span>
      </motion.div>

      <motion.div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        {extendedCards.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(100%/3-1rem)] h-[50vh] snap-start"
          >
            <img
              src={img}
              alt={`img${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
