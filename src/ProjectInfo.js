import React from 'react'
import { useParams } from 'react-router-dom'
import aryaproject1 from './images/aryaproject1.png'
import aryaproject2 from './images/aryaproject2.png'
import niralproject1 from './images/niralproject1.png'
import niralproject2 from './images/niralproject2.png'
import sarthak1 from './images/Sarthak_1.png'
import sarthak2 from './images/Sarthak_2.png'

const slides = [
        {
          id: 1,
          image: aryaproject1,
          title: "ABC",
          description: "Smitalay: Dance School, featuring an elegant and culturally rich layout. The pages highlight the About Us section and Faculty details, emphasizing the director, Jhelum Paranjape. The design incorporates traditional aesthetics with a modern, user-friendly interface, ensuring an immersive experience for visitors interested in Indian classical dance."
        },
        {
          id: 2,
          image: aryaproject2,
          title: "DEF",
          description: "Consulting Website designed for business and legal services. The layout is clean and professional, featuring sections for licensing, tax registration, and business setup. With a customer-focused approach, it highlights expert consultation, a mobile app for easy access, and services tailored for startups and enterprises. The design ensures seamless navigation and user engagement."
        },
        {
          id: 3,
          image: niralproject1,
          title: "GHI",
          description: "This tuberculosis project is a web application developed specifically for ASHA workers to streamline their efforts in managing tuberculosis cases in rural areas. Built for the government, the application aims to simplify data collection and reporting processes, allowing ASHA workers to focus more on providing care and support to patients. It acts as a user-friendly tool for entering patient information, tracking treatment progress, and generating necessary reports, ensuring that tuberculosis cases are monitored effectively and treatment adherence is improved."
        },
        {
          id: 4,
          image: niralproject2,
          title: "JKL",
          description: "This website for SoDo was created to help the company showcase its services and connect freelancers with potential clients. SoDo specializes in hiring freelancers and providing them with opportunities to work on various projects. The website was designed to display the range of services the company offers, along with details about the kinds of projects available for clients. It acts as a professional platform where clients can easily explore SoDo’s offerings and freelancers can find work that matches their skills. The goal was to create a seamless experience for both freelancers and clients"
        },
        {
          id: 5,
          image: sarthak1,
          title: "MNO",
          description: "The Product Management Website is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to streamline the process of managing products. It allows users to add, update, view, and delete product details, including serial number, ID, name, description, cost, and image. The backend provides a RESTful API to handle product data storage and retrieval, while the frontend offers a responsive and user-friendly interface for seamless interaction. With real-time updates, efficient database operations, and an intuitive design, this platform helps businesses efficiently manage their product inventory."
        },
        {
          id: 6,
          image: sarthak2,
          title: "PQR",
          description: "The Expense Tracker is a MERN Stack-based web application designed to help users manage their monthly expenses efficiently. It allows users to log and track their expenses, with the total spending resetting at the start of each new month. The application includes a budget functionality where users can set a monthly budget and monitor their expenses against it. Visual indicators and alerts notify users when they are approaching or exceeding their budget, ensuring better financial management. The backend, built with Node.js, Express, and MongoDB, handles data storage and retrieval, while the React frontend provides an intuitive interface for users to add expenses, view spending trends, and manage their budget seamlessly."
        },
      ];


const ProjectInfo = () => {
    const { id } = useParams()
    const slide = slides.find((s) => s.id === parseInt(id))
    // const slide = slides[parseInt(id)];
  return (
    <div className='bg-white'>
        <div className='py-32'>
            <img src={slide.image} className='w-[95%] mx-auto rounded-2xl' alt="" />
            <p className='text-black w-[85%] text-center md:text-justify mx-auto mt-10 md:text-xl font-light'>{slide.description}</p>
        </div>
    </div>
  )
}

export default ProjectInfo