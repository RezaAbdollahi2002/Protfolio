import { useState, useEffect } from 'react';
import React from "react";
import BackgroundImage from "../../assets/Background.png";

import Navbar from "../navbar/Navbar";
import Projects from "../pages/Projects";
import Research from "../pages/Research";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

const Homepage = () => {
  // Initialize state from localStorage or default values
  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem("activePage") || null;
  });

  const [isOn, setIsOn] = useState(() => {
    return localStorage.getItem("isOn") === "true";
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (activePage) localStorage.setItem("activePage", activePage);
    else localStorage.removeItem("activePage");
  }, [activePage]);

  useEffect(() => {
    localStorage.setItem("isOn", isOn.toString());
  }, [isOn]);

  const handlePageChange = (page) => {
    setActivePage(page);
    setIsOn(true);
  };

  return (
    // Make layout a column: Navbar on top, content fills remaining height
    <div className="relative min-h-screen flex flex-col overflow-hidden ">
      <Navbar isOn={isOn} setIsOn={setIsOn} setActivePage={setActivePage} />

      {/* Background image - fixed makes it always full viewport */}
      <img
        src={BackgroundImage}
        alt="Background"
        className="fixed inset-0 -z-10 w-screen h-screen object-cover"
      />

      {/* Content area under Navbar */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center">
        {/* Main Menu */}
        {!isOn && (
          <div className="h-full flex flex-col items-center justify-center gap-3 p-4">
            <div className="w-full max-w-[500px] bg-gray-50 rounded-sm px-2 py-2 flex flex-col">
              <button
                onClick={() => handlePageChange("projects")}
                className="font-bold text-center text-2xl hover:text-yellow-500 transition-colors min-w-[500px]"
              >
              Projects
              </button>
            </div>

            <div className="w-full max-w-[500px] bg-gray-50 rounded-sm px-2 py-2 flex flex-col">
              <button
                onClick={() => handlePageChange("research")}
                className="font-bold text-center text-2xl hover:text-yellow-500 transition-colors min-w-[500px] "
              >
              {" "} Research
              </button>
            </div>

            <div className="w-full max-w-[500px] bg-gray-50 rounded-sm px-2 py-2 flex flex-col">
              <button
                onClick={() => handlePageChange("resume")}
                className="font-bold text-center text-2xl hover:text-yellow-500 transition-colors min-w-[500px]"
              >
                Resume
              </button>
            </div>

            <div className="w-full max-w-[500px] bg-gray-50 rounded-sm px-2 py-2 flex flex-col">
              <button
                onClick={() => handlePageChange("contact")}
                className="font-bold text-center text-2xl hover:text-yellow-500 transition-colors min-w-[500px]"
              >
                Contact
              </button>
            </div>
          </div>
        )}

        {/* Shared page wrapper classes:
            - h-full so it fits inside main
            - overflow-y-auto so the page can scroll
        */}
        <div
          className={`h-full overflow-y-auto transition-opacity duration-300 ease-in-out ${
            isOn && activePage === "projects"
              ? "opacity-100"
              : "opacity-0 pointer-events-none absolute inset-0"
          }`}
        >
          <Projects />
        </div>

        <div
          className={`h-full overflow-y-auto transition-opacity duration-300 ease-in-out ${
            isOn && activePage === "research"
              ? "opacity-100"
              : "opacity-0 pointer-events-none absolute inset-0"
          }`}
        >
          <Research />
        </div>

        <div
          className={`h-full overflow-y-auto transition-opacity duration-300 ease-in-out ${
            isOn && activePage === "resume"
              ? "opacity-100"
              : "opacity-0 pointer-events-none absolute inset-0"
          }`}
        >
          <Resume />
        </div>

        <div
          className={`h-full overflow-y-auto transition-opacity duration-300 ease-in-out ${
            isOn && activePage === "contact"
              ? "opacity-100"
              : "opacity-0 pointer-events-none absolute inset-0"
          }`}
        >
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Homepage;
