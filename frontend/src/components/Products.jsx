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
            <img src={props.img} alt='img' width="200px"/>
            <h2>Black Tea</h2>
        </motion.div>
    </div>
  )
}

export default Products
