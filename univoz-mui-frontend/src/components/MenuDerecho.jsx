import React from "react";
import {Card, CardContent, Typography, Link, Grid, Box, styled, alpha, Paper} from "@mui/material";
import { WorkOutline, StarBorder } from "@mui/icons-material";

const MenuDerechoCard = styled(Card)({
  margin: '10px',
  padding: '10px',
  backgroundColor: 'white',
  color: 'black',
  boxShadow: '0 3px 14px 2px rgba(88, 88, 93, 0.221)',
  minHeight: '300px',
  borderRadius: '10px',
  border: '1px solid #84259B',
});

const Title = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
  borderBottom: '3px solid #84259B',
  paddingBottom: '10px',
});

const SubTitle = styled(Typography)({
  marginBottom: '16px',
});

const SubTitleLast = styled(Typography)({
  marginBottom: '16px',
  borderBottom: 'none',
  paddingBottom: '0',
});

const Icon = styled('span')({
  marginRight: '10px',
});

const CustomLink = styled(Link)({
  color: 'purple',
});

const InfoBarWrapper = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.9),
  height: '100%',
  paddingTop: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    position: 'relative',
    paddingTop: theme.spacing(1),
  },
}));


const MenuDerecho = () => {
  return (
    <InfoBarWrapper>
          <MenuDerechoCard>
            <CardContent>
              <Title variant="h5">
                <Icon><WorkOutline /></Icon> Empleabilidad
              </Title>
              <ul>
                <li>
                  <Typography variant="body1">
                    Para encontrar ofertas laborales, busca los tags relacionados con Empleabilidad (empleo, trabajo, oferta laboral, etc.), esto te ayudará a filtrar la información que necesites, mostrando un resultado eficaz en nuestro blog.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <CustomLink href="https://www.google.com/search?q=INCLUSI%C3%93N+ACTIVA&rlz=1C1GCEA_enCL1102CL1103&oq=avisos+de+trabajo+para+personas+discapacitadas&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDczNDVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwixk66ZrPCFAxUsAbkGHeV5AJEQudcGKAF6BAgQEBo&sxsrf=ACQVn0-rRfZptEedncQE-nj9Lxz0QgD_0g:1714700247867#fpstate=tldetail&htivrt=jobs&htitab=&htidocid=QBc5ByV4oHlCojaYAAAAAA%3D%3D">
                      Ofertas Laborales
                    </CustomLink>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <CustomLink href="https://inclusionactiva.cl/ina/ofertas-laborales/">
                      Ofertas Inclusivas
                    </CustomLink>
                  </Typography>
                </li>
              </ul>
              <Title variant="h5">
                <Icon><StarBorder /></Icon> Neurodiversidad
              </Title>
              <ul>
                <li>
                  <SubTitle variant="body1">
                    La neurodiversidad considera la diversidad de capacidades cognitivas, emocionales y sensoriales.
                  </SubTitle>
                </li>
                <li>
                  <SubTitle variant="body1">
                    Destaca la importancia de la inclusión, igualdad y el respeto, independiente del neurotipo de cada ser humano.
                  </SubTitle>
                </li>
              </ul>
              <Title variant="h5">
                <Icon><StarBorder /></Icon> Neurodivergencia
              </Title>
              <ul>
                <li>
                  <SubTitle variant="body1">
                    Se refiere directamente a personas con patrones neurológicos que se desvían de la norma socialmente establecida.
                  </SubTitle>
                </li>
                <li>
                  <SubTitle variant="body1">
                    Señala que las características de procesamiento de información pueden ser diferentes a las consideradas “promedio”.
                  </SubTitle>
                </li>
                <li>
                  <SubTitleLast variant="body1">
                    Destaca la relevancia de cambiar la perspectiva predominante sobre las diferencias neurológicas, fomentando la inclusión.
                  </SubTitleLast>
                </li>
              </ul>
            </CardContent>
          </MenuDerechoCard>
    </InfoBarWrapper>
  );
}

export default MenuDerecho;
