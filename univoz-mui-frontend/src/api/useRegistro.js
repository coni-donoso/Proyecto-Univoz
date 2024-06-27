import React from 'react';
import {useMutation} from "@tanstack/react-query";
import axiosClient from "../utils/axiosClient.js";

const useRegistro = () => {
    return useMutation(async ({formulario})=>{
        const response = await axiosClient.post('/usuario/insertar-usuario',{
            usuario:formulario.usuario,
            email:formulario.correo,
            password:formulario.password
        })
        return response.data
    });
};

export default useRegistro;
