function parrafo_contacto() {
  var parrafo = document.getElementById("contacto");
  var botonCerrar = document.getElementById("mostrar-contacto");
  var botonMostrar = document.getElementById("cerrar-contacto");

  if (parrafo.style.display === "none") {
    parrafo.style.display = "";
    botonMostrar.style.display = "";
    botonCerrar.style.display = "none";
  } else {
    parrafo.style.display = "none";
    botonMostrar.style.display = "none";
    botonCerrar.style.display = "";
  }
}

function parrafo_redes() {
  var parrafo = document.getElementById("redes");
  var botonCerrar = document.getElementById("mostrar-redes");
  var botonMostrar = document.getElementById("cerrar-redes");

  if (parrafo.style.display === "none") {
    parrafo.style.display = "";
    botonMostrar.style.display = "";
    botonCerrar.style.display = "none";
  } else {
    parrafo.style.display = "none";
    botonMostrar.style.display = "none";
    botonCerrar.style.display = "";
  }
}

function parrafo_habilidades() {
  var parrafo = document.getElementById("habilidades");
  var botonCerrar = document.getElementById("mostrar-habilidades");
  var botonMostrar = document.getElementById("cerrar-habilidades");

  if (parrafo.style.display === "none") {
    parrafo.style.display = "";
    botonMostrar.style.display = "";
    botonCerrar.style.display = "none";
  } else {
    parrafo.style.display = "none";
    botonMostrar.style.display = "none";
    botonCerrar.style.display = "";
  }
}

function parrafo_otras() {
  var parrafo = document.getElementById("otras");
  var botonCerrar = document.getElementById("mostrar-otras");
  var botonMostrar = document.getElementById("cerrar-otras");

  if (parrafo.style.display === "none") {
    parrafo.style.display = "";
    botonMostrar.style.display = "";
    botonCerrar.style.display = "none";
  } else {
    parrafo.style.display = "none";
    botonMostrar.style.display = "none";
    botonCerrar.style.display = "";
  }
}

// MOSTRAR DATOS PERSONALES DE API RANDOM USER

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const domicilio = document.querySelector("#domicilio");
const telefono = document.querySelector("#telefono");
const foto = document.querySelector("#foto");

const usuario = async () => {
  //consultar a la API
  const url = "https://randomuser.me/api/?id.name=UIDAI";
  const respuesta = await fetch(url);
  const { results } = await respuesta.json();
  const datos = results[0];

  foto.src = datos.picture.large;
  nombre.textContent = datos.name.first + " " + datos.name.last;
  email.textContent = datos.email;
  domicilio.textContent =
    datos.location.street.name +
    " " +
    datos.location.street.number +
    " - " +
    datos.location.city +
    ", " +
    datos.location.state;
  telefono.textContent = datos.phone;
};

document.addEventListener("DOMContentLoaded", usuario);


