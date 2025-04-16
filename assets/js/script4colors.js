
function pintar2(elementId, color='black') {
    let elemento = document.getElementById(elementId);
    elemento.style.backgroundColor = color;
}

document.addEventListener("DOMContentLoaded", function() {
    const divAzul = document.getElementById("divAzul");
    divAzul.addEventListener("click", function() {
        pintar2("divAzul", "black");

    });
    const divRojo = document.getElementById("divRojo");
    divRojo.addEventListener("click", function() {
        pintar2("divRojo", "black");

    });
    const divVerde = document.getElementById("divVerde");
    divVerde.addEventListener("click", function() {
        pintar2("divVerde", "black");

    });
    const divAmarillo = document.getElementById("divAmarillo");
    divAmarillo.addEventListener("click", function() {
        pintar2("divAmarillo", "black");

    });
  });




  
    // Variable global para almacenar el color
    let colorSeleccionado = "";

    document.addEventListener('keydown', function (event) {
        const divKey = document.getElementById('divAsd');


      if (event.key === 'a') {
        colorSeleccionado = "pink"; // rosado
        divKey.style.backgroundColor = colorSeleccionado;
      } else if (event.key === 's') {
        colorSeleccionado = "orange"; // naranjo
        divKey.style.backgroundColor = colorSeleccionado;
      } else if (event.key === 'd') {
        colorSeleccionado = "skyblue"; // celeste
        divKey.style.backgroundColor = colorSeleccionado;
      }

      const divKey2 = document.getElementById('divQwe');

      if (event.key === 'q') {
        colorSeleccionado = "purple"; // morado
        divKey2.style.backgroundColor = colorSeleccionado;
      } else if (event.key === 'w') {
        colorSeleccionado = "grey"; // gris
        divKey2.style.backgroundColor = colorSeleccionado;
      } else if (event.key === 'e') {
        colorSeleccionado = "brown"; // color carton
        divKey2.style.backgroundColor = colorSeleccionado;
      }

    });


