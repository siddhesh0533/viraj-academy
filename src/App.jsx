import { Outlet, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";

export default function AppLayout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="m-7">

      <div className="rounded-2xl bg-white p-5 flex justify-between items-center" >
        <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className=" px-8 py-3 rounded-full bg-purple-900 text-white hover:scale-105 transition-all"
                >
                    Explore Courses
                </button>
        <nav className="flex justify-center gap-15">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className=" px-8 py-3 rounded-full bg-purple-900 text-white hover:scale-105 transition-all"
                >
                    Explore Courses
                </button>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
