/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { BsEnvelopeAtFill } from 'react-icons/bs';
import { FaPhoneVolume } from 'react-icons/fa6';
import { ImLocation2 } from 'react-icons/im';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    tel: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Message envoyé avec succès !');
        setFormData({
          name: '',
          email: '',
          subject: '',
          tel: '',
          message: '',
        });
      } else {
        console.error('Une erreur s\'est produite lors de l\'envoi du formulaire.');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'envoi du formulaire :', error);
    } finally {
      setIsSubmitting(false);
    }

  };

  return (
    <section data-section id='contact' className='pt-24 px-5 md:px-8 lg:px-12 -my-24 m-auto max-w-[1300px]'>
      <h2 className='mb-[30px] mt-12 lg:mt-24 font-kaushan text-3xl md:text-[2.4rem] lg:text-[2.4rem] text-gray-dark'>Me contacter</h2>
      <div className='lg:flex lg:gap-20 '>
        <form className='mb-10 mt-14 lg:w-3/5' onSubmit={handleSubmit}>
          <div className="lg:flex lg:gap-[50px] ">

            <div className="row1 lg:w-1/2">
              <div className="input_container relative mb-16 lg:mb-[60px]">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='peer block w-full py-2 pl-[7px] text-[0.8rem] bg-transparent border-b border-[rgba(0, 0, 0, 0.1)] border-solid outline-none resize-none placeholder-transparent'
                  placeholder='name'
                  required />
                <label htmlFor="name" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-4 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-4 peer-valid:text-gray-dark peer-valid:text-[0.8rem]  transition-all duration-[400ms] ease">Votre nom *</label>
                <div className="underline"></div>
              </div>

              <div className="input_container relative mb-16 lg:mb-[60px]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='peer block w-full py-2 pl-[7px] text-[0.8rem] bg-transparent border-b border-[rgba(0, 0, 0, 0.1)] border-solid outline-none resize-none  placeholder-transparent'
                  placeholder='email'
                  required />
                <label htmlFor="email" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-4 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-4 peer-valid:text-gray-dark peer-valid:text-[0.8rem] transition-all duration-[400ms] ease">Votre Email *</label>
                <div className="underline"></div>
              </div>
            </div>

            <div className="row2 lg:w-1/2">
              <div className="input_container relative mb-16 lg:mb-[60px]">
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  className='peer block w-full py-2 pl-[7px] text-[0.8rem] bg-transparent border-b border-[rgba(0, 0, 0, 0.1)] border-solid outline-none resize-none placeholder-transparent'
                  placeholder='objet'
                  required />
                <label htmlFor="tel" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-4 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-4 peer-valid:text-gray-dark peer-valid:text-[0.8rem]  transition-all duration-[400ms] ease">Téléphone</label>
                <div className="under_line"></div>
              </div>

              <div className="input_container relative mb-16 lg:mb-[60px]">
                <input
                  type="text"
                  id="objet"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className='peer block w-full py-2 pl-[7px] text-[0.8rem] bg-transparent border-b border-[rgba(0, 0, 0, 0.1)] border-solid outline-none resize-none placeholder-transparent'
                  placeholder='objet'
                  required />
                <label htmlFor="objet" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-4 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-4 peer-valid:text-gray-dark peer-valid:text-[0.8rem]  transition-all duration-[400ms] ease">Objet *</label>
                <div className="underline"></div>
              </div>
            </div>
          </div>

          <div className="input_container relative ">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className='peer block w-full h-44 lg:h-[150px] mb-14 py-2 pl-[7px] text-[0.8rem] bg-transparent outline-none resize-none border-b border-[rgba(0, 0, 0, 0.1)] border-solid placeholder-transparent'
              placeholder='message'
              required>
            </textarea>

            <label htmlFor="message" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-4 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-4 peer-valid:text-gray-dark peer-valid:text-[0.8rem]  transition-all duration-[400ms] ease">Message *</label>
            <div className="underline"></div>
          </div>

          <button type="submit" className="block uppercase font-medium pl-[2px] text-[0.940rem] lg:text-[0.85rem] leading-[0.875rem] tracking-widest shadow-[inset_0px_-6px_0px] shadow-pink-light transition-all duration-[400ms] ease-out hover:shadow-[inset_0px_-15px_0px] hover:shadow-pink-light">
            {isSubmitting ? "En cours..." : "Envoyer"}
          </button>
        </form>

        <div className='w-full lg:w-2/5  bg-gray-100 p-4 md:p-10 rounded-lg border border-gray-100 shadow-md mt-16 lg:mt-10 mb-5'>
          <h4 className='text-gray-dark text-lg font-medium mb-4'>Coordonnées <span className='text-pink-global'>de Contact</span></h4>
          <div class="relative">
              <div class="h-[2px] w-20 bg-pink-global mt-2"></div>
              <div class="absolute h-2 w-2 bg-gray-dark -top-[3px] rounded-full animate-roll" ></div>
            </div>
          <div className='flex items-center gap-4 mt-8 group' >
            <a href='mailto:ludivine.clement0985@gmail.com' target='blank' className='p-3 text-xl inline-block lg:text-3xl bg-gray-200 transition-colors duration-500 group-hover:text-off-white group-hover:bg-pink-global'><BsEnvelopeAtFill /></a>
            <div >
              <p className='text-sm md:text-base'>Envoyer un email</p>
              <a href='mailto:ludivine.clement0985@gmail.com' target='blank' className='text-pink-global break-all text-sm transition-colors duration-500 group-hover:text-pink-light'>ludivine.clement0985@gmail.com</a>
            </div>

          </div>

          <hr className='color-gray my-8' />

          <div className='flex items-center gap-4 mt-8 group' >
            <a href='tel:0768615727' className='p-3 text-xl inline-block lg:text-3xl bg-gray-200 transition-colors duration-500 group-hover:text-off-white group-hover:bg-pink-global'><FaPhoneVolume /></a>
            <div >
              <p className='text-sm md:text-base'>Numéro de téléphone</p>
              <a href='tel:0768615727' className='text-pink-global text-sm transition-colors duration-200 group-hover:text-pink-light'>Contacter par téléphone</a>
            </div>
          </div>

          <hr className='color-gray my-8' />

          <div className='flex items-center gap-4 mt-8 group' >
            <a href='https://www.google.com/maps?q=Nogent+le+Rotrou,+Eure+et+Loir' target='blank' className='p-3 text-xl inline-block lg:text-3xl bg-gray-200 transition-colors duration-500 group-hover:text-off-white group-hover:bg-pink-global'> <ImLocation2 /></a>
            <div>
              <p className='text-base'>Localisation</p>
              <a href='https://www.google.com/maps?q=Nogent+le+Rotrou,+Eure+et+Loir' className='text-pink-global text-sm transition-colors duration-200 group-hover:text-pink-light' target='_blank'>
                Nogent le Rotrou, Eure et Loir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;