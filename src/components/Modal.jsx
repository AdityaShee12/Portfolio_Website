// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg max-w-screen-md mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
        <button
          className="absolute top-2 right-2 text-white text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;