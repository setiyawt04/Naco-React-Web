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
    <section id="Home" className="z-30 bg-cover bg-center bg-no-repeat top-0 left-0 md:w-full min-h-screen pb-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }} >
      <div className='overflow-x-hidden relative w-full h-screen'>

      </div>
      <div className='flex justify-center items-center h-full absolute top-0 left-0 w-full'>
        <Leaves />
        <motion.div
          ref={fadeIn}
          initial={{ opacity: 0, y: 5 }}
          animate={fadeInAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.6 }}
          className='text-center px-4 max-w-4xl'
        >
          <h1 className='text-[#466733] font-dynapuff font-bold text-2xl sm:text-2xl md:text-3xl lg:text-5xl'>Nata de Coco 🥥, Bikin Hidup Lebih Segar!🏝️</h1>

        </motion.div>

      </div>
      <Parallax speed={5} className="absolute bottom:0 left-0 z-0">
        <img
          className="object-cover h-[100px] sm:h-full w-full"
          src={sandImage}
          alt="sand"
        />
        <div className='absolute h-30 w-full bg-[#fbd678]'></div>
      </Parallax>

    </section>

  )
}

export default Hero