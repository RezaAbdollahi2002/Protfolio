import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="max-w-5xl min-h-screen mx-auto px-4 py-6 shadow-2xl shadow-blue-950">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">
          Contact
        </h1>
        <hr className="my-4 border-blue-950" />
      </header>

      {/* Contact Information */}
      <div className="flex flex-col gap-4 text-center mx-auto text-gray-800 justify-center">
        <div>
          <p className="text-sm md:text-base font-semibold">
            Email:
            <span className="ml-2 font-normal">apa6323@psu.edu</span>
          </p>
        </div>

        <div>
          <p className="text-sm md:text-base font-semibold">
            Phone:
            <span className="ml-2 font-normal">(814) 844-2498</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3 pt-4 mx-auto text-left">
          <div className="flex items-center gap-3">
            <span className="text-sm md:text-base font-semibold">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/ahmad-reza-abdollahi-66148828a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5 text-blue-600 hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm md:text-base font-semibold">
              GitHub
            </span>
            <a
              href="https://github.com/RezaAbdollahi2002/ClockIn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <FaGithub className="w-5 h-5 text-black hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
