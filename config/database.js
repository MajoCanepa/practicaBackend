import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
}); 

export const conexionBD = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión exitosa en la base de datos")
    } catch (error) {
        console.log("Error al conectar la base de datos", error);
    }
};
