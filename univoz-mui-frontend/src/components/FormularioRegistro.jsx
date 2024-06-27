import React, { useState} from 'react';
import './Formulario.css'
import useRegistro from '../api/useRegistro';
import { Box, Grid, IconButton, InputAdornment, TextField, Typography, Button, styled } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { AccountCircle } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const CssTextField = styled(TextField)({
    '& label': {
        color: '#ffffff',
    },
    '& label.Mui-focused': {
        color: '#ffffff',
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: '#ffffff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#ffffff',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ffffff',
        },
        '&:hover fieldset': {
            borderColor: '#ffffff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ffffff',
        },
        '& input': {
            color: '#ffffff',
        },
    },
});

const initialState = {
    usuario:'',
    correo:'',
    password : '',
    password2 : ''
}
const FormularioRegistro = ({setMensaje,setTipoAlerta, RegisterForm , handleCambioLogin}) => {
    const [formulario, setFormulario] = useState(initialState)
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [flagRegister, setFlagRegister] = useState(false)
    const {mutate} = useRegistro()
    
    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.value
        })
    }

   

    const handleRegistrar = () => {
        console.log(formulario)
        if (!formulario.usuario || !formulario.correo || !formulario.password || !formulario.password2) {
            setMensaje('Debe ingresar datos para registrarse');
            setTipoAlerta('warning');
            return
        } 

        if(formulario.password != formulario.password2){
            setMensaje('Las contraseñas no coinciden');
            setTipoAlerta('warning');
            return
        }

        if(!isValidUsuario(formulario.usuario)){
            setMensaje('Ingresa un nombre de usuario válido. Debe tener al menos 3 caracteres y no contener caracteres especiales.');
            setTipoAlerta('warning');
            return
        }

        if(!isValidPassword(formulario.password)){
            setMensaje('La contraseña debe tener al menos 6 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.');
            setTipoAlerta('warning');
            return
        }

        if(!isValidEmail(formulario.correo)){
            setMensaje('Ingresar correo electrónico válido');
            setTipoAlerta('warning');
            return
        }
        setFlagRegister(true)
        mutate({formulario},{
            onSuccess: ()=>{
                setMensaje('Usuario registrado correctamente!');
                setTipoAlerta('success');
                setFormulario(initialState)
                handleCambioLogin()
               
            },
            onError: (error)=>{
                setMensaje('El usuario o email ya existen');
                setTipoAlerta('error');
                console.log(error)
                setFlagRegister(false)
            }
        })
        
    }

    const isValidUsuario = (username) => {
        const regex = /^[a-zA-Z0-9_ ]{3,}$/;
        return regex.test(username);
    }

    const isValidPassword = (password) => {
        const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;!#^()+={}<>~|?/\\`"'-])[A-Za-z\d@$!%*?&.,:;!#^()+={}<>~|?/\\`"'-]{6,}$/;
        return regex.test(password);
    }

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    return (
        <>
            <Box className="register-form" ref={RegisterForm}>
                <div className="form-title" id='tituloFormulario'>
                    <Typography variant='h5'>Regístrate</Typography>
                </div>
                <div className="form-inputs" id='cajaNombre' p={2}>
                    <Grid item xs={12} p={1}>
                        <CssTextField
                        onChange={handleChange}
                        name='usuario'
                            id="input-with-icon-textfield"
                            label="Usuario"
                            fullWidth
                            type='text'
                            value={formulario.usuario || ''}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment sx={{ paddingRight: 1 }} position="start">
                                        <AccountCircle sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} p={1}>
                        <CssTextField
                        onChange={handleChange}
                            name='correo'
                            label="Email"
                            fullWidth
                            type='text'
                            value={formulario.correo || ''}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment sx={{ paddingRight: 1 }} position="start">
                                        <MailOutlineIcon sx={{ color: 'white' }} />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                           
                        />
                    </Grid>
                    <Grid item xs={12} p={1}>
                        <CssTextField
                        onChange={handleChange}
                            name='password'
                            label="Contraseña"
                            value={formulario.password || ''}
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton onClick={toggleShowPassword}>
                                            {showPassword ? <VisibilityOffIcon sx={{ color: 'white' }} /> : <VisibilityIcon sx={{ color: 'white' }} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                           
                        />
                    </Grid>

                    <Grid item xs={12} p={1}>
                        <CssTextField
                        onChange={handleChange}
                            name='password2'
                            label="Confirmar contraseña"
                            value={formulario.password2 || ''}
                            fullWidth
                            type={showPassword2 ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton onClick={toggleShowPassword2}>
                                            {showPassword2 ? <VisibilityOffIcon sx={{ color: 'white' }} /> : <VisibilityIcon sx={{ color: 'white' }} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                           
                        />
                    </Grid>
                    <div className="input-box" id='iconsblancos'>
                        <Button disabled={flagRegister}   fullWidth className="input-submit" disableElevation type="submit" id="iniciaLogin" onClick={handleRegistrar} >
                            Registrarse
                        </Button>
                    </div>
                </div>
            </Box>
        </>
    );
};

export default FormularioRegistro;
