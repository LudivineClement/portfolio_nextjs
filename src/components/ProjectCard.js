/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faLink } from "@fortawesome/free-solid-svg-icons";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const ProjectCard = ({ img, title, github, url, onClick, id }) => {
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
    }),
  };

  // Gère le clic sur les cards (pour les écrans larges)
  const handleClick = () => {
    if (window.innerWidth > 1024) {
      onClick();
    }
  };

  // Gère le clic sur les cards (pour les écrans + petits)
  const handleClickMobile = () => {
    if (window.innerWidth < 1024) {
      onClick();
    }
  };
  return (
    <motion.div
      variants={animationProject}
      initial="initial"
      whileInView="animate"
      custom={id}
      viewport={{ once: true }}
      className="group relative h-[400px] cursor-pointer overflow-hidden bg-white shadow-sm will-change-transform"
    >
      <img
        src={img}
        alt=""
        onClick={handleClick}
        className="h-full w-full object-cover transition-transform duration-[400ms] ease-out lg:grayscale group-hover:lg:scale-105 group-hover:lg:grayscale-0"
      />
      <div
        onClick={handleClickMobile}
        className="transition-all absolute -bottom-5 z-10 flex h-0 w-full flex-col items-center justify-center overflow-hidden bg-pink-global  p-4 opacity-90 duration-500 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:opacity-80 lg:cursor-default lg:justify-normal group-hover:lg:h-[100px]"
      >
        <h3 className=" font-kaushan text-3xl font-semibold text-black opacity-100 lg:text-[1.7rem]">
          {title}
        </h3>

        <div className="m-3 flex items-center justify-center">
          <div title="Voir plus" onClick={onClick}>
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="mx-2 mt-[15px] cursor-pointer text-4xl text-black opacity-100 transition-transform duration-200 ease-in hover:scale-125 lg:mx-[5px] lg:mt-0 lg:text-base"
            />
          </div>

          {github && (
            <a
              href={github}
              title="Lien Github"
              target="_blank"
              className="mx-2 mb-1 hidden text-lg text-black opacity-100 transition-transform duration-200 ease-in hover:scale-125 lg:mx-[5px] lg:mb-[2px] lg:block lg:text-base"
            >
              <BsGithub />
            </a>
          )}

          {url && (
            <a
              href={url}
              title="Lien du site"
              target="_blank"
              className="hidden lg:block"
            >
              <FontAwesomeIcon
                icon={faLink}
                className="mx-2 text-lg text-black opacity-100 transition-transform duration-200 ease-in hover:scale-125 lg:mx-[5px] lg:text-base "
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
