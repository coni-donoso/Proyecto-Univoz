import React, { useState } from 'react';
import './Formulario.css'
import { useNavigate } from "react-router-dom";
import useLogin from '../api/useLogin';
import { Box, Button, Grid, TextField, styled ,InputAdornment, Typography, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


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
    password:''
}
const FormularioLogin = ({setMensaje,setTipoAlerta, LoginForm,setUsuarioLogged }) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { mutate } = useLogin();
    const [formulario, setFormulario]=useState(initialState)
    const [flagLogin, setFlagLogin] = useState(false)
   

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.value
        })
    }

    const handleLogin = () => {

        if (formulario.usuario || formulario.password) {
            setFlagLogin(true)
            mutate({formulario},{
                onSuccess:(data)=>{
                    console.log(data)
                    window.localStorage.setItem('token',JSON.stringify(data))
                    setUsuarioLogged(JSON.stringify(data))
                    setMensaje('Inicio de sesión correcto!');
                    setTipoAlerta('error');
                    setTimeout(()=>{
                        navigate('/')
                    }, 2000);
                },
                onError:(error)=>{
                    console.log('Error',error)
                    setMensaje('Usuario o contraseña incorrecta!');
                    setTipoAlerta('error');
                    setFlagLogin(false)
                }
            })
        } else {
            setMensaje('Debe ingresar datos para iniciar sesión');
            setTipoAlerta('error');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Box className="login-form" ref={LoginForm} p={2}>
                <div className="form-title" id='tituloFormulario'>
                    <Typography variant='h5'>Inicia Sesión</Typography>
                </div>
                <div className="form-inputs" id='cajaNombre' p={2}>
                    <Grid item xs={12} p={1}>
                        <CssTextField 
                            name='usuario'
                            onChange={handleChange}
                            label="Usuario"
                            fullWidth
                            type='text'
                            InputProps={{
                            endAdornment: (
                                <InputAdornment sx={{paddingRight:1}} position="start">
                                    <AccountCircle sx={{color:'white'}} />
                                </InputAdornment>
                            ),
                            }}
                           
                            variant="outlined"
                        />
                        
                    </Grid>
                    <Grid item xs={12} p={1}>
                        <CssTextField sx={{paddingBottom:1}}
                            name='password'
                            onChange={handleChange}
                            label="Contraseña" 
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment  position="start">
                                    {showPassword ? <IconButton onClick={toggleShowPassword}><VisibilityOffIcon sx={{color:'white'}} /></IconButton>  : <IconButton onClick={toggleShowPassword} ><VisibilityIcon sx={{color:'white'}} /></IconButton> }
                                </InputAdornment>
                            ),
                            }}
                           
                              
                            variant="outlined"
                        />

                    </Grid>
                    
                    <div className="input-box">
                        <Button disabled={flagLogin} fullWidth  variant='contained' sx={{backgroundColor:'#682064ef', ":hover":{backgroundColor:'#6e1d74'}}} disableElevation onClick={handleLogin}>
                            Iniciar sesión
                        </Button>
                    </div>
                </div>
            </Box>
        </>
    );
};

export default FormularioLogin;