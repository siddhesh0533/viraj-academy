import Courses from "../Components/Courses";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Form from "../Components/Form"
import React from "react";
import Mentor from "../Components/Mentor";
import FeedBack from "../Components/FeedBack"

export default function Home() {
    return <>
    <Hero/>
    <Courses/>
    <Mentor />
    <FeedBack />
    <Form />
    <Footer/>
    </>;

}

