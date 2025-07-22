import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/mldlgyln', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      form.reset();
    } else {
      setStatus('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12">
          {/* Left: Contact Info */}
          <div className="flex-1 mb-10 md:mb-0">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-300 text-justify">
              Feel free to reach out to me for any questions, collaborations, or exciting opportunities.
            </p>

            <div className="mt-8 space-y-4 text-gray-300">
              <div>
                <FaEnvelope className="inline-block text-green-400 mr-2" />
                <a href="mailto:gajbhesiya@gmail.com" className="hover:underline">
                  gajbhesiya@gmail.com
                </a>
              </div>
              <div>
                <FaPhone className="inline-block text-green-400 mr-2" />
                <span>+91 7378632673</span>
              </div>
              <div>
                <FaGithub className="inline-block text-green-400 mr-2" />
                <a
                  href="https://github.com/07Siya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/07Siya
                </a>
              </div>
              <div>
                <FaLinkedin className="inline-block text-green-400 mr-2" />
                <a
                  href="https://www.linkedin.com/in/siya-gajbhe-7b3164252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/siya-gajbhe-7b3164252
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-3 rounded-full"
              >
                Send
              </button>
              {status && (
                <p className="mt-4 text-sm text-green-400">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
