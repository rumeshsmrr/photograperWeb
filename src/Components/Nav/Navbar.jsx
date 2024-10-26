import './Navbar.css';
import logo from '../../assets/images/logoo.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const categories = ["Home", "Products", "Pricing", "Our Shops"];

  return (
    <>
      <nav className="navbar p-0 m-0 font-regular">
        <div className="whiteBar"></div>
        <div className="navPart1 bg-white">
          <img className="logo" src={logo} alt="Logo" />
          <ul className="navbar-links font-bold">
            {categories.map((category, index) => (
              <motion.li
                key={category}
                className="linknav"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {category}
              </motion.li>
            ))} 
           
              {/* <li className="linknav">Home</li>
              <li className="linknav">Products</li>
              <li className="linknav">Pricing</li>
              <li className="linknav">Our Shops</li> */}
           
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
          <button className="contact-btn bg-blackBlue text-white hover:bg-accent">Contact Us</button>
        </div>
        <div className="shape3">
          <div id="curved-corner-topleft"></div>
        </div>
        <div className="shape4">
          <div id="curved-corner-topright"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
