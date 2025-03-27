import React from 'react'
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

function ScroolTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-14 right-4 bg-gray-300 text-black px-4 p-4 rounded-full z-[100] shadow-lg transition duration-300 hover:bg-chose-10"
        >
          <IoIosArrowUp/>
        </button>
      )}
    </div>
  )
}

export default ScroolTop