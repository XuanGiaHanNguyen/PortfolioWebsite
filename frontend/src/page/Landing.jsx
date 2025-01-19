import React from 'react'
import '../index.css'


function Landing () {
    return(

        <div className='w-full' 
        style={{backgroundColor: '#FFF7EB'}}>
             <div className="max-w-[1920px] mx-auto">
                <section id="About Me" className="pt-16">
                    <Link className="text-gray-800 font-bold block">
                        <div className="mx-4 md:mx-24 py-10 px-10 text-lg font-semibold bg-white rounded-xl hover:-translate-y-1 hover:shadow transition duration-400">
                            <h2 className="text-4xl font-extrabold ml-3 mb-4 mt-1">About Me</h2>
                            <p>
                                Hi! I'm Han Nguyen, a Freshman at the University of South Florida majoring in Computer Science. My passion for programming began in high school when my teacher introduced me to Python. Since then, I've committed to exploring the world of programming.  
                            </p>
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