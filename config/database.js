import { Sequelize, DataTypes } from 'sequelize';
import { entornos  } from './entornos.js';


export const sequelize = new Sequelize(
    entornos.DB.DB_NAME,
    entornos.DB.DB_USER,
    entornos.DB.DB_PASSWORD,
    {
        host: entornos.DB.DB_HOST,
        dialect: entornos.DB.DB_DIALECT,
        port: entornos.DB.DB_PORT
    }
)

export const conexionBD = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión exitosa a la base de datos")
    } catch (error) {
        console.log("Error al conectar la base de datos", error);
    }
};
