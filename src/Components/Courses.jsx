import React from 'react'
import { useEffect, useRef } from "react";
import "../App.css"

const courses = [
    {
        title: "Introduction to Personal Finance",
        desc: "Master finance with expert-led courses. Build your financial knowledge from beginner to expert.",
        level: "Beginner",
        color: "from-lime-300 to-lime-500"
    },
    {
        title: "Understanding Stock Markets",
        desc: "Learn how stock markets work and how to make informed investment decisions.",
        level: "Intermediate",
        color: "from-green-300 to-green-500"
    },
    {
        title: "Advanced Investment Strategies",
        desc: "Dive deep into advanced investment strategies to maximize portfolio performance.",
        level: "Advanced",
        color: "from-blue-300 to-blue-500"
    }
];

const Courses = () => {
    const containerRef = useRef(null);

    // Mouse Parallax Effect
    useEffect(() => {
        const container = containerRef.current;

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            container.style.transform = `translate(${x}px, ${y}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const handleMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;

            document.querySelectorAll(".shape").forEach((shape, i) => {
                const speed = (i + 1) * 0.5;
                shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);




    return (
        <section className="py-20 bg-[#E3E9F4] text-[#0B0425]">
            <h2 className="text-4xl font-extrabold text-center mb-6">Our Courses</h2>

            {/* Levels Legend */}
            <div className="flex justify-center gap-6 mb-10 text-sm">
                <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-lime-400"></span> Beginner
                </span>
                <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-400"></span> Intermediate
                </span>
                <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-400"></span> Advanced
                </span>
            </div>

            {/* Main Card Container */}
            <div
                ref={containerRef}
                className="max-w-4xl mx-auto bg-[#13004C] p-10 rounded-3xl shadow-xl transition-all duration-300"
            >
                {/* Course Cards */}
                <div className="flex flex-col gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden"
                        >
                            {/* Right Gradient Strip */}
                            <div
                                className={`absolute top-0 right-0 w-3 h-full bg-gradient-to-b ${course.color}`}
                            ></div>

                            <h3 className="text-lg font-bold">{course.title}</h3>
                            <p className="text-sm mt-2 text-gray-700">{course.desc}</p>

                            <div className="flex items-center gap-2 mt-4 text-sm">
                                <span
                                    className={`w-3 h-3 rounded-full ${course.level === "Beginner"
                                        ? "bg-lime-400"
                                        : course.level === "Intermediate"
                                            ? "bg-green-400"
                                            : "bg-blue-400"
                                        }`}
                                ></span>
                                {course.level}
                            </div>
                        </div>
                    ))}

                    {/* Explore Button */}
                    <button className="mt-6 px-6 py-2 bg-white text-[#13004C] font-medium rounded-full shadow hover:scale-105 transition">
                        Explore Courses
                    </button>
                </div>
            </div>
        </section>
    );
}


export default Courses
