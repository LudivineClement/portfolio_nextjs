import React, { useState, useEffect } from 'react';
import dataProject from '../data/dataProjects.json';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  return (
    <section
      data-section
      id='projects'
      className='px-5 py-14 -my-14 md:px-6 md:py-20 md:-my-20 lg:py-24 lg:px-12 lg:-my-24 m-auto max-w-[1250px]'
    >
      <h2 className='mb-10 md:mb-12 lg:mb-[60px] mt-[72px] lg:mt-28 font-kaushan text-3xl md:text-[2.4rem] text-gray-dark'>
        Derniers projets
      </h2>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 transition-transform duration-[1500ms] md:duration-[1200ms] will-change-transform ease-in-out  ${isModalOpen
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
            onClick={() => handleProjectSelect(data)}
            id={id}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal data={selectedProject} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />)}

    </section>
  );
};

export default Project;


