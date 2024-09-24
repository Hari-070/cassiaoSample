import React from 'react'
import '../stylesheet/header.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { IoIosCall } from "react-icons/io";


const Header = () => {
    const navigate=useNavigate()

  return (
    <>
      <div className='header-cont'>
        <img src={logo} alt='logo' width="70px"/>
        <div className='header-navi'>
            <p onClick={()=>navigate('/')}>Home</p>
            <p onClick={()=>navigate('/aboutUs')}>About Us</p>
            <p onClick={()=>navigate('/contact-us')}>Contact Us</p>
        </div>
        <button className='header-call'>Call us <IoIosCall style={{fontSize:"25px",color:"black"}}/></button>
      </div>
      
    </>
  )
}

export default Header
