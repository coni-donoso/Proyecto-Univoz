import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'; // Importar el módulo path
import dbConnection from './database/conection.js';
import UsuarioRoute from './controller/UsuarioController.js';
import PublicacionRoute from './controller/PublicacionController.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

dbConnection;

app.use('/usuario', UsuarioRoute);
app.use('/publicacion', PublicacionRoute);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log('El servidor corre en el puerto:', process.env.PORT);
});
