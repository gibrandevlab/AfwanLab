import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profileImg from "../assets/images/profileofme.jpg";
import "../assets/css/AboutmeSection.css";
import ScriptAboutMe from '../js/ScriptAboutme'; // Pastikan path benar

function AboutmeSection() {
  return (
    <div className="AboutmeSection container mx-auto flex flex-col gap-8 md:flex-row">
      <div className="flex-1 px-6 py-12 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">About Me</h2>
        {/* Render ScriptAboutMe di sini */}
        <ScriptAboutMe />
      </div>
      <div className="flex-1 px-4 py-12 md:px-8 lg:px-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto relative">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full object-cover mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-90">
            <h2 className="text-lg font-semibold mb-2 text-center">Afwan Gibran Muhammad Algiffari</h2>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutmeSection;
