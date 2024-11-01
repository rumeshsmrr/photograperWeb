
import {motion} from 'framer-motion'
export default function ReviewCard() {
  return (
    <div className="group reviewCard w-[300px] h-[400px] rounded-3xl relative bg-blue-300">
    <motion.div
      className="w-full h-full absolute bg-blackBlue rounded-3xl reviewContainer"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Content inside reviewContainer */}
    </motion.div>

    <motion.div
      className="absolute inset-0 rounded-3xl"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Content inside reviewCard */}
    </motion.div>
  </div>
  )
}
