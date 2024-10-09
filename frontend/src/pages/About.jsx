import React from 'react'
import teaPic from '../assets/teaPic.jpg'
import '../stylesheet/about.css'
import {motion} from 'framer-motion'
import AboutComp from '../components/AboutComp'
import { GiCoffeeBeans,GiCoffeeCup  } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";

const About = () => {
  return (
    <div>
      <div className='about-hero'>
        <h1>About Us</h1>
        <p style={{color:'red'}}>The End Is Another Begining</p>
      </div>

       <AboutComp/>

       <div className='about-choose-cont'>
        <h1>Why Choose Us?</h1>
        <div className='about-choose'>
            <div className='about-choose-card'>
              <GiCoffeeBeans className='about-logo'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut, modi voluptates voluptatum laudantium hic distinctio ut corporis eligendi nostrum nemo quae molestiae nihil nulla, ipsum facere culpa quaerat rerum.</p>
            </div>
            <div className='about-choose-card'>
              <GiCoffeeCup  className='about-logo'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut, modi voluptates voluptatum laudantium hic distinctio ut corporis eligendi nostrum nemo quae molestiae nihil nulla, ipsum facere culpa quaerat rerum.</p>
            </div>
            <div className='about-choose-card'>
              <CiCoffeeCup className='about-logo'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut, modi voluptates voluptatum laudantium hic distinctio ut corporis eligendi nostrum nemo quae molestiae nihil nulla, ipsum facere culpa quaerat rerum.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default About
