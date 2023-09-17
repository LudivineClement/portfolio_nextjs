import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-off-white shadow-2xl">
      <div className="flex justify-between items-center py-6 px-9 mx-20">
        <div className="font-kaushan text-[2rem] font-semibold text-gray-dark">Portfolio</div>
        <navbar>
          <ul className="flex items-center gap-10 text-gray-light uppercase text-[0.8rem] tracking-widest font-medium leading-[0.9rem]">
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#home' className='inline-block'>Accueil</Link>
            </li>
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#about'>A propos</Link>
            </li>
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#skills'>Compétences</Link>
            </li>
            <li className='transition-all duration-[400ms] ease-out hover:text-gray-dark hover:shadow-[inset_0px_-6px_0px] hover:shadow-pink-light'>
              <Link href='#projects'>Mes projets</Link>
            </li>
            <li className='inline-block transition-all duration-[400ms]ease-out'>
              <Link href='#contact'>Contact</Link>
            </li>
          </ul>
        </navbar>
      </div>
    </div>
  );
};

export default Navbar;