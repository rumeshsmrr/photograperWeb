import React from 'react'
import './Services.css'
import serv1Img from "../../assets/images/service1.jpg"
import serv2Img from '../../assets/images/service2.png'
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

        <motion.div className='w-full h-[175px] rounded-3xl text-end bg-slate-800 text-white text-3xl font-bold relative ' 
        initial={{x: 100, opacity:0 }}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        >
          <div className='w-100 h-full p-6 rounded-3xl bg-cover serviceImg' style={{backgroundImage:`url(${serv1Img})`}}></div>
          <div className='absolute top-6 right-6 tracking-widest'>WEDDING PHOTOGRAPHY</div>
         
        </motion.div>

        <motion.div className='w-full h-[175px] rounded-3xl text-end bg-slate-800 text-white text-3xl font-bold relative mt-5' 
        initial={{x: 100, opacity:0 }}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        >
          <div className='w-100 h-full p-6 rounded-3xl bg-cover serviceImg' style={{backgroundImage:`url(${serv2Img})`}}></div>
          <div className='absolute top-6 left-6 tracking-widest'>PORTRAIT PHOTOGRAPHY</div>
         
        </motion.div>
    </div>
  )
}
