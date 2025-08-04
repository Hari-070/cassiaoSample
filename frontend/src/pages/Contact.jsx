import React, { useEffect, useState } from 'react'
import Franchise from '../components/Franchise'
import '../stylesheet/contact.css'
import "../stylesheet/franchiseDetails.css"
import { IndianRupee, Users, BarChart, ShoppingBag, Headphones, Store, Award, TrendingUp, Coffee, Target } from 'lucide-react';

const Contact = () => {

   useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <div>
      <div className='contact-hero'>
        <h1>Contact Us</h1>
        <p style={{color:"red"}}>The Magic lies in the Taste</p>
      </div>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-container">

            <div className="contact-left">
              <h2 className="contact-title">Let's Start Your Journey</h2>
              <p className="contact-description">
                Take the first step towards owning a successful Magic Cassiao Tea franchise. Our team is ready to guide you through the process.
              </p>
              <div className="contact-info">
                <div className="info-item">
                  <Store className="info-icon" />
                  <div>
                    <h3>Visit Our Flagship Store</h3>
                    <p className="contact-description">123 Tea Street, Flavor District, Metro Manila</p>
                  </div>
                </div>
                <div className="info-item">
                  <Coffee className="info-icon" />
                  <div>
                    <h3>Business Hours</h3>
                    <p className="contact-description">Monday - Sunday: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="info-item">
                  <Headphones className="info-icon" />
                  <div>
                    <h3>Contact Number</h3>
                    <p className="contact-title1" style={{marginTop:"12px"}}>89033 32239</p>
                  </div>
                </div>
              </div>

              <div className='quick-facts-cont'>
                <p>Quick Facts</p>
                <div className='quick-facts-box'>
                  <div className='quick-facts'>
                    <p>Investment</p>
                    <h3 className="contact-title1">₹4,99,000</h3>
                  </div>
                  <div className='quick-facts'>
                    <p>ROI Period</p>
                    <h3 className="contact-title1">3-9 Months</h3>
                  </div>
                  <div className='quick-facts'>
                    <p>Space Required</p>
                    <h3 className="contact-title1">100 Sqft</h3>
                  </div>
                  <div className='quick-facts'>
                    <p>Training Period</p>
                    <h3 className="contact-title1">2 Weeks</h3>
                  </div>
                </div>
              </div>
              
            </div>

            {/* <div className="contact-right">
              <div className='contact-right-inside'>
                <div className='contact-right-title'>
                  <h2 className="cta-title">Ready to Get Started?</h2>
                </div>

                <div className='next-steps'>
                  <p>Next Steps</p>
                  <div className='next-step-ele'><p className='next-step-num'>1</p><p>Contact our franchise team</p></div>
                  <div className='next-step-ele'><p className='next-step-num'>2</p><p>Schedule a discovery meeting</p></div>
                  <div className='next-step-ele'><p className='next-step-num'>3</p><p>Review franchise details</p></div>
                  <div className='next-step-ele'><p className='next-step-num'>4</p><p>Begin your success journey</p></div>
                </div>

                <button className="cta-button1" onClick={()=>{navigate("/contact-us")}}>Contact Us Now</button>
                <button className="cta-button2" style={{cursor:"pointer"}} onClick={()=>navigate("/products")}>View Our Products</button>
                <hr style={{width:"50%",border:"1px solid red"}}></hr>
                <p className='cta-desc'>By contacting us, you'll receive detailed information about our franchise opportunity and guidance throughout the process.</p>
              </div>
            </div> */}
            
            
            
          </div>
        </section>
      <Franchise/>
      
    </div>
  )
}

export default Contact
