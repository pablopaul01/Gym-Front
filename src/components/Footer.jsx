import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='py-5 bg-[#18181B] text-white'>
        <div className='flex flex-col md:flex-row items-center md:justify-between px-10 gap-5'>
          <div>
            <img src="https://res.cloudinary.com/dtjybx29n/image/upload/v1710107785/logo_bqpomp.png" alt="Logo" className='w-20' />
          </div>
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='text-sm text-slate-300 text-center md:text-left'>
              <p>686 Manuel Belgrano Este, San Juan, J5400</p>
              <p>libreriamiddas@gmail.com</p>
              <p>+54 264-567-8901</p>
            </div>
            <div className='text-sm text-slate-300 flex flex-col md:flex-none items-center'>
              <p>©Librería Middas</p>
              <div className='flex gap-2 md:justify-around'>
                <Link to={'/error'}><FaFacebook/></Link>
                <Link to={'/error'}><FaInstagram/></Link>
                <Link to={'/error'}><FaLinkedin/></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-5 md:mt-0'>
          <a className='text-sm text-slate-500 text-decoration-none' href='https://jpsalomon.com.ar/' target='blank'>© 2024 JPS, todos los derechos reservados.</a>
        </div>
    </div>
  )
}

export default Footer