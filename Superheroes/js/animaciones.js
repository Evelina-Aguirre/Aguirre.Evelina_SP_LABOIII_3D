
const $gif= document.getElementById('gif');

export function mostrarGifCarga() {
  $gif.classList.add('mostrar-gif');

  setTimeout(function() {
    $gif.classList.remove('mostrar-gif');
    $gif.classList.add('escondido');
  }, 1300);
}

  
 