import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    tel:'',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Message envoyé avec succès !');
      } else {
        console.error('Une erreur s\'est produite lors de l\'envoi du formulaire.');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'envoi du formulaire :', error);
    }
  };

  return (
    <section data-section id='contact' className='pt-24 px-5 md:px-8 lg:px-12 -my-24 m-auto max-w-[1200px]'>
      <h2 className='mb-[30px] mt-12 lg:mt-24 font-kaushan text-3xl md:text-[2.4rem] lg:text-[2.4rem] text-gray-dark'>Me contacter</h2>      
        <form className='mb-48 mt-14 form' onSubmit={handleSubmit}>
          <div className="lg:flex lg:gap-[50px]">

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

          <button type="submit" className="block uppercase font-medium pl-[2px] text-[0.940rem] lg:text-[0.85rem] leading-[0.875rem] tracking-widest shadow-[inset_0px_-6px_0px] shadow-pink-light transition-all duration-[400ms] ease-out hover:shadow-[inset_0px_-15px_0px] hover:shadow-pink-light">envoyer</button>
        </form>
    </section>
  );
};

export default Contact;