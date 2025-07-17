export function validarDatosVuelo(req, res, next) {
  const { id, xa, ya, za } = req.body;
  const regex = /^[A-Z]{3}[0-9]{3}$/;

  if (!regex.test(id) || [xa, ya, za].some(n => typeof n !== 'number')) {
    return res.status(400).json({ errorMsg: "datos no válidos" });
  }

  next();
}
