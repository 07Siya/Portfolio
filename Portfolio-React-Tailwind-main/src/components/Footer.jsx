import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex justify-center space-x-6 text-2xl mb-4">
          {/*}
          <a
            href="mailto:gajbhesiya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaEnvelope />
          </a>*/}
          <a
            href="https://www.linkedin.com/in/siya-gajbhe-7b3164252/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/07Siya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/siyagajbhe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/siyagajbhe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter />
          </a>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Siya Gajbhe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
