import React, { useState, useEffect } from 'react';

const useNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav2 = document.querySelector("#navbar.navanimation");
      if (window.scrollY > 185.73) {
        nav2.classList.remove("bg-white");
        nav2.classList.add("bg-transparent2");
      } else {
        nav2.classList.remove("bg-transparent2");
        nav2.classList.add("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isMenuOpen, handleMenuToggle };
};

export default useNavbar;
