import React from 'react'
import logo from '../assets/logo.png'
import { CiLocationOn } from "react-icons/ci";
import '../stylesheet/footer.css'
import { IoIosCall } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className='footer-cont'>

        <div className='footer-address'>
          <div className='footer-logo'>
            <img src={logo} alt='logo' width="110px"/>
            <h1 style={{position:"relative",fontFamily:"Bonheur Royale",fontSize:"50px"}}>Magic <br/><span style={{color:'red',fontFamily:"Italianno",fontSize:"60px",position:'absolute',top:"30px",left:"20px"}}>Cassiao</span><span style={{marginTop:"100px"}}></span>-Tea</h1>
          </div>
          <div className='footer-addr'>
            <div className='address'>
            <CiLocationOn style={{fontSize:"20px",fontWeight:"900"}}/> <p style={{fontWeight:"700"}}>Address:</p>
            </div>
            <p>33/9, Veeraraghavar Street, Tiruchengode, Namakkal - 637211</p>
          </div>
        </div>

        <div className='footer-nav'>
            <div>
              <p style={{fontWeight:"700",marginBottom:"10px"}}>Navigation</p>
              <div className='footer-nav-1'>
                <p>Home</p>
                <p>About us</p>
                <p>Contact us</p>
              </div>
            </div>
            <div className='contact'>
            <p style={{fontWeight:"700",marginBottom:"10px"}}>Contacts</p>
              <div className='footer-nav-1'>
                <p><IoIosCall/> Mobile: 91625213113</p>
                <p><IoMailOpenOutline/> Mail: casiao@gmail.com</p>
              </div>
            </div>
        </div>

        <div className='footer-about'>
            <div className='footer-about-1'>
              <p style={{fontWeight:"700"}}>A Short Note On Us</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempore quos aspernatur natus odit quam voluptatum
                sapiente quia, vel facilis molestiae dolorem? 
                Hic ducimus quasi eius dolorem alias aliquam ea.</p>
            </div>
            <div className='social'>
              <p style={{fontWeight:"700"}}>Follow us on</p>
              <div className='social-1'>
                <FaInstagram/>
                <FaFacebookSquare/>
                <FaXTwitter/>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Footer
