import React, { useState } from "react"
import { FaPhoneAlt, FaLinkedin, FaWhatsapp, FaGithub} from "react-icons/fa"
import { MdEmail } from "react-icons/md"


function Footer() {
  
  return (
    <div>
      <div className='hidden md:block lg:block border border-gray-700 p-3'>
        <div className='flex justify-center item-center my-5'>
          <h1>Hariharachandru V</h1>
        </div>
        
        <div className="mx-22">
          <ul className="flex justify-evenly">
            <a href="#home"><li className="hover:text-chose-10">About</li></a>
            <a href="#skill"><li className="hover:text-chose-10">Skills</li></a>
            <a href="#projects"><li className="hover:text-chose-10">Projects</li></a>
          </ul>
        </div>
        
        <div className='py-5'>
          <ul className='flex justify-center space-x-12'>
            <a  href='tel:6379940593'><li className="hover:text-chose-10"><FaPhoneAlt/></li></a>
            <li className="hover:text-chose-10"><MdEmail /></li>
            <a href="https://www.linkedin.com/in/hariharachandru-front-end-developer/"><li className="hover:text-chose-10"><FaLinkedin /></li></a>
            <a href='https://wa.link/9ikyi4/'><li className="hover:text-chose-10"><FaWhatsapp/></li></a>
            <a href="https://github.com/Harii10"><li className="hover:text-chose-10"><FaGithub/></li></a>
          </ul>
        </div>

      </div>
      <div className='md:hidden lg:hidden '>
          <ul className='flex flex-col justify-end items-end space-y-8 m-7 fixed right-0 mt-56 text-chose-40'>
          <h1 className='font-semibold'>Contact Me</h1>
            <li><FaPhoneAlt /></li>
            <li><MdEmail /></li>
            <li><FaLinkedin /></li>
            <li><FaWhatsapp/></li>
            <li><FaGithub/></li>
          </ul>
        </div>

      
    </div>
  );
}

export default Footer;
