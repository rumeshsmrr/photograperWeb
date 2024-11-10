import PropTypes from "prop-types";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MobileCard({ title, packages, image, index, delay }) {
  const [isExpanded, setIsExpanded] = useState(false); // Track if the card is expanded
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile

  // Detect if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Update isMobile based on window size
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Add resize listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  // Function to handle the card click
  const handleCardClick = () => {
    if (isMobile) {
      setIsExpanded((prev) => !prev); // Toggle expansion on mobile
    }
  };

  return (
    <motion.div
      className="w-full h-[250px] rounded-3xl text-end bg-slate-600 text-white relative mt-4 cursor-pointer"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      onClick={handleCardClick} // Add click handler
    >
      <div
        className="w-full h-full p-6 rounded-3xl bg-cover serviceImg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <motion.div
        className="absolute w-full h-full bg-transparent rounded-3xl serviceDes top-0"
        style={{ zIndex: 5 }}
        initial={{ opacity: 0, scaleY: 0.8 }}
        animate={
          isExpanded
            ? { opacity: 1, scaleY: 1, visibility: "visible" } // Expanded state for mobile
            : { opacity: 0, scaleY: 0.8, visibility: "hidden" } // Collapsed state
        }
        whileHover={
          !isMobile ? { opacity: 1, scaleY: 1, visibility: "visible" } : {}
        } // Hover effect for non-mobile
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-wrap gap-4 px-6 py-4">
          {packages.map((pkg, pkgIndex) => (
            <motion.div
              key={pkgIndex}
              className="bg-blackBlue w-full md:w-[45%] lg:w-[30%] h-fit p-5 rounded-2xl shadow font-semibold flex flex-col gap-2 packages"
              initial={{ scale: 1 }}
              whileHover={!isMobile ? { scale: 1.05 } : {}} // Scale on hover for non-mobile
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-simple tracking-tight mb-3 text-white">
                {pkg.packageName} - {pkg.price}
              </h3>
              <ul
                role="list"
                className="font-semiStyled space-y-3 text-start leading-6 text-gray-300"
              >
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    className="flex gap-x-3 items-start text-xs"
                    key={featureIndex}
                  >
                    <IoArrowForwardCircleOutline className="text-accent -rotate-45 text-wrap text-xs" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {index % 2 === 0 ? (
        <div className="absolute top-6 left-6 font-regular tracking-widest lg:text-5xl sm:text-3xl">
          {title}
        </div>
      ) : (
        <div className="absolute top-6 right-6 font-regular tracking-widest lg:text-5xl sm:text-3xl">
          {title}
        </div>
      )}
    </motion.div>
  );
}

MobileCard.propTypes = {
  title: PropTypes.string.isRequired,
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      packageName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
};
