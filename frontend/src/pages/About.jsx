import React from 'react'
import teaPic from '../assets/teaPic.jpg'
import '../stylesheet/about.css'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div>
       <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh",backgroundColor:"black"}}>
              <motion.div 
                initial={{opacity:0, scale:0.8}}
                whileInView={{opacity:1, scale:1 }}
                transition={{duration:0.4}} viewport={{once:true}}
               className='about-service' id='service'>
                <img src={teaPic} alt='image' width="550px"/>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px"}}>
                  <h1><span style={{color:"red"}}>Feel</span> The Magic</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quos doloribus nulla ut quidem laboriosam, similique obcaecati fugiat, porro eius repellendus facere libero accusantium, sunt ipsum unde laborum. Mollitia, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti assumenda nesciunt ea eos, aspernatur veritatis necessitatibus rem, porro magnam corporis velit pariatur temporibus et, asperiores odit ad itaque dicta.</p>
                </div>
                <p style={{position:"absolute",right:"8%",bottom:"3%",fontFamily:"smooch"}}>-Magic Cassiao</p>
                
              </motion.div>
            </div>
      
    </div>
  )
}

export default About
