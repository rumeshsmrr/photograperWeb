import "./Services.css";
import data1 from "./data1";
import { motion } from "framer-motion";
import ServiceCard1 from "./ServiceCard1";
import MobileCard from "./MobileCard";
import { useEffect, useState } from "react";

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  });

  return (
    <div
      id="services"
      className="pt-2 pl-10 pr-10 pb-10 mt-10 bg-inherit w-full h-screen flex flex-col justify-center"
    >
      <motion.div
        className="font-regular text-[30px] mb-4 text-white titleLineSpace"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        What we <span className="text-accent">Offer</span>
      </motion.div>

      {data1.map((item) =>
        isMobile ? (
          <MobileCard
            key={item.index}
            title={item.title}
            packages={item.packages} // Pass packages array
            image={item.image}
            index={item.index}
            delay={item.delay}
          />
        ) : (
          <ServiceCard1
            key={item.index}
            title={item.title}
            packages={item.packages} // Pass packages array
            image={item.image}
            index={item.index}
            delay={item.delay}
          />
        )
      )}
    </div>
  );
}
