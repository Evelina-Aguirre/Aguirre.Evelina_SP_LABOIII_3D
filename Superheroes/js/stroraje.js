export const personajes= JSON.parse(localStorage.getItem("personajes")) || [];

export function actualizarStorage(clave,data){
    localStorage.setItem(clave, JSON.stringify(data));
}

export const armas = JSON.parse(localStorage.getItem("armas")) || [];
