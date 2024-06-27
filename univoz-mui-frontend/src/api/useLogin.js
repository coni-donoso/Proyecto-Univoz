import React from 'react';
import {useMutation} from "@tanstack/react-query";
import axiosClient from "../utils/axiosClient.js";

const useLogin = () => {
    return useMutation(async ({formulario})=>{
        const response = await axiosClient.post('/usuario/login',{
            usuarioBody:formulario.usuario,
            passwordBody:formulario.password
        })
        return response.data
    });
};

export default useLogin;
