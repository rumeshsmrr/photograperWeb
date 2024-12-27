import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Import Facebook and Instagram
import { SiTiktok } from "react-icons/si"; // Import TikTok

const Footer = () => {

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
        {
            name: "Reviews",
            to: "#reviews",
        },
      ];


  return (

    <footer className="bg-[#2d2d2d] font-stylish py-12 px-8 md:px-14 flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
      {/* Footer Section */}
      <div className="flex flex-col text-left">
        {/* Footer Logo */}
        <div className="mb-4">
          <h2 className="text-xl text-white mb-2">Kaveeshwara Photography</h2>
          <p className="text-white">No.90, Aluthgama, Indigolla, Gampaha</p>
          <p className="text-white">legendartck@gmail.com</p>
          <p className="text-white">076 9438482</p>
        </div>

        {/* Footer Social Icons */}
        <div className="flex gap-4 md:gap-6">
          <a
            href="https://www.facebook.com/kaveeshwaraherath"
            target="https://www.facebook.com/kaveeshwaraherath"
            className="transform hover:-translate-y-2 text-2xl text-white hover:text-[#e2b659] transition-transform transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/kaveeshwaraherathphotography/"
            rel="https://www.instagram.com/kaveeshwaraherathphotography/"
            className="transform hover:-translate-y-2 text-2xl text-white hover:text-[#e2b659] transition-transform transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@kaveeshwaraphotography"
            target="https://www.tiktok.com/@kaveeshwaraphotography"
            className="transform hover:-translate-y-2 text-2xl text-white hover:text-[#e2b659] transition-transform transition-colors"
          >
            <SiTiktok />
          </a>
        </div>
      </div>

      {/* Footer Links */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 md:gap-24">
  <div>
    <ul className="mt-3 space-y-4">
      <li>
        <a href="#home" className="text-white font-bold hover:underline hover:text-[#e2b659] cursor-pointer">
          Home
        </a>
      </li>
      <li>
        <a href="#services" className="text-white font-bold hover:underline hover:text-[#e2b659] cursor-pointer">
          Services
        </a>
      </li>
      <li>
        <a href="#reviews" className="text-white font-bold hover:underline hover:text-[#e2b659] cursor-pointer">
          Reviews
        </a>
      </li>
    </ul>
  </div>

  <div>
    <ul className="mt-3 space-y-4">
      <li>
        <a href="#about" className="text-white font-bold hover:underline hover:text-[#e2b659] cursor-pointer">
          About Me
        </a>
      </li>
      <li>
        <a href="#contact" className="text-white font-bold hover:underline hover:text-[#e2b659] cursor-pointer">
          Contact Us
        </a>
      </li>
      <li>
        <a href="#categories" className="text-white font-bold hover:underline hover:text-[#e2b659] cursor-pointer">
          Categories
        </a>
      </li>
    </ul>
  </div>
</div>
    </footer>
  );
};

export default Footer;
