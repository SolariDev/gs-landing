const toggle = document.getElementById('menu-toggle');
const menu   = document.getElementById('menu');

// click: abre/cierra la lista
toggle.addEventListener('click', function() {
  menu.classList.toggle('show');
});

// scroll: muestra/oculta el botón en escritorio
window.addEventListener('scroll', function() {
  if (window.innerWidth > 768) { // escritorio
    if (window.scrollY > 100) {
      toggle.classList.add('visible');   // aparece con scroll
    } else {
      toggle.classList.remove('visible'); // se oculta arriba
      menu.classList.remove('show');      // cerramos menú si volvés arriba
    }
  } else {
    toggle.classList.add('visible'); // en móvil siempre visible
  }
});

