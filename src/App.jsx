import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Nav/Navbar";

import Footer2 from "./Components/Footer2/Footer2";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer2 />
      </BrowserRouter>
    </>
  );
}

export default App;
