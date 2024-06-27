import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbConnection = mongoose.connect(process.env.MONGODBURL)
    .then(()=>{
        console.log('Conectado a mongoDb')
    })
    .catch((error)=>{
        console.log('Error al conectar mongoDb :',error)
    })

export default dbConnection;
