import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Parallax } from 'react-scroll-parallax';
import pohonImage from '../assets/images/pohon.png';
import coconut from '../assets/images/kelapa.png'
import Products from './Products';

function About() {
  const fadeIn = useRef(null)
  const fadeInAnimation = useInView(fadeIn)
  const { scrollY } = useScroll();
  const x1 = useTransform(scrollY, [800, 900], [-200, 0]);
  const x2 = useTransform(scrollY, [800, 900], [200, 0]);
 
  const opacity = useTransform(scrollY, [800, 1000], [0, 1]);

  
  return (
    <div id="TentangKami" className="relative">
    <Parallax speed={-15} className="absolute w-full">
      <div className="relative md:h-280 h-350 mt-10 bg-[#fbd678]">
        <div className='md:flex md:justify-center md:items-center md:pr-20 md:pl-40 pt-10 w-100 md:w-full mx-auto'>
          
          <motion.div 
            style={{ x: x1, opacity }}
            transition={{ duration: 0.5}}
            
          >
            <h1 className='pb-5 font-dynapuff text-3xl text-[#466733] font-medium'>🎉 Tentang Kami</h1>
            <p className='text-lg text-[#466733] font-medium'>NACO menyediakan nata de coco segar yang lezat dan menyehatkan, langsung dari alam tropis. Rasakan kesegaran di setiap suapan! 🥥</p>
          </motion.div>
          <motion.div 
              style={{ x: x2, opacity }}
              transition={{ duration: 0.5}}
              className='w-full max-w-md relative flex justify-center items-end'
            >
              <img src={coconut} className='h-100 w-100' alt="coconut" />
          </motion.div> 
        </div>

        <div className='md:flex md:justify-center md:items-center md:pr-20 md:pl-40 md:pt-50 pt-10 w-100 md:w-full mx-auto'>
          <motion.div
              ref={fadeIn}
              initial={{opacity: 0, x:-100}}
              animate={fadeInAnimation ? {opacity: 1, x:0} : {opacity: 0, x:-100}}
              transition={{duration:0.6}}
            >
              <h1 className='pb-5 font-dynapuff text-3xl text-[#466733] font-medium'>🤙 Apa yang Bikin Kita Beda?</h1>
              <p className='text-lg text-[#466733] font-medium'>
                🌴 Teksturnya kenyal, tapi gak lebay.<br />
                🥥 Rasa buahnya beneran kerasa, bukan cuma pewarna.<br />
                🌱 Tanpa bahan pengawet yang ribet dibaca.<br />
                💚 Cocok buat ngemil, nyampur es buah, atau dimakan langsung dari cup-nya.

              </p>
          </motion.div>
          <motion.div 
              ref={fadeIn}
              initial={{opacity: 0, x:100}}
              animate={fadeInAnimation ? {opacity: 1, x:0} : {opacity: 0, x:100}}
              transition={{duration:0.6}}
              className='w-full max-w-md relative flex justify-center items-center'
            >
              <img src={pohonImage} className='mt-120 md:mt-0 h-100 w-200 absolute' alt="coconut-tree"/>
              
          </motion.div>
          
          
            
        </div>
        
        
      </div>
      <div>
        <Products />
      </div>
      
    </Parallax>
  
  </div>
    
  )
}

export default About