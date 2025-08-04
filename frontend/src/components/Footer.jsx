import React from 'react'
// import logo from '../assets/logo.png'
import logo from '../assets/logoFinal.png'
import { CiLocationOn } from "react-icons/ci";
import '../stylesheet/footer.css'
import { IoIosCall } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='footerCopy'>
      <div className='footer-cont'>

        <div className='footer-address'>
          <div className='footer-logo'>
            <img src={logo} alt='logo' />
            {/* <h1 style={{position:"relative",fontFamily:"Bonheur Royale"}}>Magic <br/><span className="casio"style={{color:'red',fontFamily:"Italianno",position:'absolute'}}>Cassiao</span><span style={{marginTop:"100px"}}></span>-Tea</h1> */}
          </div>
          <div className='footer-addr'>
            <div className='address'>
            <CiLocationOn style={{fontSize:"20px",fontWeight:"900"}}/> <p style={{fontWeight:"700",color:"red"}}>Address:</p>
            </div>
            {/* <p>33/9, Veeraraghavar Street, Tiruchengode, Namakkal - 637211</p> */}
            <p>Magic Cassiao tea - 
              D.No:38,
              Prakasam street,
              Opp: Taluk office, Erode - 638001</p>
          </div>
        </div>

        <div className='footer-nav'>
            <div>
              <p style={{fontWeight:"700",marginBottom:"10px",color:"red"}}>Navigation</p>
              <div className='footer-nav-1'>
                <p onClick={()=>navigate('/')} style={{cursor:"pointer"}}>Home</p>
                <p onClick={()=>navigate('/aboutUs')} style={{cursor:"pointer"}}>About us</p>
                <p onClick={()=>navigate('/contact-us')} style={{cursor:"pointer"}}>Contact us</p>
                <p onClick={()=>navigate('/gallery')} style={{cursor:"pointer"}}>Gallery</p>
                <p onClick={()=>navigate('/franchise')} style={{cursor:"pointer"}}>Franchise</p>
                <p onClick={()=>navigate('/products')} style={{cursor:"pointer"}}>Products</p>
              </div>
            </div>
            <div className='contact'>
            <p style={{fontWeight:"700",marginBottom:"10px",color:"red"}}>Contacts</p>
              <div className='footer-nav-1'>
                <p><IoIosCall/> Mobile: +91 89033 32239</p>
                <p><IoMailOpenOutline/> Mail: casiao@gmail.com</p>
              </div>
            </div>
        </div>

        <div className='footer-about'>
            <div className='footer-about-1'>
              <p style={{fontWeight:"700",color:"red"}}>A Short Note On Us</p>
              <p>What sets us apart is our relentless pursuit of excellence. We source the finest tea leaves from the most renowned tea gardens across India, ensuring that each blend carries the essence of its origin</p>
            </div>
            <div className='social'>
              <p style={{fontWeight:"700",color:"red"}}>Follow us on</p>
              <div className='social-1'>
                <FaInstagram/>
                <FaFacebookSquare/>
                <FaXTwitter/>
              </div>
            </div>
        </div>

      </div>
        <div className='copyrightSec'>
          <motion.hr
            initial={{opacity:0,translateZ:"100px",scale:0}}
            whileInView={{opacity:1,translateZ:0,scale:1}}
            transition={{duration:0.8}} style={{width:"70%",border:"0.5px solid rgba(255, 0, 0, 0.207)"}}></motion.hr>
          <motion.p
          initial={{opacity:0, translateY:"15px"}}
          whileInView={{opacity:1, translateY:"0px"}}
          transition={{duration:0.5}} style={{marginLeft:"10px",marginRight:"10px", textAlign:"center"}}>© 2025 Magic Cassiao. All rights reserved. | Designed and Developed by Magic Cassiao.</motion.p>
        </div>
      </div>
    </>
  )
}

export default Footer
