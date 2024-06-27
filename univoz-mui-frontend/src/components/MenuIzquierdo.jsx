import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import AvatarUsuarioLogeado from "./AvatarUsuarioLogeado.jsx";
import BotonCerrarSession from "./BotonCerrarSession.jsx";
import BotonMenuIzquierdo from "./BotonMenuIzquierdo.jsx";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import GavelIcon from '@mui/icons-material/Gavel';
const MenuIzquierdo = ({ drawerWidth, setMobileOpen, handleDrawerToggle, setIsClosing, mobileOpen,usuarioLogged,setUsuarioLogged }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedIndex, setSelectedIndex] = useState(0); // Estado para el elemento seleccionado
    const navItems = [{ name: 'Registrarse',link:'/login' }, { name: 'Iniciar sesión',link:'/login' } ]
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleListItemClick = (e, index) => {
        setSelectedIndex(index);
    };

    const handleItemClick = (link) => {
        navigate(link);
    }

    const drawerContent = (
        <>
            {isMobile && (
                <>
                    <Box sx={{ display: 'inline-flex', textAlign: 'center', justifyContent: 'center', width: '100%' }}>
                        <Typography variant="h5" noWrap>
                            UNI
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: "bold", marginLeft: '4px' }} noWrap>
                            VOZ
                        </Typography>
                    </Box>
                    <Divider />
                    <List>
                        {!usuarioLogged ? ( navItems.map((item) => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton
                                    sx={{ textAlign: 'center'}}
                                    onClick={() => handleItemClick(item.link)}
                                >
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))):(
                            <ListItem disablePadding>
                                <AvatarUsuarioLogeado usuarioLogged={usuarioLogged}/>
                                <BotonCerrarSession setUsuarioLogged={setUsuarioLogged}/>
                            </ListItem>

                        )}
                    </List>
                </>
            )}
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                <BotonMenuIzquierdo ruta={'/'} icono={<HomeOutlinedIcon/>} texto='Home' index={0} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex}/>
                <BotonMenuIzquierdo  ruta={'/normativas'} icono={<GavelIcon/>} texto='Normativas' index={1} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex}/>
                <BotonMenuIzquierdo  ruta={'/Informacion'} icono={<InfoOutlinedIcon/>} texto='Información' index={2} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex}/>
                <BotonMenuIzquierdo ruta={'/Quienes-Somos'}icono={<Diversity1OutlinedIcon/>} texto='Quiénes Somos' index={3} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex}/>
            </List>
            <Divider />
        </>
    );

    return (
        <>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '57px' },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', marginTop: '20px' }}>
                        {drawerContent}
                    </Box>
                </Drawer>
                <Drawer
                    variant="persistent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '0px', padding: 0 },
                    }}
                    open
                >
                    <Box sx={{ textAlign: 'center', marginTop: '64px', padding: 0 }}>
                        {drawerContent}
                    </Box>
                </Drawer>
            </Box>
        </>
    );
};

export default MenuIzquierdo;
 