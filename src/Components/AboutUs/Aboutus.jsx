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
          className="text-4xl md:text-5xl font-semibold italic text-gray-200"
          src={logo}
          alt="Logo"
        />
        {/* Description Paragraph under Hello */}
        <p className="relative  mt-[260px] text-l md:text-l max-w-2xl text-gray-300 px-4 text-center">
          I'm Kaveeshwara Hearath, a passionate photographer dedicated to
          capturing life's special moments. With 5 years of experience, I
          specialize in portraits, events, and landscapes. My goal is to tell
          unique stories through creative, emotive photography. I work closely
          with clients to make every session personal and memorable. Let's
          connect to create lasting memories!
        </p>

        {/* Contact Button */}
        <Link
          to="#contact"
          className="mt-4 px-8 py-2 border-2 border-gray-400 text-white rounded-full hover:bg-accent transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
