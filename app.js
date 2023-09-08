import express from 'express';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';

import { entornos } from './config/entornos.js';
import { conexionBD } from './config/database.js';

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(morgan('dev'));

// Variables de entorno
dotenv.config({ path: '.env' });


app.listen(4000, async () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
    conexionBD();
})