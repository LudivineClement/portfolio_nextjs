import React from 'react';

const ProjectInfos = ({ data }) => {
  return (
    <div>
      <h3 className='text-[1.7rem] text-center text-black font-kaushan font-semibold'>
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
  );
};

export default ProjectInfos;
