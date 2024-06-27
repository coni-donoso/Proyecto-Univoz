import express from "express";
import {Usuario} from '../models/UsuarioModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router();


router.post('/insertar-usuario',async (request,response)=>{
    try{
        const {usuario, email,password} = request.body
        if(!usuario || !email || !password){
            return response.status(500).send('Faltan datos obligatorios')
        }

        const passwordBcrypt = await bcrypt.hashSync(password,10)

        const nuevoUsuario = {
            usuario:usuario,
            email:email,
            password:passwordBcrypt
        }

        const usuarioCreado = await Usuario.create(nuevoUsuario);

        return response.status(200).send(usuarioCreado);
    }catch(error){
        console.log('Error ',error)
        return response.status(500).send('Error al insertar usuario en la base de datos')
    }
})

router.post('/login',async (request,response)=> {
    try{
        const {usuarioBody , passwordBody} = request.body;

        const usuario = await Usuario.findOne({
            usuario:usuarioBody
        });

        if(!usuario){
            return response.status(500).send('Usuario o password incorrecto')
        }
        const passwordCheck = await bcrypt.compareSync(passwordBody,usuario.password)

        if(!passwordCheck){
            return response.status(500).send('Usuario o password incorrecto')
        }

        const datosJsonWebToken = {
            id: usuario._id,
            usuario:usuario.usuario
        }

        const token = jwt.sign(datosJsonWebToken,process.env.SECRET_KEY);

        return response.status(200).send({
            usuario:usuario.usuario,
            token:token
        })

    }catch(error){
        console.log('Error',error)
        return response.status(500).send('Error al loguearse')
    }

})



export default router