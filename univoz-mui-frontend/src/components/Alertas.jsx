import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Alertas = ({ mensaje, tipoalerta, setMensajealerta }) => {
  const handleCloseSnackbar = () => {
    setMensajealerta(null);
  };

  if (!mensaje) return null;
  return (
    <>
      <Snackbar
        open={true}
        autoHideDuration={4000}
        message={mensaje}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleCloseSnackbar}
      >
        <Alert  severity={tipoalerta} variant="filled" sx={{ backgroundColor: '#72077B' , color: 'white' }} >{mensaje}</Alert> 
      </Snackbar>
    </>
  );
};

export default Alertas;
 //#D7BBDD morado mas claro 