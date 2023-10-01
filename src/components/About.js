/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section data-section id="about" className=' px-5 pt-6 pb-12 -my-20 md:px-6  lg:py-24 lg:px-12 lg:-my-24 m-auto lg:max-w-[1160px]'>
      <div className="md:flex md:gap-8 lg:flex lg:gap-12 my-24 lg:my-32">
        <img src="/img/img-about.webp" alt="ordinateur de développeur avec un projet réalisé" className='h-[500px] rounded-[3px] m-auto md:m-0 object-cover' />
        <div className="content-about">
          <h1 className='font-kaushan text-[2.3rem] md:text-[2rem] lg:text-[2.5rem] pt-12 pb-3 md:pt-3 md:pb-3 lg:pt-3 lg:pb-3'>Moi c&apos;est Ludivine, <br />
            développeuse web passionnée.</h1>
          <p className='pt-3 text-sm lg:text-[0.95rem] text-gray-light leading-6'>
            Je suis principalement concentrée sur le développement front-end,
            où j&apos;adore concevoir des interfaces utilisateurs intuitives et
            esthétiques. J&apos;ai débuté mon parcours de développeuse web en
            autodidacte et exploré la création de sites via projets et cours
            en ligne.
          </p>
          <p className='pt-3 text-sm lg:text-[0.95rem] text-gray-light leading-6'>
            Formée intensivement pendant 9 mois chez OpenCLassrooms, j&apos;ai pu me familiariser,
            entre autres, avec <span className='inline-block text-gray-dark pt-1 leading-4 shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light'>React,</span> <span className='inline-block text-gray-dark pt-1 leading-4 shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light'>Sass</span>, <span className='inline-block text-gray-dark pt-1 leading-4 shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light'>Node.js</span> et <span className='inline-block text-gray-dark pt-1 leading-4 shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light'>Redux</span> pour créer des
            applications web performantes. Je reste toujours motivée à
            participer à de nouveaux projets, à apprendre de nouvelles
            technologies et à travailler avec des esprits créatifs.
          </p>
          <p className='pt-3  text-sm lg:text-[0.95rem] text-gray-light leading-6'>
            N&apos;hésitez pas à parcourir mon portfolio pour découvrir mon
            univers. Si vous souhaitez collaborer ou simplement discuter de
            projets, je serais ravie d&apos;échanger avec vous !
          </p>
          <Link href="#contact" className='inline-block mt-9 uppercase font-medium pl-[2px] text-[0.9rem] leading-[0.875rem] tracking-widest shadow-[inset_0px_-6px_0px] shadow-pink-light transition-all duration-[400ms] ease-out hover:shadow-[inset_0px_-15px_0px] hover:shadow-pink-light '>Me contacter</Link>
        </div>
      </div>
    </section>
  );
};

export default About;