import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"


const app = express()
dotenv.config()



const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.mongo)
        console.log(`connected to ${mongoose.connection.host}`)
    }catch(err){
        console.log(err)
    }
}

app.use(express.json())




connectdb()

 


app.listen(8000,()=>{
    console.log("server is running on port 8000")
})