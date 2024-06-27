import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  CardContent, Divider,
} from "@mui/material";
import ImagenNosotrasBlanco from '../../public/WhatsApp_Image_2024-04-14_at_5.14.14_PM-removebg-preview (1).png'
import img7 from '../../public/img7.jpg'
import img2 from '../../public/img2.jpg'
import img4 from '../../public/img4.jpg'
import img5 from '../../public/img5.jpg'
import img3 from '../../public/img3.jpg'


const teamMembers = [
  {
    name: 'Elizabeth Araya',
    role: 'Desarrolladora',
    avatar: img7
  },
  {
    name: 'Natasha Pérez',
    role: 'Desarrolladora',
    avatar: img2
  },
  {
    name: 'Constanza Donoso',
    role: 'Desarrolladora',
    avatar: img4
  },
  {
    name: 'Francisca Sánchez',
    role: 'Desarrolladora',
    avatar: img5
  },
  {
    name: 'Carla Palmieri',
    role: 'Desarrolladora',
    avatar: img3
  },
];

const About = () => {
  return (

    <Grid container justifyContent='center' spacing={1} sx={{ paddingBottom: 3 }}>
      <Grid item xs={12}>
        <Card sx={{ padding: '10px', margin: '15px' }} elevation={5}>
          <CardMedia
            component='img'
            image={ImagenNosotrasBlanco}
            height="380"
          />
          <Divider variant='middle' textAlign='center'><Typography gutterBottom variant="button">Nosotras</Typography></Divider>
          <CardContent>

            <Typography mb={2} mt={1} align="justify">
              Somos un equipo de mujeres que creen en una sociedad donde se
              respete y valore las neurodiversidades, creamos esta plataforma para
              generar conciencia y visibilización sobre las diferencias
              cognitivas, queremos ser la voz de ese 6% de la población en Chile
              que hoy esta siendo excluido.{" "}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ padding: '10px', margin: '15px' }} >
          <CardContent>
            <Typography align="center" m={2} variant="h5">
              Nuestra Misión
            </Typography>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    margin: "auto",
                    marginBottom: "15px",
                    backgroundImage:
                      "url('https://wallpapercave.com/wp/wp12372465.jpg')",
                    backgroundRepeat: "no-repeat",
                    height: "170px",
                    width: "100%",
                    borderRadius: 3,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ paddingTop: "0px" }}
              >
                <Typography align="justify">
                  Nuestra misión es crear un espacio donde todas las voces sean escuchadas y respetadas. 
                  Este foro ha sido diseñado para que las personas puedan acceder a información relevante, 
                  compartir sus historias, ofrecer y recibir consejos, y descubrir oportunidades de trabajo inclusivo.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ padding: '10px', margin: '15px' }} >
          <CardContent>
            <Typography align="center" m={2} variant="h5">
              Nuestra Visión
            </Typography>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    margin: "auto",
                    marginBottom: "15px",
                    backgroundImage:
                      "url('https://i.pinimg.com/564x/52/bd/78/52bd78922ff777c7fef3f1cf14bdeea4.jpg')",
                    backgroundRepeat: "no-repeat",
                    height: "170px",
                    width: "100%",
                    borderRadius: 3,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ paddingTop: "0px" }}
              >
                <Typography align="justify">
                  La visión de la Plataforma de UNIVOZ es ser un foro 
                  que promueva una sociedad inclusiva, que encuentre en nuestra
                  página motivos que multipliquen los efectos positivos de la
                  acción social gracias a nuestra red de visibilización cognitiva
                  de fácil uso.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={11.3}>
        <Typography variant="h5" gutterBottom style={{ marginTop: '20px', textAlign: 'center' }}>
          Nuestro equipo
        </Typography>
        <Grid container justifyContent='center' spacing={2}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Card sx={{ height: 250 }}>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar alt={member.name} src={member.avatar} sx={{ width: 100, height: 100, marginBottom: 2 }} />
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{member.role}</Typography>
                    <Typography variant="body2" paragraph align="center">
                      {member.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

  );
};
export default About;
