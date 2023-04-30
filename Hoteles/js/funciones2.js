/*-----------------------------------------------------------------------------------------
LA MAYORIA DEL ARCHIVO ES IGUAL QUE EL PRIMERO POR ESO NO EXPLICARÉ TODO
-------------------------------------------------------------------------------------------*/
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuDesplegable = document.querySelector('.menu-desplegable');
let menuAbierto = false;

hamburgerMenu.addEventListener('click', () => {
  if (menuAbierto) {
    menuDesplegable.classList.remove('activo');
    menuAbierto = false;
  } else {
    menuDesplegable.classList.add('activo');
    menuAbierto = true;
  }
});



