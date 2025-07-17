import VueloDAO from "../dao/VueloDAO.js";
import Vuelo from "../models/Vuelo.js";
import { calcularDistancia } from "../services/calcularDistancia.js";

export function registrarVuelo({ id, xa, ya, za }) {
  const nuevo = new Vuelo(id, xa, ya, za);
  VueloDAO.guardar(nuevo);

  const vuelos = VueloDAO.listarTodos().filter(v => v.id !== id);
  const alertas = vuelos.filter(v => calcularDistancia(v, nuevo) < 500).map(v => v.id);

  return { vuelo: nuevo, alertas };
}
