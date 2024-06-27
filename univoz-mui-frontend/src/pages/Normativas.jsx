import React from 'react';
import { Container, Typography, Card, CardContent, Link, Box, colors } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';


function createData(id, titulo, descripcion, url) {
  return { id, titulo, descripcion, url };
}

const informacionCard = [
  createData(
    1,
    "Ley TEA (N° 21.545, 2023, Ministerio de Salud)",
    "La Ley de Autismo N° 21.545 fue promulgada en marzo del 2023, siendo un avance importante para la inclusión de esta comunidad en nuestro país. Los derechos que contempla consideran todo el ciclo vital de las personas autistas.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1190123"
  ),
  createData(
    2,
    "Ley Miscelanea (N° 21.544, Art 10, 2023, Ministerio de Educación)",
    "Artículo de ley que regula los procesos de inclusión para estudiantes en situación de discapacidad en establecimientos particulares pagados.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1188864"
  ),
  createData(
    3,
    "Determinación de alumnos con necesidades especiales (Decreto 170, 2010, Ministerio de Educación)",
    "Decreto que fija normas para determinar a los alumnos con necesidades educactivas especiales para que puedan acceder a beneficios de subvenciones para educación especial.",
    "https://especial.mineduc.cl/wp-content/uploads/sites/31/2018/06/DTO-170_21-ABR-2010.pdf"
  ),
  createData(
    4,
    "Diversificación de la enseñanza (Decreto N° 83, 2015, Ministerio de Educación)",
    "Decreto que considera la educación como un derecho fundamental y que surge como una herramienta para asegurar la participación y el aprendizaje de todos los estudiantes, incluidos aquellos que enfrentan dificultades para aprender y participar en la vida escolar.",
    "https://especial.mineduc.cl/wp-content/uploads/sites/31/2021/08/Info-02.pdf"
  ),
  createData(
    5,
    "Decreto 65 Ministerio del Trabajo",
    "Establece normas de igualdad de oportunidades e inclusión social para personas con discapacidad.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1114288"
  ),
  createData(
    6,
    "Ley de inclusión laboral (N° 21.015, 2018, Ministerio de Desarrollo Social)",
    "Ley que provee una inclusión laboral eficaz de las personas en situación de discapacidad, tanto en el ámbito público como en el privado.",
    "https://mistalentos.cl/wp-content/uploads/2020/04/LEY-21015_Inclusi%C3%B3n-Laboral-de-PcD_15-JUN-2017.pdf"
  ),
  createData(
    7,
    "Ley de gestor de inclusión (N° 21.275, 2020, Ministerio del Trabajo y Prevención Social)",
    "Ley que modifica el código del trabajo para exigir a las empresas pertinentes la adopción de medidas que faciliten la inclusión laboral de trabajadores en situación de discapacidad.",
    "https://www.bcn.cl/leychile/navegar?idNorma=1150763&tipoVersion=0"
  ),
];

const Normativas = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4">Normativas</Typography>
        <Typography variant="h5">Educación y Trabajo</Typography>
      </Box>

      {informacionCard.map((informacion) => (
        <Card key={informacion.id} sx={{ mt: 2 }}>
          <CardContent>
            <Box display="flex" alignItems="center">
              <GavelIcon fontSize="large" sx={{ mr: 2 }} />
              <Link 
              href={informacion.url}  
              target="_blank" 
              underline="hover" 
              variant="h5"
              sx={{color: '#84259B'}}
              >
                {informacion.titulo} 
              </Link>
            </Box>
            <Typography variant="body1" mt={2}>
              {informacion.descripcion}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Normativas;
