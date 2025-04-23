import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import heroImage from '../assets/images/hero.jpg';
import sandImage from '../assets/images/sand.png';
import { Parallax } from 'react-scroll-parallax';
import Leaves from '@/components/Leaves';


function Hero() {
  const fadeIn = useRef(null)
  const fadeInAnimation = useInView(fadeIn)
  console.log('Animation', fadeInAnimation)
  return (
    <>
    <section id="Home" className="z-30 bg-cover bg-center bg-fixed top-0 left-0 pb-20" style={{ backgroundImage: `url(${heroImage})`}}>
    <Leaves />
      <div className='flex justify-center items-center '>
        
        <motion.div
          ref={fadeIn}
          initial={{opacity: 0, y:5}}
          animate= {fadeInAnimation ? { opacity: 1, y:0 }: { opacity: 0, y: 5 }}
          transition={{duration: 0.6}}
          className='fixed'
        >
          <h1 className='text-[#466733]  h-150 font-dynapuff font-bold text-center md:mb-10 mb-30 text-4xl'>Nata de Coco 🥥, Bikin Hidup Lebih Segar!🏝️</h1>
          
      </motion.div>
      
    </div>
    <Parallax speed={-5} className="bottom-0 left-0 w-full">
        <img 
              className="w-full object-cover sm:h-30 md:h-40 md:w-full lg:h-full"
              src={sandImage}
              alt="sand"
        />  
        <div className='h-70 bg-[#fbd678]'></div>
    </Parallax>
      
    </section>
    
    
    </>
    
  )
}

export default Hero