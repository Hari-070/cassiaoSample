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
        <h1>Why Choose<span style={{color:"white"}}> Us?</span></h1>
        <hr style={{width:"20%",backgroundColor:"white",border:"1px solid white",boxShadow:"0 5px 15px 2px white"}}></hr>
        <div className='about-choose'>
            <div className='about-choose-card'>
              <GiCoffeeBeans className='about-logo'/>
              <p>At Magic Cassiao, quality is our cornerstone. We meticulously select the finest tea powders from across India, ensuring that every cup is crafted with precision and care. Our blends are a perfect harmony of freshness, aroma, and flavor, providing you with a tea experience that is truly unmatched.</p>
            </div>
            <div className='about-choose-card'>
              <GiCoffeeCup  className='about-logo'/>
              <p>Our dedication to taste goes beyond the ordinary. Each sip of Magic Cassiao tea offers a burst of rich flavors, carefully balanced to create a delightful and memorable experience. Whether you prefer a soothing cup to unwind or a refreshing brew to kickstart your day, our teas are crafted to satisfy every palate.</p>
            </div>
            <div className='about-choose-card'>
              <CiCoffeeCup className='about-logo'/>
              <p>We believe in the power of purity. Our teas are not only delicious but also promote wellness. We are committed to serving teas that are as healthy as they are tasty, using only natural ingredients to ensure you enjoy the best of both worlds. At Magic Cassiao, every cup is a step towards a healthier and happier you.</p>
            </div>
        </div>
       </motion.div>
       <Gallery showHero={false}/>
    </div>
  )
}

export default About
