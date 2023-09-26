import React from 'react';

const ProjectModal = ({ data, isOpen, setIsOpen }) => {

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-end items-end z-50 bg-black bg-opacity-50 transition-opacity duration-[500ms] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      onClick={handleClose}
    >
      <div
        className={`bg-off-white scrollBar w-[50%] h-[90%] p-4 shadow-lg border-l-[5px] border-solid border-pink-global z-10 overflow-y-auto transition-transform duration-[800ms] ease-in-out w ${isOpen
          ? 'translate-x-0'
          : 'translate-x-full' 
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
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
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;


