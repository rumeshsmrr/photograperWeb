import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../../assets/images/photo1.jpg";
import img2 from "../../assets/images/photo2.png";
import img3 from "../../assets/images/photoO7.png";
import img4 from "../../assets/images/photoO1.jpg";
import img5 from "../../assets/images/photoO6.png";
import img6 from "../../assets/images/photoO8.jpg";
import img7 from "../../assets/images/photoO9.jpg";
import img8 from "../../assets/images/photoO10.jpg";
import img9 from "../../assets/images/photoO11.jpeg";
import img10 from "../../assets/images/photoO12.jpeg";
import img11 from "../../assets/images/photoO13.jpeg";
import img12 from "../../assets/images/photoO14.jpg";
import img14 from "../../assets/images/photoO15.png";

gsap.registerPlugin(ScrollTrigger);

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
];

export default function PhotoGrid() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth - slider.clientWidth;

    if (window.innerWidth >= 768) {
      gsap.to(slider, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: slider,
          start: "top-=150px top",
          end: () => `+=${totalWidth * 0.9}`, // Adjusted end value to stop before all images are fully visible
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="photoGrid"
      className="overflow-hidden  ml-2 mt-10 px-4 md:px-10 relative"
    >
      <div className="font-regular text-[30px] mb-10 text-white titleLineSpace">
        Showcasing our <br /> best
        <span className="text-accent"> work</span>
      </div>

      <div ref={sliderRef} className="flex gap-4 ml-2 w-full">
        {cards
          .slice(0, window.innerWidth < 768 ? 3 : cards.length)
          .map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(100%/3-1rem)] h-[80vh]"
            >
              <img
                src={img}
                alt={`img${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
