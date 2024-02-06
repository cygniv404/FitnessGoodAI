// import React from "react";
import { useRef } from "react";
import home from "../assets/home-img.png";
import ImageCarousel from "./Carousel";
import Team from "./Team";
import AboutUs from "./AboutUs";

export default function Landing() {
  const features = useRef(null);
  const aboutus  = useRef(null);
  const team  = useRef(null);
  return (
    <>
      <div className=" overflow-hidden bg-gradient-to-tl from-green-400 via-gray-50 to-teal-300">
        <div className="bg-transparent h-dvh px-20 flex items-center justify-around">
          <div className=" p-20 text-zinc-500 text-center w-3/5 font-sans text-4xl tracking-widest leading-normal ">
            Elevate your fitness journey with <span className="font-extrabold text-black ">intelligent </span> training   and
            <span className="font-extrabold text-black "> personalized</span> wellness with <span className=" text-8xl text-left mt-5 bg-gradient-to-r from-black from-10% via-black via-30% to-purple-600 animate-pulse to-90% inline-block text-transparent font-extrabold bg-clip-text">FitnessGoodAI</span>
          </div>

          <img src={home} alt="home" className="h-96 w-96 rounded-b-full" />
        </div>
      </div>

      <div  ref={features} id="features" className="bg-gradient-to-bl from-green-400 via-gray-50 to-teal-300 h-dvh flex items-center justify-center flex-col">
        <p className="text-black text-4xl text-center">
          <b>Easy to use</b> <br /> Features to make your <br />
          <b>life healthy</b>{" "}
        </p>
        <br />
        <ImageCarousel />
      </div>
      <div ref={aboutus} id="aboutus" className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-tl from-green-400 via-gray-50 to-teal-300 p-24">
      <h1 className="text-6xl font-bold mb-6  text-gray-800 bg-gradient-to-r from-green-700 from-10% via-sky-500 via-30% to-green-600  to-90% inline-block text-transparent bg-clip-text">
            About Us
          </h1>
      <AboutUs />
      </div>
      <div ref={team} id="team" className="bg-gradient-to-bl from-green-400 via-gray-50 to-teal-300 h-dvh flex items-center justify-center flex-col">
      
        <Team />
      </div>
      
    </>
  );
}
