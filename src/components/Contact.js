import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  // Enum for our statuses
  const contactStatuses = {
    loading: 'loading',
    submitted: 'submitted',
    error: 'error'
  };

  const [status, setStatus] = useState();

  // Our onSubmit function, which is called from react-hook-form handleSubmit
  // react-hook-form handleSubmit will pass our onSubmit the data object and event
  const onSubmit = (data, e) => {
    // Used to Abort a long running fetch.
    const abortLongFetch = new AbortController();
    // Abort after 7 seconds.
    const abortTimeoutId = setTimeout(() => abortLongFetch.abort(), 7000);

    // Don't want to actually submit the form
    e.preventDefault();

    // Loading
    setStatus(contactStatuses.loading);

    // You can change this fetch URL to a bad url to see the .catch() block hit
    // Example: '/api/contact-bad'
    fetch('/api/send', {
      signal: abortLongFetch.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          // If we got an 'ok' response from fetch, clear the AbortController timeout
          clearTimeout(abortTimeoutId);
          return res.json();
        }
        // If the response was anything besides 'ok', throw an error to hit our .catch() block
        throw new Error('Whoops! Error sending email.');
      })
      .then((res) => {
        // On a successful search, set the status to 'submitted' and reset the fields
        setStatus(contactStatuses.submitted);
        reset();
      })
      .catch((err) => {
        // There was an error, catch it and set the status to 'error'
        setStatus(contactStatuses.error);
      });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Standard error message for required form fields
  const requiredFieldErrorMsg = 'This field is required';

  return (
    <section data-section id='contact' className='pt-24 px-5 md:px-8 lg:px-12 -my-24 m-auto max-w-[1200px]'>
      <h2 className='mb-[30px] mt-12 lg:mt-24 font-kaushan text-3xl md:text-[2.4rem] lg:text-[2.4rem] text-gray-dark'>Me contacter</h2>
      <form className='mb-48 mt-14 form' onSubmit={handleSubmit(onSubmit)}>

        {status === contactStatuses.error ? (
          <div className='mb-5 text-red-500' >
            Oops, there was an error sending your email. Please try again.
          </div>
        ) : null}

        {/* If the form was submitted successfully, notify the user */}
        {status === contactStatuses.submitted ? (
          <div role="alert">
            Your message was sent successfully.
          </div>
        ) : null}

        <div className="lg:flex lg:gap-[50px]">

          <div className="row1 lg:w-1/2">
            <div className="input_container relative mb-16 lg:mb-[60px]">
              <input
                type="text"
                id="name"
                name="name"
                aria-invalid={errors.name}
                aria-describedby="name-error"
                autoComplete="name"
                placeholder="Name"
                {...register('name', { required: requiredFieldErrorMsg })}
                className='peer block w-full py-2 pl-[7px] text-[0.8rem] bg-transparent border-b border-[rgba(0, 0, 0, 0.1)] border-solid outline-none resize-none placeholder-transparent'
                required />
              <label htmlFor="name" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-5 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-5 peer-valid:text-gray-dark peer-valid:text-[0.8rem]  transition-all duration-[400ms] ease">Votre nom *</label>
              <div className="underline"></div>
            </div>

            <div className="input_container relative mb-16 lg:mb-[60px]">
              <input
                type="email"
                id="email"
                name="email"
                className='peer block w-full py-2 pl-[7px] text-[0.8rem] bg-transparent border-b border-[rgba(0, 0, 0, 0.1)] border-solid outline-none resize-none  placeholder-transparent'
                placeholder='email'
                {...register('email', {
                  required: requiredFieldErrorMsg,
                  pattern: {
                    value: emailRegex,
                  }
                })}
                required />
              <label htmlFor="email" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-5 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-5 peer-valid:text-gray-dark peer-valid:text-[0.8rem] transition-all duration-[400ms] ease">Votre Email *</label>
              <div className="underline"></div>
            </div>
          </div>

          <div className="row2 lg:w-1/2">
            <div className="input_container relative mb-16 lg:mb-[60px]">
              <input
                type="tel"
                id="tel"
                name="tel"
                aria-invalid={errors.tel}
                aria-describedby="tel-error"
                autoComplete="tel"
                placeholder="Téléphone"
                {...register('tel', { required: requiredFieldErrorMsg })}
                className='peer block w-full py-2 pl-[7px] text-[0.8rem] bg-transparent border-b border-[rgba(0, 0, 0, 0.1)] border-solid outline-none resize-none placeholder-transparent'
                required />
              <label htmlFor="tel" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-5 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-5 peer-valid:text-gray-dark peer-valid:text-[0.8rem]  transition-all duration-[400ms] ease">Téléphone</label>
              <div className="under_line"></div>
            </div>

            <div className="input_container relative mb-16 lg:mb-[60px]">
              <input
                type="text"
                id="objet"
                name="subject"
                className='peer block w-full py-2 pl-[7px] text-[0.8rem] bg-transparent border-b border-[rgba(0, 0, 0, 0.1)] border-solid outline-none resize-none placeholder-transparent'
                aria-invalid={errors.subject}
                aria-describedby="subject-error"
                placeholder="Subject"
                {...register('subject', {
                  required: requiredFieldErrorMsg
                })}
                required />
              <label htmlFor="objet" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-5 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-5 peer-valid:text-gray-dark peer-valid:text-[0.8rem]  transition-all duration-[400ms] ease">Objet *</label>
              <div className="underline"></div>
            </div>
          </div>
        </div>

        <div className="input_container relative ">
          <textarea
            name="message"
            id="message"
            className='peer block w-full h-44 lg:h-[150px] mb-14 py-2 pl-[7px] text-[0.8rem] bg-transparent outline-none resize-none border-b border-[rgba(0, 0, 0, 0.1)] border-solid placeholder-transparent'
            placeholder='message'
            aria-invalid={errors.message}
            aria-describedby="message-error"
            {...register('message', {
              required: requiredFieldErrorMsg
            })}
            required>
          </textarea>

          <label htmlFor="message" className="label inline-block absolute top-0 left-0 text-[0.8rem] text-gray-light peer-placeholder-show:text-[0.8rem]peer-placeholder-show:text-gray-dark peer-placeholder-show:top-2 peer-focus:-top-5 peer-focus:text-gray-dark peer-focus:text-[0.8rem] peer-valid:-top-5 peer-valid:text-gray-dark peer-valid:text-[0.8rem]  transition-all duration-[400ms] ease">Message *</label>
          <div className="underline"></div>
        </div>

        <button type="submit"
          className="block uppercase font-medium pl-[2px] text-[0.940rem] lg:text-[0.85rem] leading-[0.875rem] tracking-widest shadow-[inset_0px_-6px_0px] shadow-pink-light transition-all duration-[400ms] ease-out hover:shadow-[inset_0px_-15px_0px] hover:shadow-pink-light"
          disabled={status === contactStatuses.loading}
        >
          {status === contactStatuses.loading ? (
            <>
              En cours...
            </>
          ) : (
            <>envoyer</>
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;