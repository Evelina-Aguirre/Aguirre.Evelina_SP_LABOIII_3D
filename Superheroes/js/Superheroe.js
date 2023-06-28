import Personaje from "./Personaje.js";

export class Superheroe extends Personaje {
  constructor(id, nombre, alias, editorial, fuerza, arma) {
    super(id, nombre);
    this.alias = alias;
    this.editorial = editorial;
    this.fuerza = fuerza;
    this.arma = arma;
  }
}
  


  export function actualizarIds(anuncios) {
    let maxId = 0;
    anuncios.forEach((element) => {
      if (element.id > maxId) {
        maxId = element.id;
      }
    });
    Superheroe.ultimoId = maxId;
  }

