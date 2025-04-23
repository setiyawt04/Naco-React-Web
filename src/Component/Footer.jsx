import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-[#86562f] flex justify-between items-center h-50 p-10 font-dynapuff text-white'>
        <div className='pt-5'>
            <h1 className='text-3xl pb-5'>Naco</h1>
            <nav className='flex justify-center items-center'>
                <ul>
                    <li className='pr-3 text-xs sm:text-sm lg:text-base lg:[&>a]:pr-8 [&>a]:pr-5  [&>a:hover]:text-[#fbd678] text-green font-thin'>
                    <a href="">Home</a>
                    <a href="">Tentang Kami</a>
                    <a href="">Produk</a>
                    <a href="">FAQ</a>
                    <a href="">Kontak</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='pt-5'>
            <h4 className='text-sm pb-5'>Ikuti Sosial Media Kami</h4>
            <nav className='flex justify-start items-center z-50'>
                <ul>
                    <li className='pr-3 text-xs sm:text-sm lg:text-base lg:[&>a]:pr-8 [&>a]:pr-5 [&>a]:inline [&>a:hover]:text-[#fbd678] text-green font-thin'>
                        <a href="">
                            <span className='flex justify-start items-center gap-2 text-base'>
                                <FaInstagram /> 
                                naco.id
                            </span>
                        </a>
                        <a href="">
                            <span className='flex justify-start items-center gap-2 text-base'>
                                <FaTiktok /> 
                                naco.id
                            </span>
                        </a>
                        <a href="">
                            <span className='flex justify-start items-center gap-2 text-base'>
                                <FaWhatsapp /> 
                                +628280322830
                            </span>
                        </a>
                    
                    </li>
                </ul>
            </nav>
        </div>
        
    </footer>
  )
}

export default Footer