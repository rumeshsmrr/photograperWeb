import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Categories from "./Components/Categories/Categories";
import ContactUs from "./Components/ContactUs/ContactUs";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Nav/Navbar";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import PhotoGrid from "./Components/PhtotGrid/PhotoGrid";
import Aboutus from "./Components/AboutUs/Aboutus";
import Google from "./Components/Google/Google";
import Footer2 from "./Components/Footer2/Footer2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Landing />
          <PhotoGrid />
          <Categories />
          <Services />
          <Reviews />
          <Aboutus />
          <ContactUs />
          <Google />
          <Footer2 />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
