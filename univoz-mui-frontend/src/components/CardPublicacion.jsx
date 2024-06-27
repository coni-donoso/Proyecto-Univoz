import React, { useEffect, useState } from 'react';
import { Avatar, Box, Chip, Dialog, DialogContent, Grid, Paper, Stack, styled, Typography } from "@mui/material";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale'; // Importa el locale español

const colores = [
    { 'red': '#f44336' },
    { 'blue': '#2196f3' },
    { 'green': '#4caf50' },
    { 'orange': '#ff9800' },
    { 'purple': '#9c27b0' },
    { 'pink': '#e91e63' },
    { 'brown': '#795548' },
    { 'grey': '#9e9e9e' },
];

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const CardPublicacion = ({ usuario, tiempopub, titulo, contenido, tags, imagen }) => {
    const [coloresUsuario, setColoresUsuario] = useState();
    const [timeAgo, setTimeAgo] = useState('');
    const [open, setOpen] = useState(false);

    const handleLetraAvatar = () => {
        return usuario?.usuario.charAt(0).toUpperCase();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const color = colores[Math.floor(Math.random() * colores.length)];
        setColoresUsuario(color);

        const parsedDate = parseISO(tiempopub);
        const calculateTimeAgo = () => {
            const timeDifference = formatDistanceToNow(parsedDate, { addSuffix: true, locale: es });
            setTimeAgo(timeDifference);
        };

        calculateTimeAgo();
        const intervalId = setInterval(calculateTimeAgo, 60000);

        return () => clearInterval(intervalId);
    }, [tiempopub]);

    return (
        <>
            <Paper elevation={3} sx={{ padding: '15px', margin: '10px' }}>
                <Grid container justifyContent='center' spacing={1}>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent='flex-start' alignItems='center' spacing={2}>
                            <Avatar sx={{ backgroundColor: coloresUsuario ? Object.values(coloresUsuario)[0] : '#978282' }}>
                                {handleLetraAvatar()}
                            </Avatar>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='subtitle1'>{usuario?.usuario}</Typography>
                                <Typography variant='caption' sx={{ color: '#acacac' }}>{timeAgo}</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h5'>{titulo}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>{contenido}</Typography>
                    </Grid>
                    {imagen && (
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '10px 0',
                                }}
                            >
                                <img
                                    src={imagen}
                                    alt="Publicación"
                                    style={{
                                        maxWidth: '100%',
                                        cursor: 'pointer',
                                    }}
                                    onClick={handleClickOpen}
                                />
                            </Box>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left',
                                flexWrap: 'wrap',
                                listStyle: 'none',
                                p: 0.5,
                                m: 0,
                            }}
                            component="ul"
                        >
                            {tags.map((tag) => (
                                <ListItem key={tag._id}>
                                    <Chip
                                        label={tag.label}
                                        sx={{ backgroundColor: '#AE9DD0', color: 'white' }}
                                        size="small"
                                    />
                                </ListItem>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <DialogContent>
                    <img
                        src={imagen}
                        alt="Publicación en tamaño completo"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CardPublicacion;
