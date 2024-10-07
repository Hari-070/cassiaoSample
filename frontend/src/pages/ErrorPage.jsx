import React from 'react'

const ErrorPage = () => {
  return (
    <div style={{width:"100%",height:"100vh",display:'flex',justifyContent:"center",alignItems:"center"}}>
      <div style={{display:'flex',justifyContent:"center",alignItems:"center",gap:"20px"}}>
        <h1>Error 404</h1>
        <div style={{borderLeft:"1px solid white", height:"50px"}}></div>
        <p>Page doesn't exist</p>
      </div>    
    </div>
  )
}

export default ErrorPage
