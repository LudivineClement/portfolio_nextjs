/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faLink } from "@fortawesome/free-solid-svg-icons";
import { BsGithub } from 'react-icons/bs';
import { motion } from "framer-motion";

const ProjectCard = ({ img, title, github, url, ToggleProjectInfo, id }) => {
  
  const animationProject = {
    initial: {
      opacity: 0,
      y: 70,
    },
    animate: (id) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2 * id,
      },
    })
  }
  const handleClick = () => {
    if (window.innerWidth > 1024) {
      ToggleProjectInfo();
    }
  };

  const handleClickMobile = () => {
    if (window.innerWidth < 1024) {
      ToggleProjectInfo();
    }
  };
  return (
    <motion.div
      onClick={handleClick}
      variants={animationProject}
      initial="initial"
      whileInView="animate"
      custom={id}
      viewport={{ once: true }}
      className="bg-white group relative overflow-hidden h-[400px] cursor-pointer shadow-sm will-change-transform"
    >
      <img
        src={img}
        alt={title}
        onClick={handleClick}
        className='w-full h-full object-cover lg:grayscale transition-transform duration-[400ms] ease-out group-hover:lg:scale-105 group-hover:lg:grayscale-0'
      />
      <div onClick={handleClickMobile} className='absolute w-full flex flex-col items-center justify-center lg:justify-normal overflow-hidden bg-pink-global h-0 z-10 lg:cursor-default -bottom-5 p-4 group-hover:lg:h-[100px] group-hover:h-full group-hover:opacity-80 group-hover:bottom-0 transition-bottom duration-500 ease-in-out opacity-90'>

        <h3 className=' text-3xl lg:text-[1.7rem] opacity-100 text-black font-kaushan font-semibold'>{title}</h3>

        <div className='flex justify-center m-3 items-center'>
          <div title='Voir plus' onClick={ToggleProjectInfo}><FontAwesomeIcon icon={faCirclePlus} className='text-black text-4xl lg:text-base mx-2 lg:mx-[5px] mt-[15px] lg:mt-0 transition-transform duration-200 opacity-100 ease-in hover:scale-125 cursor-pointer' /></div>

          <a href={github} title='Lien Github' target="_blank" className='text-black text-lg lg:text-base mx-2 lg:mx-[5px] mb-1 lg:mb-[2px] transition-transform duration-200 opacity-100 ease-in hover:scale-125 hidden lg:block'><BsGithub /></a>
          {url ? (
            <a href={url} title='Lien du site' target="_blank" className='hidden lg:block'><FontAwesomeIcon icon={faLink} className='text-black text-lg lg:text-base mx-2 lg:mx-[5px] opacity-100 transition-transform duration-200 ease-in hover:scale-125 ' /></a>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
};

export default ProjectCard;