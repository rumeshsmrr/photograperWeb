import React from "react";
import "./Categories.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import cat1 from "../../assets/images/catImg1.jpeg";
import cat2 from "../../assets/images/catImg2.png";
import cat3 from "../../assets/images/catImg3.png";
import cat4 from "../../assets/images/12.png";
import { motion } from "framer-motion";

export default function Categories() {
  return (
    <div
      id="categories"
      className="pt-2 px-4 md:px-10 mt-10 bg-inherit w-full relative mb-5 flex flex-col justify-center"
    >
      {/* Title with whileInView animation */}
      <motion.div
        className="font-regular text-[30px] mb-10 text-white titleLineSpace"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        Explore our <br /> photography{" "}
        <span className="text-accent">genres</span>
      </motion.div>

      {/* Responsive grid for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-fit w-full">
        <div className="w-full flex flex-wrap gap-3 justify-center ">
          <motion.div
            className="relative catCard cursor-pointer w-[300px] md:w-[350px] lg:w-[400px] h-[300px] md:h-[450px] lg:h-[450px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <img
              className="rounded-3xl w-full h-full object-cover"
              src={cat1}
              alt="wedding"
            />
            <motion.div
              className="absolute inset-0 bg-white opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: [0, 0.8, 0],
                transition: { duration: 0.2 },
              }}
            />
            <div className="cardCorner bg-bgDark text-[30px] md:text-[50px] absolute top-0 right-0 text-accent">
              <IoArrowForwardCircleOutline className="-rotate-45 hover:text-black" />
              <div className="shape7">
                <div id="curved-corner-topright"></div>
              </div>
              <div className="shape8">
                <div id="curved-corner-topright"></div>
              </div>
            </div>
            <div className="catTag1 pt-2 pb-0 pl-0 pr-2 w-fit bg-bgDark absolute bottom-0 rounded-tr-3xl">
              <div className="absolute -top-6 left-0">
                <div id="curved-corner-bottomleft-dark"></div>
              </div>
              <div className="font-regular text-xl text-accent bg-bgDark py-1 border-solid border-accent border-2 w-[200px] text-center rounded-3xl tracking-widest">
                Wedding
              </div>
              <div className="absolute bottom-0 -right-6">
                <div id="curved-corner-bottomleft-dark"></div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* card2 */}
        <div className="w-full flex flex-wrap gap-3 justify-center ">
          <motion.div
            className="relative catCard cursor-pointer w-[300px] md:w-[350px] lg:w-[400px] h-[300px] md:h-[450px] lg:h-[450px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              className="rounded-3xl w-full h-full object-cover"
              src={cat2}
              alt="wedding"
            />
            <motion.div
              className="absolute inset-0 bg-bgDark opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: [0, 0.8, 0],
                transition: { duration: 0.5 },
              }}
            />
            <div className="cardCorner bg-bgDark  absolute top-0 right-0 text-accent flex justify-end gap-2 items-center">
              <div className="pt-0 pb-0 pl-1 pr-2 w-fit bg-bgDark">
                <div className="font-regular lg:text-xl md:text-lg sm:text-sm py-1 text-accent bg-bgDark border-solid border-accent border-2 tracking-widest w-[200px] text-center rounded-3xl">
                  Engagement
                </div>
              </div>
              <IoArrowForwardCircleOutline className="-rotate-45 text-3xl hover:text-black" />
              <div className="shape7">
                <div id="curved-corner-topright"></div>
              </div>
              <div className="shape8">
                <div id="curved-corner-topright"></div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* card3 */}
        <div className="w-full flex flex-wrap gap-3 justify-center ">
          <motion.div
            className="relative catCard cursor-pointer w-[300px] md:w-[350px] lg:w-[400px] h-[300px] md:h-[450px] lg:h-[450px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img
              className="rounded-3xl w-full h-full object-cover"
              src={cat3}
              alt="wedding"
            />
            <motion.div
              className="absolute inset-0 bg-bgDark opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: [0, 0.8, 0],
                transition: { duration: 0.5 },
              }}
            />
            <div className="cardCorner bg-bgDark text-[30px] md:text-[50px] absolute top-0 right-0 text-accent">
              <IoArrowForwardCircleOutline className="-rotate-45 hover:text-black" />
              <div className="shape7">
                <div id="curved-corner-topright"></div>
              </div>
              <div className="shape8">
                <div id="curved-corner-topright"></div>
              </div>
            </div>
            <div className="catTag1 pt-2 pb-0 pl-2 pr-0 w-fit bg-bgDark absolute bottom-0 right-0 rounded-tl-3xl">
              <div className="absolute bottom-0 -left-6">
                <div id="curved-corner-bottomright"></div>
              </div>
              <div
                className="font-regular lg:text-xl md:text-lg sm:text-lg
             text-accent bg-bgDark py-1 border-solid border-accent border-2 w-[200px] text-center rounded-3xl tracking-widest"
              >
                Portrait
              </div>
              <div className="absolute -top-6 right-0">
                <div id="curved-corner-bottomright"></div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-wrap gap-3 justify-center ">
          <motion.div
            className="relative catCard cursor-pointer w-[300px] md:w-[350px] lg:w-[400px] h-[300px] md:h-[450px] lg:h-[450px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              className="rounded-3xl w-full h-full object-cover"
              src={cat4}
              alt="wedding"
            />
            <motion.div
              className="absolute inset-0 bg-bgDark opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: [0, 0.8, 0],
                transition: { duration: 0.5 },
              }}
            />
            <div className="cardCorner bg-bgDark  absolute top-0 right-0 text-accent flex justify-end gap-2 items-center">
              <div className="pt-0 pb-0 pl-1 pr-2 w-fit bg-bgDark">
                <div className="font-regular lg:text-xl md:text-lg sm:text-sm py-1 text-accent bg-bgDark border-solid border-accent border-2 tracking-widest w-[200px] text-center rounded-3xl">
                  Baby Photo
                </div>
              </div>
              <IoArrowForwardCircleOutline className="-rotate-45 text-3xl hover:text-black" />
              <div className="shape7">
                <div id="curved-corner-topright"></div>
              </div>
              <div className="shape8">
                <div id="curved-corner-topright"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
