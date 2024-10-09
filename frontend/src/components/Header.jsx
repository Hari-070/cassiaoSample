import React, { useState } from 'react'
import '../stylesheet/header.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { IoIosCall, IoMdMenu, IoMdClose } from "react-icons/io";


const Header = () => {
    const navigate=useNavigate()
    const [side,setSide]=useState(false)

    const OpensideBar=()=>{
      setSide(true)
    }

    const closeSideBar=()=>{
      setSide(false)
    }

  return (
    <>
      <div className='header-cont'>
        <img src={logo} alt='logo' width="70px" onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
        <div className='header-navi'>
            <p className='hideOnMobile' onClick={()=>navigate('/')}>Home</p>
            <p className='hideOnMobile' onClick={()=>navigate('/aboutUs')}>About Us</p>
            <p className='hideOnMobile' onClick={()=>navigate('/contact-us')}>Contact Us</p>
        </div>

        {side?
        <div className='mobile-navi'>
        <IoMdClose style={{fontSize:"35px"}} onClick={closeSideBar}/>
          <p onClick={()=>{navigate('/');setSide(false)}}>Home</p> 
          <p onClick={()=>{navigate("/aboutUs");setSide(false)}}>About Us</p>
          <p onClick={()=>{navigate("/contact-us");setSide(false)}}>Contact Us</p>
      </div>:<></>}
      <div style={{display:"flex",justifyContent:"space-between",marginRight:"20px",gap:"20px"}}>
      <button className='header-call' onClick={()=>window.location.href="tel:6380466977"}>Call us <IoIosCall style={{fontSize:"25px",color:"black"}}/></button>
      <IoMdMenu className='onMobileButton' style={{alignSelf:"center",fontSize:"30px"}} onClick={OpensideBar}/>
      </div>
        
      </div>
      
    </>
  )
}


{/* <>
<div className='header-cont'>
  <img src={logo} alt='logo' width="70px"/>
  <div className='header-navi'>
      <p className='hideOnMobile' onClick={()=>navigate('/')}>Home</p>
      <p className='hideOnMobile' onClick={()=>document.getElementById('service').scrollIntoView({ behavior: 'smooth' })}>About Us</p>
      <p className='hideOnMobile' onClick={()=>document.getElementById('franchise').scrollIntoView({ behavior: 'smooth' })}>Contact Us</p>
  </div>

  {side?
  <div className='mobile-navi'>
  <IoMdClose style={{fontSize:"35px"}} onClick={closeSideBar}/>
    <p onClick={()=>{navigate('/');setSide(false)}}>Home</p> 
    <p onClick={()=>{document.getElementById('service').scrollIntoView({ behavior: 'smooth' });setSide(false)}}>About Us</p>
    <p onClick={()=>{document.getElementById('franchise').scrollIntoView({ behavior: 'smooth' });setSide(false)}}>Contact Us</p>
</div>:<></>}
<div style={{display:"flex",justifyContent:"space-between",marginRight:"20px",gap:"20px"}}>
<button className='header-call' onClick={()=>window.location.href="tel:6380466977"}>Call us <IoIosCall style={{fontSize:"25px",color:"black"}}/></button>
<IoMdMenu className='onMobileButton' style={{alignSelf:"center",fontSize:"30px"}} onClick={OpensideBar}/>
</div>
  
</div>

</> */}
export default Header
