

import vueloService from "../services/VueloService.js";

export async function listarVuelos() {
  return await vueloService.getAll();
}