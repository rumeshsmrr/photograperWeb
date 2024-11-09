import { motion } from "framer-motion";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "./ContantUs.css";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

import { Link } from "react-router-dom";

const socialMediaLinks = [
  {
    icon: <FaFacebookF />,
    id: "facebook",
    Link: "https://www.facebook.com/kaveeshwaraherath",
  },
  {
    icon: <CiInstagram />,
    id: "instagram",
    Link: "https://www.instagram.com/kaveeshwaraherathphotography/",
  },
  {
    icon: <FaTiktok />,
    id: "tiktok",
    Link: "https://www.tiktok.com/@kaveeshwaraphotography",
  },
];

export default function ContactUs() {
  return (
    <div
      className="pt-2 px-4 md:px-10 mt-10 bg-inherit w-full h-fit mb-10 lg:flex sm:block justify-between gap-5  "
      id="contact"
    >
      {/* Title with whileInView animation */}

      <motion.div
        className="lg:w-1/2 sm:w-full bg-blackBlue mb-5 h-[300px] rounded-3xl  flex justify-between"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <div className="flex flex-col justify-between">
          <div className="font-regular text-[40px] p-5   titleLineSpace  text-white">
            Get in
            <div className="flex justify-start gap-3 items-center h-[40px]">
              <div className="text-accent tracking-widest">touch </div>
              <IoArrowForwardCircleOutline className="text-accent text-4xl -rotate-45" />
            </div>
          </div>

          <div className="p-5 w-full grid grid-cols-3 sm:flex sm:justify-between h-fit gap-5">
            {socialMediaLinks.map(({ icon, id, Link }) => (
              <a
                href={Link}
                target="_blank"
                rel="noreferrer"
                key={id}
                className="w-[50px] h-[50px] rounded-full border-solid border-2 border-white text-white text-center items-center flex justify-center cursor-pointer hover:bg-accent"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="w-1/3 h-full bg-slate-100 relative rounded-r-3xl personImg"></div>
      </motion.div>
      <motion.div
        className="lg:w-1/2 sm:w-ful border-solid border-2 p-5 border-gray-700 h-[300px] rounded-3xl flex flex-col justify-between gap-2"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <div className="font-regular text-[40px] h-fll  titleLineSpace  text-white">
          Let's work
          <div className="flex justify-start gap-3 items-center h-[40px]">
            <div className="text-accent tracking-widest">together </div>
            <IoArrowForwardCircleOutline className="text-accent text-4xl -rotate-45 " />
          </div>
        </div>
        <div className="w-full h-fit flex justify-center items-center ">
          <p className="font-semiStyled w-10/12 text-sm h-fit text-wrap text-white tracking-widest">
            Let’s create something unforgettable together—reach out and let’s
            turn your vision into stunning reality!
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex justify-between gap-2 font-semiStyled w-10/12 tracking-widest">
            <div className="bg-blackBlue text-white py-2 rounded-3xl px-8 text-sm w-fit h-fit cursor-pointer hover:bg-accent hover:text-blackBlue">
              <a href="tel:+94769438482">Call Us</a>{" "}
              {/* Link to make a phone call */}
            </div>
            <div className="bg-blackBlue text-white py-2 rounded-3xl px-8 text-sm w-fit h-fit cursor-pointer hover:bg-accent hover:text-blackBlue ">
              <a href="mailto:legendartck@gmail.com">Email Us</a>{" "}
              {/* Link to email */}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
