const $btnAlta = document.getElementById("btnAlta");
const $btnEliminar = document.getElementById("btnEliminar");

export function cargarFormulario(formulario, anuncio){

    formulario.txtId.value= anuncio.id;
    formulario.txtNombre.value = anuncio.nombre;
    formulario.txtAlias.value = anuncio.alias;
    formulario.rdoEditorial.value=anuncio.editorial;
    formulario.txtFuerza.value = anuncio.fuerza;
    formulario.txtArma.value=anuncio.arma;
   
}
export function vaciarFormulario(formulario){
    formulario.txtId.value= "";
    formulario.txtNombre.value = "";
    formulario.txtAlias.value = "";
    formulario.rdoEditorial.value="";
    formulario.txtFuerza.value = "";
    $btnAlta.value="Agregar Anuncio";
    $btnEliminar.disabled = true;

}

