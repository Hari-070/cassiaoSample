import React from 'react'
import '../stylesheet/home.css'
import {motion} from 'framer-motion'


const Products = (props) => {
  return (
    <div>
      <motion.div 
       initial={{opacity:0, translateZ:"100px"}}
       whileInView={{opacity:1, translateZ:"0"}}
       transition={{duration:1,delay:0.3}}
       className='home-prod-card'>
            <img src={props.img} alt='img' width="200px"/>
            <h2>Black Tea</h2>
        </motion.div>
    </div>
  )
}

export default Products
