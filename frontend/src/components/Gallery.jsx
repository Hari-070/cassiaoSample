import React, { useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import '../stylesheet/gallery.css'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
import teaPic from '../assets/teaPic.jpg'
import coffee1 from '../assets/coffee1.png'
import {motion} from 'framer-motion'


const Gallery = ({showHero=true}) => {

  // const images=[
  //   g1,g2,g3,g4,teaPic,g1,g3,g2,g4,coffee1
  // ]

  const importAllImages = () => {
  const images = import.meta.glob('../assets/cassiao pics/*.{jpg,jpeg,png}', { eager: true });
    return Object.values(images).map((mod) => mod.default);
  };

  const images = importAllImages();

   useEffect(()=>{
      window.scrollTo(0,0)
    },[])


  return (
    <>
      {showHero &&
      <div className='gallery-hero'>
      <h1 style={{color:"white"}}>Gallery</h1>
      <p style={{color:"white"}}>The Magic lies in the Taste</p>
    </div>}
      <motion.div initial={{opacity:0,translateY:"60px"}} animate={{opacity:1,translateY:"0"}} transition={{duration:0.5}}
      className='gallery-cont'>
        <h1 style={{color:"black"}}>Gallery</h1>
        <hr style={{width:"20%", boxShadow:"0 7px 20px 1px black",height:"5px",backgroundColor:"red",borderRadius:"10px"}}></hr>
        <div style={{width:"80%"}}>
        <ResponsiveMasonry 
          columnsCountBreakPoints={{ 900: 3, 750: 2, 450: 1}}
         >
          <Masonry gutter="10px">
          {images.map((image,i)=>(
            <div className='gal-photo' key={i} >
              <img src={image} width="100%"/>
            </div>
          ))}
          </Masonry>
        </ResponsiveMasonry>
        </div>
      </motion.div>
    </>
  )
}

export default Gallery







//  <div className='gallery-div'>
//         <div className="gallery-col">
//             <div className="photo"><img src={teaPic} alt='img'/></div>
//             <div className="photo"><img src={g2} alt='img'/></div>
//             <div className="photo"><img src={g3} alt='img'/></div>
//             <div className="photo"><img src={g1} alt='img'/></div>
//         </div>
//         <div className="gallery-col">
//             <div className="photo"><img src={g4} alt='img'/></div>
//             <div className="photo"><img src={g1} alt='img'/></div>
//             <div className="photo"><img src={g2} alt='img'/></div>
//             <div className="photo"><img src={teaPic} alt='img'/></div>
//         </div>
//         <div className="gallery-col">
//             <div className="photo"><img src={coffee1} alt='img'/></div>
//             <div className="photo"><img src={g1} alt='img'/></div>
//             <div className="photo"><img src={g2} alt='img'/></div>
//             <div className="photo"><img src={g3} alt='img'/></div>
//         </div>
//       </div>