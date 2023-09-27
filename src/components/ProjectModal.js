/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({ data, isOpen, setIsOpen }) => {

  const handleClose = () => {
    setIsOpen(false);
  };
  

  return (
    <div
      className={`fixed inset-0 flex justify-end items-end z-50 bg-black bg-opacity-50 transition-opacity duration-[500ms] ease-in-out ${isOpen ? '' : 'opacity-0 pointer-events-none'
        }`}
      onClick={handleClose}
    >
      <div
        className={`bg-off-white scrollBar w-[50%] h-[90%] p-4 shadow-lg border-l-[5px] border-solid border-pink-global z-10 overflow-y-auto transition-transform duration-[1000ms] ease-in-out ${isOpen
          ? 'translate-x-0'
          : 'translate-x-full'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-10 left-4 text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-dark focus:outline-none"
        >
          <FontAwesomeIcon icon={faXmark} className='text-2xl' />
        </button>
        <div>

          <img src={data.img_info} alt={data.client} className='h-[200px] object-cover m-auto mt-16 mb-10' />

          <p className='leading-[1.6rem]'><span className='text-gray-dark font-semibold'>Client :</span> {data.client}</p>
          <p className='mt-4 leading-[1.6rem]'><span className='text-gray-dark font-semibold'>Présentation :</span> {data.presentation}</p>
          <p className='mt-4 leading-[1.6rem]'><span className='text-gray-dark font-semibold'>Objectifs :</span> {data.overview}</p>
          <div>
            {data.tags.map((tag, index) => (
              <span key={index} className=" inline-block px-3 py-1 bg-pink-global text-off-white rounded-xl text-sm mt-6 mr-3 mb-2">{tag} </span>
            ))}
          </div>
          <div className={`flex items-end justify-end mt-7`}>
            <a href={data.github} target="_blank" className="relative px-4 py-[10px] overflow-hidden font-medium text-gray-global text-sm bg-gray-100 border border-gray-100 rounded-xl shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-pink-light group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-pink-light group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-light group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-light group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-pink-global opacity-0 group-hover:opacity-100"></span>
              <span className="relative inline-flex items-center gap-2 transition-colors duration-300 delay-200 group-hover:text-white ease">Lien Github <FontAwesomeIcon icon={faUpRightFromSquare} className='text-xs transition-colors duration-300 delay-200 ease text-gray-global group-hover:text-white' /></span></a>
              
            {data.website ? (
              <a href={data.website} target="_blank" className="relative px-4 py-[10px] ml-4 overflow-hidden font-medium text-gray-global text-sm group-hover:text-white bg-gray-100 border border-gray-100 rounded-xl shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-pink-light group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-pink-light group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-light group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-light group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-pink-global opacity-0 group-hover:opacity-100"></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 delay-200 group-hover:text-white ease">Lien vers le site  <FontAwesomeIcon icon={faUpRightFromSquare} className='text-xs transition-colors duration-300 delay-200 ease text-gray-global group-hover:text-white' /></span></a>
            ) : null}
          </div>

        </div>
      </div>
    </div>
  );
};


export default ProjectModal;


