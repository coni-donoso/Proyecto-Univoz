import React, { useState } from 'react';
import MenuIzquierdo from '../components/MenuIzquierdo.jsx';
import {alpha, Grid, styled} from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import MenuDerecho from '../components/MenuDerecho.jsx';

const drawerWidth = 180;

const ContentWrapper = styled('div')(({ theme }) => ({
    flexGrow: 1,
    height: '100auto',
    overflow:'auto',
    backgroundColor: alpha(theme.palette.background.default, 0.9),
    padding: theme.spacing(0),
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
    },
}));


const TemplateMain = ({ usuarioLogged, setUsuarioLogged }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    }


    return (
        <>
                <Navbar handleDrawerToggle={handleDrawerToggle} usuarioLogged={usuarioLogged} setUsuarioLogged={setUsuarioLogged} />
                <div style={{ display: 'flex'}}>
                    <MenuIzquierdo
                        setIsClosing={setIsClosing}
                        drawerWidth={drawerWidth}
                        mobileOpen={mobileOpen}
                        setMobileOpen={setMobileOpen}
                        handleDrawerToggle={handleDrawerToggle}
                        usuarioLogged={usuarioLogged}
                        setUsuarioLogged={setUsuarioLogged}
                    />
                    <Grid container spacing={2} justifyContent='center'>
                        <Grid item xs={12} md={8} xxl={10}>
                            <ContentWrapper>
                                <Outlet/>
                            </ContentWrapper>
                        </Grid>
                        <Grid item xs={12} md={4} xxl={2}>
                            <MenuDerecho/>
                        </Grid>
                    </Grid>
                </div>

        </>
    );
};

export default TemplateMain;