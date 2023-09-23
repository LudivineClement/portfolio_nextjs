import React from 'react';
import dataProject from '../data/projects.json'
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <section data-section id='projects' className='py-24 px-12 -my-24 m-auto max-w-[1250px]'>
      <h2 className='mb-[60px] mt-28 font-kaushan text-[2.4rem] text-gray-dark'> Derniers projets</h2>
      <div className='grid grid-cols-3 gap-x-10 gap-y-[50px] mx-auto'>
        {
          dataProject.map((data, id) => (
            <ProjectCard key={id} img={data.img_cover} title={data.title} github={data.github} url={data.website} />
          ))}
      </div>
    </section>
  );
};

export default Project;