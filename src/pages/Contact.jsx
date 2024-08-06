import React from 'react';
import Typewriter from 'typewriter-effect';

const Contact = () => {
  return (
    <div className="container mx-auto mt-10 text-white">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-4 text-lg">
        <Typewriter
          options={{
            strings: [
              "Feel free to reach out to me for any collaboration, inquiries, or opportunities. You can contact me via phone at +91 89103 84698 or email at sheeaditya12@gmail.com. I'm always excited to connect and explore new possibilities!"
            ],
            autoStart: true,
            loop: false,
          }}
        />
      </p>
    </div>
  );
};

export default Contact;