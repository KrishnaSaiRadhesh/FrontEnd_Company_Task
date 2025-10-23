import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='py-4 bg-[#2C4143] border border-b-[#EFECD6]/60 font-raleway'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        <div className='Logo'>
          <Link to="/" onClick={closeMenu}>
            <img 
              src="./neogreens-logo.svg" 
              alt="Logo" 
              size={10}
              className='w-32 h-8 sm:w-40 sm:h-10 md:w-48 md:h-12'
            />
          </Link>
        </div>

        <ul className='hidden md:flex items-center gap-6 lg:gap-10 text-white text-[16px] lg:text-[18px]'>
          <li className='hover:underline transition-all duration-200'>
            <NavLink to="/" className={({ isActive }) => 
              isActive ? 'text-[#EFECD6] font-semibold' : 'text-white hover:text-[#EFECD6]'
            }>
              About Us
            </NavLink>
          </li>
          <li className='hover:underline transition-all duration-200'>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? 'text-[#EFECD6] font-semibold' : 'text-white hover:text-[#EFECD6]'
            }>
              Contact Us
            </NavLink>
          </li>
          <li className='border border-[#EFECD6]/60 text-[#EFECD6]/40 px-4 py-2 lg:px-4 lg:py-3 rounded-full text-sm lg:text-base whitespace-nowrap'>
            Coming Soon
          </li>
        </ul>

        <button 
          className='md:hidden flex flex-col justify-center items-center w-8 h-8 text-white focus:outline-none'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className={`fixed inset-0 bg-[#2C4143] z-50 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-col items-center justify-center h-full space-y-8'>
            <Link 
              to="/" 
              className='text-white text-2xl font-medium hover:text-[#EFECD6] transition-colors duration-200'
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              to="/" 
              className='text-white text-2xl font-medium hover:text-[#EFECD6] transition-colors duration-200'
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <div className='border border-[#EFECD6]/60 text-[#EFECD6]/40 px-6 py-3 rounded-full text-lg mt-4'>
              Coming Soon
            </div>
            
            <button 
              className='absolute top-6 right-6 text-white text-2xl p-2'
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div 
            className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
            onClick={closeMenu}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar