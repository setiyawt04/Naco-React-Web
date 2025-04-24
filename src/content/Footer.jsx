import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-[#86562f] flex sm:justify-between justify-evenly items-center h-50 font-dynapuff text-white'>
        <div className='sm:p-10'>
            <h1 className='sm:text-3xl sm:pb-5 pb-2 text-base'>Naco</h1>
            <nav className='sm:flex sm:justify-center sm:items-center'>
                <ul className='flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-5 text-xs sm:text-sm lg:text-base font-thin'>
                    <li>
                    <a href="" className='hover:text-[#fbd678]'>Home</a>
                    </li>
                    <li>
                    <a href="" className='hover:text-[#fbd678]'>Tentang Kami</a>
                    </li>
                    <li>
                    <a href="" className='hover:text-[#fbd678]'>Produk</a>
                    </li>
                    <li>
                    <a href="" className='hover:text-[#fbd678]'>FAQ</a>
                    </li>
                    <li>
                    <a href="" className='hover:text-[#fbd678]'>Kontak</a>
                    </li>
                </ul>
                </nav>

        </div>
        <div className='sm:p-10'>
            <h4 className='sm:text-sm text-xs sm:pb-5 pb-3'>Ikuti Sosial Media Kami</h4>
            <nav className='flex justify-start items-center z-50 sm:flex-none flex-wrap'>
                <ul className="flex flex-col gap-0 text-green font-thin text-xs sm:text-sm lg:text-base">
                    <li>
                    <a href="" className="flex items-center gap-2 hover:text-[#fbd678] p-0 m-0">
                        <FaInstagram />
                        naco.id
                    </a>
                    </li>
                    <li>
                    <a href="" className="flex items-center gap-2 hover:text-[#fbd678] p-0 m-0">
                        <FaTiktok />
                        naco.id
                    </a>
                    </li>
                    <li>
                    <a href="" className="flex items-center gap-2 hover:text-[#fbd678] p-0 m-0">
                        <FaWhatsapp />
                        +628280322830
                    </a>
                    </li>
                </ul>
                </nav>

        </div>
        
    </footer>
  )
}

export default Footer