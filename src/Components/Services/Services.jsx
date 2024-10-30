
import './Services.css'
import serv1Img from "../../assets/images/service1Img.jpg"
import serv2Img from '../../assets/images/service2Img.jpg'
import serv3Img from '../../assets/images/service3new.jpg.png'
import serv4Img from '../../assets/images/service4Img.jpg'
import {  motion } from 'framer-motion'

import ServiceCard1 from './ServiceCard1'

const data1 = [{
  index: 1,
  image: serv1Img,
  title: 'WEDDING PHOTOGRAPHY',
  price: 'Rs: 150,000',
  features: [
    'Upto 8 Hours of Exclusive Coverage',
    '12x30 Magazine Album',
    '16x24 Framed Enlargements x 2',
    'ALL THE SOFT COPIES IN A DVD',
    '150 Thank You Cards (Optional)',
    'Online wedding Album proof',
  ],
  delay: 0},
{
  index: 2,
  image: serv2Img,
  title: 'Portrait PHOTOGRAPHY',
  price: 'Rs: 150,000',
  features: [
    'Upto 8 Hours of Exclusive Coverage',
    '12x30 Magazine Album',
    '16x24 Framed Enlargements x 2',
    'ALL THE SOFT COPIES IN A DVD',
    '150 Thank You Cards (Optional)',
    'Online wedding Album proof',
  ],
  delay: 0.2

},
{
  index: 3,
image: serv3Img,
  title: 'Event PHOTOGRAPHY',
  price: 'Rs: 150,000',
  features: [
    'Upto 8 Hours of Exclusive Coverage',
    '12x30 Magazine Album',
    '16x24 Framed Enlargements x 2',
    'ALL THE SOFT COPIES IN A DVD',
    '150 Thank You Cards (Optional)',
    'Online wedding Album proof',
  ],
  delay: 0.4
},
{
  index: 4,
  image: serv4Img,
  title: 'Graduation PHOTOGRAPHY',
  price: 'Rs: 150,000',
  features: [
    'Upto 8 Hours of Exclusive Coverage',
    '12x30 Magazine Album',
    '16x24 Framed Enlargements x 2',
    'ALL THE SOFT COPIES IN A DVD',
    '150 Thank You Cards (Optional)',
    'Online wedding Album proof',
  ],
  delay: 0.6
  
}
]
export default function Services() {
  return (
    <div className='pt-2 pl-10 pr-10 pb-10 mt-10 absolute bg-inherit w-full h-screen flex flex-col justify-center'>
        <motion.div className='font-regular text-[40px] mb-4 titleLineSpace'
        initial={{x: -100 , opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.5, delay:0}}
        >
        What we <span className="text-accent">Offer
        </span>
        </motion.div>


{
  data1.map((item) => (

       <ServiceCard1 key={item.index} title={item.title} price={item.price} features={item.features} image={item.image} index={item.index} delay={item.delay}/>

  ))
}

</div>
  )
}




