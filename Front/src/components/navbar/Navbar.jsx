import React from 'react';
import HomepageLogo from '../../assets/ProtfolioImage.jpg';

const Navbar = ({ isOn, setIsOn, setActivePage }) => {
  const handleClick = () => {
    setIsOn(false);
    setActivePage(null);
    // Clear localStorage when going back to menu
    localStorage.removeItem('activePage');
    localStorage.removeItem('isOn');
  };

  return (
    <nav className='sticky top-0 z-20  bg-opacity-50 backdrop-blur-lg text-white px-3 py-3 w-full shadow-lg'>
      <div className='max-w-7xl mx-auto'>
        <ul className='flex gap-x-6 items-center justify-center text-white text-xl'>
          <li>
            <button 
              className='flex items-center hover:opacity-80 transition-opacity'
              onClick={handleClick}
            >
              <img 
                src={HomepageLogo}  
                className='w-22 h-22 rounded-full object-cover'
                alt="Homepage Logo"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;