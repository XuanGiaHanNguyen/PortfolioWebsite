import React from 'react';
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
    return(

        <div className='w-full' 
        style={{backgroundColor: '#FFF7EB'}}>
             <div className="max-w-[1920px] mx-auto">
                <section id="About Me" className="pt-16">
                <Link className="text-gray-500 font-black flex items-stretch px-12 gap-2">
                    {/* Vertical Heading */}
                    <h2 
                        className="text-5xl font-black flex items-center justify-center" 
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
                        backgroundColor: '#e8e8e8',
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
                        <img src={PFP} alt="meee" width="700"/>
                    </div>
                    </Link>
                </section>

                <section id="Experience" className="mt-7">
                    <h2 className="text-5xl font-extrabold text-center my-7">
                        Experience
                    </h2>
                    <div className="mx-4 md:mx-24 py-10 px-10 text-lg font-semibold bg-white rounded-xl hover:-translate-y-1 hover:shadow transition duration-400">
                        
                    </div>
                </section>

                <section id="Projects" className="mt-20">
                    <h2 className="text-5xl font-extrabold text-center mb-10">
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
                    <h2 className="text-5xl font-extrabold text-center">
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