import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Categories from "./Components/Categories/Categories";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Nav/Navbar";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import PhotoGrid from "./Components/PhtotGrid/PhotoGrid";
import Aboutus from "./Components/AboutUs/Aboutus";

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
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
