// entidad simple
import Vuelo from "../models/Vuelo.js";
import { calcularDistancia } from "./calcularDistancia.js";

class VueloService {
  getAll = async () => {
    return VueloDAO.listarTodos();
  };

  getById = async (id) => {
    const vuelo = VueloDAO.buscarPorId(id);
    if (!vuelo) throw new Error("Vuelo no encontrado");
    return vuelo;
  };

  create = async ({ id, xa, ya, za }) => {
    const nuevo = new Vuelo(id, xa, ya, za);
    VueloDAO.guardar(nuevo);

    const alertas = VueloDAO
      .listarTodos()
      .filter(v => v.id !== id && calcularDistancia(v, nuevo) < 500)
      .map(v => v.id);

    return { vuelo: nuevo, alertas };
  };
}

export default new VueloService();
