import { listarVuelos } from "../useCases/listarVuelos.js";
import { registrarVuelo } from "../useCases/registrarVuelo.js";

class VueloController {
  static async getAll(req, res) {
    const vuelos = await listarVuelos();
    res.status(200).json(vuelos);
  }

  static async create(req, res) {
    try {
      const nuevoVuelo = await registrarVuelo(req.body);
      res.status(201).json(nuevoVuelo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default VueloController;

