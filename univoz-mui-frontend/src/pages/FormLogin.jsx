import React, {useState} from 'react'
import FormularioLogin from '../components/FormularioLogin'
import FormularioRegistro from '../components/FormularioRegistro'
import UnivozImage from "../assets/UniVoz-removebg-preview.png";
import WhatsAppImage from "../assets/WhatsApp_Image_2024-05-15_at_23.56.22__3_-removebg-preview.png";
import {useRef} from "react";
import './Login.css'
import { Button } from '@mui/material';
import Alertas from "../components/Alertas.jsx";

const FormLogin = ({setUsuarioLogged}) => {
    const LoginForm = useRef(null)
    const RegisterForm = useRef(null)
    const [mensaje, setMensaje] = useState('')
    const [tipoAlerta, setTipoAlerta] = useState('')

    const handleCambioLogin = () => {
        LoginForm.current.style.left = "50%";
        LoginForm.current.style.opacity = "1";
        RegisterForm.current.style.left = "-50%";
        RegisterForm.current.style.opacity = "0";

    }

    const handleCambioRegister = () => {
        LoginForm.current.style.left = "150%";
        RegisterForm.current.style.left = "50%";
        LoginForm.current.style.opacity = "0";
        RegisterForm.current.style.opacity = "1";

    }

  return (
      <>
      <div id="BodyLogin">
          <div  id='cajaPadre'>
              <div  id="colLogin">
                  <div className="image-layerLogin">
                  <a href='/'>  <img src={UnivozImage} className="form-imageLogin-main fi-2Login" /></a>
                      <img src={WhatsAppImage}
                           className="form-imageee-1 fi-1Login"/>
                      <img src={WhatsAppImage}
                           className="form-imageee-2 fi-1Login"/>
                      <img src={WhatsAppImage}
                           className="form-imageee-3 fi-1Login"/>
                  </div>
              </div>
              <div className="colLogin-2">
                  <div className="btn-box" id="botonUsuarios">
                      <Button variant='contained' type="button" onClick={handleCambioLogin } className="btnLogin btn-1" id="login">Inicia Sesión</Button>
                      <Button variant='contained' onClick={handleCambioRegister} className="btnLogin btn-2" id="register">Regístrate</Button>
                  </div>
                  <FormularioLogin setMensaje={setMensaje} setTipoAlerta={setTipoAlerta} setUsuarioLogged={setUsuarioLogged} LoginForm={LoginForm}/>
                  <FormularioRegistro setMensaje={setMensaje} setTipoAlerta={setTipoAlerta} RegisterForm={RegisterForm} handleCambioLogin={handleCambioLogin} />
              </div>
          </div>
        </div>
          <Alertas mensaje={mensaje} tipoalerta={tipoAlerta} setMensajealerta={setMensaje}/>
      </>
  )
}

export default FormLogin