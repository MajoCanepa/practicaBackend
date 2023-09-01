import express from 'express';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Variables de entorno
dotenv.config({ path: '.env' });


app.listen(4000, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})