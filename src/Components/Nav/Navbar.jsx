import "./Navbar.css";
import logo from "../../assets/images/logoo.png";
import { motion } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    {
      name: "Home",
      to: "#home",
    },
    {
      name: "Services",
      to: "#services",
    },
    {
      name: "Categories",
      to: "#categories",
    },
    {
      name: "About Me",
      to: "#about",
    },
    {
      name: "Contact Us",
      to: "#contact",
    },
  ];

  // Framer Motion animation variants for the menu
  const menuVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: "-100vh", opacity: 0 },
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="navbar p-0 m-0 font-regular hidden lg:flex">
        <div className="whiteBar"></div>
        <div className="navPart1 bg-white">
          <img className="logo" src={logo} alt="Logo" />
          <ul className="navbar-links font-bold">
            {links.slice(0, -1).map(({ name, to }, index) => (
              <motion.a
                key={name}
                href={to}
                className="link-nav"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {name}
              </motion.a>
            ))}
          </ul>
        </div>
        <div className="middleNav">
          <div className="shape1">
            <div id="curved-corner-topleft"></div>
          </div>
          <div className="shape2">
            <div id="curved-corner-topright"></div>
          </div>
        </div>
        <div className="navPart2 bg-white">
          <Link
            to="#contact"
            className="contact-btn bg-blackBlue text-white hover:bg-accent flex justify-center items-center"
          >
            Contact Us
          </Link>
        </div>
        <div className="shape3">
          <div id="curved-corner-topleft"></div>
        </div>
        <div className="shape4">
          <div id="curved-corner-topright"></div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="mobileNav w-screen fixed z-10 flex justify-between h-fit items-center lg:hidden bg-white">
        <div className="mobileNavPart1 w-2/4 h-[62px] bg-white p-3">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="w-1/4 h-[62px] relative">
          <div className="absolute top-2 left-0">
            <div id="curved-corner-topleft"></div>
          </div>
          <div className="absolute top-2 right-0">
            <div id="curved-corner-topright"></div>
          </div>
        </div>
        <div className="p-4 w-1/4 h-[62px] bg-white flex justify-center items-center">
          <div
            className="mobileNavMenu cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <IoArrowDownCircleOutline
              className={`text-3xl transform transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-180 text-accent" : "rotate-45"
              }`}
            />
          </div>
          <div className="shape11 absolute -bottom-[24px] left-[7px]">
            <div id="curved-corner-topleft"></div>
          </div>
          <div className="shape12 absolute -bottom-[24px] right-[7px]">
            <div id="curved-corner-topright"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-x-0 w-screen top-[62px] h-[30vh] bg-white flex flex-col items-center justify-center z-20 shadow-md rounded-b-lg"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          initial="closed"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ul className="text-center font-bold text-xl space-y-4">
            {links.map((links) => (
              <Link
                key={links.name}
                to={links.to}
                className="cursor-pointer hover:text-accent"
              >
                {links.name}
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
