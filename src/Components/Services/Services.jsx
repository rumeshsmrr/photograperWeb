
import './Services.css'
import serv1Img from "../../assets/images/service1Img.jpg"
import serv2Img from '../../assets/images/service2Img.jpg'
import serv3Img from '../../assets/images/service3new.jpg.png'
import serv4Img from '../../assets/images/service4Img.jpg'
import { motion } from 'framer-motion'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

export default function Services() {
  return (
    <div className='pt-2 pl-10 pr-10 pb-10 mt-10 absolute bg-inherit w-full h-screen flex flex-col justify-center'>
        <motion.div className='font-regular text-[55px] mb-10 titleLineSpace'
        initial={{x: -100 , opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:0}}
        >
        What we <span className="text-accent">Offer
        </span>
        </motion.div>



{/* card1 */}
        <motion.div className='w-full h-[175px] rounded-3xl text-end bg-slate-800 text-white text-[40px] font-boldq relative  cursor-pointer' 
        initial={{x: 100, opacity:0 }}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        >
          <div className='w-100 h-full p-6 rounded-3xl bg-cover serviceImg bg-center' style={{backgroundImage:`url(${serv1Img})`}}></div>
         
            <motion.div
          className='absolute w-full h-full bg-transparent rounded-3xl serviceDes z-10 top-0'
          initial={{ opacity: 0 ,scaleY:0.8}}
          whileHover={{ opacity: 1,visibility:'visible',scaleY:1 }}
          transition={{ duration: 0.3}}
        >

        <motion.div className='bg-blackBlue w-[400px] h-[400px] relative left-1/3  -top-20 p-5 rounded-2xl shadow flex flex-col gap-2'
        initial={{scale:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5}}
        >
      
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-3xl font-simple tracking-tight text-white">Rs: 150,000</span>
       
      </p>
      <ul role="list" className="mt-8 font-simple space-y-3 text-lg leading-6 text-gray-300 sm:mt-10">
        <li className="flex gap-x-3">
        <IoArrowForwardCircleOutline className='text-accent  -rotate-45 text-wrap' />
        Upto 8 Hours of Exclusive Coverage
        </li>
        <li className="flex gap-x-3">
        <IoArrowForwardCircleOutline className='text-accent -rotate-45 text-wrap' />12x30 Magazine Album 
        </li><li className="flex gap-x-3">
        <IoArrowForwardCircleOutline className='text-accent  -rotate-45 text-wrap' />
        16x24 Framed Enlargements x 2
        </li>
        <li className="flex gap-x-3">
        <IoArrowForwardCircleOutline className='text-accent  -rotate-45 text-wrap' />
        ALL THE SOFT COPIES IN A DVD
        </li><li className="flex gap-x-3">
        <IoArrowForwardCircleOutline className='text-accent  -rotate-45 text-wrap' />
        150 Thank You Cards (Optional)
        </li>
        <li className="flex gap-x-3">
        <IoArrowForwardCircleOutline className='text-accent -rotate-45 text-wrap' />
        Online wedding Album proof
        </li>
      </ul>
        </motion.div>
        </motion.div>
          <div className='absolute top-6 right-6 tracking-widest'>WEDDING PHOTOGRAPHY</div>
         
        </motion.div>




{/* card12 */}
        <motion.div className='w-full h-[175px] rounded-3xl text-end bg-slate-800 text-white text-[40px] font-boldq relative mt-5  cursor-pointer bg-center' 
        initial={{x: 100, opacity:0 }}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:1}}
        >
          <div className='w-100 h-full p-6 rounded-3xl bg-cover serviceImg' style={{backgroundImage:`url(${serv2Img})`}}></div>
          <motion.div
            className='absolute inset-0 bg-white opacity-0 h-full'
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.8, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className='absolute top-6 left-6 tracking-widest'>PORTRAIT PHOTOGRAPHY</div>
   


{/* card3 */}      
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

        

{/* card4 */}  
        <motion.div className='w-full h-[175px] rounded-3xl text-end bg-slate-800 text-white text-[40px] font-boldq relative mt-5  cursor-pointer' 
        initial={{x: 100, opacity:0 }}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:1.5}}
        >
          <div className='w-100 h-full p-6 rounded-3xl bg-cover serviceImg ' style={{backgroundImage:`url(${serv4Img})`}}></div>
          <motion.div
            className='absolute inset-0 bg-white opacity-0 h-[605px]'
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: [0, 0.8, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className='absolute top-6 left-6 tracking-widest'>GRADUATION PHOTOGRAPHY</div>
         
        </motion.div>
    </div>
  )
}
