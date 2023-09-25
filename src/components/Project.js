import React, { useState, useEffect } from 'react';
import dataProject from '../data/dataProjects.json';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('scrollHide');
    } else {
      document.body.classList.remove('scrollHide');
    }

    // Nettoie la classe lors de la suppression du composant
    return () => {
      document.body.classList.remove('scrollHide');
    };
  }, [isModalOpen]);

  const handleProjectSelect = (data) => {
    setSelectedProject(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

   return (
    <section
      data-section
      id='projects'
      className='py-24 px-12 -my-24 m-auto max-w-[1250px]'
    >
      <h2 className='mb-[60px] mt-28 font-kaushan text-[2.4rem] text-gray-dark'>
        Derniers projets
      </h2>
      <div
        className={`grid grid-cols-3 gap-x-10 gap-y-[50px] transition-transform duration-[800ms] ease-in-out ${isModalOpen
          ? 'translate-x-[-45%]'
          : 'translate-x-0'
          }`}
      >
        {dataProject.map((data, id) => (
          <ProjectCard
            key={id}
            img={data.img_cover}
            title={data.title}
            github={data.github}
            url={data.website}
            ToggleProjectInfo={() => handleProjectSelect(data)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal data={selectedProject} open={isModalOpen} close={handleCloseModal} />
      )}

    </section>
  );
};

export default Project;

