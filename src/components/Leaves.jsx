import React from 'react'
import leaf from '../assets/images/leaf.png'
import { gsap } from "gsap";


function Leaves() {
    gsap.to('.leaf-1', {
        x: '300vh',
        y: '10vh',
        rotation: gsap.utils.random(-360, 360),
        duration: 8, 
        ease: "sine.inOut", 
        repeat: -1

    })
    gsap.to('.leaf-2', {
        x: '300vh',
        y: '10vh',
        rotation: gsap.utils.random(-360, 360),
        duration: 8, 
        ease: "sine.inOut", 
        repeat: -1

    })
    gsap.to('.leaf-3', {
        x: '300vh',
        y: '20vh',
        rotation: gsap.utils.random(-360, 360),
        duration: 8, 
        ease: "sine.inOut", 
        repeat: -1

    })
  return (
    <div className='h-150 w-10 flex justify-center items-center relative right-20'>
        <img src={leaf} alt="leaf" className='leaf-1 float-right'/>
        <img src={leaf} alt="leaf" className='leaf-2'/>
        <img src={leaf} alt="leaf" className='leaf-3'/>
    </div>
  )
}

export default Leaves