import React from 'react';
import {Avatar, Box, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography} from "@mui/material";
import ImagenNosotrasBlanco from "../../public/WhatsApp_Image_2024-04-14_at_5.14.14_PM-removebg-preview (1).png";

const neurodivergences = [
    {
        name: 'Autismo',
        description: 'El Autismo es una condición del desarrollo que afecta la comunicación y el comportamiento. A menudo incluye desafíos con la interacción social y una variedad de habilidades y comportamientos repetitivos.',
        image: 'https://i.pinimg.com/736x/64/92/18/6492183db9fc82c7507f60bc4e0ea3b3.jpg'
    },
    {
        name: 'TDAH',
        description: 'El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es una condición que afecta la atención, el control de impulsos y la capacidad de concentración, lo que puede llevar a dificultades en la escuela, el trabajo y las relaciones.',
        image: 'https://img.freepik.com/vector-gratis/ilustracion-adhd-diseno-plano-dibujado-mano_23-2149384111.jpg?ga=GA1.1.692503924.1714691517&semt=sph'
    },
    {
        name: 'Dislexia',
        description: 'La Dislexia es una dificultad específica del aprendizaje que afecta la capacidad de una persona para leer, escribir y deletrear. No está relacionada con la inteligencia, sino con el procesamiento del lenguaje.',
        image: 'https://i.pinimg.com/564x/1c/e9/c6/1ce9c69ff2d1548e91060d3e3d0c57ee.jpg'
    },
    {
        name: 'Epilepsia',
        description: 'La Epilepsia es un trastorno neurológico que causa convulsiones recurrentes. Estas convulsiones son episodios breves de movimiento incontrolado que pueden afectar una parte o todo el cuerpo.',
        image: 'https://img.freepik.com/vector-gratis/ilustracion-epilepsia-diseno-plano-dibujado-mano_23-2149297500.jpg?w=740&t=st=1719372205~exp=1719372805~hmac=c564c94df1ad110077efa14482b2000544a986ff476d1ead75b209f1167b28b7'
    },
    {
        name: 'Síndrome de Tourette',
        description: 'El Síndrome de Tourette es un trastorno neurológico que se caracteriza por movimientos y sonidos repetitivos e involuntarios llamados tics. A menudo comienza en la infancia y puede variar en intensidad.',
        image: 'https://www.shutterstock.com/image-vector/tourette-syndrome-girl-illustration-isolated-260nw-2390765639.jpg'
    },
    {
        name: 'Trastorno Bipolar',
        description: 'El Trastorno Bipolar es un trastorno mental caracterizado por cambios extremos en el estado de ánimo, que van desde episodios de manía (euforia, alta energía) hasta episodios de depresión (tristeza, baja energía).',
        image: 'https://media.istockphoto.com/id/1318764563/es/vector/varias-emociones-y-expresiones-faciales-de-una-persona.jpg?s=612x612&w=0&k=20&c=Vbyg3gy0oluXfjim_4tE0tiPGr2AC83D2EVlvkwTZLA='
    }
];

const Informacion = () => {

    return (
        <>
         <Grid container justifyContent='center' spacing={2} sx={{paddingBottom:3}}>
             <Grid item xs={12} sm={12}>
             <Typography variant="h4" gutterBottom style={{ marginTop: '20px', textAlign: 'center' }}>
                     Neurodivergencias
                 </Typography>
                 <Paper sx={{ padding: '15px', margin: '10px' }}>
                     <Typography pt={2} align="center" variant="h6">
                         ¿Qué son las diferencias cognitivas?
                     </Typography>
                     <Grid container justifyContent="center">
                         <iframe
                             width="630"
                             height="315"
                             src="https://www.youtube.com/embed/BlZalyECc34?si=x5IOsnym1_LuSqkq"
                             title="YouTube video player"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                             referrerPolicy="strict-origin-when-cross-origin"
                             allowFullscreen
                         ></iframe>
                     </Grid>
                 </Paper>
             </Grid>
             <Grid item xs={11.3}>
               
                 <Grid container spacing={2}>
                     {neurodivergences.map((item, index) => (
                         <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                             <Card sx={{height:440}}>
                                 <CardMedia
                                     component="img"
                                     height="150"
                                     image={item.image}
                                     alt={item.name}
                                 />
                                 <CardContent>
                                     <Typography variant="h5" component="div" textAlign='center'>
                                         {item.name}
                                     </Typography>
                                     <Typography variant="body2" color="textSecondary" textAlign='center'>
                                         {item.description}
                                     </Typography>
                                 </CardContent>
                             </Card>
                         </Grid>
                     ))}
                 </Grid>

             </Grid>
         </Grid>
        </>
    );
};

export default Informacion;
