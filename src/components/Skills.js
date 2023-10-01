import React from 'react';
import Image from 'next/image';
import dataSkills from '../data/dataSkills.json'

const Skills = () => {
  return (
    <section data-section id='skills' className=' py-14 px-5 md:py-20 -my-20 lg:py-24 lg:px-12 lg:-my-24 m-auto text-off-white bg-bg-black bg-fixed bg-center bg-cover bg-gray-global brightness-[1.5]'>
      <h2 className='mb-[30px] mt-4 font-kaushan text-[2.5rem] lg:text-[2.8rem] text-center blur-[0.5px]'>Mes compétences</h2>
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-6 lg:gap-8 max-w-[850px] m-auto">

        <div className="flex justify-between gap-x-5 lg:gap-x-7 gap-y-5 flex-wrap w-full md:w-[70%] lg:w-[70%] pb-16 md:pr-6 lg:pr-[50px] mt-7 mb-5 border-b-[1px] md:border-r-[1px] lg:border-r-[1px]border-solid border-gray-dark">
          {
            dataSkills.map((data, id) => (
              <div key={id} className=" [perspective:1000px] group bg-transparent w-[72px] h-[72px]">
                <div className="w-full h-full text-center [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700 ">
                  <div className="absolute w-full h-full [backface-visibility:hidden]">
                    <Image
                      src={data.img}
                      alt="icône de github"
                      width={70}
                      height={70}
                      className='rounded-[50%]'
                    />
                  </div>
                  <div className="absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)] ">
                    <p className='uppercase font-extralight'>{data.title}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="w-full md:w-[30%] lg:w-[30%] ">
          <ul className="pb-10 md:pb-5 lg:pb-5 text-gray-global border-b border-solid border-gray-dark">
            <li>▸ Référencement SEO</li>
            <li>▸ Méthode agile</li>
            <li>▸ Accessibilité</li>
          </ul>
          <ul className="pt-10 md:pt-5 lg:pt-5 text-gray-global">
            <li>▸ Rigueur</li>
            <li>▸ Autonomie</li>
            <li>▸ Adaptibilité</li>
            <li>▸ Curiosité</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;