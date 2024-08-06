import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="container mx-auto mt-10 text-left">
      <h1 className="text-4xl font-bold text-center">
        Welcome to My Portfolio
      </h1>
      <div className="text-2xl text-white">
        <h1>&lt;&gt;</h1>
        <Typewriter
          options={{
            loop: true,
            delay: 75, // Speed of typing
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi,")
              .pauseFor(1000)
              .typeString("<br/>I'm Aditya Shee")
              .pauseFor(1000)
              .typeString("<br/>web developer")
              .pauseFor(2000) // Pause after typing all lines
              .deleteAll()
              .start(); // Restart the typewriter effect
          }}
        />
        <h1>&lt;&gt;</h1>
      </div>
    </div>
  );
};

export default Home;
// //  I'm Aditya Shee, a passionate web developer dedicated to crafting
// engaging and efficient web applications. Welcome to my portfolio!
