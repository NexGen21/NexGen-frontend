import React from 'react'
import logo from './images/logo.png'
import instagram from './images/instagram1.png'
import gmail from './images/gmail1.png'
import whatsapp from './images/whatsapp1.png'

const Footer = () => {
  return (
    <div>
        {/* Footer 1 */}
      <section className='bg-[#1B1C32] pt-8'>
        <div className='md:flex md:text-left'>
          <div className='footersect'>
              <img src={logo} alt="" className='hidden md:block md:h-16 ml-8'/>
          </div>
          <div className='footersect'>
              <h1 className='text-xl lg:text-2xl md:ml-8'>Our Services</h1>
              <ul className='font-extralight mt-5 md:ml-8'>
                <li className='footerlist'>Web Development</li>
                <li className='footerlist'>UX/UI Design</li>
                <li className='footerlist'>Graphic Design</li>
                <li className='footerlist'>Data Analytics</li>
              </ul>
          </div>
          <div className='footersect'>
              <h1 className='mt-8 md:mt-0 md:ml-8 text-xl lg:text-2xl'>Social Media</h1>
              <div className='flex justify-evenly items-center mt-3 mx-auto md:ml-5 w-[60%] lg:w-[40%]'>
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
      {/* Footer 2 */}
      <footer>
          <div className='text-sm md:text-base lg:text-xl text-center py-6 opacity-55'>
            &copy; 2025 Designed by NexGen with ❤
          </div>
      </footer>
    </div>
  )
}

export default Footer