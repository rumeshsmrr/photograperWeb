import React from 'react'
import './Categories.css'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import cat1 from '../../assets/images/catImg1.jpeg'
export default function Categories() {
  return (
    <div className='pt-2 pl-10 pb-10 absolute bg-inherit w-full h-full flex flex-col justify-center'>
        <div className='font-regular text-[60px]  titleLineSpace'>
        Explore our <br/> photography <span className="text-accent">genres
        </span>
        </div>
        <div className='w-full flex gap-10 mt-10'>
            <div className='w-[500px] h-[600px] relative  '>
                <img className='rounded-3xl'src={cat1} />
                <div className='cardCorner bg-white text-[50px] absolute top-0 right-0 text-accent'>
                  <IoArrowForwardCircleOutline className='-rotate-45'/>
                  <div className='shape7'>
                    <div id="curved-corner-topright"></div>
                  </div>
                  <div className='shape8'>
                  <div id="curved-corner-topright"></div>
                  </div>
                </div>
                <div className='catTag1 pt-2 pb-0 pl-0 pr-2 w-fit bg-white absolute -bottom-2 rounded-tr-3xl'>
                  <div className='absolute -top-6 left-0'>
                  <div id="curved-corner-bottomleft"></div>
                  </div>
                  <div className='font-regular text-xl text-accent bg-white py-1 border-solid border-accent border-2 w-[200px] text-center rounded-3xl'>Wedding</div>
                  <div className='absolute bottom-[2px] -right-6'>
                  <div id="curved-corner-bottomleft"></div>
                  </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}
