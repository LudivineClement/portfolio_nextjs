import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"

const SectionCTA = () => {
  return (
    <section className='text-off-white bg-bg-black bg-center bg-cover bg-fixed bg-gray-global brightness-[1.5] px-4 py-8 md:p-10 lg:p-20 mt-20 md:mt-24 lg:mt-[120px] mb-5 flex flex-col justify-center items-center gap-6 lg:gap-9 '>
      <motion.p
        className='text-center text-lg md:text-2xl lg:text-[1.7rem] blur-[0.5px] leading-8 md:leading-10 tracking-wider'
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >Découvrez mon profil et parcours complet, en <span className='text-pink-global'>téléchargeant mon CV</span> </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <a href="/cv-ludivine-clement.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-dark text-sm md:text-base uppercase font-medium py-2 px-3 md:px-4 group bg-pink-global tracking-wider rounded border-2 border-solid border-transparent transition-all duration-300 ease-in hover:text-pink-global hover:bg-black hover:border-2 hover:border-solid hover:border-pink-global">
          Voir mon CV <span><FontAwesomeIcon icon={faCircleChevronRight} className="fa-circle-chevron-right mt-1 md:mt-0 ml-1 transition-all duration-300 ease-in translate-x-0 group-hover:translate-x-1" /></span>
        </a>
      </motion.div>

    </section>
  );
};

export default SectionCTA;