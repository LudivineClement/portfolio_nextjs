/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      data-section
      id="about"
      className=" m-auto -my-20 px-5 pb-12 pt-6 md:px-6 md:py-14 lg:-my-24 lg:max-w-[1160px] lg:px-12 lg:py-24"
    >
      <div className="my-24 md:flex md:gap-8 lg:my-32 lg:gap-12">
        <motion.img
          src="/img/img-about.webp"
          alt="ordinateur de développeur avec un projet réalisé"
          className="m-auto h-[500px] rounded-[3px] object-cover md:m-0"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <div className="content-about">
          <motion.h1
            className="pb-3 pt-12 font-kaushan text-[2.3rem] md:pb-3 md:pt-3 md:text-[2rem] lg:text-[2.5rem]"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Moi c&apos;est Ludivine, <br />
            développeuse web passionnée.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Je suis principalement concentrée sur le développement front-end,
              où j&apos;adore concevoir des interfaces utilisateurs intuitives
              et esthétiques. J&apos;ai débuté mon parcours de développeuse web
              en autodidacte et exploré la création de sites via projets et
              cours en ligne.
            </p>
            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Formée intensivement pendant 9 mois chez OpenCLassrooms, j&apos;ai
              pu me familiariser, entre autres, avec{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light">
                React,
              </span>{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light">
                Sass
              </span>
              ,{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light">
                Node.js
              </span>{" "}
              et{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-pink-ultra-light">
                Redux
              </span>{" "}
              pour créer des applications web performantes. Je reste toujours
              motivée à participer à de nouveaux projets, à apprendre de
              nouvelles technologies et à travailler avec des esprits créatifs.
            </p>
            <p className="pt-3  text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              N&apos;hésitez pas à parcourir mon portfolio pour découvrir mon
              univers. Si vous souhaitez collaborer ou simplement discuter de
              projets, je serais ravie d&apos;échanger avec vous !
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="mt-9 inline-block pl-[2px] text-[0.9rem] font-medium uppercase leading-[0.875rem] tracking-widest shadow-[inset_0px_-6px_0px] shadow-pink-light transition-all duration-[400ms] ease-out hover:shadow-[inset_0px_-15px_0px] hover:shadow-pink-light "
            >
              Me contacter
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
