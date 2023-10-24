import React, { useState, useEffect } from 'react';
import dataProject from '../data/dataProjects.json';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { motion } from "framer-motion";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(6);
  const allProjects = dataProject;

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('scrollHidden');
    } else {
      document.body.classList.remove('scrollHidden');
    }

    return () => {
      document.body.classList.remove('scrollHidden');
    };
  }, [isModalOpen]);

  const handleProjectSelect = (data) => {
    setSelectedProject(data);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 0);
  };

  const handleShowMoreProjects = () => {
    setProjectsToShow(projectsToShow + 3);
  };

  return (
    <section data-section id="projects" className="px-5 py-14 -my-14 md:px-6 md:py-20 md:-my-20 lg:pt-24 lg:px-12 lg:-my-24 m-auto max-w-[1250px]">
      <h2 className="mb-10 md:mb-12 lg:mb-[60px] mt-[72px] lg:mt-28 font-kaushan text-3xl md:text-[2.4rem] text-gray-dark">
        Derniers projets
      </h2>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 transition-transform duration-[1500ms] md:duration-[1200ms] will-change-transform ease-in-out ${isModalOpen ? 'translate-x-[-45%]' : 'translate-x-0'}`}
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
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-gray-dark text-sm uppercase font-medium block m-auto mt-16 py-2 px-3 md:px-4 group bg-pink-light tracking-wider rounded border-2 border-solid border-transparent transition-all duration-300 ease-in hover:text-pink-light hover:bg-gray-dark hover:border-2 hover:border-solid hover:border-pink-light "
          onClick={handleShowMoreProjects}
        >
          Voir plus de projets
        </motion.button>
      )}
      {selectedProject && <ProjectModal data={selectedProject} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </section>
  );
};

export default Project;


