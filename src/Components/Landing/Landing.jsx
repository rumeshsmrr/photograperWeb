import "./Landing.css";
import backgroundVideo from "../../assets/video/protograpervideo.mp4";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const categories = ["Wedding", "Engagement ", "Birthday", "Graduation"];

export default function Landing() {
  return (
    <div id="home" className=" pb-0 pl-2 pr-2 h-screen w-screen">
      <div className="bgVideoLanding">
        <video className="videoBackground" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/*         
         <motion.div
          className="textOverlay font-regular text-[90px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
          transition={{
            duration: 9,         // Match the video loop duration
            times: [0, 0.1, 0.7, 2], // Control opacity and position at specific times
            repeat: Infinity,     // Infinite loop
          }}
        >
          Let's <br />
          create <br />
          your story <br />
          together!
        </motion.div>  */}

        <motion.div
          className="textOverlay font-stylish flex items-end"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          Let's <br />
          create <br />
          your story <br />
          together!
        </motion.div>

        {/* <div className="categoryOverlay font-bold font-semibold text-white relative text-[20px] cursor-pointer opacity-75 text-right">
          <div className="w-fit p-2 flex flex-col gap-10">
          
            {categories.map((category, index) => (
              <motion.li
                key={category}
                className="categoryItem   hover:text-accent flex gap-2 items-center justify-end"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <span>
                  <FaArrowUp className="w-4 -rotate-45" />
                </span>
                {category}
              </motion.li>
            ))}
          </div>
        </div> */}
      </div>

      <div className="relative bottom-5 h-5 bg-bgDark">
        <div className="shape5">
          <div id="curved-corner-bottomleft-dark"></div>
        </div>
        <div className="shape6">
          <div id="curved-corner-bottomright-dark"></div>
        </div>
      </div>
    </div>
  );
}
