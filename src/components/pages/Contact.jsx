import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full h-screen  px-4 py-6 ">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-yellow-500 my-10">
          Contact
        </h1>
      </header>

      {/* Contact Information */}
      <div className="flex flex-col gap-4 text-center mx-auto justify-center text-white">
        <div>
          <p className="text-lg md:text-2xl font-semibold text-yellow-500">
            Email:
            <span className=" ml-2 font-normal text-white">apa6323@psu.edu</span>
          </p>
        </div>

        <div>
          <p className="text-lg md:text-2xl font-semibold text-yellow-500">
            Phone:
            <span className="ml-2 font-normal text-white">(814) 844-2498</span>
          </p>
        </div>

        {/* Social Links */}
          <div className="flex justify-center items-center gap-3">
            <span className="text-lg md:text-2xl font-semibold text-yellow-500">
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

          <div className="flex justify-center items-center gap-3">
            <span className="text-lg md:text-2xl font-semibold text-yellow-500">
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
    </section>
  );
};

export default Contact;
