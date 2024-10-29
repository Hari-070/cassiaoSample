import React, { useState } from 'react'
import Franchise from '../components/Franchise'
import '../stylesheet/contact.css'

const Contact = () => {

  return (
    <div>
      <div className='contact-hero'>
        <h1>Contact Us</h1>
        <p style={{color:"red"}}>The Magic lies in the Taste</p>
      </div>
      <Franchise/>
      
    </div>
  )
}

export default Contact
