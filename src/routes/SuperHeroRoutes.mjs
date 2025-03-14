import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller
} from '../controllers/SuperHeroesController.mjs';

const router = express.Router();

//// http://localhost:3000/api/ ////
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/MayoresDe30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);

export default router;


