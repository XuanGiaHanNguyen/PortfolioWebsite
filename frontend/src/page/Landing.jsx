import React from 'react';
import {useState, useEffect, useRef} from 'react'
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
                <div className="text-center mb-10 -mt-1 font-medium text-gray-600">
                  {exp.period}
                </div>
                
                {/* Content card */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  {exp.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="mb-4 last:mb-0">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">{detail.icon}</span>
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
                    <h2 className="text-5xl font-extrabold text-center mb-10" style={{color: '#626669'}}>
                        Recent Projects
                    </h2>
                    <div className="flex flex-wrap gap-5 justify-center px-4">
                        <Link className="px-9 py-10 text-center rounded-xl bg-white hover:scale-105 hover:shadow">
                            <p className="pb-3 font-bold text-lg">CastleHassle</p>
                            <img src={CH} alt="Tide" width="167" height="167" />
                        </Link>
                        <Link className="px-9 py-10 text-center rounded-xl bg-white hover:scale-105 hover:shadow">
                            <p className="pb-3 font-bold text-lg">ToastTutor</p>
                            <img src={TT} alt="Tide" width="170" height="170" />
                        </Link>
                        <Link className="px-9 py-10 text-center rounded-xl bg-white hover:scale-105 hover:shadow">
                            <p className="pb-3 font-bold text-lg">MeowMentum</p>
                            <img src={MM} alt="Tide" width="170" height="170" />
                        </Link>
                        <Link className="px-9 py-10 text-center rounded-xl bg-white hover:scale-105 hover:shadow">
                            <p className="pb-3 font-bold text-lg">Fennec the Car</p>
                            <img src={car} alt="Tide" width="170" height="170" />
                        </Link>
                    </div> 
                </section>

                <section id="Technologies" className="mt-16 mb-24">
                    <h2 className="text-5xl font-extrabold text-center mb-10">
                        Technologies
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center my-8 px-4">
                        <Link className="px-11 py-10 text-center bg-white rounded-xl hover:scale-105 hover:shadow">
                            <img src={Python} alt="python icon" width="110"/>
                            <p className="mt-2 font-bold text-lg">Python</p>
                        </Link>
                        <Link className="px-9 py-10 text-center bg-white rounded-xl hover:scale-105 hover:shadow">
                            <img src={JS} alt="java icon" width="118"/>
                            <p className="mt-2 font-bold text-lg">JavaScript</p>
                        </Link>
                        <Link className="px-9 py-10 text-center bg-white rounded-xl hover:scale-105 hover:shadow">
                            <img src={HTML} alt="python icon" width="120" height="90"/>
                            <p className="mt-2 font-bold text-lg">HTML</p>
                        </Link>
                        <Link className="px-10 py-10 text-center bg-white rounded-xl hover:scale-105 hover:shadow">
                            <img src={CSS} alt="python icon" width="107"/>
                            <p className="mt-2 font-bold text-lg">CSS</p>
                        </Link>
                        <Link className="px-10 py-10 text-center bg-white rounded-xl hover:scale-105 hover:shadow">
                            <img src={Cee} alt="python icon" width="108"/>
                            <p className="mt-2 font-bold text-lg">C++</p>
                        </Link>
                    </div>
                </section>
        </div>
    </div>

    )
}

export default Landing