import React, { useState } from 'react'
import '../stylesheet/franchise.css'
import axios from 'axios'

const Franchise = () => {
  const [name,setName]=useState('')
  const [number,setNumber]=useState()
  const [location,setLocation]=useState('')
  const [email,setEmail]=useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name=='' || email=='' || number=='' || location==''){
      alert("Fill all the fields!")
    }
    setName(''); setEmail(''); setNumber(''); setLocation('');
    console.log(name,number,location,email)
    try {
      const response = await axios.post('https://script.google.com/macros/s/AKfycby0juNrq1bzCWs4AXiyiIbmTWstRzygVin8WzF-4iPJcYqcO-gdP9-iHEnu4ek8oO2l/exec', {
        name,number,location,email
      },
      {headers: {
        "Content-Type": "text/plain;charset=utf-8",}
      },
);

      if (response.data.result === 'success') {
        alert(`Data submitted: Name - ${response.data.name}, Number - ${response.data.number}`);
      } else {
        alert('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting data.');
    }
  };

  return (
    <div className='franc-cont' id='franchise'>
      <div className='franc-form'>
        <h1>Franchise <span style={{color:"red"}}>Enquiry</span></h1>
        <form>
          <div style={{display:"flex"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"flex-start",gap:"20px"}}>
              <label>Name :</label>
              <label>Contact :</label>
              <label>Email :</label>
              <label>Location :</label>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"flex-start",gap:"20px"}}>
              <input type='text' value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} required/>
              <input type='number' value={number} placeholder='Number' onChange={(e)=>setNumber(e.target.value)} required/>
              <input type='email' value={email} placeholder='Email Id' onChange={(e)=>setEmail(e.target.value)} required/>
              <input type='text' value={location} placeholder='Location' onChange={(e)=>setLocation(e.target.value)} required/>
            </div>
          </div>
        
        <button className='franc-submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Franchise
