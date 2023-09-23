import React, { useState, useEffect } from 'react';
import dataProject from '../data/dataProjects.json';
import ProjectCard from './ProjectCard';
import ProjectInfos from './ProjectInfos';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Nettoie la classe lors de la suppression du composant
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  const handleProjectSelect = (projectData) => {
    setSelectedProject(projectData);
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
        className={`grid grid-cols-3 gap-x-10 gap-y-[50px] transition-transform duration-300 ease-in-out ${
          isModalOpen
            ? 'translate-x-[-49.5%]'
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
            onToggleProjectInfo={() => handleProjectSelect(data)}
          />
        ))}
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-end items-end z-50 bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className={`bg-white scrollBar w-[80%] md:w-[50%] lg:w-[50%] p-4 shadow-lg border-l-[5px] border-solid border-pink-global transition-transform duration-300 ease-in-out z-10 ${
              isModalOpen
                ? 'translate-y-0'
                : 'translate-y-[100%]'
            } overflow-y-auto max-h-full md:max-h-[80%] lg:max-h-[86%] `}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              X
            </button>
            {selectedProject && (
              <ProjectInfos data={selectedProject} />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;

