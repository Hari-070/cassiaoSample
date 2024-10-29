import React from 'react'
import '../stylesheet/gallery.css'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
import teaPic from '../assets/teaPic.jpg'
import coffee1 from '../assets/coffee1.png'
import {motion} from 'framer-motion'

const Gallery = ({showHero=true}) => {
  return (
    <>
      {showHero &&
      <div className='gallery-hero'>
      <h1>Gallery</h1>
      <p style={{color:"red"}}>The Magic lies in the Taste</p>
    </div>}
      <motion.div initial={{opacity:0,translateY:"60px"}} whileInView={{opacity:1,translateY:"0"}} transition={{duration:0.5}}
      className='gallery-cont'>
        <h1>Gallery</h1>
        <hr style={{width:"20%", boxShadow:"0 7px 20px 1px white",height:"5px",backgroundColor:"white",borderRadius:"10px"}}></hr>
      <div className='gallery-div'>
        <div className="gallery-col">
            <div className="photo"><img src={teaPic} alt='img'/></div>
            <div className="photo"><img src={g2} alt='img'/></div>
            <div className="photo"><img src={g3} alt='img'/></div>
            <div className="photo"><img src={g1} alt='img'/></div>
        </div>
        <div className="gallery-col">
            <div className="photo"><img src={g4} alt='img'/></div>
            <div className="photo"><img src={g1} alt='img'/></div>
            <div className="photo"><img src={g2} alt='img'/></div>
            <div className="photo"><img src={teaPic} alt='img'/></div>
        </div>
        <div className="gallery-col">
            <div className="photo"><img src={coffee1} alt='img'/></div>
            <div className="photo"><img src={g1} alt='img'/></div>
            <div className="photo"><img src={g2} alt='img'/></div>
            <div className="photo"><img src={g3} alt='img'/></div>
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default Gallery
