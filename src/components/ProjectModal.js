import React from 'react';

const ProjectModal = ({ data, open, close }) => {
  return (
    <div
      className={`${open ? 'fixed inset-0 flex justify-end items-end z-50 bg-black bg-opacity-50' : ''} `}
      onClick={close}
    >
      <div
        className={`transition-transform duration-[800ms] ease-in-out ${open 
          ? 'bg-off-white translate-x-0 w-[50%] h-[87.25%] p-4 shadow-lg border-l-[5px] border-solid border-pink-global z-10 overflow-y-auto' 
          : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-10 left-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          X
        </button>
        <div>
          <h3 className='text-[1.7rem] text-center text-black font-kaushan font-semibold mt-12'>
            {data.title}
          </h3>
          <p>Description : {data.overview}</p>
          <p>Description : {data.overview}</p>
          <p>Description : {data.overview}</p>
          <p>Description : {data.overview}</p>
          <p>Description : {data.overview}</p>
          <p>Description : {data.overview}</p>
          <p>Description : {data.overview}</p>
        </div>

      </div>
    </div>

  );
};

export default ProjectModal;
