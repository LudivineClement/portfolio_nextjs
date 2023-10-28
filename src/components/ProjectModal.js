/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineClose } from 'react-icons/ai';

const ProjectModal = ({ data, isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-end items-end z-50 transition-opacity duration-[500ms] ease-in-out ${isOpen ? 'md:bg-black md:bg-opacity-50' : 'pointer-events-none'
        }`}
      onClick={handleClose}
    >
      <div
        className={`bg-off-white scrollBar w-screen md:w-2/3 lg:w-1/2 h-full p-4 shadow-lg border-l-[5px] border-solid border-pink-global z-10 overflow-y-auto transition-transform duration-[800ms] ease-in-out ${isOpen
          ? 'translate-x-0'
          : 'translate-x-full'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-28 lg:top-32 left-4 text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-dark focus:outline-none"
        >
          <AiOutlineClose className='text-2xl' />
        </button>
        <div>

          <img src={data.img_info} alt={data.client} className='h-[120px] md:h-[150px] lg:h-[180px] object-cover m-auto mt-40 lg:mt-44 mb-10' />

          <p className='text-[0.940rem] md:text-base leading-[1.6rem]'><span className='text-gray-dark font-semibold'>Client :</span> {data.client}</p>
          <p className='mt-4 text-[0.940rem] md:text-base leading-[1.6rem]'><span className='text-gray-dark font-semibold'>Présentation :</span> {data.presentation}</p>
          <p className='mt-4 text-[0.940rem] md:text-base leading-[1.6rem]'><span className='text-gray-dark font-semibold'>Objectifs :</span> {data.overview}</p>
          <div className='mt-6'>
            {data.tags.map((tag, index) => (
              <span key={index} className=" inline-block px-3 py-1 bg-pink-global text-off-white rounded-xl text-sm mt-2 mr-3 mb-2">{tag} </span>
            ))}
          </div>
          <div className={`flex items-end justify-end mt-7`}>
            {data.github ? (
              <a href={data.github} target="_blank" className="relative px-4 py-[10px] mb-5 overflow-hidden font-medium text-gray-global text-sm bg-gray-100 border border-gray-100 rounded-xl shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-pink-light group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-pink-light group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-light group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-pink-light group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-pink-global opacity-0 group-hover:opacity-100"></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 delay-200 group-hover:text-white ease">Lien Github <FontAwesomeIcon icon={faUpRightFromSquare} className='text-xs transition-colors duration-300 delay-200 ease text-gray-global group-hover:text-white' /></span></a>
            ) : null}
            {data.website ? (
              <a href={data.website} target="_blank" className="relative px-4 py-[10px] ml-4 mb-5 overflow-hidden font-medium text-gray-global text-sm group-hover:text-white bg-gray-100 border border-gray-100 rounded-xl shadow-inner group">
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


