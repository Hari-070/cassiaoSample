import React from 'react'
import teaPic from '../assets/teaPic.jpg'
import '../stylesheet/about.css'
import {motion} from 'framer-motion'
import AboutComp from '../components/AboutComp'
import { GiCoffeeBeans,GiCoffeeCup  } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import Gallery from '../components/Gallery'

const About = () => {
  return (
    <div>
      <div className='about-hero'>
        <h1>About Us</h1>
        <p style={{color:'red'}}>The End Is Another Begining</p>
      </div>

       <AboutComp/>

       <motion.div className='about-choose-cont'
         initial={{opacity:0, translateY:"60px"}} whileInView={{opacity:1, translateY:"0"}} transition={{duration:0.5}}>
        <h1>Why Choose<span style={{color:"red"}}> Us?</span></h1>
        <hr style={{width:"20%",backgroundColor:"white",border:"1px solid white",boxShadow:"0 5px 15px 2px white"}}></hr>
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
       </motion.div>
       <Gallery showHero={false}/>
    </div>
  )
}

export default About
