import PropTypes from 'prop-types';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function ServiceCard1({ title, price, features, image, index, delay }) {
  return (
    <motion.div
      className="w-full h-[175px]  rounded-3xl text-end bg-slate-800 text-white font-boldq relative mt-4 cursor-pointer"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div
        className="w-100 h-full p-6 rounded-3xl bg-cover serviceImg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <motion.div
        className="absolute w-full h-full bg-transparent rounded-3xl serviceDes z-10 top-0"
        initial={{ opacity: 0, scaleY: 0.8 }}
        whileHover={{ opacity: 1, visibility: 'visible', scaleY: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-blackBlue w-[300px] h-fit relative left-1/3 -top-20 p-5 rounded-2xl shadow flex flex-col gap-2 hidden sm:block"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mt-1 flex items-baseline gap-x-2">
            <span className="text-xl font-simple tracking-tight mb-3 text-white">{price}</span>
          </p>
          <ul role="list" className="mt-4 font-simple space-y-3 text-start leading-6 text-gray-300 sm:mt-1">
            {features.map((feature) => (
              <li className="flex gap-x-3 items-start" key={feature}>
                <IoArrowForwardCircleOutline className="text-accent -rotate-45 text-wrap text-sm" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      {index % 2 === 0 ? (
        <div className="absolute top-6 left-6 tracking-widest lg:text-5xl sm:text-3xl  ">{title}</div>
      ) : (
        <div className="absolute top-6 right-6 tracking-widest lg:text-5xl sm:text-lg ">{title}</div>
      )}
    </motion.div>
  );
}

ServiceCard1.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
};
