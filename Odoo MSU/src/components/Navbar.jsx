import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = ({ scrollY, currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  const navbarVariants = {
    transparent: { 
      backgroundColor: 'rgba(255, 255, 255, 0)',
      boxShadow: 'none'
    },
    solid: { 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }
  }

  const handleNavClick = (page) => {
    setCurrentPage(page)
    if (isOpen) {
      setIsOpen(false)
    }
  }
  
  return (
    <motion.nav 
      className="fixed w-full z-50 transition-all duration-300"
      initial="transparent"
      animate={scrollY > 50 || currentPage !== 'home' ? "solid" : "transparent"}
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="cursor-pointer"
            >
              <span className="text-primary font-poppins font-bold text-2xl">
                <span className="text-primary">Thrive</span>
                <span className="text-secondary">Together</span>
              </span>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => handleNavClick('home')}
                className={`navbar-link px-3 py-2 text-sm font-medium cursor-pointer ${
                  currentPage === 'home' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('join')}
                className={`navbar-link px-3 py-2 text-sm font-medium cursor-pointer ${
                  currentPage === 'join' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                Join Community
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`navbar-link px-3 py-2 text-sm font-medium cursor-pointer ${
                  currentPage === 'about' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
              >
                About Us
              </button>
              <a
                href="#"
                className="navbar-link text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-accent hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              >
                Sign Up
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              currentPage === 'home' ? 'text-primary bg-gray-100' : 'text-gray-700 hover:text-primary hover:bg-gray-100'
            } cursor-pointer`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('join')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              currentPage === 'join' ? 'text-primary bg-gray-100' : 'text-gray-700 hover:text-primary hover:bg-gray-100'
            } cursor-pointer`}
          >
            Join Community
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              currentPage === 'about' ? 'text-primary bg-gray-100' : 'text-gray-700 hover:text-primary hover:bg-gray-100'
            } cursor-pointer`}
          >
            About Us
          </button>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium bg-accent text-white hover:bg-opacity-90 mt-2"
          >
            Sign Up
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar