/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
              <a href={data.github} target="_blank" className='text-gray-global text-sm inline-block border-solid border-gray-global border-[1px] rounded-sm mb-3 p-2 transition-all duration-300 ease-in-out hover:bg-pink-global hover:text-off-white hover:border-transparent'>Lien Github</a>
              {data.website ? (
                <a href={data.website} className='text-gray-global text-sm inline-block border-solid border-gray-global border-[1px] rounded-sm ml-5 mb-3 p-2 transition-all duration-300 ease-in-out hover:bg-pink-global hover:text-off-white hover:border-transparent' target="_blank">Lien du site</a>
              ) : null}
            </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;


