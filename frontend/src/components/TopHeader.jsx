import React from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import '../stylesheet/header.css'


const TopHeader = () => {
  return (
    <>
      <div className='topH-cont'>
        <p><MdOutlinePhoneInTalk style={{fontSize:"15px"}} /> &nbsp;+91 89033 32239 </p>
        {/* <p><IoMailOpenOutline style={{fontSize:"18px"}}/> &nbsp;casiao@gmail.com</p> */}
        <p><FaLocationDot style={{fontSize:"15px"}}/> &nbsp;Erode</p>
      </div>
    </>
  )
}

export default TopHeader
