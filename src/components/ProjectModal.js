/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineClose } from "react-icons/ai";

const ProjectModal = ({ data, isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-end transition-opacity duration-[500ms] ease-in-out ${
        isOpen ? "md:bg-black md:bg-opacity-50" : "pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`scrollBar z-10 h-full w-screen overflow-y-auto border-l-[5px] border-solid border-pink-global bg-off-white p-4 shadow-lg transition-transform duration-[800ms] ease-in-out md:w-2/3 lg:w-1/2 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute left-4 top-28 text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-dark focus:outline-none lg:top-32"
        >
          <AiOutlineClose className="text-2xl" />
        </button>
        <div>
          <img
            src={data.img_info}
            alt={data.client}
            className="m-auto mb-10 mt-40 h-[120px] object-cover md:h-[150px] lg:mt-44 lg:h-[180px]"
          />

          {/* Informations sur le projet */}
          <p className="text-[0.940rem] leading-[1.6rem] md:text-base">
            <span className="font-semibold text-gray-dark">Client :</span>{" "}
            {data.client}
          </p>
          <p className="mt-4 text-[0.940rem] leading-[1.6rem] md:text-base">
            <span className="font-semibold text-gray-dark">Présentation :</span>{" "}
            {data.presentation}
          </p>
          <p className="mt-4 text-[0.940rem] leading-[1.6rem] md:text-base">
            <span className="font-semibold text-gray-dark">Objectifs :</span>{" "}
            {data.overview}
          </p>

          {/* Affichage des balises/tags */}
          <div className="mt-6">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className=" mb-2 mr-3 mt-2 inline-block rounded-xl bg-pink-global px-3 py-1 text-sm text-off-white"
              >
                {tag}{" "}
              </span>
            ))}
          </div>

          <div className={`mt-7 flex items-end justify-end`}>
            {/* Liens vers GitHub */}
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                className="group relative mb-5 overflow-hidden rounded-xl border border-gray-100 bg-gray-100 px-4 py-[10px] text-sm font-medium text-gray-global shadow-inner"
              >
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-pink-light transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-pink-light transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute left-0 top-0 h-0 w-full bg-pink-light transition-all delay-200 duration-300 group-hover:h-full"></span>
                <span className="ease absolute bottom-0 left-0 h-0 w-full bg-pink-light transition-all delay-200 duration-300 group-hover:h-full"></span>
                <span className="absolute inset-0 h-full w-full bg-pink-global opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
                <span className="ease relative inline-flex items-center gap-2 transition-colors delay-200 duration-300 group-hover:text-white">
                  Lien Github{" "}
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ease text-xs text-gray-global transition-colors delay-200 duration-300 group-hover:text-white"
                  />
                </span>
              </a>
            )}

            {/* Liens vers le site */}
            {data.website && (
              <a
                href={data.website}
                target="_blank"
                className="group relative mb-5 ml-4 overflow-hidden rounded-xl border border-gray-100 bg-gray-100 px-4 py-[10px] text-sm font-medium text-gray-global shadow-inner group-hover:text-white"
              >
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-pink-light transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-pink-light transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute left-0 top-0 h-0 w-full bg-pink-light transition-all delay-200 duration-300 group-hover:h-full"></span>
                <span className="ease absolute bottom-0 left-0 h-0 w-full bg-pink-light transition-all delay-200 duration-300 group-hover:h-full"></span>
                <span className="absolute inset-0 h-full w-full bg-pink-global opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
                <span className="ease relative inline-flex items-center gap-2 transition-colors delay-200 duration-300 group-hover:text-white">
                  Lien vers le site{" "}
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ease text-xs text-gray-global transition-colors delay-200 duration-300 group-hover:text-white"
                  />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
