import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
  return (
    <h2  className='text-[42px] md:text-5xl lg:text-6xl font-medium h-20 lg:h-[5.7rem]'>
      <TypeAnimation
        sequence={[
          "Développeuse",
          1200,
          "Codeuse",
          1200,
          "Passionnée",
          1200,
          "Créative",
          1200,
        ]}
        speed={30}
        repeat={Infinity}
        cursor={false}       
      />
    </h2>
  );
};

export default TypeWriter;