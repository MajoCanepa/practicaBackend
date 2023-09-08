import { body } from 'express-validator';

export const crearUserSchema = [
    body('nombreApellido').exists().notEmpty().withMessage('El nombre y apellido no debe estar vacío').isString().withMessage('El nombre y apellido debe ser un string'), body('email').exists().notEmpty().isEmail(), body('password').exists().notEmpty().isString().isLength({ min: 6 })
]

export const loginUserSchema = [
    body('email').exists().notEmpty().isEmail(),,
    body('password').exists().notEmpty().isString()
]