import { useQuery } from '@tanstack/react-query';
import React from 'react'
import axiosClient from '../utils/axiosClient.js';

const useGetAllPublicaciones = () => {
  return useQuery(['getAllPublicaciones'], async () => {
    const response = await axiosClient.get('/publicacion/listar-publicaciones')
    return response.data;
  });
};

export default useGetAllPublicaciones;