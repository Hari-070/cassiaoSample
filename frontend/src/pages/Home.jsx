import React, { useEffect, useRef, useState } from 'react'
import '../stylesheet/home.css'

import {motion} from 'framer-motion'
import Card from '../components/Card'
import hot from '../assets/hot_products.png'
import summer from '../assets/summer special.png'
import products_head from '../assets/products.png'
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
import Gallery from '../components/Gallery'
import axios from 'axios'
import data from '../assets/categories.json'
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import VideoComponent from '../components/VideoComponent'

const Home = () => {
  const navigate=useNavigate()

  const videoRef = useRef(null);
  // const [data,setData]=useState([])

  // Function to handle skipping the last 5 seconds
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration - video.currentTime <= 5) {
      video.currentTime = 0; // Restart the video when it's within the last 5 seconds
    }
  };


  // const getP=async()=>{
  //   await axios.get('http://localhost:3000/products')
  //   .then(res=>(
  //     setData(res.data)
  //   ))
  // }
  // useEffect(()=>{
  //   getP()
  // },[]);

   useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    

  return (
    <>
        {/* <div className='home'> */}
            <div  className='home-hero'>
              {/* <div className='home-vid'>
                  <video ref={videoRef} onTimeUpdate={handleTimeUpdate} autoPlay loop muted className='back-vid'>
                    <source src={coffeeVideo} type='video/mp4'/>
                  </video>
              </div>
              <div className='home-overlay'></div> */}
              {/* <div className='home-hero-boxf'>
                <h1>Magic <span style={{color:"red"}}>Cassiao</span></h1>
                <h1 style={{color:"red",alignSelf:"center",display:"flex"}}>-Tea</h1>
              </div> */}
              <motion.div 
               initial={{opacity:0, translateY:"50px"}}
               whileInView={{opacity:1, translateY:"0"}}
               transition={{duration:0.5}}
               className='home-hero-boxf2'>
                <p style={{fontFamily:"Italianno",color:"rgb(255,255,255)",fontSize:"200%",fontWeight:"400"}}>Introducing</p>
                <h1 style={{fontFamily:"Montserrat",fontWeight:"550"}}><span style={{color:"rgb(190, 0, 0)",fontFamily:"Montserrat",fontWeight:"580"}}>Magic </span>Cassiao Tea</h1>
                <p style={{fontSize:"15px"}}>At Magic Cassiao, we’re more than just a tea franchise. We are a community of tea lovers dedicated to providing not only the best tea but also the healthiest options. Our teas are crafted with care, ensuring that each cup is a perfect balance of flavor, purity, and wellness.</p>
                <button className='hero-button' onClick={()=>document.getElementById('franchise').scrollIntoView({behavior:'smooth'})}>Enquire Now</button>
              </motion.div>
                {/* <motion.div
                   initial={{opacity:0, translateY:"50px"}}
                   whileInView={{opacity:1, translateY:"0"}}
                   transition={{duration:0.5}}
                className='home-hero-box'>
                    <p>Take Action With Our Franchise At Affordable Price</p>
                    <h1 style={{fontSize:"40px"}}>₹ 4,00,000</h1>
                    <button className='hero-button' onClick={()=>document.getElementById('franchise').scrollIntoView({behavior:'smooth'})}>Enquire</button>
                </motion.div> */}
            </div>
            
            <AboutComp/>

            {/* video component */}
            <VideoComponent/>

            {/* products */}
            <div className='product-hero'>
              <h1>What We Provide</h1>
              <p style={{color:"red"}}>The Magic lies in the Taste</p>
            </div>     
            <div className='home-products-cont'>
              <div className='home-products'>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    {/* <h1>Products</h1> */}
                    <img src={products_head} alt='products' width="40%" style={{marginBottom:"10px",marginTop:"10px"}}/>
                    {/* <hr style={{width:"200px", boxShadow:"0 10px 20px 5px white"}}></hr> */}
                    <motion.hr initial={{opacity:0, translateZ:"100px",scale:0}} whileInView={{opacity:1, translateZ:"0",scale:1}} transition={{duration:1}}  style={{
                      width: "300px", 
                      height: "5px", 
                      border: "none", 
                      background: "red", // Solid white light for the lamp
                      boxShadow: "0 15px 30px 5px rgba(255, 255, 255)", // Light shining downwards
                      borderRadius: "5px", // Slightly round for a soft light
                      opacity: "0.9" // Slight opacity for more realistic light
                    }} />
                  </div>
                  <div className='home-prod-cont'>
                    {/* <Products img={black1}/>
                    <Products img={black2}/>
                    <Products img={black3}/>
                    <Products img={black4}/>
                    <Products img={black5}/>
                    <Products img={black6}/>
                    <Products img={black7}/>
                    <Products img={black3}/> */}
                    <div className='home-prod-cont-tea'>
                      <div className='home-prod-tea-title'>
                        {/* <p>Hot <span style={{color:"red"}}>Products</span></p> */}
                        <img src={hot} alt='hot products' width="70%"/>
                      </div>
                      <div className='home-prod-tea'>
                        <div className='home-prod-tea-cards'>
                          {data.slice(0,3).map((item)=>(
                            <Products img={item.image} name={item.category}/>
                          ))}
                        </div>
                        <p style={{display:"flex", justifyContent:"center", alignItems:"center"}} onClick={()=>navigate('/products')}>View more &nbsp;<FaArrowRight style={{color:"red"}}/></p>
                      </div>
                    </div>

                    <div className='home-prod-cont-tea'>
                      <div className='home-prod-tea-title'>
                        {/* <p>Summer <span style={{color:"red"}}>Special</span></p> */}
                        <img src={summer} alt='summer specials' width="70%"/>
                      </div>
                      <div className='home-prod-tea'>
                        <div className='home-prod-tea-cards'>
                          {data.slice(5,).map((item)=>(
                            <Products img={item.image} name={item.category}/>
                          ))}
                        </div>
                        <p style={{display:"flex", justifyContent:"center", alignItems:"center"}} onClick={()=>navigate('/products')}>View more &nbsp;<FaArrowRight style={{color:"red"}}/></p>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
            {/* <Gallery/> */}
            
            {/* testimonials */}
            <div className='testimonials_cont'>
              <h1>What Our Customers Say</h1>
              <div className='inside_testimonial_cont'>
                <div className='testimonial_card'>
                  <p className='testimonial_p'><FaStar style={{color:"rgb(255, 187, 0)"}}/>Regular Customer</p>
                  <p>The best milk tea I've ever had! The quality and taste are consistently excellent.</p>
                </div>
                <div className='testimonial_card'>
                  <p className='testimonial_p'><FaStar style={{color:"rgb(255, 187, 0)"}}/>Franchise Owner</p>
                  <p>Joining the Magic Cassiao Tea family was the best business decision I've made.</p>
                </div>
                <div className='testimonial_card'>
                  <p className='testimonial_p'><FaStar style={{color:"rgb(255, 187, 0)"}}/>Food Blogger</p>
                  <p>Their innovative flavors and commitment to quality sets them apart in the industry.</p>
                </div>
              </div>
            </div>

            <Franchise/>
        {/* </div> */}
      
    </>
  )
}

export default Home
