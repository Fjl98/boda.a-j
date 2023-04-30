const hamburgerMenu = document.querySelector('.hamburger-menu'); /*llamamos al menu hamburguesa*/
const menuDesplegable = document.querySelector('.menu-desplegable'); /*llamamos al menu despliegue */
let menuAbierto = false; /*esta false para que este desactivado y lo activemos al hacer click*/

hamburgerMenu.addEventListener('click', () => { /*funcion click*/
  if (menuAbierto) { /*aqui estaria cerrado ya que no esta activo*/
    menuDesplegable.classList.remove('activo');
    menuAbierto = false;
  } else { /*si esta clickado se abre la pestaña y aparece*/
    menuDesplegable.classList.add('activo');
    menuAbierto = true;
  }
});



// Establecer la fecha del evento
var countDownDate = new Date("July 22, 2023 20:30:00").getTime();

// Actualizar el contador cada segundo
var x = setInterval(function() {

  // Obtener la fecha actual
  var now = new Date().getTime();

  // Calcular la diferencia entre la fecha actual y la fecha del evento
  var distance = countDownDate - now;


  // Calcular los meses, días, horas, minutos y segundos restantes
  var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar los valores en los elementos correspondientes
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Si la cuenta atrás termina, mostrar un mensaje
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "¡Ya ha llegado!";
  }
}, 1000);
