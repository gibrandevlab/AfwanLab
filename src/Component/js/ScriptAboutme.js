import React, { useEffect, useRef } from 'react';

const splitTextIntoSpans = (text, offset = 0) => {
  if (typeof text !== "string") {
    console.error("Expected a string but got:", typeof text);
    return null;
  }

  return text.split(/(\s+)/).map((char, index) => (
    <span key={index + offset} className="char">
      {char}
    </span>
  ));
};


const ScriptAboutMe = () => {
  const textRef = useRef(null);

  const text1 = `I’m a passionate Information Systems student with a flair for turning
  complex problems into elegant solutions. With a robust background in
  Software Engineering, I specialize in web programming using Laravel
  and React.js, blending creativity with technical expertise to build
  engaging and efficient web applications. Currently, I’m honing my
  skills through an exciting internship at CV, where I'm spearheading
  the development of an innovative web-based inventory management
  system.`;

  const text2 = `This hands-on experience is not only refining my technical
  abilities but also deepening my understanding of industry practices.
  Driven by a love for technology and a commitment to continuous growth,
  I thrive in dynamic environments where I can leverage my knowledge to
  drive impactful projects. My goal is to contribute meaningfully to the
  tech world and be at the forefront of creating solutions that make a
  difference.`;

  useEffect(() => {
    const handleScroll = () => {
      const textElements = document.querySelectorAll(".char");
      const viewportHeight = window.innerHeight;

      textElements.forEach((textElement) => {
        const rect = textElement.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        const center = viewportHeight / 2;
        const distanceFromCenter = Math.min(
          Math.abs(center - (elementTop + elementBottom) / 2),
          viewportHeight / 2
        );

        const minOpacity = 0.5;
        const maxOpacity = 1;
        const maxDistance = viewportHeight / 2;
        const darkness = Math.max(
          minOpacity,
          Math.min(
            maxOpacity,
            maxOpacity - (distanceFromCenter / maxDistance) * (maxOpacity - minOpacity)
          )
        );

        textElement.style.color = `rgba(0, 0, 0, ${darkness})`;

        const fontWeight = 400 + Math.floor((100 * (darkness - minOpacity)) / (maxOpacity - minOpacity));
        textElement.style.fontWeight = fontWeight;
      });
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={textRef}>
      <p>{splitTextIntoSpans(text1)}</p>
      <p>{splitTextIntoSpans(text2)}</p>
    </div>
  );
};

export default ScriptAboutMe;
