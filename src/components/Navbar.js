'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full top-0 left-0 z-50 transition-all duration-[500ms] ease-out ${isScrolled ? 'bg-off-white shadow-2xl' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center py-6 px-9 mx-20">
        <Link href="#home" className={`font-kaushan text-[2rem] font-semibold ${isScrolled ? 'text-gray-dark' : 'text-off-white'}`}>Portfolio</Link>
        <navbar className={`${isScrolled ? 'opacity-1' : 'opacity-0' }`}>
          <ul className="flex items-center gap-10 text-gray-light uppercase text-[0.8rem] tracking-widest font-medium leading-[0.9rem]">
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#home' className='inline-block'>Accueil</Link>
            </li>
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#about'>A propos</Link>
            </li>
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#skills'>Compétences</Link>
            </li>
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#projects'>Mes projets</Link>
            </li>
            <li>
              <Link href='#contact'>
              <FontAwesomeIcon icon={faEnvelope} className='text-[1.2rem] text-gray-dark pb-1 hover:text-pink-global transition-all duration-[400ms] ease-out' />
              </Link>
            </li>
          </ul>
        </navbar>
      </div>
    </div>
  );
};

export default Navbar;