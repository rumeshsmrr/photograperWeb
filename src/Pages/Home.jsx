import React from "react";
import Landing from "../Components/Landing/Landing";
import Reviews from "../Components/Reviews/Reviews";
import Services from "../Components/Services/Services";
import PhotoGrid from "../Components/PhtotGrid/PhotoGrid";
import Aboutus from "../Components/AboutUs/Aboutus";
import Google from "../Components/Google/Google";
import Categories from "../Components/Categories/Categories";
import ContactUs from "../Components/ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <div>
        <Landing />
        <PhotoGrid />
        <Categories />
        <Services />
        <Reviews />
        <Aboutus />
        <ContactUs />
        <Google />
      </div>
    </>
  );
}
