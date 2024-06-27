import React, { useState } from 'react';
import { Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const BotonCerrarSession = ({ setUsuarioLogged }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmClose = () => {
        window.localStorage.removeItem('token');
        setUsuarioLogged(null);
        setOpen(false);
    };

    return (
        <>
            <Button 
                fullWidth 
                disableElevation 
                onClick={handleClickOpen} 
                variant='contained' 
                sx={{ 
                    backgroundColor: '#8546d7', 
                    color: 'white', 
                    margin: 0.5, 
                    padding: 1.2, 
                    ":hover": { backgroundColor: '#7401DF' } 
                }}
            >
                <Typography sx={{ fontSize: '10px' }} variant="h7">Cerrar sesión</Typography>
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant='h6' sx={{ fontSize: '18px' }}>Cerrar Sesión</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant='body1' sx={{ fontSize: '16px' }}>
                            ¿Estás seguro de que quieres cerrar sesión?
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained' sx={{backgroundColor:"grey",":hover":{backgroundColor:'#626262'}}}>
                        <Typography variant='button' sx={{ fontSize: '12px' }}>Cancelar</Typography>
                    </Button>
                    <Button onClick={handleConfirmClose} color="secondary" variant='contained'>
                        <Typography variant='button' sx={{ fontSize: '12px' }}>Confirmar</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default BotonCerrarSession;
