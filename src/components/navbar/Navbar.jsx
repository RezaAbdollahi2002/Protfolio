import React from 'react'
import { Link } from 'react-router'
import HomepageLogo from '../../assets/HomepageIcon.png'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 text-sm md:text-medium font-semibold bg-blue-950 text-white px-3 py-1 max-w-300 mx-auto '>
        <div className='w-full mx-auto'>
            <ul className='flex gap-x-2 justify-center '>
                <Link 
            className='left-0 '
            to={'/'}
            >
                <img src={HomepageLogo}  className='w-9.5 h-9.5 rounded-full bg-transparent'/>
            </Link>
                <Link 
                to={'/projects'}
                className='hover:text-yellow-300 mt-2'>
                    Projects
                </Link>
                <Link 
                to={'/research'}
                    className='hover:text-yellow-300 mt-2'
                >
                    Research
                </Link>
                <Link
                to={'/resume'}
                className='hover:text-yellow-300 mt-2'>
                    Resume
                </Link>
                <Link 
                to={'/contact'}
                className='hover:text-yellow-300 mt-2'>
                    Contact 
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
