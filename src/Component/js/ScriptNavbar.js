import { useState, useEffect } from 'react';

const useNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.querySelector("#navbar.navanimation");
      if (navElement) {  // Check if the element exists
        if (window.scrollY > 185.73) {
          navElement.classList.remove("bg-white");
          navElement.classList.add("bg-transparent2");
        } else {
          navElement.classList.remove("bg-transparent2");
          navElement.classList.add("bg-white");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the correct state on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures this runs once on mount and cleanup

  return { isMenuOpen, handleMenuToggle };
};

export default useNavbar;
