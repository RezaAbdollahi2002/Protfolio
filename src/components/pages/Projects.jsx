import React from 'react'
import ProjectDemoImage from "../../assets/ProjectDemoImage.png";

const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto shadow-2xl shadow-blue-950 h-screen  grid grid-cols-1 gap-y-4 '>
      <a
        href="https://github.com/RezaAbdollahi2002/ClockIn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ClockIn GitHub Repository">
        <div className='bg-gray-50 mt-10 rounded-sm rounded-sm max-h-[300px] max-w-[300px] mx-auto'>
          <div>
            <h1 className='text-md font-bold text-gray-800 text-center'>ClockIn</h1>
            <hr className='text-black font-semibold my-2' />
            <img src={ProjectDemoImage} className='rounded-md mx-auto' />
          </div>
        </div>
      </a>
    </div>
  )
}

export default Projects
