import { Box, Button, Chip, Dialog, DialogContent, DialogTitle, Grid, Paper, Stack, TextField, Typography, alpha, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import AvatarUsuarioLogeado from './AvatarUsuarioLogeado.jsx';
import useInsertarPublicacion from '../api/useInsertarPublicacion.js';
import Alertas from './Alertas.jsx';

const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const EscribirPubInput = styled((props) => (
    <TextField InputProps={{ disableUnderline: true}} {...props} />
))(({theme}) => ({
    '& .MuiFilledInput-root':{
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#72077B',
        border: '1px solid', 
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#72077B',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.secondary.main,
        },
    },
}));



const BotonCrearPublicacion = ({usuarioLogged}) => {

    const initialData ={
        titulo: '', contenido: '', textoTags: '', usuario:JSON.parse(usuarioLogged).token, tags: [],imagen:''
    };
    const [open, setOpen] = useState(false);
    const [formulario, setFormulario] = useState(initialData);
    const [mensaje, setMensaje] = useState('');
    const [tipoAlerta, setTipoAlerta] = useState('');
    const {mutate} = useInsertarPublicacion();
    const [flagSubmit, setFlagSubmit] = useState(false)


    const handleDelete =(chipToDelete) => () =>{
        const updatedTags = formulario.tags.filter((tag) => tag.key !== chipToDelete.key);
        setFormulario((prevState) => ({
            ...prevState,
            tags: updatedTags
        }));
    };

    const handleClose = () => {
        setFormulario(initialData);
        setOpen(false);
    };

    const handleClickOpen = () =>{
        setOpen(true);
    };

    const handleAgregarTag = (event) =>{
        if (event.key === "Enter") {
            const newTag = { key: formulario.tags.length + 1, label: event.target.value };
            setFormulario((prevState) => ({
                ...prevState,
                tags: [...prevState.tags, newTag],
                textoTags:''
            }));
            event.preventDefault();
        }
    };

    const handleChangeTextTags = (e) => {
        setFormulario({...formulario, [e.target.name]:  e.target.value});
    };

    const handleChangeForm = (e) => {
        setFormulario({...formulario, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        if (!formulario.titulo || !formulario.contenido || formulario.tags?.length == 0){
            setTipoAlerta('error');
            setMensaje('Todos los campos son obligatorios');
            return;
        }
        setFlagSubmit(true)
        mutate({formulario}, {
            onSuccess: () => {
                setTipoAlerta('success');
                setMensaje('Publicación creada correctamente');
                setFormulario(initialData);
                setTimeout(()=>{
                    setOpen(false);
                    setFlagSubmit(false)
                }, 500);    
            },
            onError: (error) => {
                setTipoAlerta('error');
                setMensaje(error.response.data.message);
                setFlagSubmit(false)
            }
    });
    };


  return (
    <>
    <Paper elevation={3} sx={{padding: "5px", margin:"10px"}}>
        <Grid container justifyContent="center" alignItems="center" sapacing={2} >
            <Grid intem xs={2} md={2} lg={1}>
                <AvatarUsuarioLogeado usuarioLogged={usuarioLogged}/>
            </Grid>
            <Grid item xs={10} md={10} lg={11} >
                <Button onClick={handleClickOpen} sx={{textTransform:"none", color:"grey", backgroundColor:"#E0E0E0",":hover":{backgroundColor:'#F2F2F2'} ,borderRadius:10, justifyContent:"flex-start", alignItems:"center"}} fullWidth > Escribe tu publicacion </Button>
            </Grid>
        </Grid>
    </Paper>
    <Dialog open={open} maxWidth='sm' fullWidth onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id="form-dialog-title">Crear publicación✨</DialogTitle>
        <DialogContent>
            <Grid sx={{paddingTop:1}} container spacing={2}>
                <Grid item xs={12}>
                    <TextField InputProps={{sx:{borderRadius:10}}} size='small' name='titulo' onChange={handleChangeForm} color="secondary" fullWidth label="Título *" />
                </Grid>
                <Grid item xs={12}>
                    <EscribirPubInput fullWidth variant="filled" multiline rows={4} name='contenido' onChange={handleChangeForm} color="secondary" label="Escribe tu publicación *"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField InputProps={{sx:{borderRadius:10}}} size='small' name='imagen' onChange={handleChangeForm} color="secondary" fullWidth label="Imagen (opcional)" placeholder= 'Url de imagen'/>
                </Grid>

            <Grid item xs={2}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%'}}>
                    <Typography sx={{display:'flex', alignItems:'center'}} variant='caption'> Añadir tags *</Typography>
                </Box>
            </Grid>
            <Grid item xs={10}>
                <TextField InputProps={{sx:{borderRadius:10}}} size='small' name='textoTags' value={formulario?.textoTags || ''} onChange={handleChangeTextTags} color='secondary' onKeyUp={handleAgregarTag} fullWidth label="Tags *" />

            </Grid>
            {formulario.tags.length !== 0 && (
                <Grid item xs={12}>
                    <Paper sx={{
                        display:'flex',
                        justifyContent:'center',
                        flexWrap:'wrap',
                        listStyle:'none',
                        p:0.5,
                        m:0,
                    }}component="ul">
                        {formulario.tags.map((tag) =>  (
                            <ListItem key={tag.key}>
                                <Chip label={tag.label} onDelete={handleDelete(tag)}/>
                            </ListItem>
                        ))}
                    </Paper>
                </Grid>
            )}
            <Grid item xs={12}>
                <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                    <Button flagSubmit={flagSubmit} onClick={handleClose} disableElevation size="small"  variant='contained' sx={{fontSize:12, borderRadius:10, backgroundColor:"grey",":hover":{backgroundColor:'#626262' }}}>Cancelar</Button>
                    <Button flagSubmit={flagSubmit} onClick={handleSubmit} disableElevation size='small' variant="contained" sx={{fontSize:12 ,borderRadius:10,backgroundColor:'#ab49cc',":hover":{backgroundColor:'#7b08a9'}}} color="primary" endIcon={<SendIcon/>}>Publicar</Button>

                </Stack>
            </Grid>
            </Grid>
        </DialogContent>
    </Dialog>
    <Alertas mensaje={mensaje} tipoalerta={tipoAlerta} setMensajealerta={setMensaje} />

    </>
  )
}

export default BotonCrearPublicacion