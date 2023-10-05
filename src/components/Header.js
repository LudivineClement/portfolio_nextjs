'use client'
import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link';
import TypeWriter from './TypeWriter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <header data-section id='home' className="bg-banner-img bg-top lg:bg-center bg-cover h-screen lg:bg-fixed bg-gray-global before:absolute before:top-0 before:left-0 before:right-0 before:h-screen before:w-full before:bg-gradient-to-b from-black/60 to-black/20">
      <Navbar />
      <div className="text-off-white absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <TypeWriter />
        <div
          className=" flex gap-6 justify-center">
            <Link href="https://github.com/LudivineClement?tab=repositories" target="_blank" title='Github'>
              <Image
                src="/img/icons/icon-github.png"
                alt="icône de github"
                width={20}
                height={20}
                className='hover:brightness-75 transition-all duration-300 ease-in-out'
              />
            </Link>

          <Link href="https://www.instagram.com/" target="_blank" title='Instagram'>
            <Image
              src="/img/icons/icon-instagram.png"
              alt="icône d'instagram'"
              width={20}
              height={20}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
          <Link href="https://fr.linkedin.com/" target="_blank" title='Linkedin'>
            <Image
              src="/img/icons/icon-linkedin.png"
              alt="icône de Linkedin"
              width={20}
              height={20}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
          <Link href="https://twitter.com/?lang=fr" target="_blank" title='Twitter X'>
            <Image
              src="/img/icons/icon-twitterx.png"
              alt="icône de Twitter"
              width={20}
              height={20}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
        </div>
      </div>
      <div className='absolute left-1/2 translate-x-[-50%] bottom-12 '>
        <Link href="#about">
          <FontAwesomeIcon icon={faChevronDown} bounce className='text-off-white text-3xl' />
        </Link>
      </div>
    </header>
  );
};

export default Header;