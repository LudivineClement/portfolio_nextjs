'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"


const Footer = () => {
  return (
    <footer className='bg-bg-black bg-center bg-cover p-8 mt-40'>
      <div className=" flex gap-9 justify-center ">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <Link href="https://github.com/LudivineClement?tab=repositories" target="_blank">
            <Image
              src="/img/icons/icon-github.png"
              alt="icône de github"
              width={25}
              height={25}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.2 }}
          viewport={{ once: false }}
        >
          <Link href="https://www.instagram.com/" target="_blank">
            <Image
              src="/img/icons/icon-instagram.png"
              alt="icône d'instagram'"
              width={25}
              height={25}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.3 }}
          viewport={{ once: false }}
        >
          <Link href="https://www.linkedin.com/in/ludivine-cl%C3%A9ment-45612326a/" target="_blank">
            <Image
              src="/img/icons/icon-linkedin.png"
              alt="icône de Linkedin"
              width={25}
              height={25}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.4 }}
          viewport={{ once: false }}
        >
          <Link href="https://twitter.com/?lang=fr" target="_blank">
            <Image
              src="/img/icons/icon-twitterx.png"
              alt="icône de Twitter"
              width={25}
              height={25}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
        </motion.div>

      </div>

    </footer>
  );
};

export default Footer;