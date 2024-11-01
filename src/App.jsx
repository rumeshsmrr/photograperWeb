import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Categories from "./Components/Categories/Categories";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Nav/Navbar";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Landing />
          <Categories />
          <Services />
          <Reviews />
          <ContactUs />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
