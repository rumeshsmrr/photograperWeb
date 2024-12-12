import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <div className="py-10 px-5 flex flex-col-reverse md:flex-row justify-between items-center bg-blackBlue">
      <div className="text-xs text-center md:text-left text-white font-simple">
        @WebMinds 2024. All Rights Reserved. <br />
        <span className="text-[10px]">Developed By Rumesh Siriwardhana</span>
      </div>
      <div className="flex flex-col mb-6 md:mb-0 md:flex-row justify-between gap-4">
        <Link
          smooth
          to="#home"
          className="text-xs text-white font-simple hover:text-accent cursor-pointer"
        >
          Home
        </Link>
        <Link
          smooth
          to="#services"
          className="text-xs text-white font-simple hover:text-accent cursor-pointer"
        >
          Services
        </Link>
        <Link
          smooth
          to="#reviews"
          className="text-xs text-white font-simple hover:text-accent cursor-pointer"
        >
          Reviews
        </Link>
        <Link
          smooth
          to="#contact"
          className="text-xs text-white font-simple hover:text-accent cursor-pointer"
        >
          Contact Us
        </Link>
        <Link
          smooth
          to="#categories"
          className="text-xs text-white font-simple hover:text-accent cursor-pointer"
        >
          Categories
        </Link>
        <Link
          smooth
          to="#about"
          className="text-xs text-white font-simple hover:text-accent cursor-pointer"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
