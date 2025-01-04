import React from 'react'
import '../stylesheet/allproducts.css'
import products from '../assets/products.json'
import ProductCard from '../components/ProductCard';


const AllProducts = () => {
  const categories=Array.from(new Set(products.map(p => p.category)));

  console.log(categories)

  return (
    <>
        {/* hero section */}
        <div className='products-hero'>
            <h1>Products</h1>
            <p style={{color:"red"}}>There is magic in everything</p>
        </div>     

        {/* product listing  */}
        <div className='product_list_cont'>
          {categories.map((item)=>(
            <ProductCard 
              key={item}
              category={item}
              products={products.filter((p)=>(p.category===item))}
            />
          ))}
        </div>
    </>
  )
}

export default AllProducts
