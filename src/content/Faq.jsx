import React, { useRef } from 'react'
import FaqAccordion from '../components/FaqAccordion'
import beachImage from '../assets/images/faq-bg.jpg'
import { motion, useInView } from 'framer-motion'
import Footer from './Footer'

function Faq() {
  const fadeIn = useRef(null)
  const fadeInAnimation = useInView(fadeIn)
  return (
    <>
      <div id="Faq" className='z-30 bg-cover bg-center bg-no-repeat w-full h-auto pb-20' style={{ backgroundImage: `url(${beachImage})`, backgroundPosition: 'left center', backgroundSize: 'cover' }}>
        <motion.div
          ref={fadeIn}
          initial={{ opacity: 0, y: 5 }}
          animate={fadeInAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='sm:text-3xl text-xl text-center font-medium font-dynapuff sm:p-20 p-10'
        >
          <h1>FAQ</h1>
        </motion.div>

        <motion.div
          ref={fadeIn}
          initial={{ opacity: 0, y: 5 }}
          animate={fadeInAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='sm:px-20 px-5'
        >
          <FaqAccordion />
        </motion.div>

      </div>
    </>
  )
}

export default Faq