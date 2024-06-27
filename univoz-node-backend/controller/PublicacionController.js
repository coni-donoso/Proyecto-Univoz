import express from "express";
import moment from "moment-timezone";
import { Publicacion } from "../models/PublicacionModel.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/insertar-publicacion", async(request, response) => {
    const {titulo,contenido,tags,imagen} = request.body
    let token = null;
    try{
        if(!titulo || 
            !contenido ||
            !tags
        ){
            return response.status(400).send({
                message: "Faltan datos obligatorios"
            });
        }
        const authorization = request.get("Authorization");
        console.log("Authorization", authorization);
        if(authorization && authorization.toLowerCase().startsWith("bearer")){
            token = authorization.substring(7);
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        if (!token || !decodedToken.id){
            return response.status(401).send({
                message: "Token inválido o faltante",
            });
        }

        //Obtener la fecha y horra actual en la zonahoraria de Chile y formatearla
        const fechaChilena = moment().tz("America/Santiago").format("YYYY-MM-DD HH:mm:ss");

        const nuevaPublicacion = {
            titulo: titulo,
            contenido: contenido,
            fecha:fechaChilena,
            tags: tags,
            usuario: decodedToken.id,
            imagen:imagen
        }
        const publicacion = await Publicacion.create(nuevaPublicacion);

        return response.status(201).send(publicacion);

    }catch(error){
        console.log("Error", error);
        return response.status(500).send("Error interno del servidor");
    }
});

router.get("/listar-publicaciones", async (request, response) =>{
    try{ 
        const publicaciones = await Publicacion.find({}).populate("usuario","usuario").sort({fecha: -1}); // Ordenar por fecha de creación descendente
        return response.status(200).send(publicaciones)
    }catch (error){
        console.log("Error", error);
        return response.status(500).send("Error interno del servidor")
    }
});

export default router;


