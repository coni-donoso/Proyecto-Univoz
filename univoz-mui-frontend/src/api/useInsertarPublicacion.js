import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosClient from '../utils/axiosClient.js';

const useInsertarPublicacion = () => {
    const client = useQueryClient();
  return useMutation(async ({formulario}) => {
    const config ={ 
        headers:{
            Authorization: `Bearer ${formulario.usuario}`
        }
    }

    const response = await axiosClient.post('/publicacion/insertar-publicacion',{
        titulo:formulario.titulo,
        contenido:formulario.contenido,
        tags:formulario.tags,
        imagen:formulario.imagen,
    },config)
    return response.data
  },{
    onSuccess: async() =>{
        await client.invalidateQueries("getAllPublicaciones")
    }
  }
    
  )
};

export default useInsertarPublicacion;