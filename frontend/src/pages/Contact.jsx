import React, { useState } from 'react'

const Contact = () => {
    const [name,setName]=useState('')
    const [number,setNumber]=useState()
    const [location,setLocation]=useState('')
    const [email,setEmail]=useState('')
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type='text' value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
        <label>Contact :</label>
        <input type='number' value={number} placeholder='Number' onChange={(e)=>setNumber(e.target.value)}/>
        <label>Email :</label>
        <input type='email' value={email} placeholder='Email Id' onChange={(e)=>setEmail(e.target.value)}/>
        <label>Location: </label>
        <input type='text' value={location} placeholder='Location' onChange={(e)=>setLocation(e.target.value)}/>
        <button >Submit</button>
      </form>
      
    </div>
  )
}

export default Contact
