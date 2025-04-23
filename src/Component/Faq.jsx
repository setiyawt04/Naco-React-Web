import React, {useRef} from 'react'
import FaqAccordion  from './FaqAccordion'
import beachImage from '../assets/images/faq-bg.jpg'
import {motion, useInView} from 'framer-motion'
import Footer from './Footer'

function Faq() {
  const fadeIn = useRef(null)
  const fadeInAnimation = useInView(fadeIn)
  return (
    <>
    <div id="Faq" className='p-10 md:h-[120vh]' style={{backgroundImage:`url(${beachImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <motion.div
        ref={fadeIn}
        initial={{opacity: 0, y:5}}
        animate= {fadeInAnimation ? {opacity: 1, y:0} : {opacity: 0, y:5}}
        transition={{duration: 0.6, delay:0.2}}
        className='text-3xl text-center font-dynapuff p-20'
      >
        <h1>FAQ</h1>
      </motion.div>

      <motion.div
        ref={fadeIn}
        initial={{opacity: 0, y:5}}
        animate={fadeInAnimation ? {opacity:1, y:0} : {opacity: 0, y:5}}
        transition={{duration: 0.6, delay: 0.6}}
      >
        <FaqAccordion />
      </motion.div>
      
    </div>
    <div>
      <Footer />
    </div>
</>
  )
}

export default Faq