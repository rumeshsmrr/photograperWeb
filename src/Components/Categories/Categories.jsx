import React from 'react';
import './Categories.css';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import cat1 from '../../assets/images/catImg1.jpeg';
import cat2 from '../../assets/images/catImg2.png';
import cat3 from '../../assets/images/catImg3.png';
import { motion } from 'framer-motion';

export default function Categories() {
  return (
    <div className='pt-2 pl-10 pr-10 mt-10 bg-inherit w-full h-full flex flex-col justify-center'>
      {/* Title with whileInView animation */}
      <motion.div
        className='font-regular text-[60px] mb-10 titleLineSpace'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity:1}}
        transition={{ duration: 0.5, delay: 0 }}
      >
        Explore our <br /> photography <span className="text-accent">genres</span>
      </motion.div>
      
      <div className='w-100 flex justify-between mt-10 mb-20'>
        {/* Image cards */}
        <motion.div className='w-[500px] h-[600px] relative catCard cursor-pointer'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5}}
        >
          <img className='rounded-3xl h-full w-full' src={cat1} />
          <motion.div
            className='absolute inset-0 bg-white opacity-0 h-[full]'
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.8, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className='cardCorner bg-white text-[50px] absolute top-0 right-0 text-accent'>
            <IoArrowForwardCircleOutline className='-rotate-45 hover:text-black' />
            <div className='shape7'><div id="curved-corner-topright"></div></div>
            <div className='shape8'><div id="curved-corner-topright"></div></div>
          </div>
          <div className='catTag1 pt-2 pb-0 pl-0 pr-2 w-fit bg-white absolute -bottom-2 rounded-tr-3xl'>
            <div className='absolute -top-6 left-0'><div id="curved-corner-bottomleft"></div></div>
            <div className='font-regular text-xl text-accent bg-white py-1 border-solid border-accent border-2 w-[200px] text-center rounded-3xl'>Wedding</div>
            <div className='absolute bottom-[7px] -right-6'><div id="curved-corner-bottomleft"></div></div>
          </div>
        </motion.div>
        
        {/* Additional cards */}
        <motion.div className='w-[500px] h-[600px] relative catCard cursor-pointer'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
       
        transition={{ duration: 0.5, delay: 1 }}
        >
          <img className='rounded-3xl h-full w-full' src={cat2} />
          <motion.div
            className='absolute inset-0 bg-white opacity-0 h-[605px]'
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.8, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className='cardCorner bg-white text-[50px] absolute top-0 right-0 text-accent flex justify-end gap-2 items-center'>
            <div className='pt-0 pb-0 pl-1 pr-2 w-fit bg-white'>
              <div className='font-regular text-xl py-1 text-accent bg-white border-solid border-accent border-2 w-[200px] text-center rounded-3xl'>Portrait</div>
            </div>
            <IoArrowForwardCircleOutline className='-rotate-45 hover:text-black' />
            <div className='shape7'><div id="curved-corner-topright"></div></div>
            <div className='shape8'><div id="curved-corner-topright"></div></div>
          </div>
        </motion.div>
        
        <motion.div className='w-[500px] h-[600px] relative catCard cursor-pointer'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
       
        transition={{ duration: 0.5, delay: 1.5 }}
        >
          <img className='rounded-3xl h-full w-full'    src={cat3} />
          <motion.div
            className='absolute inset-0 bg-white opacity-0 h-[605px]'
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.8, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className='cardCorner bg-white text-[50px] absolute top-0 right-0 text-accent'>
            <IoArrowForwardCircleOutline className='-rotate-45 hover:text-black' />
            <div className='shape7'><div id="curved-corner-topright"></div></div>
            <div className='shape8'><div id="curved-corner-topright"></div></div>
          </div>
          <div className='catTag1 pt-2 pb-0 pl-2 pr-0 w-fit bg-white absolute -bottom-2 right-0 rounded-tl-3xl'>
            <div className='absolute -top-6 right-0'><div id="curved-corner-bottomright"></div></div>
            <div className='font-regular text-xl text-accent bg-white py-1 border-solid border-accent border-2 w-[200px] text-center rounded-3xl'>Landscape</div>
            <div className='absolute bottom-[7px] -left-6'><div id="curved-corner-bottomright"></div></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

//sliding

// import React, { useState, useEffect, useRef } from 'react';
// import './Categories.css';
// import { IoArrowForwardCircleOutline, IoArrowBack, IoArrowForward } from "react-icons/io5";
// import cat1 from '../../assets/images/catImg1.jpeg';
// import cat2 from '../../assets/images/catImg2.png';

// export default function Categories() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const categoriesRef = useRef(null);
//   const categories = [
//     { id: 1, title: 'Wedding', image: cat1 },
//     { id: 2, title: 'Portrait', image: cat2 },
//     { id: 3, title: 'Graduation', image: cat1 },
//     { id: 4, title: 'Corporate', image: cat2 }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Automatic slide every 3 seconds
//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, []);

//   useEffect(() => {
//     // Scroll the container to show the current index card
//     if (categoriesRef.current) {
//       categoriesRef.current.scrollLeft = currentIndex * 520; // Adjust based on your card width
//     }
//   }, [currentIndex]);

//   return (
//     <div className="pt-2 pl-10 pb-10 absolute bg-inherit w-full h-full flex flex-col justify-center">
//       <div className="font-regular text-[60px] titleLineSpace">
//         Explore our <br /> photography <span className="text-accent">genres</span>
//       </div>
//       <div className="categories-container relative w-full flex items-center gap-10 mt-10 overflow-hidden" ref={categoriesRef}>
//         {/* Left arrow for manual control */}
//         <IoArrowBack className="manual-arrow left-arrow" onClick={prevSlide} />

//         {/* Category Cards */}
//         {categories.map((cat, index) => (
//           <div
//             key={cat.id}
//             className={`catCard ${index === currentIndex ? "active" : ""} w-[500px] h-[600px] relative transition-transform duration-500 ease-in-out`}
//             style={{ transform: `translateX(-${currentIndex * 520}px)` }} // Adjust based on your card width
//           >
//             <img className="rounded-3xl w-full h-full" src={cat.image} alt={cat.title} />
//             <div className="cardCorner bg-white text-[50px] absolute top-0 right-0 text-accent">
//               <IoArrowForwardCircleOutline className="-rotate-45" />
//               <div className="shape7">
//                 <div id="curved-corner-topright"></div>
//               </div>
//               <div className="shape8">
//                 <div id="curved-corner-topright"></div>
//               </div>
//             </div>
//             <div className="catTag1 pt-2 pb-0 pl-0 pr-2 w-fit bg-white absolute -bottom-2 rounded-tr-3xl">
//               <div className="font-regular text-xl text-accent bg-white py-1 border-solid border-accent border-2 w-[200px] text-center rounded-3xl">
//                 {cat.title}
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Right arrow for manual control */}
//         <IoArrowForward className="manual-arrow right-arrow" onClick={nextSlide} />
//       </div>
//     </div>
//   );
// }
