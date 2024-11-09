import React from "react";
import backgroundVideo from "../../assets/video/bgvide2.mp4";
import logo from "../../assets/images/logoo.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Aboutus() {
  return (
    <div
      id="about"
      className="relative flex flex-col ml-2 items-center justify-center min-h-screen bg-gradient-to-r from-blackBlue to-LightBlackBlue text-white text-center"
    >
      <div className="absolute top-0 left-0">
        <div id="curved-corner-topleft"></div>
      </div>

      <div className="absolute top-0 right-0">
        <div id="curved-corner-topright"></div>
      </div>

      <div className="absolute bottom-0 right-0">
        <div id="curved-corner-bottomright"></div>
      </div>

      <div className="absolute bottom-0 left-0">
        <div id="curved-corner-bottomleft"></div>
      </div>

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay text */}
      <h1
        className="text-[250px] font-bold bg-clip-text text-transparent opacity-5 leading-none select-none absolute top-1/2 transform -translate-y-1/2"
        style={{
          backgroundImage: "linear-gradient(45deg, #34322E, #e2b659)",
        }}
      >
        Hello
      </h1>

      {/* Content */}
      <div className="relative  flex flex-col items-center mt-8">
        <img
          className="text-4xl md:text-5xl font-semibold italic h-[100px] text-gray-200"
          src={logo}
          alt="Logo"
        />
        {/* Description Paragraph under Hello */}
        <p className="relative mt-[50px] md:mt-[260px] mb-10px font-regular text-base md:text-xl tracking-widest max-w-5xl text-gray-300 px-4 text-center">
          I am a passionate photographer with a keen artistic mind and an
          enthusiasm for capturing and creating visual stories. My creative
          journey is deeply influenced by my love for reading books and watching
          movies, which inspire my approach to photography. These interests help
          me stay connected to various storytelling techniques and visual
          aesthetics, enriching my work and allowing me to bring a unique and
          dynamic perspective to each project.
        </p>

        {/* Contact Button */}
        <Link
          to="#contact"
          className="mt-4 px-8 py-2 border-2 font-regular font-semibold border-gray-400 text-white rounded-full hover:bg-accent transition duration-300 hover:text-blackBlue tracking-wider"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
