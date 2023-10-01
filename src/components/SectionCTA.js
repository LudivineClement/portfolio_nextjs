import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const SectionCTA = () => {
  return (
    <section className='text-off-white bg-bg-black bg-center bg-cover bg-fixed bg-gray-global brightness-[1.5] px-4 py-8 md:p-10 lg:p-20 mt-20 md:mt-24 lg:mt-[120px] mb-5 flex flex-col justify-center items-center gap-6 lg:gap-9 '>
      <p className='text-center text-lg md:text-2xl lg:text-[1.7rem] blur-[0.5px] leading-8 md:leading-10 tracking-wider'>Découvrez mon profil et parcours complet, en <span className='text-pink-global'>téléchargeant mon CV</span> </p>
      <button className='text-gray-dark text-sm md:text-base uppercase font-medium py-2 px-3 md:px-4 group bg-pink-global tracking-wider rounded border-2 border-solid  border-transparent transition-all duration-300 ease-in hover:text-pink-global hover:bg-black hover:border-2 hover:border-solid hover:border-pink-global '>Voir mon CV <span><FontAwesomeIcon icon={faCircleChevronRight} className='fa-circle-chevron-right mt-1 md:mt-0 ml-1 transition-all duration-300 ease-in translate-x-0 group-hover:translate-x-1' /></span></button>
      
    </section>
  );
};

export default SectionCTA;