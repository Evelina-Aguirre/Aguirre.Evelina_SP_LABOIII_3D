import { personajes, actualizarStorage, armas } from "./stroraje.js";
import { cargarFormulario, vaciarFormulario } from "./formulario.js";
import { actualizarTabla, calcularPromedioFuerza, filtrarTabla,filtrarTablaYActualizar } from "./tabla.js";
import { Superheroe, actualizarIds } from "./Superheroe.js";
import { mostrarGifCarga } from "./animaciones.js";


const $formulario = document.forms[0];
const $tabla = document.getElementById("tabla");

const $btnEliminar = document.getElementById("btnEliminar");
const $btnAlta = document.getElementById("btnAlta");
const $selectArma = document.querySelector("select[name='txtArma']");
console.log(localStorage.getItem("personajes"))

/**
 * Itera sobre el array de armas y crea opciones en el elemento de selección.
 */
armas.forEach((arma) => {
  const option = document.createElement("option");
  option.value = arma;
  option.textContent = arma;
  $selectArma.appendChild(option);
});

/**
 * Evento que se dispara cuando el DOM se cargó por completo.
 * Establece la opción "Espada" como seleccionada en el elemento de selección de armas.
 */
document.addEventListener('DOMContentLoaded', function () {
  const $selectArma = document.querySelector("select[name='txtArma']");
  const rdoTodasF = document.getElementById('rdoTodasF');
  const rdoDCF = document.getElementById('rdoDCF');
  const rdoMarvelF = document.getElementById('rdoMarvelF');

  for (let i = 0; i < $selectArma.options.length; i++) {
    if ($selectArma.options[i].value === "Espada") {
      $selectArma.options[i].selected = true;
      break;
    }
  }
  calcularPromedioFuerza();
  document.getElementById("btnFiltrar").addEventListener("click", function () {
    const editorialSeleccionada = document.querySelector("input[name='rdoEditorialFiltro']:checked").value;
    filtrarTablaYActualizar(editorialSeleccionada);
  });
});

/**
 * Si hay personajes en el array, actualiza los IDs y la tabla de personajes.
 */
if (personajes.length) {
  actualizarIds(personajes);
  actualizarTabla($tabla, personajes);
}

/**
 * Evento que se dispara cuando se hace clic en la ventana.
 *
 * @param {Event} e - El evento de clic.
 */
window.addEventListener("click", handlerClick);

/**
 * Evento que se dispara cuando se envía el formulario.
 *
 * @param {Event} e - El evento de envío del formulario.
 */
$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("entreal submit");
  console.log($formulario.txtId.value);
  mostrarGifCarga();

  const { txtId, txtNombre, txtAlias, rdoEditorial, txtFuerza, txtArma } = $formulario;

  if (txtId.value === "") {
    const newPersonaje = new Superheroe("", txtNombre.value, txtAlias.value, rdoEditorial.value, txtFuerza.value, txtArma.value);
    handlerCreate(newPersonaje);
  } else {
    const updatedPersonaje = new Superheroe(parseInt(txtId.value), txtNombre.value, txtAlias.value, rdoEditorial.value, txtFuerza.value, txtArma.value);
    handlerUpdate(updatedPersonaje);
  }

  actualizarIds(personajes);
  vaciarFormulario($formulario);
});

/**
 * Maneja el evento de clic en la ventana.
 *
 * @param {Event} e - El evento de clic.
 */
function handlerClick(e) {
  if (e.target.matches("td")) {
    const id = e.target.parentElement.dataset.id;
    const selectedPersonaje = personajes.find((per) => {
      return per.id == id;
    })
    cargarFormulario($formulario, selectedPersonaje);

    $btnAlta.value = "Modificar";
    $btnEliminar.disabled = false;

  } else if (e.target.matches("input[type='button'][value='Eliminar']")) {
    handlerDelete(parseInt($formulario.txtId.value));

  } else if (e.target.matches("input[type='button'][value='Cancelar']")) {
    vaciarFormulario($formulario);
  }


}

/**
 * Maneja el evento de creación de un nuevo personaje.
 *
 * @param {Superheroe} nuevoPersonaje - El objeto Superheroe con los datos del nuevo personaje.
 */
function handlerCreate(nuevoPersonaje) {

  personajes.push(nuevoPersonaje);
  actualizarStorage("personajes", personajes);
  actualizarTabla($tabla, personajes);
  calcularPromedioFuerza();
}

/**
 * Maneja el evento de actualización de un personaje existente.
 *
 * @param {Superheroe} editPersonaje - El objeto Superheroe con los datos del personaje actualizado.
 */
function handlerUpdate(editPersonaje) {
  let index = personajes.findIndex((anun) => anun.id == editPersonaje.id);
  personajes.splice(index, 1, editPersonaje);
  actualizarStorage("personajes", personajes);
  actualizarTabla($tabla, personajes);
  calcularPromedioFuerza();
}

/**
 * Maneja el evento de eliminación de un personaje.
 *
 * @param {number} id - El ID del personaje a eliminar.
 */
function handlerDelete(id) {

  const confirmDelete = confirm("¿Está seguro de que desea eliminar este personaje?");
  console.log(confirmDelete);
  if (confirmDelete) {
    let index = personajes.findIndex((anun) => anun.id == id);
    console.log(index);
    personajes.splice(index, 1);

    actualizarStorage("personajes", personajes);
    actualizarIds(personajes)
    actualizarTabla($tabla, personajes);
    $formulario.reset();
    $formulario.txtId.value = "";
    calcularPromedioFuerza();
  }
}

const $selectEditorial = document.getElementById("selectEditorial");

$selectEditorial.addEventListener("change", function () {
  const editorialSeleccionada = $selectEditorial.value;
  filtrarTabla(editorialSeleccionada);
});

const $checkboxes = document.querySelectorAll("#controlesTabla input[type='checkbox']");

$checkboxes.forEach(($checkbox) => {
  $checkbox.addEventListener("change", function () {
    actualizarColumnasVisibles();
  });
});










