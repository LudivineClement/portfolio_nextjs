import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className='bg-bg-black bg-center bg-cover p-8'>
      <div className=" flex gap-9 justify-center">
          <Link href="https://github.com/LudivineClement?tab=repositories" target="_blank">
            <Image
              src="/img/icons/icon-github.png"
              alt="icône de github"
              width={25}
              height={25}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image
              src="/img/icons/icon-instagram.png"
              alt="icône d'instagram'"
              width={25}
              height={25}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
          <Link href="https://fr.linkedin.com/" target="_blank">
            <Image
              src="/img/icons/icon-linkedin.png"
              alt="icône de Linkedin"
              width={25}
              height={25}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
          <Link href="https://twitter.com/?lang=fr" target="_blank">
            <Image
              src="/img/icons/icon-twitterx.png"
              alt="icône de Twitter"
              width={25}
              height={25}
              className='hover:brightness-75 transition-all duration-300 ease-in-out'
            />
          </Link>
        </div>

    </footer>
  );
};

export default Footer;