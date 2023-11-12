'use client'

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  // État pour savoir si la page est scrollé ou non
  const [isScrolled, setIsScrolled] = useState(false);

  // État pour suivre la section active
  const [activeSection, setActiveSection] = useState(null);

  // Référence aux sections de la page
  const sections = useRef([]);

  // État pour suivre l'état du menu sur mobile (ouvert ou fermé)
  const [open, setOpen] = useState(false)

  // Gère le scroll de la page
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


  // Fonction pour gérer l'identification de la section actuellement visible lors du défilement
  const handleActiveLink = () => {
    const pageYOffset = window.scrollY;

    // Initialise la variable pour stocker l'identifiant de la nouvelle section active
    let newActiveSection = null;

    sections.current.forEach((section) => {
      // Récupère le début du haut de la section par rapport au haut de la page
      const sectionOffsetTop = section.offsetTop;

      // Récupère la hauteur de la section
      const sectionHeight = section.offsetHeight;

      // Vérifie si la position actuelle du scroll se trouve à l'intérieur de la section

      // Condition :  si la position de la barre de scroll est après le début de la section
      // (pageYOffset est supérieur ou égal au haut (début) de la section)
      // ET
      // si la position du scroll est avant la fin de la section
      // (pageYOffset est strictement inférieur au haut de la section + sa hauteur)
      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        // alors, mettre à jour la variable avec l'id de la section actuellement visible
        newActiveSection = section.id;
      }
    });

    // Met à jour l'état avec l'id de la nouvelle section active
    setActiveSection(newActiveSection);
  };

  // Mets à jour la section active lors du défilement
  useEffect(() => {
    // Sélectionne toutes les sections de la page et les stocke dans la référence 'sections'
    sections.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleActiveLink);

    return () => {
      window.removeEventListener('scroll', handleActiveLink);
    };
  }, []);


  // Définition des éléments du menu
  const menuItems = [
    { text: 'Accueil', section: 'home' },
    { text: 'A propos', section: 'about' },
    { text: 'Compétences', section: 'skills' },
    { text: 'Mes projets', section: 'projects' },
  ];

  // Styles pour les liens du menu
  const styleLink = "mb-8 mx-8 lg:mb-0 lg:mx-0 transition-all duration-500 ease-out hover:text-pink-global lg:hover:text-gray-dark lg:hover:shadow-[inset_0px_-6px_0px] lg:hover:shadow-pink-light"

  // Style pour l'icône de contact lorsque la section est active
  const activeContact = {
    color: '#d68da2',
  };

  // Style pour les liens du menu lorsque la section est active
  const activeStyle = {
    color: '#292929',
    boxShadow: 'inset 0 -7px 0 #f3b0c3',
    transition: 'all 0.4s ease-in',
    lineHeight: '10px',
  };

  // Détection si la fenêtre est au format desktop
  // (Utilisé pour éviter des erreurs lorsque le code est exécuté côté serveur (SSR) où `window` n'est pas défini)
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  return (
    <nav className={`fixed w-screen top-0 left-0 z-[100] transition-all duration-700 ease-out ${isScrolled || open ? 'bg-off-white shadow-2xl ' : 'bg-transparent shadow-none'}`}>
      <div className=" lg:flex lg:justify-between lg:items-center lg:py-6 lg:px-9 lg:mx-20  ">
        <a href="#home" className={`font-kaushan text-[2rem] inline-block font-semibold my-4 ml-4 lg:my-0 lg:ml-0 ${isScrolled || open ? 'text-gray-dark' : 'text-off-white'}`}>Portfolio</a>

        {/* Icône du menu pour les appareils mobiles */}
        <div
          onClick={() => setOpen(!open)}
          className='text-2xl text-gray-dark absolute right-6 top-7 cursor-pointer lg:hidden '
        >
          {open ? (
            <AiOutlineClose
              className={isScrolled || open ? 'text-gray-dark' : 'text-off-white'}
            />
          ) : (
            <RiMenu3Fill
              className={isScrolled || open ? 'text-gray-dark' : 'text-off-white'}
            />
          )}
        </div>

        {/* Liste des liens du menu */}
        <ul className={`absolute lg:static -z-10 lg:z-auto text-gray-dark lg:text-gray-light bg-off-white lg:bg-transparent right-0 w-full lg:w-auto uppercase text-[0.938rem] lg:text-[0.8rem] tracking-widest font-medium leading-[0.938rem] pt-8 transition-all duration-500 ease-in lg:transition-none lg:pt-0 lg:flex lg:items-center lg:gap-10 opacity-0 ${isScrolled ? 'lg:opacity-100 lg:bg-transparent' : 'lg:opacity-0'} ${open ? 'translate-x-0 opacity-100 text-center shadow-2xl' : 'translate-x-full text-center lg:translate-x-0 '}`}>

          {menuItems.map((menuItem) => (
            <li
              key={menuItem.section}
              className={`${styleLink} `}
            >
              <a href={`#${menuItem.section}`} style={isDesktop && activeSection === menuItem.section ? activeStyle : {}}>
                {menuItem.text}
              </a>
            </li>
          ))}
          <li>
            {/* Icône de contact */}
            <a href='#contact' title='contact' className='hidden lg:inline-block'>
              <FontAwesomeIcon icon={faEnvelope} style={isDesktop && activeSection === 'contact' ? activeContact : {}} className='text-[1.2rem] text-gray-dark pb-1 hover:text-pink-global transition-all duration-[400ms] ease-out' />
            </a>
          </li>
          {/*Lien de contact en mobile */}
          <li className={`${styleLink} lg:hidden `}>
            <a href='#contact' className=' inline-block mb-4 lg:mb-0' style={isDesktop && activeSection === 'contact' ? activeStyle : {}}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
