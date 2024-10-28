
import './Services.css'
import serv1Img from "../../assets/images/service1Img.jpg"
import serv2Img from '../../assets/images/service2Img.jpg'
import serv3Img from '../../assets/images/service3new.jpg.png'
import serv4Img from '../../assets/images/service4Img.jpg'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className='pt-2 pl-10 pr-10 pb-10 mt-10 absolute bg-inherit w-full h-fit flex flex-col justify-center'>
        <motion.div className='font-regular text-[60px] mb-10 titleLineSpace'
        initial={{x: -100 , opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:0}}
        >
        What we <span className="text-accent">Offer
        </span>
        </motion.div>

        <motion.div className='w-full h-[175px] rounded-3xl text-end bg-slate-800 text-white text-[40px] font-boldq relative  cursor-pointer' 
        initial={{x: 100, opacity:0 }}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        >
          <div className='w-100 h-full p-6 rounded-3xl bg-cover serviceImg bg-center' style={{backgroundImage:`url(${serv1Img})`}}></div>
          <motion.div
            className='absolute inset-0 bg-white opacity-0 h-[605px]'
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.8, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className='absolute top-6 right-6 tracking-widest'>WEDDING PHOTOGRAPHY</div>
         
        </motion.div>

        <motion.div className='w-full h-[175px] rounded-3xl text-end bg-slate-800 text-white text-[40px] font-boldq relative mt-5  cursor-pointer bg-center' 
        initial={{x: 100, opacity:0 }}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:1}}
        >
          <div className='w-100 h-full p-6 rounded-3xl bg-cover serviceImg' style={{backgroundImage:`url(${serv2Img})`}}></div>
          <motion.div
            className='absolute inset-0 bg-white opacity-0 h-[605px]'
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.8, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className='absolute top-6 left-6 tracking-widest'>PORTRAIT PHOTOGRAPHY</div>
         
        </motion.div>
        <motion.div className='w-full h-[175px] rounded-3xl text-end bg-slate-800 text-white text-[40px] font-boldq relative mt-5  cursor-pointer' 
        initial={{x: 100, opacity:0 }}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:1.5}}
        >
          <div className='w-100 h-full p-6 rounded-3xl bg-cover serviceImg' style={{backgroundImage:`url(${serv3Img})`}}></div>
          <motion.div
            className='absolute inset-0 bg-white opacity-0 h-[605px]'
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.8, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className='absolute top-6 right-6 tracking-widest'>EVENT PHOTOGRAPHY</div>
         
        </motion.div>
        <motion.div className='w-full h-[175px] rounded-3xl text-end bg-slate-800 text-white text-[40px] font-boldq relative mt-5  cursor-pointer' 
        initial={{x: 100, opacity:0 }}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:1.5}}
        >
          <div className='w-100 h-full p-6 rounded-3xl bg-cover serviceImg' style={{backgroundImage:`url(${serv4Img})`}}></div>
          <motion.div
            className='absolute inset-0 bg-white opacity-0 h-[605px]'
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.8, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className='absolute top-6 right-6 tracking-widest'>GRADUATION PHOTOGRAPHY</div>
         
        </motion.div>
    </div>
  )
}
