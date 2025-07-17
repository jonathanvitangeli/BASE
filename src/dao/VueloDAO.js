const vuelos = [];

const VueloDAO = {
  listarTodos: () => vuelos,
  buscarPorId: (id) => vuelos.find(v => v.id === id),
  guardar: (vuelo) => {
    const idx = vuelos.findIndex(v => v.id === vuelo.id);
    if (idx !== -1) vuelos[idx] = vuelo; // actualiza
    else vuelos.push(vuelo);            // guarda nuevo
  }
};

export default VueloDAO;
