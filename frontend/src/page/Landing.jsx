import React from 'react';
import {useRef} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../index.css';
import { Link } from 'react-router-dom';
import PFP from '../assets/PFP.png';
import {QuoteIcon} from '../assets/icon'

import Cee from '../assets/logo/Cee.png';
import CSS from '../assets/logo/CSS.png';
import HTML from '../assets/logo/HTML.png';
import JS from '../assets/logo/JS.png';
import Python from '../assets/logo/Python.png';

import car from '../assets/projects/car.jpg';
import CH from '../assets/projects/CH.png';
import MM from '../assets/projects/MM.png';
import TT from '../assets/projects/TT.png';


function Landing () {

    const carouselRef = useRef(null);

    const handleScrollClick = (direction) => {
      const container = carouselRef.current;
      const scrollAmount = 300; // Adjust this value to control scroll distance
      
      if (container) {
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    };
  
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
      const container = scrollContainerRef.current;
      const scrollAmount = 400; // Adjust this value to control scroll distance
      
      if (container) {
        const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    };

        const experiences = [
          {
            period: "November 2021 – May 2023",
            details: [
              {
                icon: "🖥️",
                text: "Started my programming journey with Python"
              },
              {
                icon: "🌐",
                text: "Joined NHH IT Club, collaborated with teammates to create a design for school annual poster using Figma."
              },
              {
                icon: "🎨",
                text: "Proficently used Blender to model and build an eco-friendly smarthome."
              }
            ]
          },
          {
            period: "May 2023 – August 2024",
            details: [
              {
                icon: "🏆",
                text: "Proficent in Python, started learning basic Data Structure and Algorithm."
              },
              {
                icon: "⚙️",
                text: "Mastered Microsoft Office skill, advance in PowerPoint and Word."
              }
            ]
          },
          {
            period: "Auguest 2024 – December 2024",
            details: [
              {
                icon: "🖥️",
                text: "Started exploring web development, focusing on front-end creation using HTML, CSS."
              },
              {
                icon: "🏆",
                text: "Exploring branch of Computer Science, particularly Al and Machine learning..."
              }
            ]
          },
          {
            period: "December 2024 – Present",
            details: [
              {
                icon: "⚙️",
                text: "Currently discovering the world of JavaScript, MERN stack and backend developement with Python."
              },
              {
                icon: "🌐",
                text: "Started working in Computer Science Team for SASE-USE, SWE Committee Member for the USF Engineering Expo. "
              },
              {
                icon: "🎨",
                text: "Working on two group projects: MeowMentum, ToastTutor"
              }
            ]
          }
        ];

    return(
        <div className='w-full' 
        style={{backgroundColor: '#FFF7EB'}}>
             <div className="max-w-[1920px] mx-auto">
                <section id="About Me" className="pt-16">
                <Link className="text-gray-500 font-black flex items-stretch px-16 gap-2">
                    {/* Vertical Heading */}
                    <h2 
                        className="text-6xl font-black flex items-center justify-center" 
                        style={{
                        writingMode: 'vertical-rl', // Makes the text vertical
                        transform: 'rotate(180deg)', // Rotates the text for proper direction
                        textAlign: 'center',
                        marginRight: 16, // Center-aligns the vertical text
                        margin: 0,
                        }}
                    >
                        About Me
                    </h2>

                    {/* Textbox */}
                    <div 
                        className="py-8 px-8 text-xl font-bold bg-white rounded-xl hover:-translate-y-1 hover:shadow transition  duration-400"
                        style={{
                        backgroundColor: '#f0f0f0',
                        margin: 0, // Ensures no margin between h2 and textbox
                        }}
                    >
                        <div className=' p-3 pt-3 pb-6 mb-5 bg-white flex flex-col rounded-xl'>
                            <p className='flex justify-center'>{QuoteIcon}</p>
                            <p className='hover:scale-102 text-center font-black text-grey-900'>
                            Life is short - let's make everyday count <br /> while we are still here
                            </p>
                        </div>
                        <p className='hover:scale-102 px-5'>
                        &nbsp;&nbsp;&nbsp;&nbsp; Hi! I'm Han Nguyen, a newbie but ambitious software engineer and full-stack developer who are working to build meaningful projects to connect people around the globe. 
                        </p>
                    </div>
                    <div>
                        <img src={PFP} alt="meee" width="900"/>
                    </div>
                    </Link>
                </section>

                <section id="Experience" className="mt-12">
                    <div className="mx-2 md:mx-16 py-9 px-10 text-lg font-semibold bg-white rounded-xl" style={{backgroundColor: '#e4edf2'}}>
                        <h2 className="text-5xl font-black flex items-center justify-center text-gray-500 bg-white rounded-xl py-2 mb-10" >
                            Experience
                        </h2>
                        {/* Timeline container with navigation */}
      <div className="relative">
        {/* Navigation buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Timeline content */}
        <div 
          ref={scrollContainerRef}
          className="overflow-hidden pb-8"
        >
          {/* Horizontal line */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-300"></div>
          
          <div className="flex gap-8 min-w-max px-16"> {/* Added px-12 to make space for buttons */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative w-80">
                {/* Timeline dot */}
                <div className="absolute top-8 left-1/2 w-4 h-4 bg-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Date */}
                <div className="text-center mb-10 -mt-1 font-semibold text-gray-600">
                  {exp.period}
                </div>
                
                {/* Content card */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  {exp.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="mb-4 last:mb-0">
                      <div className="flex items-start gap-3">
                        <span className="text-xl font-semibold">{detail.icon}</span>
                        <p className="text-gray-700 text-sm">{detail.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
                    </div>
                </section>

                <section id="Projects" className="mt-16 pb-14 pt-10" style={{backgroundColor: '#FFECCF'}}>
                    <h2 className="text-5xl font-extrabold text-center mb-8" style={{color: '#626669'}}>
                        Recent Projects
                    </h2>
                    <div className="flex flex-wrap gap-5 justify-center px-4">
                        <div className=" text-center flex flex-row rounded-xl bg-white hover:shadow">
                            <img src={CH} alt="Tide" width="240" height="167" className='rounded-l-xl' style={{ objectFit: 'cover' }}/>
                            <div className='flex flex-col'>
                            <p className="pt-4 pb-2 px-10 font-bold text-lg text-xl font-bold">CastleHassle</p>
                            <p className='mx-5 font-medium'>Thrilling escape-castle themed game.</p>
                            <div className='flex flex-row px-4 pt-5 pb-5 gap-3 align-center justify-center'>
                              <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Python</div>
                              <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Team-work</div>
                            </div>
                            <button className='mx-8 mt-20 py-3 rounded-xl font-bold hover:-translate-y-1 mb-5 hover:shadow transition duration-400' style={{backgroundColor: '#FFF6D7'}} >View More</button>
                            </div>
                        </div>
                        <div className=" text-center flex flex-row rounded-xl bg-white hover:shadow">
                            <img src={TT} alt="Tide" width="240" height="167" className='rounded-l-xl' style={{ objectFit: 'cover' }}/>
                            <div className='flex flex-col'>
                            <p className="pt-4 pb-2 px-10 font-bold text-lg text-xl font-bold">ToastTutor</p>
                            <p className='mx-8 mb-5 font-medium'>Connecting tutors and students.</p>
                            <div className=''>
                              <div className='flex flex-row px-4 pb-2 gap-3 align-center justify-center'>
                                <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Python</div>
                                <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Team-work</div>
                              </div>
                              <div className='flex flex-row px-4 gap-3 align-center justify-center'>
                                <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>JavaScript</div>
                                <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>HTML/CSS</div>
                              </div>
                            </div>
                                <button className='mx-8 mt-16 py-3 rounded-xl font-bold mb-5 hover:-translate-y-1 hover:shadow transition duration-400' style={{backgroundColor: '#FFF6D7'}} >View More</button>
                            </div>
                        </div>
                      </div>
                    <div className="flex flex-wrap gap-5 justify-center px-4 pt-6">
                      <div className=" text-center flex flex-row rounded-xl bg-white hover:shadow">
                            <img src={MM} alt="Tide" width="240" height="167" className='rounded-l-xl' style={{ objectFit: 'cover' }}/>
                            <div className='flex flex-col'>
                            <p className="pt-4 pb-2 px-10 font-bold text-lg text-xl font-bold">MeowMentum</p>
                            <p className='mx-14 font-medium'>Your productivity bestfriend.</p>
                            <div className='flex flex-row px-4 pt-5 pb-5 gap-3 align-center justify-center'>
                              <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>JavaScript</div>
                              <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>HTML/CSS</div>
                            </div>
                            <button className='mx-8 mt-20 py-3 rounded-xl font-bold hover:-translate-y-1 mb-5 hover:shadow transition duration-400' style={{backgroundColor: '#FFF6D7'}} >View More</button>
                            </div>
                        </div>
                        <div className=" text-center flex flex-row rounded-xl bg-white hover:shadow">
                            <img src={car} alt="Tide" width="240" height="167" className='rounded-l-xl' style={{ objectFit: 'cover' }}/>
                            <div className='flex flex-col'>
                            <p className="pt-4 pb-2 px-10 font-bold text-lg text-xl font-bold">Fennech The Car</p>
                            <p className='mx-12 font-medium'>Object-following Arduino Car</p>
                            <div className='flex flex-row px-4 pt-5 pb-5 gap-3 align-center justify-center'>
                              <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>C++</div>
                              <div className='px-4 py-1 rounded-full font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Teamwork</div>
                            </div>
                            <button className='mx-8 mt-20 py-3 rounded-xl font-bold hover:-translate-y-1 mb-5 hover:shadow transition duration-400' style={{backgroundColor: '#FFF6D7'}} >View More</button>
                            </div>
                        </div>
                        
                    </div> 
                </section>

                <section id="Technologies" className="mt-16 mb-24">
                    <h2 className="text-5xl font-extrabold text-center mb-5">
                        Technologies
                    </h2>
                    <div className="relative w-full max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button 
                      onClick={() => handleScrollClick('left')}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 mx-16"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button 
                      onClick={() => handleScrollClick('right')}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 mx-16"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Container */}
                    <div 
                      ref={carouselRef}
                      className="flex overflow-x-hidden scroll-smooth gap-4 py-8 px-12 mx-16"
                    >
                      {/* Language Cards */}
                      {[
                        { name: 'Python', imgSrc: '/api/placeholder/110/110' },
                        { name: 'JavaScript', imgSrc: '/api/placeholder/118/110' },
                        { name: 'HTML', imgSrc: '/api/placeholder/120/90' },
                        { name: 'CSS', imgSrc: '/api/placeholder/107/110' },
                        { name: 'C++', imgSrc: '/api/placeholder/108/110' },
                        // Duplicate entries for demonstration
                      ].map((lang, index) => (
                        <div
                          key={index}
                          className="flex-none px-7 py-4 bg-white rounded-xl hover:scale-105 hover:shadow transition-all"
                        >
                          <img 
                            src={lang.imgSrc} 
                            alt={`${lang.name} icon`}
                            className="w-28 h-28 object-contain"
                          />
                          <p className="mt-2 font-bold text-lg text-center">{lang.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
        </div>
    </div>

    )
}

export default Landing