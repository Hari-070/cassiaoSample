import React from 'react'
import '../stylesheet/home.css'

import Card from '../components/Card'
import teaPic from '../assets/teaPic.jpg'
import black1 from '../assets/black1.jpeg'
import black2 from '../assets/black2.jpeg'
import black3 from '../assets/black3.jpeg'
import black4 from '../assets/black4.jpeg'
import black5 from '../assets/black5.jpeg'
import black6 from '../assets/black6.jpeg'
import black7 from '../assets/black7.jpeg'
import SimpleForm from '../SimpleForm'
import Franchise from '../components/Franchise' 

const Home = () => {
  return (
    <>
        {/* <div className='home'> */}
            <div className='home-hero'>
              <div className='home-hero-boxf'>
                {/* <h1 style={{position:"relative",fontFamily:"Bonheur Royale"}}>Magic <br/><span style={{color:'red',fontFamily:"Italianno",fontSize:"210px",position:'absolute',top:"90px"}}>Cassiao</span><span style={{marginTop:"100px"}}></span>-Tea</h1> */}
                <h1 style={{position:"relative", fontFamily: 'Times New Roman'}}>Magic <br/><span className='hero-span' style={{color:'red',fontFamily: 'Times New Roman',position:'absolute'}}>Cassiao</span><span style={{marginTop:"100px"}}></span>-Tea</h1>
              </div>
                <div className='home-hero-box'>
                    <p>Take Action With Our Franchise At Affordable Price</p>
                    <h1 style={{fontSize:"50px"}}>₹ 4,00,000</h1>
                    <button className='hero-button'>Enquire</button>
                </div>
            </div>
            {/* <div className='home-hero'>

            </div> */}
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh",backgroundColor:"black"}}>
              <div className='home-service'>
                <img src={teaPic} alt='image' width="550px"/>
                <div>
                  <h1><span style={{color:"red"}}>Feel</span> The Magic</h1>
                  <p style={{fontSize:"20px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quos doloribus nulla ut quidem laboriosam, similique obcaecati fugiat, porro eius repellendus facere libero accusantium, sunt ipsum unde laborum. Mollitia, perferendis.</p>
                </div>
                <p style={{position:"absolute",right:"8%",bottom:"5%",fontFamily:"smooch"}}>-Magic Cassiao</p>
                
              </div>
            </div>

            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"black"}}>
              <div className='home-products'>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1>Products</h1>
                    {/* <hr style={{width:"200px", boxShadow:"0 10px 20px 5px white"}}></hr> */}
                    <hr style={{
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
                    <div className='home-prod-card'>
                        <img src={black1} alt='black1' width="200px"/>
                        <h2>Black Tea</h2>
                    </div>

                    <div className='home-prod-card'>
                        <img src={black2} alt='black1' width="200px"/>
                        <h2>Black Tea</h2>
                    </div>

                    <div className='home-prod-card'>
                        <img src={black3} alt='black1' width="200px"/>
                        <h2>Black Tea</h2>
                    </div>

                    <div className='home-prod-card'>
                        <img src={black4} alt='black1' width="200px"/>
                        <h2>Black Tea</h2>
                    </div>

                    <div className='home-prod-card'>
                        <img src={black5} alt='black1' width="200px"/>
                        <h2>Black Tea</h2>
                    </div>

                    <div className='home-prod-card'>
                        <img src={black6} alt='black1' width="200px"/>
                        <h2>Black Tea</h2>
                    </div>

                    <div className='home-prod-card'>
                        <img src={black7} alt='black1' width="200px"/>
                        <h2>Black Tea</h2>
                    </div>

                    <div className='home-prod-card'>
                        <img src={black3} alt='black1' width="200px"/>
                        <h2>Black Tea</h2>
                    </div>
                  </div>
              </div>
            </div>
            <Franchise/>
        {/* </div> */}
      
    </>
  )
}

export default Home
