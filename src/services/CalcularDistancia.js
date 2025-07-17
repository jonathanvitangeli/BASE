export function calcularDistancia(v1, v2) {
  return Math.sqrt(
    Math.pow(v1.xa - v2.xa, 2) +
    Math.pow(v1.ya - v2.ya, 2) +
    Math.pow(v1.za - v2.za, 2)
  );
}
