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
        <img src={logo} alt='logo' width="70px"/>
        <div className='header-navi'>
            <p className='hideOnMobile' onClick={()=>navigate('/')}>Home</p>
            <p className='hideOnMobile' onClick={()=>navigate('/aboutUs')}>About Us</p>
            <p className='hideOnMobile' onClick={()=>navigate('/contact-us')}>Contact Us</p>
        </div>

        {side?
        <div className='mobile-navi'>
        <IoMdClose style={{fontSize:"35px"}} onClick={closeSideBar}/>
          <p onClick={()=>navigate('/')}>Home</p> 
          <p onClick={()=>navigate('/aboutUs')}>About Us</p>
          <p onClick={()=>navigate('/contact-us')}>Contact Us</p>
      </div>:<></>}
      <div style={{display:"flex",justifyContent:"space-between",marginRight:"20px",gap:"20px"}}>
      <button className='header-call'>Call us <IoIosCall style={{fontSize:"25px",color:"black"}}/></button>
      <IoMdMenu className='onMobileButton' style={{alignSelf:"center",fontSize:"30px"}} onClick={OpensideBar}/>
      </div>
        
      </div>
      
    </>
  )
}

// const Header = () => {
//   const navigate = useNavigate(); 
//   const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle nav

//   return (
//     <>
//       <div className='header-cont'>
//         <img src={logo} alt='logo' width="70px" style={{borderRadius:"50%"}}/>
        
//         <div className='header-navi'>
//           <p onClick={() => navigate('/')}>Home</p>
//           <p onClick={() => navigate('/aboutUs')}>About Us</p>
//           <p onClick={() => navigate('/contact-us')}>Contact Us</p>
//         </div>

//         <button className='header-call'>
//           Call us <IoIosCall style={{ fontSize: "25px", color: "black" }}/>
//         </button>

//         {/* Hamburger Menu for Mobile */}
//         <button className="menu-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
//           {isNavOpen ? <IoMdClose style={{ fontSize: "30px", color: "white" }}/> : <IoMdMenu style={{ fontSize: "30px", color: "white" }}/>}
//         </button>

//         {/* Mobile Menu */}
//         {isNavOpen && (
//           <div className="mobile-nav">
//             <p onClick={() => navigate('/')}>Home</p>
//             <p onClick={() => navigate('/aboutUs')}>About Us</p>
//             <p onClick={() => navigate('/contact-us')}>Contact Us</p>
//             <button className='mobile-call'>
//               Call us <IoIosCall style={{ fontSize: "25px", color: "black" }}/>
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

export default Header
