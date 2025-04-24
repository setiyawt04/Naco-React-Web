import logo from '../assets/images/logo.png';
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

function Navbar() {
  const fadeIn = useRef(null)
  const fadeInAnimation = useInView(fadeIn)
  console.log('Animation', fadeInAnimation)
  return (
    <nav className='bg-transparent left-0 top-0 lg:w-full fixed z-50'> 
     
      <motion.ul
        ref={fadeIn}
        initial={{opacity: 0, y: 5}}
        animate={fadeInAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={{duration: 0.6}}
        className='flex justify-center items-center sm:pl-5 flex-wrap'
      
      >
        <li className='md:grow-1'>
          <a href=""><img className="w-20" src={logo} alt="Logo" /></a>
        </li>
               
        <li className='text-xs sm:text-base lg:[&>a]:pr-8 [&>a]:pr-2 text-white [&>a:hover]:text-[#466733] text-green font-bold'>
          <a href="#Home">Home</a>
          <a href="#TentangKami">Tentang Kami</a>
          <a href="#Products">Produk</a>
          <a href="#Faq">FAQ</a>
          <a 
            href="https://wa.link/x36za0"
            target="_blank"
            rel="noopener noreferrer"
          >Kontak</a>
        </li>
      </motion.ul>
      
    </nav>
  )
}

export default Navbar