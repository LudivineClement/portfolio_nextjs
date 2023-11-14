"use client";

import React from "react";
import { RiFilePdf2Fill } from "react-icons/ri";
import { BiLogoGithub, BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-40 bg-bg-black bg-cover bg-center p-8">
      <div className=" flex items-center justify-center gap-9 ">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <a
            href="https://github.com/LudivineClement"
            target="_blank"
            title="Github"
          >
            <BiLogoGithub className="h-7  w-7 text-off-white transition-all duration-300 ease-in-out hover:brightness-75" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <a
            href="https://www.linkedin.com/in/ludivine-cl%C3%A9ment-d%C3%A9veloppeuse-web/"
            target="_blank"
            title="Linkedin"
          >
            <BiLogoLinkedin className="h-7 w-7 text-off-white transition-all duration-300 ease-in-out hover:brightness-75" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <a
            href="mailto:ludivine.clement0985@gmail.com"
            target="blank"
            title="Gmail"
          >
            <BiLogoGmail className="mt-[2px] h-7 w-7 text-off-white transition-all duration-300 ease-in-out hover:brightness-75" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <a
            href="/cv-Clement-Ludivine.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Voir le CV pdf"
          >
            <RiFilePdf2Fill className="h-7 w-7 text-off-white transition-all duration-300 ease-in-out hover:brightness-75" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
