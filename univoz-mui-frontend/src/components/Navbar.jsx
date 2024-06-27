import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {alpha, AppBar, Button, Chip, IconButton, InputBase, styled, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import BotonCerrarSession from "./BotonCerrarSession.jsx";
import AvatarUsuarioLogeado from "./AvatarUsuarioLogeado.jsx";
import {SearchContext} from "../utils/SearchContext.jsx";


const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginRight: theme.spacing(5),
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    flex: 1,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const MenuIconWrapper = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const ButtonWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }
}))
const Navbar = ({ handleDrawerToggle, usuarioLogged, setUsuarioLogged }) => {
    const navigate = useNavigate();
    const { searchWords, setSearchWords } = useContext(SearchContext); // Usa el contexto
    const [searchInput, setSearchInput] = useState("");

    const handleRegistrar = () => {
        navigate('/login');
    }
    const handleLogin = () => {
        navigate('/login');
    }

    const handleOnChangeSearchNavbar = (e) => {
        setSearchInput(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchInput.trim() !== "") {
            setSearchWords([...searchWords, searchInput.trim()]);
            setSearchInput("");
        }
    }

    const handleDeleteChip = (chipToDelete) => () => {
        setSearchWords((chips) => chips.filter((chip) => chip !== chipToDelete));
    };


    return (
        <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#ab68ba' }} position="fixed">
            <Toolbar>
                <MenuIconWrapper>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </MenuIconWrapper>
                <ButtonWrapper>
                    <Typography variant="h5" noWrap>
                        UNI
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold", flexGrow: 1 }} noWrap>
                        VOZ
                    </Typography>
                </ButtonWrapper>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        value={searchInput}
                        onChange={handleOnChangeSearchNavbar}
                        onKeyUp={handleKeyPress}
                        placeholder="Buscar tags..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    {searchWords.map((word, index) => (
                        <Chip
                            key={index}
                            label={word}
                            onDelete={handleDeleteChip(word)}
                            sx={{ marginLeft: 1, backgroundColor: '#8546d7', color: 'white'}}
                        />
                    ))}
                </Search>
                {!usuarioLogged ? (
                    <ButtonWrapper>
                        <Button onClick={handleRegistrar} sx={{ backgroundColor: '#5F04B4', ":hover":{backgroundColor:'#7401DF' }, color: 'white', margin: 0.5, padding: 1.2 }}>
                            <Typography sx={{ fontSize: '10px' }} variant="h7" >Registrarse</Typography>
                        </Button>
                        <Button onClick={handleLogin} sx={{ backgroundColor: '#800080', ":hover":{backgroundColor:'#B80AD6' }, color: 'white', margin: 0.5, padding: 1.2 }}>
                            <Typography sx={{ fontSize: '10px' }} variant="h7">Iniciar sesión</Typography>
                        </Button>
                    </ButtonWrapper>
                ) : (
                    <ButtonWrapper>
                        <BotonCerrarSession setUsuarioLogged={setUsuarioLogged}/>
                        <AvatarUsuarioLogeado usuarioLogged={usuarioLogged}/>
                    </ButtonWrapper>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;