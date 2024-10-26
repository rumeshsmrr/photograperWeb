// src/components/Navbar.js

import './Navbar.css';
import logo from '../../assets/images/logoo.png'

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar p-0 m-0 font-regular">
    <div className='whiteBar'></div>
       {/* <div className='whiteBar'></div> */}
        <div className='navPart1 bg-white'>
           <img className='logo' src={logo} alt="Logo" />
            <ul className="navbar-links font-bold">
                <li>Home</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Our Shops</li>
            </ul>
           
        </div>
        <div className='middleNav'>
        <div className='shape1'>
            <div id="curved-corner-topleft"></div>
            </div>
            <div className='shape2'>
            <div id="curved-corner-topright"></div>
            </div>
            </div>
      <div className='navPart2  bg-white'>
      
      <button className="contact-btn bg-blackBlue text-white">Contact Us</button>
 
      </div>
      <div className='shape3'>
            <div id="curved-corner-topleft"></div>
            </div>
             <div className='shape4'>
            <div id="curved-corner-topright"></div>
            </div> 
    </nav>
    </>
  );
};

export default Navbar;
