import React from 'react';
import Image from 'next/image';


const Skills = () => {
  return (
    <section data-section id='skills' className='py-24 px-12 -my-24 m-auto text-off-white bg-bg-black bg-fixed bg-center bg-cover bg-gray-global brightness-[1.5]'>
      <h2 className='mb-[30px] mt-4 font-kaushan text-[2.8rem]  text-center blur-[0.5px]'>Mes compétences</h2>
      <div className="flex items-center gap-8 max-w-[850px] m-auto">
        <div className="flex justify-between gap-x-7 gap-y-5 flex-wrap w-[70%] pr-[50px] mt-7 mb-5 border-r-[1px] border-solid border-gray-dark">
          
          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/sass.svg"
                  alt="icône de github"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>Sass</p>
              </div>
            </div>
          </div>

          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/react.webp"
                  alt="icône de react"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>React</p>
              </div>
            </div>
          </div>

          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/nodejs.webp"
                  alt="icône de nodejs"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>Node.js</p>
              </div>
            </div>
          </div>

          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/redux.png"
                  alt="icône de redux"
                  width={70}
                  height={70}
                  className='rounded w-auto h-auto'
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>Redux</p>
              </div>
            </div>
          </div>

          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/github.webp"
                  alt="icône de github"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>Github</p>
              </div>
            </div>
          </div>

          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/figma.svg"
                  alt="icône defigma"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>Figma</p>
              </div>
            </div>
          </div>

          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/tailwind.png"
                  alt="icône de tailwind"
                  width={70}
                  height={70}
                  className='rounded-full w-auto h-auto'
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>Tailwind</p>
              </div>
            </div>
          </div>

          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/next-js.png"
                  alt="icône de next js"
                  width={130}
                  height={130}
                  className='w-auto h-auto'
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>Next JS</p>
              </div>
            </div>
          </div>

          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/vscode.webp"
                  alt="icône de vscode"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>Vs Code</p>
              </div>
            </div>
          </div>

          <div className="flip_box bg-transparent w-[72px] h-[72px]">
            <div className="flip_box_inner relative w-full h-full text-center transition-transform duration-700 ">
              <div className="flip_box_front absolute w-full h-full rounded-[50%] -top-px ">
                <Image
                  src="/img/icons/icons_skills/responsive.webp"
                  alt="icône de RWD"
                  width={70}
                  height={70}
                />
              </div>
              <div className="flip_box_back absolute w-full h-full rounded-[50%] -top-px bg-black flex justify-center items-center ">
                <p className='uppercase font-extralight'>RWD</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <ul className="pb-5 text-gray-global border-b border-solid border-gray-dark">
            <li>▸ Référencement SEO</li>
            <li>▸ Méthode agile</li>
            <li>▸ Accessibilité</li>
          </ul>
          <ul className="pt-5 text-gray-global">
            <li>▸ Rigueur</li>
            <li>▸ Autonomie</li>
            <li>▸ Adaptibilité</li>
            <li>▸ Curiosité</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;