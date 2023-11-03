'use client'

import React from 'react';
import { RiFilePdf2Fill } from 'react-icons/ri';
import { BiLogoGithub, BiLogoLinkedin, BiLogoGmail } from 'react-icons/bi';
import { motion } from "framer-motion"


const Footer = () => {
  return (
    <footer className='bg-bg-black bg-center bg-cover p-8 mt-40'>
      <div className=" flex gap-9 justify-center items-center ">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <a href="https://github.com/LudivineClement" target="_blank">
            <BiLogoGithub className='text-off-white  hover:brightness-75 transition-all duration-300 ease-in-out w-7 h-7' />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <a href="https://www.linkedin.com/in/ludivine-cl%C3%A9ment-d%C3%A9veloppeuse-web/" target="_blank" title='Linkedin'>
            <BiLogoLinkedin className='text-off-white hover:brightness-75 transition-all duration-300 ease-in-out w-7 h-7'
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <a href='mailto:ludivine.clement0985@gmail.com' target='blank' title='Gmail'>
            <BiLogoGmail className='text-off-white hover:brightness-75 transition-all duration-300 ease-in-out w-7 h-7 mt-[2px]'
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <a href="/cv-ludivine-clement.pdf" target="_blank" rel="noopener noreferrer" title='Voir le CV'>
            <RiFilePdf2Fill className='text-off-white hover:brightness-75 transition-all duration-300 ease-in-out w-7 h-7'
            />
          </a>
        </motion.div>

      </div>

    </footer>
  );
};

export default Footer;