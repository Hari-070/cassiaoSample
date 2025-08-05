// import React from 'react'
// import '../stylesheet/franchise.css'

// const FranchiseDetails = () => {
//   return (
//     <>
//       <div className='franchise-hero'>
//         <h1>Franchise Details</h1>
//         <p style={{color:"red"}}>Try Before You Deny</p>
//       </div>
//       <div className='flex justify-center items-center h-screen'>
//         <p className='b'>Hello, this is sample tailwind thing.</p>
//       </div>
//     </>
//   )
// }

// export default FranchiseDetails


import React, { useEffect } from 'react';
import { IndianRupee, Users, BarChart, ShoppingBag, Headphones, Store, Award, TrendingUp, Coffee, Target } from 'lucide-react';
import "../stylesheet/franchiseDetails.css"
import franImg from '../assets/join_franchise.png'
import { useNavigate } from 'react-router-dom';

const Franchise = () => {

   useEffect(()=>{
      window.scrollTo(0,0)
    },[])


  const navigate=useNavigate()
  return (
    <div className="franchise-container" style={{color:"black"}}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <img
            src="https://images.unsplash.com/photo-1547825407-2d060104b7f8?auto=format&fit=crop&q=80"
            alt="Tea Shop Interior"
            className="hero-image"
          />
          <div className="hero-overlay-bg"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Join Magic Cassiao Tea Franchise</h1>
          <p className="hero-description">
            Enjoy the rich aroma of tea - A unique business opportunity with proven success
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="section-content">
          <h2 className="section-title">Why Choose Magic Cassiao Tea?</h2>
          <div className="grid-container">

            <div className="grid-item">
              <Award className="icon" />
              <h3 className="grid-item-title">Premium Quality</h3>
              <p className="grid-item-description">
                Our commitment to excellence ensures that every cup meets the highest standards of taste and quality.
              </p>
            </div>

            <div className="grid-item">
              <TrendingUp className="icon" />
              <h3 className="grid-item-title">Growing Market</h3>
              <p className="grid-item-description">
                Be part of the rapidly expanding premium tea market with increasing consumer demand.
              </p>
            </div>

            <div className="grid-item">
              <Target className="icon" />
              <h3 className="grid-item-title">Proven Success</h3>
              <p className="grid-item-description">
                Join our network of successful franchisees with our tested business model.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="investment-details">
        <div className="section-content">
          <h2 className="section-title">Investment Details</h2>
          <div className="investment-grid">

            <div className='fran-inv'>
            <div className="investment-box">
              <div className="investment-header">
                <IndianRupee className="investment-icon" />
                <h3 className="investment-title">Franchise Fee</h3>
              </div>
              <p className="investment-amount">₹1,49,000</p>
              <p className="investment-description">One-time franchise fee</p>
            </div>

            <div className="investment-box">
              <div className="investment-header">
                <Store className="investment-icon" />
                <h3 className="investment-title">Total Setup Cost</h3>
              </div>
              <p className="investment-amount"> ₹6,48,000</p>
              <p className="investment-description">For a 100 Sqft store. (₹1,49,000 + ₹4,99,000)</p>
            </div>
            </div>

            <div className="investment-image">
              <img
                // src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?auto=format&fit=crop&q=80"
                src={franImg}
                alt="Modern Tea Shop"
                // className="investment-img"
                width="100%"
              />
            </div>
          </div>

          <div className="setup-package">
            <h3 className="setup-title">Complete Setup Package Includes:</h3>
            
            <div className="setup-grid">
              <ul className="setup-list">
                <li>Store setup by MCT</li>
                <li>Kitchen arrangements</li>
                <li>Induction stove & warmer</li>
              </ul>
              <ul className="setup-list">
                <li>Cash counter setup</li>
                <li>Light and plumbing works</li>
                <li>Menu board and displays</li>
              </ul>
              <ul className="setup-list">
                <li>Initial inventory setup</li>
                <li>Staff uniforms</li>
                <li>Marketing materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Operations */}
      <section className="support-operations">
        <div className="section-content">
          
          <div className="support-grid">

            <div className="support-item">
              <h2 className="support-title"><Headphones className="support-icon" />Comprehensive Support</h2>
              <div className="support-details">
                <ul className='setup-list'>
                  <li>Expert staff training by MCT professionals</li>
                  <li>Continuous marketing and promotional support</li>
                  <li>Regular quality control visits and guidance</li>
                  <li>Location-based inventory management system</li>
                </ul>
              </div>
            </div>

            <div>
              <img src='https://cdn.dribbble.com/userupload/11473058/file/original-0d363f07cfaaae8fea517b863507bae3.png' width="200px" style={{borderRadius:"50%"}}/>
            </div>

            <div className="support-item">
              <h2 className="support-title"><Store className="support-icon" />Operational Excellence</h2>
              <div className="support-details">
                <ul className='setup-list'>
                  <li>Standardized store design and branding</li>
                  <li>Location-optimized menu and pricing</li>
                  <li>Efficient inventory management systems</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Profitability Insights */}
      <section className="profitability-insights">
        <div className="section-content">
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <h2 className="section-title">Business Performance</h2>
          <hr style={{width:"20%",borderColor:"red",marginBottom:"30px"}}/>
          </div>
          
          <div className="performance-grid">
            <div className="performance-item">
              <BarChart className="performance-icon" />
              <h3 className="performance-title">Quick ROI</h3>
              <p className="performance-description">
                Expected return on investment within 3-9 months based on location and performance
              </p>
              <ul className="performance-details">
                <li>High-traffic locations: 3-5 months</li>
                <li>Medium-traffic areas: 6-7 months</li>
                <li>Developing locations: 8-9 months</li>
              </ul>
            </div>

            <div className="performance-item">
              <ShoppingBag className="performance-icon" />
              <h3 className="performance-title">Sales Potential</h3>
              <p className="performance-description">
                Average daily sales of 100-150 cups with seasonal variations
              </p>
              <ul className="performance-details">
                <li>Peak season: 150+ cups/day</li>
                <li>Regular season: 100-120 cups/day</li>
                <li>Additional snack sales revenue</li>
              </ul>
            </div>

            <div className="performance-item">
              <Users className="performance-icon" />
              <h3 className="performance-title">Growth Opportunity</h3>
              <p className="performance-description">
                Expanding market with increasing demand for premium tea experiences
              </p>
              <ul className="performance-details">
                <li>Growing tea culture</li>
                <li>Health-conscious consumers</li>
                <li>Premium positioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="section-content">

          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h2 className="section-title">Success Stories</h2>
            <hr style={{width:"10%",borderColor:"red",marginBottom:"30px"}}/>
          </div>

          <div className="stories-grid">

            <div className="story-item">
              <div className="story-header">
                <img 
                  src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1754406980~exp=1754410580~hmac=6adc27e17f8275ab092af2a7d92617e76bbcbca61b03834b93b9c27f2e0939f7&w=1480"
                  alt="Franchisee"
                  className="story-avatar"
                  
                />
                <div className="story-info">
                  <h4 className="story-name">Customer Name</h4>
                  <p className="story-location">Tamil Nadu Franchise</p>
                </div>
              </div>
              <p className="story-quote">
                "Starting a Magic Cassiao Tea franchise was the best business decision I made. The support and systems in place helped me achieve profitability within months."
              </p>
            </div>

            <div className="story-item">
              <div className="story-header">
                <img 
                  src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1754406980~exp=1754410580~hmac=6adc27e17f8275ab092af2a7d92617e76bbcbca61b03834b93b9c27f2e0939f7&w=1480"
                  alt="Franchisee"
                  className="story-avatar"
                  
                />
                <div className="story-info">
                  <h4 className="story-name">Customer Name</h4>
                  <p className="story-location">Tamil Nadu Franchise</p>
                </div>
              </div>
              <p className="story-quote">
              "The comprehensive and ongoing support from MCT helped me establish a successful business with consistent growth."
              </p>
            </div>

            <div className="story-item">
              <div className="story-header">
                <img 
                  src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1754406980~exp=1754410580~hmac=6adc27e17f8275ab092af2a7d92617e76bbcbca61b03834b93b9c27f2e0939f7&w=1480"
                  alt="Franchisee"
                  className="story-avatar"
                />
                <div className="story-info">
                  <h4 className="story-name">Customer Name</h4>
                  <p className="story-location">Tamil Nadu Franchise</p>
                </div>
              </div>
              <p className="story-quote">
              "The brand's quality and the unique menu offerings have helped me build a loyal customer base."
              </p>
            </div>
            
          </div>
        </div>
      </section>

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
                  <p className="contact-description">Magic Cassiao tea - D.No:38, Prakasam street, Opp: Taluk office, Erode - 638001</p>
                </div>
              </div>
              <div className="info-item">
                {/* <Coffee className="info-icon" />
                <div>
                  <h3>Business Hours</h3>
                  <p className="contact-description">Monday - Sunday: 9:00 AM - 10:00 PM</p>
                </div> */}
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
                  <h3 className="contact-title1"> ₹6,48,000</h3>
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

          <div className="contact-right">
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
          </div>
          
          
          
        </div>
      </section>
      
    </div>
  );
};

export default Franchise;
