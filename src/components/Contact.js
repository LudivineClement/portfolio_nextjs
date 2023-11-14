/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); //Indique si le formulaire est en cours de soumission.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    tel: "",
    message: "",
  }); // stocke les données du formulaire

  // Gère le changement de valeur des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Soumet le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message envoyé avec succès !");
        setFormData({
          name: "",
          email: "",
          subject: "",
          tel: "",
          message: "",
        });
        toast.success("Votre message a été envoyé avec succès !");
      } else {
        console.error(
          "Une erreur s'est produite lors de l'envoi du formulaire :",
          error,
        );
        toast.error("Une erreur s'est produite lors de l'envoi du formulaire.");
      }
    } catch (error) {
      toast.error("Une erreur s'est produite lors de l'envoi du formulaire.");
      console.error(
        "Une erreur s'est produite lors de l'envoi du formulaire :",
        error,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      data-section
      id="contact"
      className="m-auto -my-24 max-w-[1300px] px-5 pt-24 md:px-8 lg:px-12"
    >
      <h2 className="mb-[30px] mt-12 font-kaushan text-3xl text-gray-dark md:text-[2.4rem] lg:mt-24 lg:text-[2.4rem]">
        Me contacter
      </h2>
      <div className="lg:flex lg:gap-20 ">
        <form className="mb-10 mt-14 lg:w-3/5" onSubmit={handleSubmit}>
          <div className="lg:flex lg:gap-[50px] ">
            <div className="row1 lg:w-1/2">
              <motion.div
                className="input_container relative mb-16 lg:mb-[60px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-[rgba(0, 0, 0, 0.1)] peer block w-full resize-none border-b border-solid bg-transparent py-2 pl-[7px] text-[0.8rem] placeholder-transparent outline-none"
                  placeholder="name"
                  required
                />
                <label
                  htmlFor="name"
                  className="label peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 ease absolute left-0 top-0 inline-block text-[0.8rem] text-gray-light transition-all duration-[400ms] peer-valid:-top-4 peer-valid:text-[0.8rem] peer-valid:text-gray-dark  peer-focus:-top-4 peer-focus:text-[0.8rem] peer-focus:text-gray-dark"
                >
                  Votre nom *
                </label>
                <div className="underline"></div>
              </motion.div>

              <motion.div
                className="input_container relative mb-16 lg:mb-[60px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-[rgba(0, 0, 0, 0.1)] peer block w-full resize-none border-b border-solid bg-transparent py-2 pl-[7px] text-[0.8rem] placeholder-transparent  outline-none"
                  placeholder="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="label peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 ease absolute left-0 top-0 inline-block text-[0.8rem] text-gray-light transition-all duration-[400ms] peer-valid:-top-4 peer-valid:text-[0.8rem] peer-valid:text-gray-dark peer-focus:-top-4 peer-focus:text-[0.8rem] peer-focus:text-gray-dark"
                >
                  Votre Email *
                </label>
                <div className="underline"></div>
              </motion.div>
            </div>

            <div className="row2 lg:w-1/2">
              <motion.div
                className="input_container relative mb-16 lg:mb-[60px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  className="border-[rgba(0, 0, 0, 0.1)] peer block w-full resize-none border-b border-solid bg-transparent py-2 pl-[7px] text-[0.8rem] placeholder-transparent outline-none"
                  placeholder="objet"
                  required
                />
                <label
                  htmlFor="tel"
                  className="label peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 ease absolute left-0 top-0 inline-block text-[0.8rem] text-gray-light transition-all duration-[400ms] peer-valid:-top-4 peer-valid:text-[0.8rem] peer-valid:text-gray-dark  peer-focus:-top-4 peer-focus:text-[0.8rem] peer-focus:text-gray-dark"
                >
                  Téléphone
                </label>
                <div className="under_line"></div>
              </motion.div>

              <motion.div
                className="input_container relative mb-16 lg:mb-[60px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  id="objet"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-[rgba(0, 0, 0, 0.1)] peer block w-full resize-none border-b border-solid bg-transparent py-2 pl-[7px] text-[0.8rem] placeholder-transparent outline-none"
                  placeholder="objet"
                  required
                />
                <label
                  htmlFor="objet"
                  className="label peer-placeholder-show:text-[0.8rem] peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 ease absolute left-0 top-0 inline-block text-[0.8rem] text-gray-light transition-all duration-[400ms] peer-valid:-top-4 peer-valid:text-[0.8rem] peer-valid:text-gray-dark  peer-focus:-top-4 peer-focus:text-[0.8rem] peer-focus:text-gray-dark"
                >
                  Objet *
                </label>
                <div className="underline"></div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="input_container relative "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="border-[rgba(0, 0, 0, 0.1)] peer mb-14 block h-44 w-full resize-none border-b border-solid bg-transparent py-2 pl-[7px] text-[0.8rem] placeholder-transparent outline-none lg:h-[150px]"
              placeholder="message"
              required
            ></textarea>

            <label
              htmlFor="message"
              className="label peer-placeholder-show:text-[0.8rem] peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 ease absolute left-0 top-0 inline-block text-[0.8rem] text-gray-light transition-all duration-[400ms] peer-valid:-top-4 peer-valid:text-[0.8rem] peer-valid:text-gray-dark  peer-focus:-top-4 peer-focus:text-[0.8rem] peer-focus:text-gray-dark"
            >
              Message *
            </label>
            <div className="underline"></div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            type="submit"
            className="block pl-[2px] text-[0.940rem] font-medium uppercase leading-[0.875rem] tracking-widest shadow-[inset_0px_-6px_0px] shadow-pink-light transition-all duration-[400ms] ease-out hover:shadow-[inset_0px_-15px_0px] hover:shadow-pink-light lg:text-[0.85rem]"
          >
            {isSubmitting ? (
              <>
                En cours...
                <FontAwesomeIcon icon={faSpinner} spin className="ml-2" />
              </>
            ) : (
              "Envoyer"
            )}
          </motion.button>
        </form>

        <div className="mb-5 mt-16  w-full rounded-lg border border-gray-100 bg-gray-100 px-4 py-8 shadow-md md:p-10 lg:mt-10 lg:w-2/5">
          <motion.h3
            className="mb-4 text-lg font-medium text-gray-dark"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Coordonnées <span className="text-pink-global">de Contact</span>
          </motion.h3>

          <motion.div
            className=" group mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:ludivine.clement0985@gmail.com"
              target="blank"
              title="Email"
              className="flex items-center gap-4"
            >
              <div className="inline-block bg-gray-200 p-3 text-xl transition-colors duration-500 group-hover:bg-pink-global group-hover:text-off-white lg:text-3xl">
                <BsEnvelopeAtFill />
              </div>
              <div>
                <p className="text-sm md:text-base">Envoyer un email</p>
                <p className="break-all text-sm text-pink-global transition-colors duration-500 group-hover:text-pink-light">
                  ludivine.clement0985@gmail.com
                </p>
              </div>
            </a>
          </motion.div>

          <hr className="color-gray my-8" />

          <motion.div
            className=" group mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="tel:0768615727"
              title="Téléphone"
              target="blank"
              className="flex items-center gap-4"
            >
              <div className="inline-block bg-gray-200 p-3 text-xl transition-colors duration-500 group-hover:bg-pink-global group-hover:text-off-white lg:text-3xl">
                <FaPhoneVolume />
              </div>
              <div>
                <p className="text-sm md:text-base">Numéro de téléphone</p>
                <p className="text-sm text-pink-global transition-colors duration-200 group-hover:text-pink-light">
                  Contacter par téléphone
                </p>
              </div>
            </a>
          </motion.div>

          <hr className="color-gray my-8" />

          <motion.div
            className="group mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.google.com/maps?q=Nogent+le+Rotrou,+Eure+et+Loir"
              target="blank"
              title="Localisation"
              className="flex items-center gap-4"
            >
              <div className="inline-block bg-gray-200 p-3 text-xl transition-colors duration-500 group-hover:bg-pink-global group-hover:text-off-white lg:text-3xl">
                <ImLocation2 />
              </div>
              <div>
                <p className="text-base">Localisation</p>
                <p
                  className="text-sm text-pink-global transition-colors duration-200 group-hover:text-pink-light"
                  target="_blank"
                >
                  Nogent le Rotrou, Eure et Loir
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
