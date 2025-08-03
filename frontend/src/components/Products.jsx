import React from 'react'
import '../stylesheet/home.css'
import {motion} from 'framer-motion'


const Products = (props) => {
  return (
    <div>
      <motion.div 
       initial={{opacity:0, translateY:"60px"}}
       whileInView={{opacity:1, translateY:"0"}}
       transition={{duration:0.5}} 
       className='home-prod-card'>
        <div className='home-prod-img'>
          <img src={props.img} alt='img' width="100%"/>
        </div>
            
            <h2>{props.name}</h2>
        </motion.div>
    </div>
  )
}

export default Products
