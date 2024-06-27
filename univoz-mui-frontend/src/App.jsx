import './App.css';
import { Route, Routes } from "react-router-dom";
import Publicaciones from "./pages/Publicaciones.jsx";
import { useEffect, useState } from "react";
import TemplateMain from "./pages/TemplateMain.jsx";
import { SearchProvider } from "./utils/SearchContext.jsx";
import FormLogin from './pages/FormLogin.jsx';
import Normativas from './pages/Normativas.jsx';
import About from './pages/About.jsx';
import Informacion from "./pages/Informacion.jsx";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    const [usuarioLogged, setUsuarioLogged] = useState(window.localStorage.getItem('token'));

    useEffect(() => {
        const handleStorageChange = () => {
            setUsuarioLogged(window.localStorage.getItem('token'));
        }

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, []);

    return (
        <SearchProvider>
            <Routes>
                <Route path='/' element={<TemplateMain usuarioLogged={usuarioLogged} setUsuarioLogged={setUsuarioLogged} />}>
                    <Route index element={<Publicaciones usuarioLogged={usuarioLogged} />} />
                    <Route path='/normativas' element={<Normativas />} />
                    <Route path='/Informacion' element={<Informacion />} />
                    <Route path='/Quienes-Somos' element={<About />} />
                </Route>

                <Route path='/login' element={
                    <ProtectedRoute isAllowed={!usuarioLogged} redirectPath='/'>
                        <FormLogin setUsuarioLogged={setUsuarioLogged} />
                    </ProtectedRoute>
                } />
            </Routes>
        </SearchProvider>
    );
}

export default App;
