import React from 'react'
import teaPic from '../assets/teaPic.jpg'
import '../stylesheet/about.css'
import {motion} from 'framer-motion'

const AboutComp = () => {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh",backgroundColor:"rgb(255, 255, 255)"}}>
              <motion.div 
                initial={{opacity:0, translateY:"50px"}}
                whileInView={{opacity:1, translateY:"0" }}
                transition={{duration:0.4}} 
                // viewport={{once:true}}
               className='about-service' id='service' style={{backgroundColor:"rgb(240, 247, 244)"}}>
                <div className='about-service-img' >
                <img src={teaPic} alt='image'  height="100%"/>
                </div>
                <div className='about-service-desc' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px"}}>
                  <h1><span style={{color:"red"}}>Feel</span> The Magic</h1>  
                  <p>At Magic Cassiao, we believe that every sip of tea should be a magical experience, a blend of tradition and innovation that delights your senses. Since our journey began in March 2020, our mission has been to craft the finest tea experiences that bring joy and warmth to every cup.<br/><br/>Our first store was proudly launched in Erode, where we introduced the community to the unique flavors and aromas of our carefully curated teas. Today, Magic Cassiao is rapidly expanding across Tamil Nadu, bringing our passion for quality and taste to every corner of the state.<br/><br/>What sets us apart is our relentless pursuit of excellence. We source the finest tea leaves from the most renowned tea gardens across India, ensuring that each blend carries the essence of its origin. Our teas are not just beverages; they are journeys of discovery, offering a rich palette of flavors that cater to every mood and moment.</p>
                </div>
                <p style={{position:"absolute",right:"8%",bottom:"3%",fontFamily:"smooch",fontSize:"20px"}}>-Magic Cassiao</p>
                
              </motion.div>
         </div>
    </div>
  )
}

export default AboutComp
