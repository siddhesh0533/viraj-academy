import React from 'react'
import '../App.css'

const Hero = () => {
    return (
        <div className='flex justify-between p-10 mt-7 bg-white rounded-2xl'>
            <div>
                <h1 data-aos="fade-up" className="text-8xl font-bold">
                    Rich Your Full
                </h1>
                <h1 data-aos="fade-up" className="text-8xl font-bold">
                    Potential
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-lg">
                    Master finance with professional-led courses.
                </p>
                <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-lg">
                    Master finance with professional-led courses.
                </p>
                <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-lg">
                    Master finance with professional-led courses.
                </p>
                <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-lg">
                    Master finance with professional-led courses.
                </p>
                
                <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-10 px-8 py-3 rounded-full bg-purple-900 text-white hover:scale-105 transition-all"
                >
                    Explore Courses
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">

                {/* ROW 1 */}
                <div className="w-32 h-32 rounded-full bg-blue-300 float-animation"></div>
                <div className="w-32 h-32 rounded-lg bg-purple-600 float-animation float-delay-1"></div>
                <div className="w-32 h-32 rounded-lg bg-purple-900 float-animation float-delay-2"></div>

                {/* ROW 2 */}
                <div className="w-32 h-32 rounded-lg bg-purple-900 float-animation float-delay-3"></div>
                <div className="w-32 h-32 rounded-full bg-lime-300 float-animation"></div>
                <div className="w-32 h-32 rounded-lg bg-blue-300 float-animation float-delay-1"></div>

                {/* ROW 3 */}
                <div className="w-32 h-32 rounded-lg bg-purple-600 float-animation float-delay-2"></div>
                <div className="w-32 h-32 rounded-full bg-green-300 float-animation float-delay-3"></div>
                <div className="w-32 h-32 rounded-lg bg-purple-900 float-animation"></div>
                

            </div>

        </div>
    )
}

export default Hero
