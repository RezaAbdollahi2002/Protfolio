import React from 'react'
import { FaGithub } from "react-icons/fa";

const Resume = () => {
  return (
    <div className='max-w-300 mx-auto bg-gray-50  min-h-screen pb-3 shadow-blue-950 shadow-2xl  '>
      <div className='w-full mx-auto'>
        <h1 className='text-yellow-500 text-center pt-4 font-bold text-lg md:text-3xl'>Resume</h1>
        <hr className='my-2 text-gray-950'/>
        <div className='py-3 px-2 text-center flex flex-col  mx-auto text-sm md:text-md max-w-200 bg-black shadow-blue-900 shadow-xl'>
          {/* Header */}
          <div className='text-white'>
              <h1 className='text-xl font-bold text-white'>
                Reza Abdollahi
              </h1>
              <p>
                apa6323@psu.edu | Erie, PA | (814) 844-2498 
              </p>
          </div>
          <hr className='text-lg my-2 text-white'/>
          {/* Education */}
          <div className='text-white'>
            <h1 className='text-xl font-bold text-start my-2 '>Education</h1>
            <p className='flex justify-between'><span className='text-sm  font-semibold'>Penn State Erie, The Behrend College Graduation</span> <span>May 2027</span></p>
            <p className='flex justify-between'><span className='text-sm  font-semibold'>Bachelor of Science in Software Engineering | Schreyer Honors College Scholar</span> <span>GPA: 3.99</span></p>
          </div>
          <hr className='text-lg my-2 text-white'/>
          {/* Projects */}
          <div className='text-white text-start '>
            <h1 className='text-xl font-bold my-2'>PROJECTS</h1>
            <div className=''>
                <p className='flex flex-col justify-between'><span className='text-sm  font-semibold flex'>ClcokIn Web Application (Ongoing) {<a href="https://github.com/RezaAbdollahi2002/ClockIn" target="_blank" rel="noopener noreferrer" ><FaGithub className='text-purple-800 my-1 ml-2 w-[16px] h-[16px]'/></a>}</span>
                  <span className='pl-2  text-wrap ' >
                   <span className='font-bold text-2xl '>.</span >Designed and implemented a <span className='font-bold'>full-stack scheduling platform</span> with <span className='font-bold'>React, TailwindCSS, and FastAPI.</span>
                  </span>
                  <span className='pl-2  text-wrap '>
                    <span className='font-bold text-2xl'>.</span> Built <span className='font-bold'>authentication, scheduling features, and a messaging system</span> for user communication. 
                  </span>
                  <span className='pl-2  text-wrap '>
                    <span className='font-bold text-2xl'>.</span> Developed and maintained <span className='font-bold'>RESTful APIs</span>, applying clean architecture principles. 
                  </span>
                  <span className='pl-2  text-wrap '>
                    <span className='font-bold text-2xl'>.</span> Currently expanding the app with <span className='font-bold'>auto-generation of shifts</span>, an innovative feature not found in the actual Homebase  <span className='ml-4'>app, to streamline scheduling efficiency. </span>
                  </span>
                </p>
            </div>
          </div>
          <hr className='text-lg my-2 text-white'/>
          {/*RESEARCH EXPERIENCE   */}
          <div className='text-white'>
            <h1 className='text-xl font-bold my-2 text-start'>RESEARCH EXPERIENCE</h1>
            {/* First Research */}
            <p className='flex justify-between'><span className='font-bold'>Undergraduate Research Assistant – Computer Vision & Deep Learning</span> <span className='font-bold'>Penn State Behrend | Spring 2024</span></p>
            <p className='flex flex-col gap-y-2'>
              <span className=' text-left ml-2 text-sm text-wrap'><span className='font-bold text-2xl'>.</span> <span className='text-sm'>Researched CNN models, specializing in YOLO architecture for real-time object detection. </span></span>
              <span className=' text-left ml-2 text-sm text-wrap'><span className='font-bold text-2xl'>.</span> <span className='text-sm'>Studied seminal works such as AlexNet to understand convolutional layer design and performance trade-offs. </span></span>
            </p>
            {/* Second Research */}
            <p className='flex justify-between mt-3'><span className='font-bold'>Undergraduate Research Assistant – Natural Language Processing</span> <span className='font-bold'>Penn State Behrend | Summer 2024</span></p>
            <p className='flex flex-col gap-y-2'>
              <span className=' text-left ml-2 text-wrap'><span className='font-bold text-2xl'>.</span> <span className='text-sm'>Scraped and curated a custom dataset from the university website for fine-tuning T5-based and Llama-3.1-8B models. </span></span>
              <span className=' text-left ml-2 text-wrap'><span className='font-bold text-2xl'>.</span> <span className='text-sm'>Created a QA-specific dataset for fine-tuning BERT-style models.</span></span>
              <span className=' text-left ml-2 text-wrap'><span className='font-bold text-2xl'>.</span> <span className='text-sm'>Developed a model selection framework to help developers choose LLMs based on speed, accuracy, and resource requirements. </span></span>
            </p>
            {/* Third Research */}
            <p className='flex justify-between mt-3'><span className='font-bold'>Undergraduate Research Assistant – Genomic Data Analysis</span> <span className='font-bold'>Penn State Behrend | Summer 2025</span></p>
            <p className='flex flex-col gap-y-2'>
              <span className=' text-left ml-2 text-wrap '><span className='font-bold text-2xl '>.</span> <span className='text-sm'>Collected and processed genomic sequence data from the GPL570 dataset for unsupervised learning tasks. Having over 170 thousand rows (people) and over 54 thousand columns (genes).</span></span>
              <span className=' text-left ml-2 text-wrap'><span className='font-bold text-2xl'>.</span> <span className='text-sm'>Designed and trained a sparse autoencoder that identified the top 5% of probes, reducing dataset dimensionality by 95% without performance loss. </span></span>
            </p>
          </div>
          <hr className='text-lg my-2 text-white'/>
        {/* WORK EXPERIENCE  */}
        <div className='text-white'>
            <h1 className='text-xl font-bold text-start my-2 '>WORK EXPERIENCE </h1>
            <p className='flex justify-between'><span className='text-sm  font-semibold'>Tutor of Math and Science, Programming </span> <span>May 2027</span></p>
            <p className='flex justify-between'><span className='text-sm  font-semibold'>Lifeguard | YMCA</span> <span>GPA: 3.99</span></p>
            <p className='flex justify-between'><span className='text-sm  font-semibold'>Front Desk| LRC of Penn State Behrend</span> <span>GPA: 3.99</span></p>
            <p className='flex justify-between'><span className='text-sm  font-semibold'>Physics Teacher Assistant | Penn State Behrend</span> <span>GPA: 3.99</span></p>
            <p className='flex justify-between'><span className='text-sm  font-semibold'>Digital Circuit Lab Assistant & Grading Assistant| Penn State Behrend </span> <span>GPA: 3.99</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
