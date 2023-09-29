'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);
  const [open, setOpen] = useState(false)

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


  const handleActiveLink = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

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

  const menuItems = [
    { text: 'Accueil', section: 'home' },
    { text: 'A propos', section: 'about' },
    { text: 'Compétences', section: 'skills' },
    { text: 'Mes projets', section: 'projects' },
  ];

  const styleLink = "mb-7 mx-8 lg:mb-0 lg:mx-0 transition-all duration-500 ease-out hover:text-pink-global lg:hover:text-gray-dark lg:hover:shadow-[inset_0px_-6px_0px] lg:hover:shadow-pink-light"

  const activeContact = {
    color: '#d68da2',
  };

  const activeStyle = {
    color: '#292929',
    boxShadow: 'inset 0 -7px 0 #f3b0c3',
    transition: 'all 0.4s ease-in',
    lineHeight: '10px',
  };

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;


  return (
    <nav className={`fixed w-screen top-0 left-0 z-[100] transition-all duration-[500ms] ease-out bg-off-white shadow-2xl ${isScrolled ? 'lg:bg-off-white shadow-2xl ' : 'lg:bg-transparent lg:shadow-none'}`}>
      <div className="lg:flex lg:justify-between lg:items-center lg:py-6 lg:px-9 lg:mx-20">
        <Link href="#home" className={`font-kaushan text-[2rem] inline-block font-semibold text-gray-dark my-4 ml-4 lg:my-0 lg:ml-0 ${isScrolled ? 'lg:text-gray-dark' : 'lg:text-off-white'}`}>Portfolio</Link>

        <div onClick={()=> setOpen(!open)} className='text-2xl text-gray-dark absolute right-8 top-6 cursor-pointer lg:hidden '>
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>

        <ul className={`absolute lg:static -z-10 lg:z-auto text-gray-light bg-off-white right-0 w-full lg:w-auto uppercase text-sm lg:text-[0.8rem] tracking-widest font-medium leading-[0.938rem] pt-8 border-t-2 border-solid border-pink-global lg:border-none transition-all duration-500 ease-in lg:transition-none lg:pt-0 lg:flex lg:items-center lg:gap-10 opacity-0 ${isScrolled ? 'lg:opacity-100' : 'lg:opacity-0'} ${open ? 'translate-x-0 opacity-100 text-center shadow-2xl ':'translate-x-full text-center lg:translate-x-0 '}`}>
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.section}
              className={`${styleLink} `}
            >
              <Link href={`#${menuItem.section}`} style={isDesktop && activeSection === menuItem.section ? activeStyle : {}}>
                {menuItem.text}
              </Link>
            </li>
          ))}
          <li>
            <Link href='#contact' title='contact' className='hidden lg:inline-block'>
              <FontAwesomeIcon icon={faEnvelope} style={isDesktop && activeSection === 'contact' ? activeContact : {}} className='text-[1.2rem] text-gray-dark pb-1 hover:text-pink-global transition-all duration-[400ms] ease-out' />
            </Link>
          </li>
          <li className={`${styleLink} lg:hidden `}>
            <Link href='#contact' className=' inline-block mb-4 lg:mb-0' style={isDesktop && activeSection === 'contact' ? activeStyle : {}}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;