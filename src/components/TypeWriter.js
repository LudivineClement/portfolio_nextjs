import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
  return (
    <h2  className='text-6xl font-medium h-[5.7rem]'>
      <TypeAnimation
        sequence={[
          "Développeuse",
          1500,
          "Codeuse",
          1500,
          "Passionnée",
          1500,
          "Créatrive",
          1500,
        ]}
        speed={30}
        repeat={Infinity}
        cursor={false}       
      />
    </h2>
  );
};

export default TypeWriter;