import React from 'react'
import logo from "../assets/chathushkaLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

export default function () {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt='logo' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/chathushka-navod-withanage'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/chathuwa-whiz'>
              <FaGithub />
            </a>
            <FaTwitter />
            <a href='https://www.instagram.com/chathushkanavod'>
              <FaInstagram />
            </a>
        </div>
    </nav>
  )
}
