import React from 'react'
import { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import logo from './images/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const location = useLocation();
    const navigate = useNavigate()

    const handleScroll = (section) => {
      if(location.pathname !== '/') {
        navigate('/', {replace: false});

        setTimeout(() => {
          scroller.scrollTo(section, {
            duration: 800,
            smooth: "easeInOutQuart",
          });
        }, 100)
        setMenu(false)
      }
      else {
        scroller.scrollTo(section, {
          duration: 800,
          smooth: "easeInOutQuart",
        });
        setMenu(false)
      }
    }
  return (
    <div className=''>
        <nav className='fixed z-20 h-20 bg-black w-full shadow-lg md:shadow-lg shadow-black'>
                <div className='flex justify-between items-center pt-8'>
                  <Link to={'/'} className=''>
                    <img src={logo} className='absolute z-20 top-5 lg:top-3 left-3 h-12 lg:h-16 md:ml-5 xl:ml-10' alt="NexGen Designs" />
                  </Link>
        
                  <div className='md:hidden w-full flex flex-col items-end'>
                      <svg onClick={() => setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-8 mr-5 mb-2 text-white cursor-pointer transition-all duration-1000 ${menu? "rotate-180":"rotate-0"}`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                        
                      <div className={`overflow-hidden bg-gray-900 text-white w-full flex flex-col uppercase text-lg transition-all duration-1000 ease-in-out ${menu? "max-h-96":"max-h-0"}`}>
                          {/* <a className='navreslinks' href="#top">Home</a> */}
                        <button onClick={() => handleScroll("section-services")} className='navreslinks' to="section-services">Services</button>
                        <button onClick={() => handleScroll("section-projects")} className='navreslinks' to="section-projects">Projects</button>
                        <button onClick={() => handleScroll("section-about")} className='navreslinks' to="section-about">About</button>
                        {/* <a className='navreslinks' href="https://wa.me/918788764671?text=">Contact</a> */}
                      </div>
                  </div>
        
                  <div className='hidden md:flex justify-evenly items-center w-1/3 md:mr-5 xl:mr-0'>
                    {/* <a href="#section-services" className='navlinks'>Services</a> */}
                    <button onClick={() => handleScroll("section-services")} className='navlinks'>Services</button>
                    {/* <a href="#section-projects" className='navlinks'>Projects</a> */}
                    <button onClick={() => handleScroll("section-projects")} className='navlinks'>Projects</button>
                    {/* <a href="#section-about" className='navlinks'>About</a> */}
                    <button onClick={() => handleScroll("section-about")} className='navlinks'>About</button>
                  </div>
                </div>
              </nav>
    </div>
  )
}

export default Navbar