import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import computer from './images/computer 1.png'
import webdesign from './images/web-design1.png'
import brush from './images/brush1.png'
import analytics from './images/analytics1.png'
import arya1 from './images/Arya_1.png'
import arya2 from './images/Arya_2.png'
import niral1 from './images/Niral_1.png'
import niral2 from './images/Niral_2png.png'
import sarthak1 from './images/Sarthak_1.png'
import sarthak2 from './images/Sarthak_2.png'
import left from './images/left.png'
import right from './images/right.png'
import aboutus from './images/aboutus.png'
import instagram from './images/instagram1.png'
import gmail from './images/gmail1.png'
import whatsapp from './images/whatsapp1.png'
import testimonial1 from './images/testimonial1.png'
import testimonial2 from './images/testimonial2.png'
import star from './images/Star.png'
import fiverr from './images/Fiverrfinal.png'

const Home = () => {
    const slides = [
        {
          id: 1,
          image: arya1,
          title: "Smitalay Dance School",
          description: "This website for SoDo was created to help the company showcase its services and connect freelancers with potential clients. SoDo specializes in hiring freelancers and providing them with opportunities to work on various projects. The website was designed to display the range of services the company offers, along with details about the kinds of projects available for clients. It acts as a professional platform where clients can easily explore SoDo’s offerings and freelancers can find work that matches their skills. The goal was to create a seamless experience for both freelancers and clients."
        },
        {
          id: 2,
          image: arya2,
          title: "Consulting Website",
          description: "This website for SoDo was created to help the company showcase its services and connect freelancers with potential clients. SoDo specializes in hiring freelancers and providing them with opportunities to work on various projects. The website was designed to display the range of services the company offers, along with details about the kinds of projects available for clients. It acts as a professional platform where clients can easily explore SoDo’s offerings and freelancers can find work that matches their skills. The goal was to create a seamless experience for both freelancers and clients."
        },
        {
          id: 3,
          image: niral1,
          title: "Tuberculosis App for ASHA Workers",
          description: "This tuberculosis project is a web application developed specifically for ASHA workers to streamline their efforts in managing tuberculosis cases in rural areas. Built for the government, the application aims to simplify data collection and reporting processes, allowing ASHA workers to focus more on providing care and support to patients. It acts as a user-friendly tool for entering patient information, tracking treatment progress, and generating necessary reports, ensuring that tuberculosis cases are monitored effectively and treatment adherence is improved."
        },
        {
          id: 4,
          image: niral2,
          title: "SoDo Company Website",
          description: "This website for SoDo was created to help the company showcase its services and connect freelancers with potential clients. SoDo specializes in hiring freelancers and providing them with opportunities to work on various projects. The website was designed to display the range of services the company offers, along with details about the kinds of projects available for clients. It acts as a professional platform where clients can easily explore SoDo’s offerings and freelancers can find work that matches their skills. The goal was to create a seamless experience for both freelancers and clients"
        },
        {
          id: 5,
          image: sarthak1,
          title: "Product Management Website",
          description: ""
        },
        {
          id: 6,
          image: sarthak2,
          title: "ExpenseTracker",
          description: ""
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [slidesPerView, setSlidesPerView] = useState(3);

      useEffect(() => {
        const handleResize = () => {
          if(window.innerWidth < 768) {
            setSlidesPerView(1);
          }
          else {
            setSlidesPerView(3);
          }
        };

        handleResize()

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
      }, [])
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - slidesPerView : prevIndex - 1
        );
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - slidesPerView ? 0 : prevIndex + 1
        );
      };
  return (
    <div>
    {/* Home */}
      <section className='section-home pt-28 md:pt-56'>
        <h1 className='cursor line1 pb-3 text-xl md:text-4xl lg:text-5xl xl:text-6xl titlefont'>From Concept To Creation,</h1>
        <h1 className='cursor line2 mb-8 md:mb-16 text-xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-gradient-to-r from-[#5D95FF] to-white bg-clip-text titlefont'>We've Got You Covered</h1>
        <ScrollLink to="section-services" smooth={true} duration={800} className='hover:opacity-90 mt-10 bg-gradient-to-r from-[#3E80F6] to-[#6D6EF7] md:text-3xl py-6 px-8 rounded-2xl cursor-pointer'>Get Started</ScrollLink>
      </section>

      {/* Services */}
      <section id='section-services'>
        <h1 className='font-semibold text-lg md:text-2xl lg:text-4xl'>Delivering excellence through customized <br />and reliable services!</h1>

        <div className='md:grid grid-cols-2 xl:flex mt-8 lg:mt-20 mx-auto w-[90%] justify-evenly'>
          <div className='card'>
            <img src={computer} alt="" />
            <div className='cardtext'>
              <h1 className='cardtitle'>Web Development</h1>
              <p className='carddesc'>Empowering your digital identity with robust web solutions.</p>
            </div>
          </div>
          <div className='card'>
            <img src={webdesign} alt="" />
              <div className='cardtext'>
                <h1 className='cardtitle'>UI/UX Design</h1>
                <p className='carddesc'>Designing interfaces that speak simplicity and brilliance.</p>
              </div>
          </div>
          <div className='card'>
            <img src={brush} alt="" />
              <div className='cardtext'>
                <h1 className='cardtitle'>Graphic Designing</h1>
                <p className='carddesc'>Your vision, beautifully brought to life through stunning designs</p>
              </div>
          </div>
          <div className='card'>
            <img src={analytics} alt="" />
              <div className='cardtext'>
                <h1 className='cardtitle'>Data Analytics</h1>
                <p className='carddesc'>Decoding data for sharper strategies and better outcomes.</p>
              </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id='section-projects'>
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-[90%] overflow-hidden">
        {/* Left Button */}
            <button
              className="scale absolute border left-0 z-10 p-2 lg:p-4 bg-black bg-opacity-50 rounded-full shadow-lg hover:bg-black"
              onClick={handlePrev}
            >
              <img src={left} className='size-4' alt="" />
            </button>

        {/* Slider */}
          <div className="flex md:w-[90%]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                width: `${(slides.length / slidesPerView) * 100}%`,
              }}
            >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="projcard flex-shrink-0 w-full md:w-1/3 text-center"
                style={{ width: `${100 / slidesPerView}` }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="projimg"
                />
                <div className='projlabel'>
                  <h3 className="projtitle">
                    {slide.title}
                  </h3>
                  <Link to={`/project/${slide.id}`} className="projbtn">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
            
          </div>
        </div>

        {/* Right Button */}
        <button
          className="scale absolute border right-0 z-10 p-2 lg:p-4 bg-black bg-opacity-50 rounded-full shadow-lg hover:bg-black"
          onClick={handleNext}
        >
          <img src={right} className='size-4' alt="" />
        </button>
      </div>
    </div>
      </section>
      {/* About */}
      <section id='section-about'>
          <div className='md:flex justify-center w-[85%] mx-auto'>
            <img src={aboutus} alt="About" className='mb-4 md:mb-0 w-full h-72 md:w-auto md:h-[90vh]'/>
            <div className='md:w-1/2 md:text-left flex flex-col justify-center'>
              <h1 className='md:ml-8 text-3xl md:text-4xl lg:text-6xl mb-8 font-semibold'>About Us</h1>
              <p className='md:ml-8 lg:text-2xl font-light'>Welcome to NexGen! We create stunning, effective digital products. Let's build something incredible together! Our team blends creativity and tech to deliver amazing graphic design, UI/UX, and web development solutions!</p>
              <div className='flex justify-evenly items-center mt-8 mx-auto md:ml-8 lg:w-[35%]'>
                <a href="https://www.instagram.com/nexgen136?igsh=cDh3YzQ2aHptcGo5" className='p-3 hover:bg-blue-800 rounded-full'>
                  <img src={instagram} alt="Instagram" className='size-8'/>
                </a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=nexgendesigns21@gmail.com&tf=cm" className='p-3 hover:bg-blue-800 rounded-full'>
                  <img src={gmail} alt="Gmail" className='size-8'/>
                </a>
                <a href="https://wa.me/918788764671?text=" className='p-3 hover:bg-blue-800 rounded-full'>
                  <img src={whatsapp} alt="Whatsapp" className='size-8'/>
                </a>
              </div>
            </div>
          </div>
      </section>
      {/* Banner */}
      <section className='bg-[#1B1C32] py-24' id='section-banner'>
          <div>
            {/* <h1 className='text-2xl mx-5 md:mx-0 md:text-3xl lg:text-4xl mb-12'>Mai Maarunga tumko</h1> */}
            <h1 className='text-2xl mx-5 md:mx-0 md:text-3xl lg:text-4xl mb-12'>We’re Now Available on</h1>
            <a href='https://www.fiverr.com/s/o8LYlwX' className=''>
              <img src={fiverr} className='w-[50%] md:w-[18.5%] md:h-[14.5vh] mx-auto'></img>
            </a>
          </div>
      </section>
      {/* Contact */}
      <section>
        <h1 className='text-3xl md:text-5xl font-medium md:w-1/2 text-center mx-auto text-transparent bg-gradient-to-r from-white to-[#8CA9D9] bg-clip-text'>Testimonials</h1>

        <div className='md:flex justify-evenly w-3/4 mx-auto mt-10 md:mt-16'>
          <div className='bg-gradient-to-b from-[#437EF6] to-[#6B6EF7] p-0.5 mb-8 md:mb-0 rounded-lg md:mr-10'>
            <div className='testimonials'>
              <div className='testheader'>
                <img className='testimonialimg' src={testimonial1} alt="" />
                <div>
                  <h2 className='testimonialtitle'>Raghavendra Nair</h2>
                  <p className='testdesignation'>Founder, Vertex Innovates</p>
                </div>
              </div>
              <div className='flex items-center w-1/4 justify-evenly mt-2'>
                <img src={star} alt="" className='size-10'/>
                <h1 className='text-3xl'>4.5</h1>
              </div>
              <p className='testimonialdesc'>"Working with NexGen Designs was such a smooth experience. They truly understood our vision and brought it to life with stunning creativity. The team was super responsive and went above and beyond to meet our needs. We couldn’t be happier with the final product—it’s simply perfect!"</p>
            </div>
          </div>


          <div className='bg-gradient-to-b from-[#437EF6] to-[#6B6EF7] p-0.5 rounded-lg'>
              <div className='testimonials'>
                <div className='testheader'>
                  <img className='testimonialimg' src={testimonial2} alt="" />
                  <div>
                    <h2 className='testimonialtitle'>Aditi Menon</h2>
                    <p className='testdesignation'>Marketing Strategist at Lumara Solutions</p>
                  </div>
                  </div>
                  <div className='flex items-center w-1/4 justify-evenly mt-2'>
                    <img src={star} alt="" className='size-10'/>
                    <h1 className='text-3xl'>5.0</h1>
                  </div>
                  <p className='testimonialdesc'>"NexGen Designs completely transformed our brand’s online presence. Their attention to detail and innovative ideas blew us away. The website they created is not only beautiful but also incredibly user-friendly. We’ve already received so many compliments. Thank you, NexGen, for making our dream a reality!"</p>
                </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Home