const express=require('express')
const data=require('./products.json')
const cors=require('cors')


const app=express()

app.use(express.json())
app.use(cors())

const PORT=3000

app.get('/products',async(req,res)=>{
    try {
        res.status(200).json(data)  
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(PORT,()=>{
    console.log(`this is running in port ${PORT} successfully!`)
})