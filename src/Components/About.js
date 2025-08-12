import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Ayush Baranwal</b> and I am from Kolkata, India.
            I'm a <b>MERN stack web developer</b> and a final year college student pursuing <b>BTech in CSE</b>. <br /><br />
            I love to solve leetcode problems and learn more about brain-racking algorithms.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        {/* MERN Stack */}
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />

        {/* Programming Languages */}
        <Skills skill='Java' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Javascript' />
        <Skills skill='PHP' />

        {/* Tools & Platforms */}
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Npm' />
        <Skills skill='Vercel' />
      </div>
    </>
  );
}

export default About;
