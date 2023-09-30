/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faLink } from "@fortawesome/free-solid-svg-icons";
import { BsGithub } from 'react-icons/bs';

const ProjectCard = ({ img, title, github, url, ToggleProjectInfo }) => {
 
  return (
    <div className="bg-white group relative overflow-hidden h-[400px] shadow-sm will-change-transform">
      <img
        src={img}
        alt={title}
        className='w-full h-full object-cover grayscale transition-transform duration-[400ms] ease-out group-hover:scale-105 group-hover:grayscale-0'
      />
      <div className='absolute w-full bg-pink-global h-0 z-10 -bottom-5 p-4 group-hover:h-[100px] group-hover:opacity-80 group-hover:bottom-0 transition-bottom duration-500 ease-in-out opacity-90'>
        <h3 className='text-[1.7rem] text-center opacity-100 text-black font-kaushan font-semibold'>{title}</h3>
        <div className='flex justify-center m-3 items-center'>
          <div title='Voir plus' onClick={ToggleProjectInfo}><FontAwesomeIcon icon={faCirclePlus} className='text-black mx-[5px] transition-transform duration-200 opacity-100 ease-in hover:scale-125 cursor-pointer' /></div>
          <a href={github} title='Lien Github' target="_blank" className='text-black mx-[5px] mb-[2px] transition-transform duration-200 opacity-100 ease-in hover:scale-125'><BsGithub /></a>
          {url ? (
            <a href={url} title='Lien du site' target="_blank"><FontAwesomeIcon icon={faLink} className='text-black mx-[5px] opacity-100 transition-transform duration-200 ease-in hover:scale-125' /></a>
          ) : null}
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;


