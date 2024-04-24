//Eventos

// seleccionamos el elemento
let elemento = document.getElementsByTagName("button");

//trigger o disparador ---> escuchar al elementos seleccionado
elemento[0].addEventListener("click", function () {
  //escribo lo que va a suceder cuando alguien haga CLICK en el boton

  let num1 = 10;
  let num2 = 14;
  let resultado = num1 + num2;
  alert("El resultado de la suma es: " + resultado);
});

let cantEntradas = 0;
elemento[1].addEventListener("click", function () {
  cantEntradas++;
  console.log(cantEntradas + " tiquets comprados");
});

let h2 = document.getElementsByName("titulo"); //seleccionamos el elemento

//creamos el evento para ese elemento seleccionado
h2[0].addEventListener("mouseover", function () {
  console.log("Pasaste por encima del titulo");
});

let miBtn = document.getElementById("miBoton"); //seleccionamos el elemento con ID=miBoton

miBtn.addEventListener("click", function () {
  alert("Click en mi boton");
  h2[0].style.color = "red"; //cambio de color el H2
});

let input = document.getElementById("texto");
let btnObtener = document.getElementById("obtener");

btnObtener.addEventListener("click", function () {
  let valorIngresado = input.value;
  console.log("El usuario ingresó: " + valorIngresado);

  h2[0].textContent = valorIngresado; //cambio el texto del H2
});
