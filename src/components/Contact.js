import React from 'react';

const Contact = () => {
  return (
    <section data-section id='contact' className='pt-24 px-12 -my-24 m-auto max-w-[1250px]'>
      <h2 className='mb-[30px] mt-24 font-kaushan text-[2.4rem] text-gray-dark'>Me contacter</h2>
      <form className='mb-48 mt-14 form'>
      <div className="rows">
            <div className="row1">
              <div className="input_container">
                <input type="text" id="name" required />
                <label for="name" className="label">Votre nom *</label>
                <div className="underline"></div>
              </div>
              <div className="input_container">
                <input type="email" name="email" id="email" required />
                <label for="email" className="label">Votre Email *</label>
                <div className="underline"></div>
              </div>
            </div>
            <div className="row2">
              <div className="input_container">
                <input type="tel" id="phone" name="phone" />
                <label for="phone" className="label">Téléphone </label>
                <div className="under_line"></div>
              </div>
              <div className="input_container">
                <input type="text" id="objet" required />
                <label for="objet" className="label">Objet *</label>
                <div className="underline"></div>
              </div>
            </div>
          </div>
          <div className="input_container">
            <textarea name="message" id="message" required></textarea>
            <label for="message" className="label">Message *</label>
            <div className="underline"></div>
          </div>
          <button type="submit" className="btn_form">envoyer</button>
      </form>
    </section>
  );
};

export default Contact;