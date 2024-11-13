import React from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import '../stylesheet/header.css'


const TopHeader = () => {
  return (
    <>
      <div className='topH-cont'>
        <p><IoIosCall/> 8787878787 / 62346623 </p>
        <p><IoMailOpenOutline/> casiao@gmail.com</p>
        <p><CiLocationOn/> Erode</p>
      </div>
    </>
  )
}

export default TopHeader
