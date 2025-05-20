import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Parallax } from 'react-scroll-parallax';
import pohonImage from '../assets/images/pohon.png';
import coconut from '../assets/images/kelapa.png'
import video from '../assets/video/video.mp4'

function About() {
  const fadeIn = useRef(null)
  const fadeInAnimation = useInView(fadeIn)
  const { scrollY } = useScroll();

  const x1 = useTransform(scrollY, [800, 900], [-200, 0]);
  const x2 = useTransform(scrollY, [800, 900], [200, 0]);

  const x3 = useTransform(scrollY, [1700, 1800], [-500, 0]);
  const x4 = useTransform(scrollY, [1700, 1800], [500, 0]);
  
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

    return () => unsubscribe();
  }, [scrollY]);

  const opacity = useTransform(scrollY, [800, 900], [0, 1]);
  const opacity2 = useTransform(scrollY, [1500, 1700], [0, 1])

  return (
    <div id="TentangKami" className="relative overflow-hidden" >
      <Parallax speed={-15} className="w-full">
        <div className="bg-[#fbd678] h-[250vh] sm:h-[270vh] md:h-[310vh] lg:h-[320vh]">


          {/* TENTANG KAMI */}

          <div className='pt-[20vh] sm:pt-[30vh] md:pt-[90vh] lg:pt-[50vh] md:flex md:justify-center md:items-center md:pr-20 md:pl-40 md:w-full mx-auto'>
            <motion.div
              style={{ x: x1, opacity }}
              transition={{ duration: 0.5 }}
              className='overflow-hidden'
            >
              <h1 className='sm:pl-10 pl-5 pb-5 font-dynapuff sm:text-3xl text-[#466733] font-medium text-xl'>🎉 Tentang Kami</h1>
              <p className='sm:pl-10 pl-5 pr-5 text-base sm:text-lg text-[#466733] font-light font-dynapuff'>NACO menyediakan nata de coco segar yang lezat dan menyehatkan, langsung dari alam tropis. Rasakan kesegaran di setiap suapan! 🥥</p>
            </motion.div>
            <motion.div
              style={{ x: x2, opacity }}
              transition={{ duration: 0.5 }}
              className='w-full max-w-md relative flex justify-center items-center m-auto'
            >
              <img src={coconut} className='md:h-full md:w-full h-100 w-full' alt="coconut" />
            </motion.div>
          </div>


          {/* VIDEO */}

          <div className='pt-[5vh] sm:pt-[20vh] md:pt-[30vh] lg:pt-[30vh] md:flex md:justify-center md:items-center md:pr-20 md:pl-40 md:w-full mx-auto'>
            <motion.div
              ref={fadeIn}
              initial={{ opacity: 0, x: -100 }}
              animate={fadeInAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className=''
            >
              <h1 className='sm:pl-10 pl-5 pr-5 pb-5 font-dynapuff sm:text-3xl text-[#466733] font-medium text-xl'>🥥 Kesegaran Get Naco dalam Setiap Gigitan</h1>
              <p className='sm:pl-10 pl-5 pr-5 text-base sm:text-lg text-[#466733] font-light font-dynapuff mb-10'>
                Nikmati kualitas nata de coco terbaik dari Get Naco, bahan alami tanpa pengawet dan cocok untuk berbagai kreasi minuman
              </p>
            </motion.div>
            <motion.div
              ref={fadeIn}
              initial={{ opacity: 0, x: 100 }}
              animate={fadeInAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.6 }}
              className='w-full max-w-md relative flex justify-center items-center m-auto'
            >
              <video className="w-[80vw] sm:w-[100vw] rounded-2xl" controls autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
                Browser kamu tidak mendukung tag video.
              </video>

            </motion.div>
          </div>


          {/* APA YANG BEDA */}
          

          <div className='pt-[10vh] sm:pt-[20vh] md:pt-[30vh] lg:pt-[30vh] md:flex md:justify-center md:items-center md:pr-20 md:pl-40 md:w-full mx-auto'>
            <motion.div
              style={{ x: x3, opacity2 }}
              transition={{ duration: 0.5 }}
              className='overflow-hidden'
            >
              <h1 className='sm:pl-10 pl-5 pb-5 font-dynapuff sm:text-3xl text-[#466733] font-medium text-xl'>🤙 Apa yang Bikin Kita Beda?</h1>
              <p className='mb-10 sm:pl-10 pl-5 pr-5 text-base sm:text-lg text-[#466733] font-light font-dynapuff'>
                🌴 Teksturnya kenyal, tapi gak lebay.<br />
                🥥 Rasa buahnya beneran kerasa, bukan cuma pewarna.<br />
                🌱 Tanpa bahan pengawet yang ribet dibaca.<br />
                💚 Cocok buat ngemil, nyampur es buah, atau dimakan langsung dari cup-nya.
              </p>
            </motion.div>
            <motion.div
              style={{ x: x4, opacity2 }}
              transition={{ duration: 0.5 }}
              className='w-full max-w-md relative flex justify-center items-center m-auto'
            >
              <img src={pohonImage} className='md:h-full md:w-full h-80 sm:h-100 w-full' alt="coconut-tree" />
            </motion.div>
          </div>
        </div>
      </Parallax>

    </div>

  )
}

export default About