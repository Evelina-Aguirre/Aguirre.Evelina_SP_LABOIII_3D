
export default class Personaje {
    constructor(id, nombre) {
      if (id === "") {
        Personaje.ultimoId = (Personaje.ultimoId || 0) + 1;
        this.id = Personaje.ultimoId;
      } else {
        this.id = id;
      }
      this.nombre = nombre;
    }
  }
