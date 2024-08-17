import { useState, useEffect, useRef } from 'react';

const ScriptContactSection = () => {
  const elementsRef = useRef([]);
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      elementsRef.current.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementMidPoint = rect.top + rect.height / 2;
        const visible = elementMidPoint < windowHeight * 0.75;

        if (visible) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });

      if (formRef.current) {
        const formRect = formRef.current.getBoundingClientRect();
        setIsVisible(formRect.top + formRect.height / 2 < windowHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);


    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { elementsRef, formRef, isVisible, addToRefs };
};

export default ScriptContactSection;
