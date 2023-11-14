import React from "react";
import Image from "next/image";
import dataSkills from "../data/dataSkills.json";
import { motion } from "framer-motion";

const Skills = () => {
  const animationProject = {
    initial: {
      opacity: 0,
      y: 70,
    },
    animate: (id) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.15 * id,
      },
    }),
  };
  return (
    <section
      data-section
      id="skills"
      className=" m-auto -my-20 bg-gray-global bg-bg-black bg-cover bg-center px-5 py-14 text-off-white brightness-[1.5] md:py-20 lg:-my-24 lg:bg-fixed lg:px-12 lg:py-24"
    >
      <h2 className="mb-[30px] mt-4 text-center font-kaushan text-[2.5rem] blur-[0.5px] lg:text-[2.8rem]">
        Mes compétences
      </h2>
      <div className="md:m- m-auto flex max-w-[850px] flex-col items-center gap-6 md:flex-row lg:gap-8">
        <div className="mb-5 mt-7 flex w-full flex-wrap justify-center gap-x-5 gap-y-5 border-b-[1px] border-solid border-gray-dark pb-16 md:w-[70%] md:justify-between md:border-b-0 md:border-r-[1px] md:pr-6 md:pt-12 lg:w-[70%] lg:gap-x-7 lg:pr-[50px]">
          {dataSkills.map((data, id) => (
            <motion.div
              key={id}
              className=" group h-[72px] w-[72px] bg-transparent [perspective:1000px]"
              variants={animationProject}
              initial="initial"
              whileInView="animate"
              custom={id}
              viewport={{ once: true }}
            >
              <div className="h-full w-full text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="absolute h-full w-full [backface-visibility:hidden]">
                  <Image
                    src={data.img}
                    alt={`icône de ${data.title}`}
                    width={75}
                    height={75}
                    className="rounded-[50%]"
                  />
                </div>
                <div
                  className="absolute -top-px flex h-full w-full items-center justify-center overflow-hidden rounded-[50%] bg-black [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  title={data.title}
                >
                  <p className="font-extralight uppercase">{data.name} </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex w-full flex-row-reverse items-center justify-around gap-5 md:block md:w-[30%] lg:w-[30%] ">
          <motion.ul
            className="pb-0 text-gray-global md:border-b md:border-solid md:border-gray-dark md:pb-5 lg:pb-5"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <li className="mb-1 md:mb-0">▸ Référencement SEO</li>
            <li className="mb-1 md:mb-0">▸ Méthode agile</li>
            <li className="mb-1  md:mb-0">▸ Accessibilité</li>
          </motion.ul>

          <motion.ul
            className="pt-0 text-gray-global md:pt-5"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <li>▸ Rigueur</li>
            <li>▸ Autonomie</li>
            <li>▸ Adaptibilité</li>
            <li>▸ Curiosité</li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
