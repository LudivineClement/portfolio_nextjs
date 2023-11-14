import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SectionCTA = () => {
  return (
    <section className="mb-5 mt-20 flex flex-col items-center justify-center gap-6 bg-gray-global bg-bg-black bg-cover bg-fixed bg-center px-4 py-8 text-off-white brightness-[1.5] md:mt-24 md:p-10 lg:mt-[120px] lg:gap-9 lg:p-20 ">
      <motion.p
        className="text-center text-lg leading-8 tracking-wider blur-[0.5px] md:text-2xl md:leading-10 lg:text-[1.7rem]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Découvrez mon profil et parcours complet, en{" "}
        <span className="text-pink-global">téléchargeant mon CV</span>{" "}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <a
          href="/cv-Clement-Ludivine.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded border-2 border-solid border-transparent bg-pink-global px-3 py-2 text-sm font-medium uppercase tracking-wider text-gray-dark transition-all duration-300 ease-in hover:border-2 hover:border-solid hover:border-pink-global hover:bg-black hover:text-pink-global md:px-4 md:text-base"
        >
          Voir mon CV (PDF){" "}
          <span>
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="fa-circle-chevron-right ml-1 mt-1 translate-x-0 transition-all duration-300 ease-in group-hover:translate-x-1 md:mt-0"
            />
          </span>
        </a>
        <p className="sr-only">
          Téléchargez mon CV au format PDF en cliquant sur ce lien.
        </p>
      </motion.div>
    </section>
  );
};

export default SectionCTA;
