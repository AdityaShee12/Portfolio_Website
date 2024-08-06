import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <div className="container mx-auto mt-10 text-white">
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="mt-4 text-lg">
        <Typewriter
          options={{
            delay: 50, // Speed of typing (50ms per character)
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Hi, I'm Aditya Shee, a passionate web developer with expertise in HTML, CSS, JavaScript, C++, React.js, and Tailwind CSS. Currently, I'm expanding my skills into backend development to become a versatile full-stack developer. I love crafting elegant and efficient web solutions that enhance user experiences."
              )
              .start(); // Start the typewriter effect
          }}
        />
      </div>
    </div>
  );
};

export default About;