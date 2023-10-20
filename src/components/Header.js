'use client'
import React from 'react';
import Navbar from './Navbar';
import TypeWriter from './TypeWriter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { RiFilePdf2Fill } from 'react-icons/ri';
import { BiLogoGithub, BiLogoLinkedin, BiLogoGmail } from 'react-icons/bi';
import { motion } from "framer-motion"


const Header = () => {
  return (
    <header data-section id='home' className="bg-banner-img bg-top lg:bg-center bg-cover h-screen lg:bg-fixed bg-gray-global before:absolute before:top-0 before:left-0 before:right-0 before:h-screen before:w-full before:bg-gradient-to-b from-black/60 to-black/20">
      <Navbar />
      <div className="text-off-white absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <TypeWriter />
        <div
          className=" flex gap-5 justify-center items-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <a href="https://github.com/LudivineClement?tab=repositories" target="_blank" title='Github'>
              <BiLogoGithub className='hover:brightness-75 transition-all duration-300 ease-in-out w-6 h-6'
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <a href="https://www.linkedin.com/in/ludivine-cl%C3%A9ment-45612326a/" target="_blank" title='Linkedin'>
              <BiLogoLinkedin className='hover:brightness-75 transition-all duration-300 ease-in-out w-6 h-6'
              />
            </a>
          </motion.div>                 

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <a href='mailto:ludivine.clement0985@gmail.com' target='blank' title='Gmail'>
              <BiLogoGmail className='hover:brightness-75 transition-all duration-300 ease-in-out w-6 h-6 mt-[2px]'
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <a href="/cv-ludivine-clement.pdf" target="_blank" rel="noopener noreferrer" title='Voir le CV'>
              <RiFilePdf2Fill className='hover:brightness-75 transition-all duration-300 ease-in-out w-6 h-6'
              />
            </a>
          </motion.div>
        </div>
      </div>
      <div className='absolute left-1/2 translate-x-[-50%] bottom-12 '>
        <a href="#about">
          <FontAwesomeIcon icon={faChevronDown} bounce className='text-off-white text-3xl' />
        </a>
      </div>
    </header>
  );
};

export default Header;