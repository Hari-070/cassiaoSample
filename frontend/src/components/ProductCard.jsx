import React from 'react'
import '../stylesheet/allproducts.css'


const ProductCard = (props) => {
  return (
    <>
      <div className='allProd_category' style={{color:"black"}}>
        <h1>{props.category}</h1>
        <hr style={{width:"70%",height:"2px",backgroundColor:"red",border:"none"}}></hr>
        <div className='allProd_prod_cont'>
            {props.products.map((item)=>(
                <div className='allProd_prodCard'>
                    <div className='allProd_prodCard_img'><img className='allProd_img' src={item.image} alt='image' /></div>
                    {/* <div className='allProd_prodCard_img'><img src="https://imageio.forbes.com/specials-images/imageserve/5f6c061ca71799093f55fd02/Aromatic-herbal-tea-/0x0.jpg?format=jpg&crop=5029,3354,x0,y0,safe&width=1440" alt='image' width='100%'/></div> */}
                    <div className='allProd_prodCard_details'>
                        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                            <h1 style={{color:"black"}}>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                        <div className='allProd_prodCard_details_price'>
                            <div><p >Regular:</p><p style={{color:"black"}}>₹{item.regular_price}</p></div>
                            <div><p >Large:</p><p style={{color:"black"}}>₹{item.large_price}</p></div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                            <h1 style={{fontSize:"15px"}}>Ingredients</h1>
                            <div className='allProd_prodCard_details_ingred'>{item.ingredients.map((i)=>(
                                <span>{i}</span>
                            ))}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default ProductCard
