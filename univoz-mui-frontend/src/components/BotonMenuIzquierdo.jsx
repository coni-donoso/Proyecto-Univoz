import React from 'react';
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const BotonMenuIzquierdo = ({ruta, icono, texto, index, selectedIndex ,handleListItemClick}) => {
    const navigate = useNavigate();

    const handleClick = (e) =>{
        handleListItemClick(e,index)
        navigate(ruta);
    }
    return (
        <>
            <ListItemButton
                selected={selectedIndex === index}
                sx={{
                    textAlign: 'center',
                    py: 1, // Ajusta el espaciado vertical
                    '& .MuiListItemIcon-root': {
                        minWidth: 'auto', // Ajusta el ancho mínimo del icono
                        marginRight: '8px', // Ajusta el margen derecho entre el icono y el texto
                    },
                    minHeight: 32,
                    borderLeft: selectedIndex === index ? '5px solid purple' : 'none', // Línea izquierda morada solo cuando seleccionado
                    backgroundColor: selectedIndex === index ? '#D7BBDD !important' : 'transparent', // Color rosado solo cuando seleccionado
                    color : selectedIndex === index ? 'white' : 'black', // Color
                    '&:hover': {
                        backgroundColor: selectedIndex === index ? '#B57ABA !important' : '#E0E0E0', // Mantener el color rosado al pasar el ratón solo cuando seleccionado
                    },
                }}
                onClick={(e) => handleClick(e)}
            >
                <ListItemIcon sx={{color : selectedIndex === index ? 'white' : 'black'}}>
                    {icono}
                </ListItemIcon>
                <ListItemText primary={texto} primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
            </ListItemButton>
        </>
    );
};

export default BotonMenuIzquierdo;