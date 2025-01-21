import React from 'react';
import {useRef, useState, useEffect} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../index.css';
import { Link } from 'react-router-dom';
import PFP from '../assets/PFP.png';
import {QuoteIcon, LinkedInIcon, FaceBookIcon, GitHubIcon} from '../assets/icon'
import {ComputerIcon, UsersIcon, AwardIcon, SettingsIcon, GlobeIcon} from '../assets/icon'

import Cee from '../assets/logo/Cee.png';
import CSS from '../assets/logo/CSS.png';
import HTML from '../assets/logo/HTML.png';
import JS from '../assets/logo/JS.png';
import Python from '../assets/logo/Python.png';
import Django from '../assets/logo/Django.png';
import Figma from '../assets/logo/Figma.png';
import GitHub from '../assets/logo/GitHub.png';
import MS from '../assets/logo/MS.png';
import PostgreSQL from '../assets/logo/PostgreSQL.png';
import react from '../assets/logo/react.png';

import car from '../assets/projects/car.jpg';
import CH from '../assets/projects/CH.png';
import MM from '../assets/projects/MM.png';
import TT from '../assets/projects/TT.png';


function Landing () {

    const carouselRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const techStack = [
      { name: 'Python', imgSrc: Python },
      { name: 'JavaScript', imgSrc:JS },
      { name: 'HTML', imgSrc:HTML },
      { name: 'CSS', imgSrc:CSS, },
      { name: 'C++', imgSrc: Cee },
      { name: 'Django', imgSrc: Django },
      { name: 'React', imgSrc: react },
      { name: 'Figma', imgSrc:Figma },
      { name: 'GitHub', imgSrc:GitHub },
      { name: 'PostgreSQL', imgSrc:PostgreSQL },
      { name: 'Microsoft', imgSrc: MS }
    ]

    const checkScrollButtons = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };
  
    useEffect(() => {
      const carousel = carouselRef.current;
      if (carousel) {
        carousel.addEventListener('scroll', checkScrollButtons);
        // Initial check
        checkScrollButtons();
      }
      return () => {
        if (carousel) {
          carousel.removeEventListener('scroll', checkScrollButtons);
        }
      };
    }, []);
  
    const handleScrollClick = (direction) => {
      const container = carouselRef.current;
      if (container) {
        const cardWidth = 220; // Width of card (112px) + padding + gap
        const scrollAmount = cardWidth * 3; // Scroll 3 cards at a time
        const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
        
        container.scrollTo({
          left: targetScroll,
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
                icon:ComputerIcon ,
                text: "Started my programming journey with Python."
              },
              {
                icon: UsersIcon,
                text: "Joined NHH IT Club, collaborated with teammates to create a design for school annual poster using Figma."
              },
              {
                icon: AwardIcon,
                text: "Proficently used Blender to model and build an eco-friendly smarthome."
              }
            ]
          },
          {
            period: "May 2023 – August 2024",
            details: [
              {
                icon: AwardIcon,
                text: "Proficent in Python, started learning basic Data Structure and Algorithm."
              },
              {
                icon: SettingsIcon,
                text: "Mastered Microsoft Office skill, advance in PowerPoint and Word."
              }
            ]
          },
          {
            period: "Auguest 2024 – December 2024",
            details: [
              {
                icon: ComputerIcon,
                text: "Started exploring web development, focusing on front-end creation using HTML, CSS."
              },
              {
                icon: GlobeIcon,
                text: "Exploring branch of Computer Science, particularly Al and Machine learning..."
              }
            ]
          },
          {
            period: "December 2024 – Present",
            details: [
              {
                icon: SettingsIcon,
                text: "Currently discovering the world of JavaScript, MERN stack and backend developement with Python."
              },
              {
                icon: GlobeIcon,
                text: "Started working in Computer Science Team for SASE-USE, SWE Committee Member for the USF Engineering Expo. "
              },
              {
                icon: UsersIcon,
                text: "Working on two group projects: MeowMentum, ToastTutor..."
              }
            ]
          }
        ];

    return(
        <div className='w-full' 
        style={{backgroundColor: '#fffaf2'}}>
             <div className="max-w-[1920px] mx-auto">
                <section id="About Me" className="pt-16">
                <Link className="text-gray-500 font-black flex items-stretch px-16 gap-2">
                    {/* Vertical Heading */}
                    <h2 
                        className="text-6xl font-black flex items-center justify-center hover:text-sky-800 " 
                        style={{
                        writingMode: 'vertical-rl', // Makes the text vertical
                        transform: 'rotate(180deg)', // Rotates the text for proper direction
                        textAlign: 'center',
                        marginRight: 10, // Center-aligns the vertical text
                        margin: 0,
                        }}
                    >
                        About Me
                    </h2>

                    {/* Textbox */}
                    <div 
                        className="py-8 px-8 text-xl font-bold bg-white rounded-xl hover:-translate-y-1 hover:shadow transition duration-400"
                        style={{
                        backgroundColor: '#f0f0f0',
                        margin: 0, // Ensures no margin between h2 and textbox
                        }}
                    >
                        <div className=' p-3 pt-3 pb-6 mb-5 bg-white flex flex-col rounded-xl'>
                            <p className='flex justify-center'>{QuoteIcon}</p>
                            <p className='hover:scale-102 text-center font-black text-grey-900'>
                            Life is short - let's make everyday count <br /> while we are still here.
                            </p>
                        </div>
                        <p className='hover:scale-102 px-5'>
                        &nbsp;&nbsp;&nbsp;&nbsp; Hi! I'm Han Nguyen, a newbie but ambitious software engineer and full-stack developer who are working to build meaningful projects to connect people around the globe. 
                        </p>
                        <div className='flex flex-row justify-center mt-4 gap-4'>
                          <a href='https://www.facebook.com/GiaHan14032006' className='p-1 rounded-lg hover:shadow-lg' onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#78A3C5'}}>{FaceBookIcon}</a>
                          <a href='https://www.linkedin.com/in/xuangiahannguyen/' className='p-1 rounded-lg hover:shadow-lg' onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#78A3C5'}}>{LinkedInIcon}</a>
                          <a href='https://github.com/XuanGiaHanNguyen' className='p-1 rounded-lg hover:shadow-lg' onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#78A3C5'}}>{GitHubIcon}</a>
                        </div>
                    </div>
                    <div>
                        <img src={PFP} alt="meee" width="900"/>
                    </div>
                    </Link>
                </section>

                <section id="Experience" className="mt-12">
                    <div className="mx-2 md:mx-16 py-9 px-10 text-lg font-semibold bg-white rounded-xl hover:-translate-y-1 hover:shadow transition  duration-400" style={{backgroundColor: '#e4edf2'}}>
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
                <div className="absolute top-8 left-1/2 w-4 h-4 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Date */}
                <div className="text-center mb-10 -mt-1 font-bold text-gray-500">
                  {exp.period}
                </div>
                
                {/* Content card */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  {exp.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="mb-4 last:mb-0">
                      <div className="flex items-start gap-3">
                        <span className="text-xl font-semibold">{detail.icon}</span>
                        <p className="text-gray-500 text-sm font-semibold">{detail.text}</p>
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

                <section id="Projects" className="mt-16 pb-14 pt-10" style={{backgroundColor: '#fff5e6'}}>
                    <h2 className="text-5xl font-extrabold text-center mb-8" style={{color: '#626669'}}>
                        Recent Projects
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center px-4 ">
        <div className="text-center flex flex-row rounded-xl bg-white hover:shadow-md hover:-translate-y-1 duration-400 ">
          <img src={CH} alt="Tide" width="200" height="140" className='rounded-l-xl' style={{ objectFit: 'cover' }}/>
          <div className='flex flex-col'>
            <p className="pt-3 pb-1 px-8 text-lg font-bold text-gray-600">CastleHassle</p>
            <p className='mx-4 text-sm font-bold text-gray-500'>Thrilling escape-castle themed game.</p>
            <div className='flex flex-row px-3 pt-3 pb-3 gap-2 align-center justify-center'>
              <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Python</div>
              <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Team-work</div>
            </div>
            <button className='mx-6 mt-12 py-2 rounded-xl font-bold hover:-translate-y-1 mb-4 hover:shadow transition duration-400' style={{backgroundColor: '#FFF6D7'}} >View More</button>
          </div>
        </div>

        <div className="text-center flex flex-row rounded-xl bg-white hover:shadow-md hover:-translate-y-1 duration-400 ">
          <img src={TT} alt="Tide" width="200" height="140" className='rounded-l-xl' style={{ objectFit: 'cover' }}/>
          <div className='flex flex-col'>
            <p className="pt-3 pb-1 px-8 text-lg font-bold text-gray-600">ToastTutor</p>
            <p className='mx-6 mb-3 text-sm font-bold text-gray-500'>Connecting tutors and students.</p>
            <div className=''>
              <div className='flex flex-row px-3 pb-2 gap-2 align-center justify-center'>
                <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Python</div>
                <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Team-work</div>
              </div>
              <div className='flex flex-row px-3 gap-2 align-center justify-center'>
                <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>JavaScript</div>
                <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>HTML/CSS</div>
              </div>
            </div>
            <button className='mx-6 mt-8 py-2 rounded-xl font-bold mb-4 hover:-translate-y-1 hover:shadow transition duration-400' style={{backgroundColor: '#FFF6D7'}} >View More</button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center px-4 pt-4">
        <div className="text-center flex flex-row rounded-xl bg-white hover:shadow-md hover:-translate-y-1 duration-400 ">
          <img src={MM} alt="Tide" width="200" height="140" className='rounded-l-xl' style={{ objectFit: 'cover' }}/>
          <div className='flex flex-col'>
            <p className="pt-3 pb-1 px-8 text-lg font-bold text-gray-600">MeowMentum</p>
            <p className='mx-12 text-sm font-bold text-gray-500'>Your productivity bestfriend.</p>
            <div className='flex flex-row px-3 pt-3 pb-3 gap-2 align-center justify-center'>
              <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>JavaScript</div>
              <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>HTML/CSS</div>
            </div>
            <button className='mx-6 mt-12 py-2 rounded-xl font-bold hover:-translate-y-1 mb-4 hover:shadow transition duration-400' style={{backgroundColor: '#FFF6D7'}} >View More</button>
          </div>
        </div>

        <div className="text-center flex flex-row rounded-xl bg-white hover:shadow-md hover:-translate-y-1 duration-400 ">
          <img src={car} alt="Tide" width="200" height="140" className='rounded-l-xl' style={{ objectFit: 'cover' }}/>
          <div className='flex flex-col'>
            <p className="pt-3 pb-1 px-8 text-lg font-bold text-gray-600">Fennech The Car</p>
            <p className='mx-9 text-sm font-bold text-gray-500 '>Object-following Arduino Car</p>
            <div className='flex flex-row px-3 pt-3 pb-3 gap-2 align-center justify-center'>
              <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>C++</div>
              <div className='px-3 py-1 rounded-full text-sm font-bold text-white' style={{backgroundColor: '#78A3C5'}}>Teamwork</div>
            </div>
            <button className='mx-6 mt-12 py-2 rounded-xl font-bold hover:-translate-y-1 mb-4 hover:shadow transition duration-400' style={{backgroundColor: '#FFF6D7'}} >View More</button>
          </div>
        </div>
      </div>
                </section>

                <section id="Technologies" className="mt-16 pb-20">
                  <div className="mx-2 md:mx-16 py-9 px-10 text-lg font-semibold bg-white rounded-xl hover:-translate-y-1 hover:shadow transition  duration-400" style={{backgroundColor: '#e4edf2'}}>
                    <h2 className="text-5xl font-extrabold text-center text-gray-500">
                        Technologies
                    </h2>
                    <div className="relative w-full max-w-6xl mx-auto">
                      {/* Left Navigation Button */}
                      {showLeftButton && (
                        <button
                          onClick={() => handleScrollClick('left')}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-8"
                          aria-label="Scroll left"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                      )}

                      {/* Right Navigation Button */}
                      {showRightButton && (
                        <button
                          onClick={() => handleScrollClick('right')}
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-8"
                          aria-label="Scroll right"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      )}

                      {/* Carousel Container */}
                      <div
                        ref={carouselRef}
                        className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-4 py-8 px-8 mx-12"
                        style={{
                          msOverflowStyle: 'none',
                          scrollbarWidth: 'none',
                        }}
                      >
                        {techStack.map((tech, index) => (
                          <div
                            key={index}
                            style={{backgroundColor: '#fcfcfc'}}
                            className="flex-none w-40 snap-start px-6 py-4 bg-white rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-200"
                          >
                            <img
                              src={tech.imgSrc}
                              alt={`${tech.name} icon`}
                              className="w-32 h-32 object-contain"
                            />
                            <p className="mt-2 font-bold text-lg text-gray-500 text-center">{tech.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>
                </section>
        </div>
    </div>

    )
}

export default Landing