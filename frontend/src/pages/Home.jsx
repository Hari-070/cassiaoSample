import React, { useRef } from 'react'
import '../stylesheet/home.css'

import {motion} from 'framer-motion'
import Card from '../components/Card'
import black1 from '../assets/black1.jpeg'
import black2 from '../assets/black2.jpeg'
import black3 from '../assets/black3.jpeg'
import black4 from '../assets/black4.jpeg'
import black5 from '../assets/black5.jpeg'
import black6 from '../assets/black6.jpeg'
import black7 from '../assets/black7.jpeg'
import SimpleForm from '../SimpleForm'
import Franchise from '../components/Franchise' 
import coffeeVideo from '../assets/coffee background.mp4'
import Products from '../components/Products'
import AboutComp from '../components/AboutComp'

const Home = () => {

  const videoRef = useRef(null);

  // Function to handle skipping the last 5 seconds
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration - video.currentTime <= 5) {
      video.currentTime = 0; // Restart the video when it's within the last 5 seconds
    }
  };

  return (
    <>
        {/* <div className='home'> */}
            <div  className='home-hero'>
              <div className='home-vid'>
                  <video ref={videoRef} onTimeUpdate={handleTimeUpdate} autoPlay loop muted className='back-vid'>
                    <source src={coffeeVideo} type='video/mp4'/>
                  </video>
              </div>
              <div className='home-overlay'></div>
              {/* <div className='home-hero-boxf'>
                <h1>Magic <span style={{color:"red"}}>Cassiao</span></h1>
                <h1 style={{color:"red",alignSelf:"center",display:"flex"}}>-Tea</h1>
              </div> */}
              <motion.div 
               initial={{opacity:0, translateY:"50px"}}
               whileInView={{opacity:1, translateY:"0"}}
               transition={{duration:0.5}}
               className='home-hero-boxf2'>
                <p style={{fontFamily:"Italianno",color:"red",fontSize:"30px",fontWeight:"600"}}>Introducing</p>
                <h1><span style={{color:"red"}}>Magic </span>Cassiao Tea</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum praesentium aut fugit mollitia, provident rerum quae, ratione, esse in harum dignissimos dolorem! Quos, cupiditate placeat. Dolor aut unde veritatis?</p>
                <button className='hero-button' onClick={()=>document.getElementById('franchise').scrollIntoView({behavior:'smooth'})}>Check Now</button>
              </motion.div>
                <motion.div
                   initial={{opacity:0, translateY:"50px"}}
                   whileInView={{opacity:1, translateY:"0"}}
                   transition={{duration:0.5}}
                className='home-hero-box'>
                    <p>Take Action With Our Franchise At Affordable Price</p>
                    <h1 style={{fontSize:"40px"}}>₹ 4,00,000</h1>
                    <button className='hero-button' onClick={()=>document.getElementById('franchise').scrollIntoView({behavior:'smooth'})}>Enquire</button>
                </motion.div>
            </div>
            
            <AboutComp/>

            <div  className='home-products-cont' style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
              <div className='home-products'>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1>Products</h1>
                    {/* <hr style={{width:"200px", boxShadow:"0 10px 20px 5px white"}}></hr> */}
                    <motion.hr initial={{opacity:0, translateZ:"100px",scale:0}} whileInView={{opacity:1, translateZ:"0",scale:1}} transition={{duration:1}} viewport={{once:true}} style={{
                      width: "300px", 
                      height: "5px", 
                      border: "none", 
                      background: "white", // Solid white light for the lamp
                      boxShadow: "0 15px 30px 5px rgba(255, 255, 255)", // Light shining downwards
                      borderRadius: "5px", // Slightly round for a soft light
                      opacity: "0.9" // Slight opacity for more realistic light
                    }} />
                  </div>
                  <div className='home-prod-cont'>
                    <Products img={black1}/>
                    <Products img={black2}/>
                    <Products img={black3}/>
                    <Products img={black4}/>
                    <Products img={black5}/>
                    <Products img={black6}/>
                    <Products img={black7}/>
                    <Products img={black3}/>
                    
                  </div>
              </div>
            </div>
            <Franchise/>
        {/* </div> */}
      
    </>
  )
}

export default Home
