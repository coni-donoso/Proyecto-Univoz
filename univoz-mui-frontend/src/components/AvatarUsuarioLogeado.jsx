import React from 'react';
import {Avatar, Badge, styled} from "@mui/material";

const AvatarUsuarioLogeado = ({usuarioLogged}) => {
    console.log(usuarioLogged)
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));
    const handleAvatarLetraNombre = () => {
        try {
            const objUsuario = JSON.parse(usuarioLogged);

            if (objUsuario && typeof objUsuario.usuario === 'string') {
                return objUsuario.usuario.charAt(0).toUpperCase();
            } else {

                console.error('La propiedad usuario no es una cadena válida');
                return '';
            }
        } catch (e) {

            console.error('Error al parsear el JSON de usuarioLogged:', e);
            return '';
        }
    }


    return (

        <>
            <StyledBadge
                sx={{padding: '3px'}}
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar sx={{backgroundColor:'#71077ba6' }} >{handleAvatarLetraNombre()}</Avatar>
            </StyledBadge>
        </>
    );
};

export default AvatarUsuarioLogeado;
