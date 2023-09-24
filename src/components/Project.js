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
        className={`grid grid-cols-3 gap-x-10 gap-y-[50px] transition-transform duration-1000 ease-in-out ${
          isModalOpen
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
        <div
        className={` ${isModalOpen ? 'fixed inset-0 flex justify-end items-end z-50 bg-black bg-opacity-50' : 'opacity-100'} `}
          onClick={handleCloseModal}
        >
          <div
            className={`bg-off-white scrollBar ${isModalOpen ? 'translate-x-0' : 'translate-x-full'} w-[50%] h-[87.25%] p-4 shadow-lg border-l-[5px] border-solid border-pink-global z-10 overflow-y-auto`}
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
    </section>
  );
};

export default Project;

