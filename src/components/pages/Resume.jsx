import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


const Resume = () => {
  return (
    <div className="mx-auto h-screen  pb-6 ">
      <div className="flex justify-center gap-x-2">
      <h1 className="pt-6 text-center text-3xl font-bold text-yellow-500 align-middle ">
        Resume
      </h1>
      <button>
        <FaDownload className="w-7 h-7 text-white ml-1 mt-5"/>
      </button>
      </div>
      <hr className="my-4 shadow-2xl " />

      <div className="mx-auto max-h-[880px] overflow-y-auto  max-w-[900px] bg-white px-4 py-6 text-sm text-gray-800 shadow-xl  md:text-base">
        {/* Header */}
        <header className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Reza Abdollahi
          </h2>
          <p className="mt-1">
            apa6323@psu.edu | Erie, PA | (814) 844-2498
          </p>
        </header>

        <hr className="my-4" />

        {/* Education */}
        <section>
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Education
          </h3>
          <div className="flex justify-between">
            <span className="font-semibold">
              Penn State Erie, The Behrend College
            </span>
            <span>May 2027</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">
              B.S. in Software Engineering | Schreyer Honors College
            </span>
            <span>GPA: 3.99</span>
          </div>
        </section>

        <hr className="my-4" />

        {/* Projects */}
        <section>
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Projects
          </h3>

          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span>ClockIn Web Application (Ongoing)</span>
              <a
                href="https://github.com/RezaAbdollahi2002/ClockIn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ClockIn GitHub Repository"
              >
                <FaGithub className="h-4 w-4 text-purple-600 hover:text-purple-400" />
              </a>
            </div>

            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Designed and implemented a{" "}
                <span className="font-semibold">
                  full-stack scheduling platform
                </span>{" "}
                using React, Tailwind CSS, and FastAPI.
              </li>
              <li>
                Built{" "}
                <span className="font-semibold">
                  authentication, scheduling features, and a messaging system
                </span>{" "}
                to support user communication.
              </li>
              <li>
                Developed and maintained{" "}
                <span className="font-semibold">RESTful APIs</span> following
                clean architecture principles.
              </li>
              <li>
                Currently expanding the application with{" "}
                <span className="font-semibold">
                  automatic shift generation
                </span>{" "}
                to improve scheduling efficiency beyond existing platforms.
              </li>
            </ul>
          </div>
        </section>

        <hr className="my-4" />

        {/* Research Experience */}
        <section>
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Research Experience
          </h3>

          <div className="mb-4">
            <div className="flex justify-between font-semibold">
              <span>
                Undergraduate Research Assistant – Computer Vision
              </span>
              <span>Spring 2024</span>
            </div>
            <ul className="list-disc pl-6">
              <li>
                Researched CNN models with a focus on YOLO architectures for
                real-time object detection.
              </li>
              <li>
                Studied foundational models such as AlexNet to analyze
                convolutional design trade-offs.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between font-semibold">
              <span>Undergraduate Research Assistant – NLP</span>
              <span>Summer 2024</span>
            </div>
            <ul className="list-disc pl-6">
              <li>
                Scraped and curated a university dataset for fine-tuning
                T5-based and Llama-3.1-8B models.
              </li>
              <li>
                Created QA datasets for fine-tuning BERT-style models.
              </li>
              <li>
                Developed a model-selection framework comparing speed,
                accuracy, and hardware requirements.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold">
              <span>Undergraduate Research Assistant – Genomics</span>
              <span>Summer 2025</span>
            </div>
            <ul className="list-disc pl-6">
              <li>
                Processed GPL570 genomic data with over 170,000 samples and
                54,000 gene probes.
              </li>
              <li>
                Designed a sparse autoencoder that reduced dimensionality
                by 95% while preserving performance.
              </li>
            </ul>
          </div>
        </section>

        <hr className="my-4" />

        {/* Work Experience */}
        <section>
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Work Experience
          </h3>
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span className="font-semibold">
                Tutor – Math, Science & Programming
              </span>
              <span>Spring 2024 – Present</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Lifeguard | YMCA</span>
              <span>Summer 2024 – Present</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">
                Front Desk | LRC, Penn State Behrend
              </span>
              <span>Fall 2024 – Present</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">
                Physics Teaching Assistant
              </span>
              <span>Fall 2025 – Present</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">
                Digital Circuits Lab & Grading Assistant
              </span>
              <span>Fall 2025 – Present</span>
            </li>
          </ul>
        </section>

        <hr className="my-4" />

        {/* Technical Skills */}
        <section>
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Technical Skills
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <span className="font-semibold">Languages:</span> C++, C,
              Python, Java, JavaScript, HTML, CSS, VHDL, SQL, R
            </li>
            <li>
              <span className="font-semibold">Frameworks:</span> PyTorch,
              TensorFlow, Scikit-learn, React, FastAPI, Tailwind CSS
            </li>
            <li>
              <span className="font-semibold">Tools:</span> NumPy, Pandas,
              Matplotlib, Git, VS Code, IntelliJ
            </li>
            <li>
              <span className="font-semibold">Domains:</span> Machine
              Learning, Deep Learning, NLP, Full-Stack Development
            </li>
            <li>
              <span className="font-semibold">Languages:</span> English
              (Fluent), Persian (Fluent)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
