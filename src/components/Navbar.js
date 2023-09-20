'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleActiveLink = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight ;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleActiveLink);

    return () => {
      window.removeEventListener('scroll', handleActiveLink);
    };
  }, []);

  const activeContact = {
    color: '#d68da2',
  };
  
  const activeStyle = {
    color: '#292929',
    boxShadow: 'inset 0 -7px 0 #f3b0c3',
    transition: 'all 0.4s ease-in',
    lineHeight:'10px',
  };

 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
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
          <ul className="flex items-center gap-10 text-gray-light uppercase text-[0.8rem] tracking-widest font-medium leading-[0.938rem]">
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#home' style={activeSection === 
        'home' ? activeStyle : {}}>Accueil</Link>
            </li>
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#about'style={activeSection === 
        'about' ? activeStyle : {}}>A propos</Link>
            </li>
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#skills' style={activeSection === 
        'skills' ? activeStyle : {}}>Compétences</Link>
            </li>
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#projects' style={activeSection === 
        'projects' ? activeStyle : {}}>Mes projets</Link>
            </li>
            <li>
              <Link href='#contact' title='contact'>
              <FontAwesomeIcon icon={faEnvelope} style={activeSection === 
        'contact' ? activeContact : {}} className='text-[1.2rem] text-gray-dark pb-1 hover:text-pink-global transition-all duration-[400ms] ease-out' />
              </Link>
            </li>
          </ul>
        </navbar>
      </div>
    </div>
  );
};

export default Navbar;