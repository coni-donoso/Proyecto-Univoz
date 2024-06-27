import React from 'react';
import {useQuery} from "@tanstack/react-query";
import axiosClient from "../utils/axiosClient.js";

const useUsuarios = () => {
    return useQuery(['useUsuarios'], async ()=>{
        const response = await axiosClient.get('/usuario/listar-usuario')
        return response.data
    });
};

export default useUsuarios;
