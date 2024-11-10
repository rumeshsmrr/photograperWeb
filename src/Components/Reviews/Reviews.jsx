import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import reviewData from "./reviewData";
import quatation from "../../assets/images/quote.png";

export default function Reviews() {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(null); // Track active card for mobile

  useEffect(() => {
    if (activeIndex === null) {
      controls.start({
        x: -1000, // Adjust based on content width
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Sliding speed
            ease: "linear",
          },
        },
      });
    }
  }, [controls, activeIndex]);

  const handleHoverStart = () => {
    controls.stop();
  };

  const handleHoverEnd = () => {
    if (activeIndex === null) {
      controls.start({
        x: -1000,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    }
  };

  const handleCardClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Deactivate if the same card is clicked again
      controls.start({
        x: -1000,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      setActiveIndex(index); // Activate the clicked card
      controls.stop(); // Stop the scroll animation on mobile
    }
  };

  return (
    <div
      id="reviews"
      className="pt-2 px-4 md:px-10 mt-10 bg-inherit w-full h-screen mb-10 flex flex-col justify-center"
    >
      {/* Title with whileInView animation */}
      <motion.div
        className="font-regular text-[30px] mb-10 titleLineSpace text-white"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        What our clients <span className="text-accent">say</span>
      </motion.div>

      {/* Automatic slider for review cards */}
      <motion.div
        className="overflow-hidden w-full h-full relative"
        style={{ cursor: "grab" }}
      >
        <motion.div
          className="flex gap-6 w-full lg:h-[550px]"
          animate={controls}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {reviewData.map((review, index) => (
            <motion.div
              key={review.index}
              className="group relative p-4 "
              style={{ zIndex: 3 }}
              onClick={() => handleCardClick(index)} // Handle click for mobile
            >
              <motion.div
                className="reviewCard w-[300px] h-[400px] rounded-3xl relative bg-blue-300 overflow-visible"
                whileHover={{ rotate: -20, y: 20 }}
                animate={activeIndex === index ? { rotate: -20, y: 20 } : {}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <img
                  className="absolute rounded-3xl w-full h-full"
                  src={review.image}
                  alt="Reviewer"
                />
                <motion.div
                  className="w-full min-h-full absolute bg-secondAccent text-blackBlue p-5 rounded-3xl reviewContainer flex flex-col justify-between"
                  whileHover={{ rotate: 25, y: 100 }}
                  animate={activeIndex === index ? { rotate: 25, y: 100 } : {}}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="text-xl font-regular tracking-tight w-80% text-wrap h-auto">
                    {review.name}
                  </div>
                  <div className="w-full h-fit flex flex-col gap-5">
                    <img
                      src={quatation}
                      className="w-[50px] h-[50px] text-black opacity-30"
                      alt="Quotation mark"
                    />
                    <div className="font-regular text-wrap text-base ">
                      {review.review}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
