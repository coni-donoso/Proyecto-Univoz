import React, { useContext } from 'react';
import CardPublicacion from "../components/CardPublicacion.jsx";
import BotonCrearPublicacion from "../components/BotonCrearPublicacion.jsx";
import { Grid, Typography } from "@mui/material";
import useGetAllPublicaciones from "../api/useGetAllPublicaciones.js";
import { SearchContext } from "../utils/SearchContext";

const Publicaciones = ({ usuarioLogged }) => {
    const { data = [], isLoading } = useGetAllPublicaciones();
    const { searchWords } = useContext(SearchContext);
    const filteredData = searchWords.length > 0
        ? data.filter(publicacion =>
            searchWords.some(word =>
                publicacion.tags.some(tag => tag.label.toLowerCase().includes(word.toLowerCase()))
            )
        )
        : data;

    return (
        <>

            <Grid container justifyContent='center' spacing={1}>
                {usuarioLogged && (
                    <Grid item xs={12} md={11}>
                        <BotonCrearPublicacion usuarioLogged={usuarioLogged} />
                    </Grid>
                )}

                {!isLoading && filteredData.length > 0 ? (
                    filteredData.map((publicacion) => (
                        <Grid key={publicacion?._id} item xs={12} md={11}>
                            <CardPublicacion usuario={publicacion?.usuario} tiempopub={publicacion?.fecha} titulo={publicacion?.titulo} contenido={publicacion?.contenido} tags={publicacion?.tags} imagen={publicacion?.imagen} />
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12} md={10}>
                        <Typography variant='h5' align='center'>No hay publicaciones</Typography>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default Publicaciones;
