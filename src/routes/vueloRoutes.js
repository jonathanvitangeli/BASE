import { Router } from "express";
import { validarDatosVuelo } from "../middlewares/validarDatosVuelo.js";
import VueloController from "../controllers/VueloController.js";


const router = Router();

router.post("/", validarDatosVuelo, VueloController.create);
router.get("/", VueloController.getAll);

export default router;
