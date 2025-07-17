// entidad simple
class Vuelo {
  constructor(id, xa, ya, za) {
    this.id = id;
    this.xa = xa;
    this.ya = ya;
    this.za = za;
    this.timestamp = new Date();
  }
}

export default Vuelo;
