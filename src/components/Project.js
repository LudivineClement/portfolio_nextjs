import React, { useState, useEffect } from "react";
import dataProject from "../data/dataProjects.json";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(6);
  const allProjects = dataProject;

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("scrollHidden");
    } else {
      document.body.classList.remove("scrollHidden");
    }

    return () => {
      document.body.classList.remove("scrollHidden");
    };
  }, [isModalOpen]);

  const handleProjectSelect = (data) => {
    setSelectedProject(data);

    // S'assure que le composant ProjectModal s'ouvre après la sélection du projet
    setTimeout(() => {
      setIsModalOpen(true);
    }, 0);
  };

  // Gère l'affichage de plus de projets
  const handleShowMoreProjects = () => {
    setProjectsToShow(projectsToShow + 3);
  };

  return (
    <section
      data-section
      id="projects"
      className="m-auto -my-14 max-w-[1250px] px-5 py-14 md:-my-20 md:px-6 md:py-20 lg:-my-24 lg:px-12 lg:pt-24"
    >
      <h2 className="mb-10 mt-[72px] font-kaushan text-3xl text-gray-dark md:mb-12 md:text-[2.4rem] lg:mb-[60px] lg:mt-28">
        Derniers projets
      </h2>
      <div
        className={`grid gap-x-8 gap-y-10 transition-transform duration-[1200ms] ease-in-out will-change-transform md:grid-cols-2 md:duration-[1000ms] lg:grid-cols-3 ${
          isModalOpen ? "translate-x-[-45%]" : "translate-x-0"
        }`}
      >
        {allProjects.slice(0, projectsToShow).map((data, id) => (
          <ProjectCard
            key={id}
            img={data.img_cover}
            title={data.title}
            github={data.github}
            url={data.website}
            onClick={() => handleProjectSelect(data)}
            id={id}
          />
        ))}
      </div>

      {projectsToShow < allProjects.length && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: isModalOpen ? -200 : 0 }}
          transition={{ duration: 0.4 }}
          className="group m-auto mt-16 block rounded border-2 border-solid border-transparent bg-pink-light px-3 py-2 text-sm font-medium uppercase tracking-wider text-gray-dark transition-all duration-300 ease-in hover:border-2 hover:border-solid hover:border-pink-light hover:bg-gray-dark hover:text-pink-light md:px-4 "
          onClick={handleShowMoreProjects}
        >
          Voir plus de projets
        </motion.button>
      )}
      {selectedProject && (
        <ProjectModal
          data={selectedProject}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </section>
  );
};

export default Project;
