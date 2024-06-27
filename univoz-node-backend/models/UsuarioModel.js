import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    usuario:{
        type:String,
        unique:true,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password:{
        type:String,
        required: true
    },
})

export const Usuario = mongoose.model('Usuario',UsuarioSchema)