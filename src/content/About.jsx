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
  

  const [scrollRange, setScrollRange] = useState([700, 900]);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        setScrollRange([400, 600]);
      } else if (width < 1024) {
        // Tablet
        setScrollRange([400, 600]);
      } else {
        // Desktop
        setScrollRange([700, 900]);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // run once at start

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const x1 = useTransform(scrollY, scrollRange, [-200, 0]);
  const x2 = useTransform(scrollY, scrollRange, [200, 0]);
  useEffect(() => {
    const unsubscribeX1 = x1.on("change", latest => {
      console.log("x1:", latest);
    });
  
    const unsubscribeX2 = x2.on("change", latest => {
      console.log("x2:", latest);
    });
  
    return () => {
      unsubscribeX1();
      unsubscribeX2();
    };
  }, [x1, x2]);
  
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      console.log("scrollY:", latest);
    });

    return () => unsubscribe(); // cleanup
  }, [scrollY]);

  const opacity = useTransform(scrollY, [800, 1000], [0, 1]);

  
  return (
    <div id="TentangKami" className="relative overflow-hidden" >
    <Parallax speed={-15} className="w-full">
      <div className="bg-[#fbd678] h-[300vh] md:h-[70vh] lg:h-[250vh]">


        {/* TENTANG KAMI */}

        <div className='pt-[70vh] sm:pt-[10vh] md:pt-[20vh] lg:pt-[70px] md:flex md:justify-center md:items-center md:pr-20 md:pl-40 md:w-full mx-auto'>
          <motion.div  
            style={{ x: x1, opacity }}
            transition={{ duration: 0.5}}
            className='overflow-hidden'
          >
            <h1 className='sm:pl-10 pl-5 pb-5 font-dynapuff sm:text-3xl text-[#466733] font-medium text-xl'>🎉 Tentang Kami</h1>
            <p className='sm:pl-10 pl-5 pr-5 text-base sm:text-lg text-[#466733] font-light font-dynapuff'>NACO menyediakan nata de coco segar yang lezat dan menyehatkan, langsung dari alam tropis. Rasakan kesegaran di setiap suapan! 🥥</p>
          </motion.div>
          <motion.div 
              style={{ x: x2, opacity }}
              transition={{ duration: 0.5}}
              className='w-full max-w-md relative flex justify-center items-center'
            >
              <img src={coconut} className='sm:h-full sm:w-full h-70 w-70' alt="coconut" />
          </motion.div> 
        </div>



        {/* APA YANG BEDA */}


        <div className='pt-[20vh] sm:pt-[10vh] md:pt-[10vh] lg:pt-[70px] md:flex md:justify-center md:items-center md:pr-20 md:pl-40 md:w-full mx-auto'>
          <motion.div
              ref={fadeIn}
              initial={{opacity: 0, x:-100}}
              animate={fadeInAnimation ? {opacity: 1, x:0} : {opacity: 0, x:-100}}
              transition={{duration:0.6}}
              className=''
            >
              <h1 className='sm:pl-10 pl-5 pr-5 pb-5 font-dynapuff sm:text-3xl text-[#466733] font-medium text-xl'>🤙 Apa yang Bikin Kita Beda?</h1>
              <p className='sm:pl-10 pl-5 pr-5 text-base sm:text-lg text-[#466733] font-light font-dynapuff'>
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
              className='w-full max-w-md relative flex justify-center items-end'
            >
              <img src={pohonImage} className='h-full w-full mt-10' alt="coconut-tree"/>
              
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