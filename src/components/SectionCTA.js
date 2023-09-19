import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const SectionCTA = () => {
  return (
    <div className='section_cv text-off-white bg-bg-black bg-center bg-cover bg-fixed bg-gray-global brightness-[1.5] p-20 mt-[120px] mb-5 flex flex-col justify-center items-center gap-6 '>
      <p className='text-center text-[1.7rem] blur-[0.5px] tracking-wider'>Découvrez mon profil et parcours complet, en <span className='text-pink-global'>téléchargeant mon CV</span> </p>
      <button className='text-gray-dark uppercase text-[1.063rem] font-medium py-2 px-4 bg-pink-global tracking-wider rounded border-2 border-solid  border-transparent transition-all duration-[300ms] ease-in hover:text-pink-global hover:bg-black hover:border-2 hover:border-solid hover:border-pink-global '>Voir mon CV <span><FontAwesomeIcon icon={faCircleChevronRight} className='fa-circle-chevron-right ml-1 transition-all duration-[300ms] ease-in translate-x-0' /></span></button>
      
    </div>
  );
};

export default SectionCTA;